import styles from './page.module.css'
import PageHeader from '@/app/ui/components/pageheader';
import CreateForm from '../ui/user/createform';
import DBWorksList from '../ui/user/dbworkslist';
import SignOutButton from '../ui/components/signOutButton';
import { fetchAllEntries } from '../lib/data';
 
export default async function Page() {
  const allEntries = await fetchAllEntries();
 
  return (
    <div className={styles['page-wrapper']}>
      <PageHeader headerName={'USER'} />
      <SignOutButton />
      <main className={styles['layout-wrapper']}>
        <section className={styles['create-form']}>
          <h2 className={styles['section-header']}>Add entry:</h2>
          <CreateForm/>
        </section>
        <section className={styles['show-entries']}>
          <h2 className={styles['section-header']}>Current entries:</h2>
          <DBWorksList data={allEntries}/>
        </section>
      </main>
    </div>
  );
}
