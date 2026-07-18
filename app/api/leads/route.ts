import { z } from 'zod';
import { createServiceClient } from '@/lib/supabase/admin';
import { isValidEmail, isValidIsraeliPhone } from '@/lib/validation';

const leadSchema = z.object({
  source: z.enum(['coupon', 'north_contact', 'long_term']),
  email: z.string().refine(isValidEmail, 'invalid email').optional(),
  whatsapp: z.string().refine(isValidIsraeliPhone, 'invalid israeli phone').optional(),
  name: z.string().min(2).optional(),
  phone: z.string().refine(isValidIsraeliPhone, 'invalid israeli phone').optional(),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(json);

  if (!parsed.success) {
    return Response.json(
      { error: 'invalid_payload', issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from('leads')
    .insert(parsed.data)
    .select('id')
    .single();

  if (error) {
    return Response.json({ error: 'insert_failed' }, { status: 500 });
  }

  return Response.json({ id: data.id }, { status: 201 });
}
