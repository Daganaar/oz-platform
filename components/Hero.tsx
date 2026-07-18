import { ArrowLeftIcon } from './icons';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>פתרונות הלנה לעובדים – זמינות מיידית</h1>
        <p className={styles.subtitle}>אכסניות מאובזרות לעובדים זרים בפריסה ארצית, להזמנות קצרות טווח עם תהליך פשוט ומהיר</p>
        <div className={styles.ctaRow}>
          <a href="#hostels" className={styles.ctaBtn}>
            צפו באכסניות
            <ArrowLeftIcon />
          </a>
        </div>
        <div className={styles.trustRow}>
          <span>אכסניות מאובזרות לעובדים</span>
          <span className={styles.dot}></span>
          <span>זמינות מיידית להזמנה</span>
          <span className={styles.dot}></span>
          <span>תהליך פשוט ומהיר</span>
          <span className={styles.dot}></span>
          <span>שירות וליווי אישי</span>
        </div>
      </div>
    </section>
  );
}
