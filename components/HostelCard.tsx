import type { Hostel } from '@/lib/hostels';
import styles from './HostelCard.module.scss';

type HostelCardProps = {
  hostel: Hostel;
  subscribed: boolean;
  onBook: () => void;
};

export function HostelCard({ hostel, subscribed, onBook }: HostelCardProps) {
  return (
    <div onClick={onBook} className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={hostel.img} alt={hostel.name} className={styles.img} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{hostel.name}</h3>
        <div className={styles.address}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={13} height={13}>
            <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"></path>
            <circle cx={12} cy={10} r={3}></circle>
          </svg>
          {hostel.address}
        </div>
        <div className={styles.priceRow}>
          {!hostel.isNorth ? (
            <span>
              {!subscribed ? (
                <span className={styles.priceFull}>89 ש״ח</span>
              ) : (
                <>
                  <span className={styles.priceStrike}>89 ש״ח</span> <span className={styles.priceDiscounted}>69 ש״ח</span>
                </>
              )}{' '}
              למיטה ללילה
              <br />
              <span className={styles.longStay}>
                שהייה של חודש ומעלה — <strong className={styles.longStayPrice}>49 ש״ח</strong> ללילה
              </span>
            </span>
          ) : (
            <span className={styles.northNote}>אכסניות בטבריה ובחיפה · דברו איתנו</span>
          )}
        </div>
        <a onClick={onBook} className={styles.cta}>
          {hostel.isNorth ? 'דברו איתנו' : 'הזמן עכשיו'}
        </a>
      </div>
    </div>
  );
}
