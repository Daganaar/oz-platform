import styles from './HowItWorks.module.scss';

export function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>איך זה עובד</span>
        <h2 className={styles.title}>שלושה צעדים פשוטים</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.step}>
          <div className={styles.iconBadge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4M10 10h4M10 14h4M10 18h4"></path>
            </svg>
          </div>
          <h3 className={styles.stepTitle}>1. בוחרים אכסניה</h3>
          <p className={styles.stepBody}>בדקו את המיקום, הקיבולת והמחיר למיטה, ובחרו את האכסניה המתאימה ביותר לצורכי העובדים שלכם</p>
        </div>
        <div className={styles.step}>
          <div className={styles.iconBadge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
              <rect width={18} height={18} x={3} y={4} rx={2}></rect>
              <path d="M3 10h18M8 2v4M16 2v4"></path>
            </svg>
          </div>
          <h3 className={styles.stepTitle}>2. מזמינים מקום</h3>
          <p className={styles.stepBody}>
            לחצו על <strong>&quot;הזמן עכשיו&quot;</strong> ותועברו למערכת ההזמנות, שבה תוכלו לבחור תאריכים, להשלים את פרטי ההזמנה ולאשר אותה בקלות
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.iconBadge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <h3 className={styles.stepTitle}>3. נכנסים בראש שקט</h3>
          <p className={styles.stepBody}>כל האכסניות מנוהלות ומתוחזקות על ידינו, ומציעות סביבת מגורים בטוחה, נקייה ומאובזרת לעובדים</p>
        </div>
      </div>
    </section>
  );
}
