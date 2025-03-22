import styles from './works.module.css'
import PageHeader from '@/app/ui/components/pageheader';
import WorksList from './worksList';
import Waves from '../design/waves';
import Footer from '../components/footer';
import { WorksPropsArr } from '../../lib/interface'
import Divider from '../design/divider';
 
export default function Works({data} : WorksPropsArr) {
 
  return (
    <div className={styles['section']}>
      <div className={styles['page-wrapper']}>
        <PageHeader headerName='WORKS'/>
        <WorksList data={data}/>
      </div>
      <Divider />
      <Waves />
      <Footer />
    </div>
  );
}