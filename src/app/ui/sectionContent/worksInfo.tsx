import styles from './worksInfo.module.css'

export default function WorksInfo() {
  return(
    <>
      <div className={styles['page-info']}>
        <h2 className={styles['info-title']}>Original</h2>
        <p className={styles['info-text']}>
          Original creative works, such as stories or scripts, created for independent 
          publication or as part of a collaborative or commissioned project.
        </p>
      </div>
      <div className={styles['page-info']}>
        <h2 className={styles['info-title']}>Books</h2>
        <p className={styles['info-text']}>
          Published books released independently or those featured within literary anthologies.
        </p>
      </div>
      <div className={styles['page-info']}>
        <h2 className={styles['info-title']}>Fan-fiction</h2>
        <p className={styles['info-text']}>
          Fictional stories based on existing media, such as games and shows.
        </p>
      </div>
      <div className={styles['page-info']}>
        <h2 className={styles['info-title']}>Articles</h2>
        <p className={styles['info-text']}>
          Articles, essays, journal piece, and other similar works.
        </p>
      </div>
    </>
  );
}