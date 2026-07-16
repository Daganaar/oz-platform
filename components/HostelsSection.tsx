import { HOSTELS } from '@/lib/hostels';
import { HostelCard } from './HostelCard';
import styles from './HostelsSection.module.scss';
import type { Hostel } from '@/lib/hostels';

type HostelsSectionProps = {
  subscribed: boolean;
  onSelectHostel: (hostel: Hostel) => void;
  onOpenNorthContact: () => void;
};

export function HostelsSection({ subscribed, onSelectHostel, onOpenNorthContact }: HostelsSectionProps) {
  return (
    <section id="hostels" className={styles.section}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>האכסניות שלנו</span>
      </div>
      <div className={styles.grid}>
        {HOSTELS.map((hostel) => (
          <HostelCard
            key={hostel.slug}
            hostel={hostel}
            subscribed={subscribed}
            onBook={() => (hostel.isNorth ? onOpenNorthContact() : onSelectHostel(hostel))}
          />
        ))}
      </div>
    </section>
  );
}
