import styles from './NorthContactModal.module.scss';

const WA_LINK =
  'https://wa.me/972503236665?text=' +
  encodeURIComponent('היי, אני מעוניין/ת בפרטים על אכסניות עוז בטבריה ובחיפה');

type NorthContactModalProps = {
  leadName: string;
  leadPhone: string;
  leadSent: boolean;
  leadError: string;
  onLeadName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLeadPhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitLead: (e: React.FormEvent) => void;
  closeContact: () => void;
};

export function NorthContactModal({
  leadName,
  leadPhone,
  leadSent,
  leadError,
  onLeadName,
  onLeadPhone,
  submitLead,
  closeContact,
}: NorthContactModalProps) {
  return (
    <div onClick={closeContact} className={styles.overlay}>
      <div onClick={(e) => e.stopPropagation()} className={styles.card}>
        <button onClick={closeContact} aria-label="סגור" className={styles.closeBtn}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
            <path d="M18 6 6 18M6 6l12 12"></path>
          </svg>
        </button>

        <div className={styles.header}>
          <span className={styles.eyebrow}>עוז צפון</span>
          <h2 className={styles.title}>אכסניות עוז בצפון</h2>
          <p className={styles.subtitle}>יש לנו אכסניות בטבריה ובחיפה. לפרטים ולהזמנה דברו איתנו עכשיו בוואטסאפ, או השאירו פרטים ונחזור אליכם.</p>
        </div>

        <div className={styles.body}>
          <a href={WA_LINK} target="_blank" rel="noopener" className={styles.waBtn}>
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.737-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
            </svg>
            שיחת וואטסאפ עם נציג
          </a>

          <div className={styles.divider}>
            <span className={styles.dividerLine}></span>
            או
            <span className={styles.dividerLine}></span>
          </div>

          {!leadSent ? (
            <form onSubmit={submitLead} className={styles.form}>
              <input
                type="text"
                value={leadName}
                onChange={onLeadName}
                placeholder="שם מלא"
                className={styles.input}
              />
              <input
                type="tel"
                dir="rtl"
                value={leadPhone}
                onChange={onLeadPhone}
                placeholder="מספר טלפון"
                className={`${styles.input} ${styles.inputPhone}`}
              />
              {leadError && <span className={styles.errorText}>{leadError}</span>}
              <button type="submit" className={styles.submitBtn}>
                חיזרו אליי
              </button>
            </form>
          ) : (
            <div className={styles.success}>
              <span className={styles.successIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" width={24} height={24}>
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              <h3 className={styles.successTitle}>הפרטים התקבלו</h3>
              <p className={styles.successBody}>תודה! ניצור איתכם קשר בהקדם לתיאום באזור הצפון.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
