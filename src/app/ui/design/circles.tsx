import styles from './circles.module.css'

export default function Circles(){
  return (
    <div className={styles['circle-container']}>
      <div className={[styles['circle'], styles['large']].join(' ')}>
        <div className={[styles['circle'], styles['medium']].join(' ')}>
          <div className={[styles['circle'], styles['small']].join(' ')}>
          </div>
        </div>
      </div>
    </div>
  );
}