import { CheckIcon, CloseIcon, WhatsAppIcon } from './icons';
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
  submitLead: (e: React.SubmitEvent<HTMLFormElement>) => void;
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
          <CloseIcon width={18} height={18} />
        </button>

        <div className={styles.header}>
          <span className={styles.eyebrow}>עוז צפון</span>
          <h2 className={styles.title}>אכסניות עוז בצפון</h2>
          <p className={styles.subtitle}>יש לנו אכסניות בטבריה ובחיפה. לפרטים ולהזמנה דברו איתנו עכשיו בוואטסאפ, או השאירו פרטים ונחזור אליכם.</p>
        </div>

        <div className={styles.body}>
          <a href={WA_LINK} target="_blank" rel="noopener" className={styles.waBtn}>
            <WhatsAppIcon width={20} height={20} />
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
                <CheckIcon width={24} height={24} />
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
