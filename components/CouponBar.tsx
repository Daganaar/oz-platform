import styles from './CouponBar.module.scss';

type CouponBarProps = {
  subscribed: boolean;
  email: string;
  onEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubscribe: (e: React.FormEvent) => void;
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
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" width={16} height={16} style={{ flexShrink: 0 }}>
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
          <span>
            <strong className={styles.headline}>אתם בפנים</strong> · הזינו את הקוד בעת ההזמנה ללילה ב-69 ש״ח
          </span>
        </span>
        <span className={styles.subscribedRight}>
          {waAdded && (
            <span className={styles.waNote}>
              <svg viewBox="0 0 24 24" fill="#fff" width={15} height={15} style={{ flexShrink: 0 }}>
                <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"></path>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23z"></path>
              </svg>
              נעדכן אתכם גם בוואטסאפ
            </span>
          )}
          <button onClick={onCopy} className={styles.copyBtn}>
            <span className={styles.couponCode}>{coupon}</span>
            <span className={styles.copyLabel}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                <rect x={9} y={9} width={13} height={13} rx={2}></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              {copyLabel}
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}
