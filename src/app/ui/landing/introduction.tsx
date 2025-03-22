import styles from './introduction.module.css'

export default function Introduction() {
  return (
    <section className={styles['section']}>
      <p className={styles['introduction']}>
        I am a <span>creative freelance writer</span> with a diverse background 
        in writing, driven by a <span>passion</span> for storytelling and a 
        <span> commitment</span> to crafting  impactful content that informs, 
        entertains, and inspires readers across a broad range of genres.
      </p>
    </section>
  )
}