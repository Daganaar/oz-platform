import type { Hostel } from '@/lib/hostels';
import { ArrowLeftIcon, CheckIcon, ChevronRightIcon, CloseIcon, MapPinIcon, TagIcon } from './icons';
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
          <CloseIcon width={20} height={20} />
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
                  <MapPinIcon width={16} height={16} />
                  {hostel.address}
                </div>
                <p className={styles.desc}>{hostel.desc}</p>
              </div>

              <div className={styles.amenities}>
                {amenities.map((a) => (
                  <div key={a.label} className={styles.amenity}>
                    {a.ok ? (
                      <span className={styles.amenityOk}>
                        <CheckIcon width={12} height={12} />
                      </span>
                    ) : (
                      <span className={styles.amenityNotOk}>
                        <CloseIcon strokeWidth={2.2} width={11} height={11} />
                      </span>
                    )}
                    {a.label}
                  </div>
                ))}
              </div>

              <div className={styles.ctaCol}>
                {subscribed && (
                  <div className={styles.couponNotice}>
                    <TagIcon stroke="var(--text-brand)" width={17} height={17} className={styles.couponNoticeIcon} />
                    <span>
                      הטבת חבר מועדון: הזינו את הקוד <strong className={styles.couponNoticeCode}>{coupon}</strong> בעת ההזמנה וקבלו לילה ב-69 ש״ח.
                    </span>
                  </div>
                )}
                <button onClick={openBooking} className={styles.bookBtn}>
                  הזמן עכשיו
                  <ArrowLeftIcon />
                </button>
                <p className={styles.bookNote}>ההזמנה מתבצעת במערכת ההזמנות של עוז.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.bookingView}>
            <div className={styles.bookingHeader}>
              <button onClick={backFromBooking} className={styles.backBtn}>
                <ChevronRightIcon />
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
