import { CheckIcon, SparkleIcon } from './icons';
import styles from './ComingSoonTeaser.module.scss';

type ComingSoonTeaserProps = {
  ltEmailVal: string;
  onLtEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitLt: (e: React.SubmitEvent<HTMLFormElement>) => void;
  ltError: string;
  ltSent: boolean;
};

export function ComingSoonTeaser({ ltEmailVal, onLtEmail, submitLt, ltError, ltSent }: ComingSoonTeaserProps) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <SparkleIcon />
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
                <CheckIcon stroke="var(--text-brand)" width={17} height={17} className={styles.listCheck} />
                למצוא ולהזמין דירות ומתחמים ישירות דרך המערכת
              </li>
              <li className={styles.listItem}>
                <CheckIcon stroke="var(--text-brand)" width={17} height={17} className={styles.listCheck} />
                לעבוד ללא צורך בחוזים פרטניים מול כל ספק
              </li>
              <li className={styles.listItem}>
                <CheckIcon stroke="var(--text-brand)" width={17} height={17} className={styles.listCheck} />
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
                  <CheckIcon width={13} height={13} />
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
