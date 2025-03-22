import styles from './worksList.module.css'
import { formatYMDate, animDelay } from '@/app/lib/utils';
import { WorksPropsArr } from '../../lib/interface'

export default function WorksList({data} : WorksPropsArr){
  return (        
    <section className={styles['showcase-container']}>
      {data.map((item, key) => {
        return (
          <a href={item.link ? item.link : ""} 
          target="_blank"
          className={styles['showcase-item']} 
          style={animDelay(key*.7, .3)} key={key}>
            <div className={styles['date-group']}>{formatYMDate(item.date_created!.toString())}</div>
            <div className={styles['showcase-group']}>{item.title}</div>
          </a>
        );
      })}
    </section>
  )
}