import styles from './LoginForm.module.css'

export default function LoginForm() {

  return(
    <form className={styles['login-form']}>
      <h2 className={styles['form-title']}>
        Username:
      </h2>
      <input className={styles['form-input']}/>
      <h2 className={styles['form-title']}>
        Password:
      </h2>
      <input 
        className={styles['form-input']}
        type='password'
      />
      <input type="hidden" name="redirectTo"/>
      <button className={styles['form-button']}>
      </button>
    </form>
  )
}