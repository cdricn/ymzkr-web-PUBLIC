import styles from './divider.module.css'

export default function Divider() {
  return(
    <div className={styles['divider']}>
      <div className={[styles['circle'], styles['small']].join(' ')}></div>
      <div className={[styles['circle'], styles['big']].join(' ')}></div>
      <div className={[styles['circle'], styles['small']].join(' ')}></div>
    </div>
  );
}