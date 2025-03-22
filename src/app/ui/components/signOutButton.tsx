'use client'
import styles from './button.module.css'
import Button from './button'
import { logout } from '@/app/lib/actions'

export default function SignOutButton() {
  return(
    <button 
      className={styles['main-button']}
      onClick={() => logout()}>
      <Button text={'Log out'}/>
    </button>
  );
}