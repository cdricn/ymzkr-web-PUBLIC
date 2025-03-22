import styles from './landing.module.css'
import Waves from '../design/waves';
import ScrollIndicator from '../components/scrollindicator';

export default function Landing() {
  return (
    <section className={styles['section']}>
      <div className={styles['title-container']}>
        <div className={styles['ymzkr-number']}></div>
        <div className={styles['ymzkr-title']}>YMZKR</div>
        <div className={styles['ymzkr-text']}>
          <span>STORYTELLER</span>
          <span>AUTHOR</span>
          <span>WRITER</span>
          <span>POET</span>
        </div>
      </div>
      <Waves />
    </section>
  );
}