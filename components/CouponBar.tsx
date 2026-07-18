import { CheckIcon, CopyIcon, WhatsAppBubbleIcon } from './icons';
import styles from './CouponBar.module.scss';

type CouponBarProps = {
  subscribed: boolean;
  email: string;
  onEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubscribe: (e: React.SubmitEvent<HTMLFormElement>) => void;
  subError: string;
  waAdded: boolean;
  coupon: string;
  copyLabel: string;
  onCopy: () => void;
};

export function CouponBar({
  subscribed,
  email,
  onEmailInput,
  onSubscribe,
  subError,
  waAdded,
  coupon,
  copyLabel,
  onCopy,
}: CouponBarProps) {
  if (!subscribed) {
    return (
      <div className={styles.bar}>
        <form onSubmit={onSubscribe} className={styles.form}>
          <span className={styles.copyText}>
            <strong className={styles.headline}>לא חבל לשלם מחיר מלא?</strong>
            <span className={styles.subhead}>
              קופון <b>₪69</b>  ללילה (במקום ₪89) מחכה לכם בהצטרפות לרשימת התפוצה שלנו . הצטרפו כאן &gt;&gt;
            </span>
          </span>
          <span className={styles.formRight}>
            <input
              type="email"
              value={email}
              onChange={onEmailInput}
              placeholder="המייל שלכם"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitBtn}>
              שלחו לי קופון
            </button>
            {subError && <span className={styles.errorText}>{subError}</span>}
          </span>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.bar}>
      <div className={styles.subscribedRow}>
        <span className={styles.subscribedNotice}>
          <CheckIcon width={16} height={16} style={{ flexShrink: 0 }} />
          <span>
            <strong className={styles.headline}>אתם בפנים</strong> · הזינו את הקוד בעת ההזמנה ללילה ב-69 ש״ח
          </span>
        </span>
        <span className={styles.subscribedRight}>
          {waAdded && (
            <span className={styles.waNote}>
              <WhatsAppBubbleIcon width={15} height={15} style={{ flexShrink: 0 }} />
              נעדכן אתכם גם בוואטסאפ
            </span>
          )}
          <button onClick={onCopy} className={styles.copyBtn}>
            <span className={styles.couponCode}>{coupon}</span>
            <span className={styles.copyLabel}>
              <CopyIcon />
              {copyLabel}
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}
