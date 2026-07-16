import { Logo } from './Logo';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <span className={styles.logoWrap}>
              <Logo variant="light" />
            </span>
            <span className={styles.brandName}>עוז</span>
          </div>
          <p className={styles.tagline}>כל האכסניות מנוהלות ומאובזרות על ידינו, ומספקות פתרון הלנה נוח, בטוח ומסודר לעובדים זרים</p>
        </div>
        <div className={styles.contactCol}>
          <span className={styles.eyebrow}>צרו קשר</span>
          <a href="tel:+972503236665" className={styles.contactLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={17} height={17}>
              <path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39"></path>
            </svg>
            050-323-6665
          </a>
          <a href="mailto:info@a-adir.com" className={styles.contactLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={17} height={17}>
              <rect width={20} height={16} x={2} y={4} rx={2}></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            info@a-adir.com
          </a>
          <a href="https://wa.me/972503236665" target="_blank" rel="noopener" className={styles.contactLink}>
            <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.737-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
            </svg>
            <span dir="ltr" className={styles.ltrNum}>+972 50-323-6665</span>
          </a>
        </div>
      </div>
      <div className={styles.copyright}>© עוז</div>
    </footer>
  );
}
