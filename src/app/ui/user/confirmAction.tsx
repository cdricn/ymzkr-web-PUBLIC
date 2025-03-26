import styles from './confirmAction.module.css'
import { ConfirmActionProps } from '@/app/lib/interface';

export default function ConfirmAction({isVisible, title, onCancel, onConfirm} : ConfirmActionProps) {
  return (
    <>
    { isVisible ? 
      <div className={styles['action-container']}>
        <div className={styles['action-box']}>
          <span className={styles['label']}>Delete this item?</span>
          <span className={[styles['label'], styles['body']].join(' ')}>
            Are you sure you want to delete {title}?<br/>
            This action is irreversible.
          </span>
          <div className={styles['btn-container']}>
            <div className={[styles['btn'], styles['confirm']].join(' ')}
              onClick={onConfirm}
            >
              Yes
            </div>
            <div className={[styles['btn'], styles['decline']].join(' ')}
              onClick={onCancel}
            >
              No
            </div>
          </div>
        </div>
      </div> :
      null
    }
    </>
  );
}