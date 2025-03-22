import styles from './worksSection.module.css'
import ShowcaseBox from '../components/showcasebox';
import WorksInfo from '../sectionContent/worksInfo';
import { fetchLatestWorks } from '@/app/lib/data';

export default async function WorksSection() {
  const allWorks = await fetchLatestWorks();
  return(
    <section className={styles['section']}>
      <div className={styles['section-header']}>
        <h2 className={styles['header']}>WORKS</h2>
      </div>
      <div className={styles['content-wrapper']}>
        <ShowcaseBox data={allWorks}/>
        <div className={styles['page-info-container']}>
          <WorksInfo />
        </div>
      </div>
    </section>
  );
}