import styles from './connectsection.module.css'
import LinksBox from '../design/linksBox';
import { LinkBoxProps } from '@/app/lib/interface';

export default function ConnectSection() {
  const links : LinkBoxProps = {
    name: ['Twitter', 'Facebook', 'Tumblr'],
    link: [
      'https://x.com/ymzkr445', 
      'https://www.facebook.com/people/Yamas-Seasonal-Musings/61552852614564/', 
      'https://www.tumblr.com/bucktoothymzkr'],
    path: [
      'twitter_logo.svg', 
      'fb_logo.svg', 
      'tumblr_logo.svg']
  }

  return (
    <section className={styles['section']}>
      <div className={styles['page-header']}>
        <h2 lang='de' className={styles['header']}>CONNECT</h2>
        <p className={styles['subtext']}>
          Let&apos;s connect! Follow my social media to stay up-to-date on my 
          latest writing projects and join the conversation.
        </p>
      </div>
      <div className={styles['content-wrapper']}>
        <LinksBox links={links}/>
      </div>
    </section>
  );
}