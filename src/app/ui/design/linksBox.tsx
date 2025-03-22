import styles from './linksBox.module.css'
import { LinkBoxProps } from '@/app/lib/interface'

export default function LinksBox({links} : {links : LinkBoxProps}) {
  return (
    <div className={styles['box-container']}>
      {
        links.name.map((_, index)=>{
          return(
            <a className={styles['link-box']} 
            target='_blank'
            href={links.link[index]} 
            key={index}>
              <img className={styles['link-image']}
                src={links.path[index]} 
                alt={links.name[index]}
              />
            </a>
          )
        })
      }
    </div>
  )
}