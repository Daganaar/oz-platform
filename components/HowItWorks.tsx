import { BuildingIcon, CalendarIcon, ShieldCheckIcon } from './icons';
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
            <BuildingIcon />
          </div>
          <h3 className={styles.stepTitle}>1. בוחרים אכסניה</h3>
          <p className={styles.stepBody}>בדקו את המיקום, הקיבולת והמחיר למיטה, ובחרו את האכסניה המתאימה ביותר לצורכי העובדים שלכם</p>
        </div>
        <div className={styles.step}>
          <div className={styles.iconBadge}>
            <CalendarIcon />
          </div>
          <h3 className={styles.stepTitle}>2. מזמינים מקום</h3>
          <p className={styles.stepBody}>
            לחצו על <strong>&quot;הזמן עכשיו&quot;</strong> ותועברו למערכת ההזמנות, שבה תוכלו לבחור תאריכים, להשלים את פרטי ההזמנה ולאשר אותה בקלות
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.iconBadge}>
            <ShieldCheckIcon />
          </div>
          <h3 className={styles.stepTitle}>3. נכנסים בראש שקט</h3>
          <p className={styles.stepBody}>כל האכסניות מנוהלות ומתוחזקות על ידינו, ומציעות סביבת מגורים בטוחה, נקייה ומאובזרת לעובדים</p>
        </div>
      </div>
    </section>
  );
}
