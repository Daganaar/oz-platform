import { Logo } from './Logo';
import styles from './Nav.module.scss';

export function Nav() {
  return (
    <nav data-r="nav" className={styles.nav}>
      <div className={styles.brand}>
        <span className={styles.logoWrap}>
          <Logo variant="dark" />
        </span>
        <span className={styles.brandName}>עוז</span>
      </div>
      <div data-r="navlinks" className={styles.links}>
        <a href="#hostels" className={styles.link}>אכסניות</a>
        <a href="#how" className={styles.link}>איך זה עובד</a>
        <a href="#contact" className={styles.link}>צור קשר</a>
        <a href="#hostels" className={styles.cta}>הזמנת מקום</a>
      </div>
    </nav>
  );
}
