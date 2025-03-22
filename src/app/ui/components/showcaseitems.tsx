'use client';
import styles from './showcaseitems.module.css'
import Circles from '../design/circles';
import { formatYMDate } from '@/app/lib/utils';
import { ShowcasePropsArr } from '../../lib/interface'

export default function ShowcaseItems({data, state} : ShowcasePropsArr) {

  const visibility = {
    transform: "scaleY(1)"
  }

  return (
    <>
      {
        // for hyphens \u00AD
        data.map((item, key) => {
          return (
            <a href={item.link ? item.link : ""} 
            target="_blank"
            className={styles['showcase-box-inside']}
            style={key == state ? visibility: undefined}
            key={key}>
              <div className={styles['showcase-box-content']}>
                <h2 className={styles['item-name']}>{item.name!.toUpperCase()}</h2>
                <span className={styles['item-category']}>{item.category?.toUpperCase()}</span>
                <span className={styles['item-date']}>{formatYMDate(item.date!.toString())}</span>
                <Circles />
              </div>
            </a>
          );
        })
      }
    </>
  );
}