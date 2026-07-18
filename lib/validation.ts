export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Israeli cellphone numbers: 05X-XXXXXXX (10 digits total, starting 05).
// Accepts an optional +972/972 country code prefix in place of the leading 0.
export const ISRAELI_PHONE_RE = /^05\d{8}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

export function normalizeIsraeliPhone(value: string): string {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('972')) {
    digits = `0${digits.slice(3)}`;
  }
  return digits;
}

export function isValidIsraeliPhone(value: string): boolean {
  return ISRAELI_PHONE_RE.test(normalizeIsraeliPhone(value));
}
