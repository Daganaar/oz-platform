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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
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
