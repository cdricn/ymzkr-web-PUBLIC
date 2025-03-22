import styles from './navbar-button.module.css'
import navButtonLine from '../../../../public/navbutton_line.svg'
import Image from 'next/image';

export default function NavbarButton() {

  return(
    <div className={styles['navbar-button']}>
      <div className={styles['button-flex']}>
        <Image className={styles['line']} src={navButtonLine} alt=''></Image>
        <Image className={styles['line']} src={navButtonLine} alt=''></Image>
        <Image className={styles['line']} src={navButtonLine} alt=''></Image>
      </div>
    </div>
  );
}