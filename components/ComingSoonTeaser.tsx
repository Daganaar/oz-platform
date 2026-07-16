import styles from './ComingSoonTeaser.module.scss';

type ComingSoonTeaserProps = {
  ltEmailVal: string;
  onLtEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitLt: (e: React.FormEvent) => void;
  ltError: string;
  ltSent: boolean;
};

export function ComingSoonTeaser({ ltEmailVal, onLtEmail, submitLt, ltError, ltSent }: ComingSoonTeaserProps) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
              <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"></path>
            </svg>
            בקרוב
          </span>
          <h2 className={styles.title}>הלנה ארוכת טווח בדירות ומתחמים</h2>
          <p className={styles.body}>
            אנחנו מרחיבים את הפלטפורמה גם לפתרונות הלנה לטווח ארוך, עם מגוון דירות ומתחמים להשכרה של חברות שירותי קרקע מובילות עבור עובדים זרים וקבלנים.
          </p>
          <div className={styles.listWrap}>
            <span className={styles.listLabel}>בקרוב תוכלו:</span>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-brand)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" width={17} height={17} className={styles.listCheck}>
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                למצוא ולהזמין דירות ומתחמים ישירות דרך המערכת
              </li>
              <li className={styles.listItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-brand)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" width={17} height={17} className={styles.listCheck}>
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                לעבוד ללא צורך בחוזים פרטניים מול כל ספק
              </li>
              <li className={styles.listItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-brand)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" width={17} height={17} className={styles.listCheck}>
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                ליהנות מחשבונית מרכזת אחת לכל ההזמנות
              </li>
            </ul>
          </div>
          <div className={styles.formCard}>
            {!ltSent ? (
              <form onSubmit={submitLt} className={styles.form}>
                <label className={styles.formLabel}>רוצים שנעדכן כשייפתח? השאירו מייל או וואטסאפ</label>
                <div className={styles.formRow}>
                  <input
                    type="text"
                    value={ltEmailVal}
                    onChange={onLtEmail}
                    placeholder="מייל או מספר וואטסאפ"
                    className={styles.input}
                  />
                  <button type="submit" className={styles.submitBtn}>
                    עדכנו אותי
                  </button>
                </div>
                {ltError && <span className={styles.errorText}>{ltError}</span>}
              </form>
            ) : (
              <div className={styles.successRow}>
                <span className={styles.successIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" width={13} height={13}>
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                תודה! נעדכן אתכם במייל כשההלנה ארוכת הטווח תיפתח.
              </div>
            )}
          </div>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img src="/assets/coming-soon/apartment.png" alt="דירה למגורים ארוכי טווח" className={styles.image} />
            <div className={styles.imageGradient}></div>
            <span className={styles.imageBadge}>בקרוב · דירות</span>
          </div>
        </div>
      </div>
    </section>
  );
}
