'use server'
import styles from './page.module.css';
import SignInButton from '../ui/components/signInButton';
import { auth } from '../../auth';

export default async function LoginPage() {
  const session = await auth();

  return (
    <main className={styles['main']}>
      <div className={styles['main-container']}>
        <h1 className={styles['main-title']}>
          YMZK
        </h1>
        <SignInButton />
      </div>
    </main>
  );
}