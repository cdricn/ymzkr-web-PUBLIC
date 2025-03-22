import styles from './button.module.css'
import { ButtonProps } from '@/app/lib/interface'
import Link from 'next/link'

export default function Button({text, link} : ButtonProps ) {
  return (
    <>
      {
        link != null ? 
        <Link href={link} className={styles['button']}>
          <div className={styles['btn-hover']}></div>
          <span className={styles['btn-text']}>{text}</span>
        </Link> :
        <div className={styles['button']}>
          <div className={styles['btn-hover']}></div>
          <span className={styles['btn-text']}>{text}</span>
        </div>
      }
    </>
  )
}