'use client'
import styles from './button.module.css'
import Button from './button'
import { login } from '@/app/lib/actions'

export default function SignInButton() {
  return(
    <button 
      className={styles['main-button']}
      onClick={() => login()}>
      <Button text={'Log in with GitHub'}/>
    </button>
  );
}