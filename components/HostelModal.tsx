import type { Hostel } from '@/lib/hostels';
import styles from './HostelModal.module.scss';

type HostelModalProps = {
  hostel: Hostel;
  booking: boolean;
  activeImg: string | null;
  subscribed: boolean;
  coupon: string;
  onPickImage: (src: string) => void;
  openBooking: () => void;
  backFromBooking: () => void;
  closeModal: () => void;
};

export function HostelModal({
  hostel,
  booking,
  activeImg,
  subscribed,
  coupon,
  onPickImage,
  openBooking,
  backFromBooking,
  closeModal,
}: HostelModalProps) {
  const mainImg = activeImg || hostel.img;
  const gallery = hostel.gallery || [];
  const amenities = hostel.amenities || [];

  return (
    <div onClick={closeModal} className={styles.overlay}>
      <div onClick={(e) => e.stopPropagation()} data-r="modal-card" className={styles.card}>
        <button onClick={closeModal} aria-label="סגור" className={styles.closeBtn}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
            <path d="M18 6 6 18M6 6l12 12"></path>
          </svg>
        </button>

        {!booking ? (
          <div data-r="modal-grid" className={styles.grid}>
            <div data-r="modal-media" className={styles.media}>
              <div className={styles.mainImgWrap}>
                <img src={mainImg} alt={hostel.name} className={styles.mainImg} />
              </div>
              <div className={styles.gallery}>
                {gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    onClick={() => onPickImage(src)}
                    alt=""
                    className={styles.galleryThumb}
                    style={{
                      border: `2px solid ${src === mainImg ? 'var(--brand)' : 'transparent'}`,
                      opacity: src === mainImg ? 1 : 0.72,
                    }}
                  />
                ))}
              </div>
              <div className={styles.mapCol}>
                <span className={styles.eyebrow}>מיקום</span>
                <div className={styles.mapFrameWrap}>
                  <iframe
                    src={hostel.mapSrc}
                    title="מפה"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.mapFrame}
                  ></iframe>
                </div>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.basicInfo}>
                <div className={styles.titleRow}>
                  <h2 className={styles.name}>{hostel.name}</h2>
                  <div className={styles.priceNow}>
                    {!subscribed ? (
                      <span className={styles.priceFull}>89 ש״ח</span>
                    ) : (
                      <>
                        <span className={styles.priceStrike}>89 ש״ח</span> <span className={styles.priceDiscounted}>69 ש״ח</span>
                      </>
                    )}
                    <span className={styles.priceUnit}> למיטה ללילה</span>
                  </div>
                </div>
                <span className={styles.longStay}>
                  שהייה של חודש ומעלה — <strong className={styles.longStayPrice}>49 ש״ח</strong> למיטה ללילה
                </span>
                <div className={styles.address}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                    <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx={12} cy={10} r={3}></circle>
                  </svg>
                  {hostel.address}
                </div>
                <p className={styles.desc}>{hostel.desc}</p>
              </div>

              <div className={styles.amenities}>
                {amenities.map((a) => (
                  <div key={a.label} className={styles.amenity}>
                    {a.ok ? (
                      <span className={styles.amenityOk}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    ) : (
                      <span className={styles.amenityNotOk}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" width={11} height={11}>
                          <path d="M18 6 6 18M6 6l12 12"></path>
                        </svg>
                      </span>
                    )}
                    {a.label}
                  </div>
                ))}
              </div>

              <div className={styles.ctaCol}>
                {subscribed && (
                  <div className={styles.couponNotice}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-brand)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={17} height={17} className={styles.couponNoticeIcon}>
                      <path d="M9 5H2v7l6.29 6.29a2.4 2.4 0 0 0 3.42 0l4.58-4.58a2.4 2.4 0 0 0 0-3.42Z"></path>
                      <circle cx={5.5} cy={8.5} r={1}></circle>
                    </svg>
                    <span>
                      הטבת חבר מועדון: הזינו את הקוד <strong className={styles.couponNoticeCode}>{coupon}</strong> בעת ההזמנה וקבלו לילה ב-69 ש״ח.
                    </span>
                  </div>
                )}
                <button onClick={openBooking} className={styles.bookBtn}>
                  הזמן עכשיו
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <p className={styles.bookNote}>ההזמנה מתבצעת במערכת ההזמנות של עוז.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.bookingView}>
            <div className={styles.bookingHeader}>
              <button onClick={backFromBooking} className={styles.backBtn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                חזרה לפרטי האכסניה
              </button>
              <span className={styles.bookingTitle}>הזמנה · {hostel.name}</span>
            </div>
            <iframe src={hostel.bookUrl} title="מערכת הזמנות" className={styles.bookingFrame}></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
