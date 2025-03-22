import styles from './pageheader.module.css'
import { PageHeaderProps } from '@/app/lib/interface'
import { extractCharsToArray, animDelay } from '@/app/lib/utils'

export default function PageHeader({headerName} : PageHeaderProps) {

  const headerLetters = extractCharsToArray(headerName);

  return (
    <div className={styles['header-container']}>
      <div className={styles['header-width']}>
        <h2 className={styles['header']}>
          { 
            headerLetters.map((item, index)=>{
              return(
                <span 
                className={styles['header-letter']} 
                style={animDelay(.2*(index-1), .3)}
                key={index}>
                  {item}
                </span>
              )
            })
          }
        </h2>
      </div>
    </div>
  )
}