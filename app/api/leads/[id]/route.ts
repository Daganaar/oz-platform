import { z } from 'zod';
import { createServiceClient } from '@/lib/supabase/admin';
import { isValidIsraeliPhone } from '@/lib/validation';

const patchSchema = z.object({
  whatsapp: z.string().refine(isValidIsraeliPhone, 'invalid israeli phone'),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const json = await request.json().catch(() => null);
  const parsed = patchSchema.safeParse(json);

  if (!parsed.success) {
    return Response.json({ error: 'invalid_payload' }, { status: 400 });
  }

  const supabase = createServiceClient();
  const { error } = await supabase
    .from('leads')
    .update({ whatsapp: parsed.data.whatsapp })
    .eq('id', id)
    .eq('source', 'coupon');

  if (error) {
    return Response.json({ error: 'update_failed' }, { status: 500 });
  }

  return Response.json({ ok: true });
}
