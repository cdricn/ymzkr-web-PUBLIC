import styles from './commsInfo.module.css'
import { CommissionProps } from '@/app/lib/interface';

export default function CommsInfo({data} : {data : CommissionProps}) {
  return (
    <>
      <div className={styles['category']}>
        <div className={styles['categ-header']}>
          <h4>{data.header}</h4>
        </div>
        <div className={styles['categ-body']}>
          {data.items.map((item, index)=>{
            return(
              <div className={styles['item']} key={index}>{item}</div>
            )
          })}
          {data.notes.map((item, index)=> {
            return (
              <>
                {
                  // ftCol means the string should have a formating of column 
                  item.slice(0, 5) === 'ftCol' ? 
                  <>
                    {
                      index == 0 ? 
                      <div className={styles['item-divider']}></div>:
                      null
                    }
                    <div className={styles['item']} key={index}>
                      {item.slice(5)}
                    </div>
                  </>
                  : 
                  <>
                    <div className={styles['item-divider']}></div>
                    <div className={styles['item-note']} key={index}>{item}</div>
                  </>
                }
              </>
            )
          })}
        </div>
        <div></div>
      </div>
    </>
  );
}
