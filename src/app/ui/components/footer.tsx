import styles from './footer.module.css'

export default function Footer() {
  
  return (
    <section className={styles['section']}>
      <div className={styles['content-container']}>
        <div className={styles['footer-header']}>
          <span>YMZKR</span><br/>
          <span>Freelance writer.</span>
        </div>
        <div className={styles['footer-content']}>
          <a href='./' target='_blank'>Home</a>
          <a href='./works' target='_blank'>Works</a>
          <a href='https://www.facebook.com/people/Yamas-Seasonal-Musings/61552852614564/' target='_blank'>Facebook</a>
          <a href='https://x.com/ymzkr445' target='_blank'>Twitter/X</a>
          <a href='https://www.tumblr.com/bucktoothymzkr' target='_blank'>Tumblr</a>
        </div>
      </div>
    </section>
  )
}