import { WhatsAppBubbleIcon } from './icons';
import styles from './WhatsappOptInModal.module.scss';

type WhatsappOptInModalProps = {
  waVal: string;
  onWaInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addWa: (e: React.SubmitEvent<HTMLFormElement>) => void;
  waError: string;
  closeWaModal: () => void;
};

export function WhatsappOptInModal({
  waVal,
  onWaInput,
  addWa,
  waError,
  closeWaModal,
}: WhatsappOptInModalProps) {
  return (
    <div onClick={closeWaModal} className={styles.overlay}>
      <div onClick={(e) => e.stopPropagation()} className={styles.card}>
        <div className={styles.header}>
          <span className={styles.iconBadge}>
            <WhatsAppBubbleIcon />
          </span>
          <h3 className={styles.title}>הצטרפו גם לדיוור בוואטסאפ</h3>
          <p className={styles.subtitle}>רוצים לקבל עדכון שבועי על מבצעים ונכסים חדשים שעולים ישירות לוואטסאפ?</p>
        </div>
        <form onSubmit={addWa} className={styles.form}>
          <input
            type="tel"
            dir="ltr"
            value={waVal}
            onChange={onWaInput}
            placeholder="מספר הוואטסאפ שלכם"
            className={styles.input}
          />
          {waError && <span className={styles.errorText}>{waError}</span>}
          <button type="submit" className={styles.submitBtn}>
            הצטרפו לדיוור בוואטסאפ
          </button>
          <button type="button" onClick={closeWaModal} className={styles.skipBtn}>
            לא תודה, רק הקופון
          </button>
        </form>
      </div>
    </div>
  );
}
