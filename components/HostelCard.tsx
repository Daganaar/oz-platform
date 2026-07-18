import type { Hostel } from '@/lib/hostels';
import { MapPinIcon } from './icons';
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
          <MapPinIcon width={13} height={13} />
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
