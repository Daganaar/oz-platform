'use client';

export type LeadSource = 'coupon' | 'north_contact' | 'long_term';

export type LeadPayload = {
  source: LeadSource;
  email?: string;
  whatsapp?: string;
  name?: string;
  phone?: string;
};

export async function postLead(payload: LeadPayload): Promise<{ id: string } | null> {
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function patchLeadWhatsapp(id: string, whatsapp: string): Promise<void> {
  try {
    await fetch(`/api/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ whatsapp }),
    });
  } catch {
    // fire-and-forget, matches original site's tolerance for network failures
  }
}
