import { MailIcon, PhoneIcon, WhatsAppIcon } from './icons';
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
            <PhoneIcon />
            050-323-6665
          </a>
          <a href="mailto:info@a-adir.com" className={styles.contactLink}>
            <MailIcon />
            info@a-adir.com
          </a>
          <a href="https://wa.me/972503236665" target="_blank" rel="noopener" className={styles.contactLink}>
            <WhatsAppIcon />
            <span dir="ltr" className={styles.ltrNum}>+972 50-323-6665</span>
          </a>
        </div>
      </div>
      <div className={styles.copyright}>© עוז</div>
    </footer>
  );
}
