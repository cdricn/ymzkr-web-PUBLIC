import styles from './commsSection.module.css'
import CommsInfo from '../sectionContent/commsInfo'
import { CommissionProps } from '@/app/lib/interface'

export default function CommsSection() {

  const dataOriginal: CommissionProps = {
    header: 'Original',
    items: [
      'Essays', 
      'Academic or otherwise\n$1/100 words',
      'Stories',
      'Short stories, prose, full length\n$1/100 words',
      'Poems',
      'Any meter, any rhyme scheme\n$1/100 words',
      'Rewrites',
      'Essay rewrites, line-editing\n$1/100 words'
    ],
    notes: [
      'Allowed explicit content.',
      'Guaranteed no ai usage.'
    ]
  }

  const dataFanworks: CommissionProps = {
    header: 'Fanworks',
    items: [
      'Beta-reading', 
      'Line-editing, analysis, suggestions, discussion\n$1/100 words',
      'Beta-editing', 
      'Grammar, typos, phrasing\n$3/1000 words',
      'Fan-fictions',
      'Any media, any length\n$1/100 words'
    ],
    notes: [
      'ftCol List of known media:',
      'ftCol Arknights\n Hoyoverse\n Wuthering Waves\n Project Moon\n Blue Archive\n Fate/Grand Order',
      'Allowed explicit content.',  
      'Guaranteed no ai usage.'
    ]
  }

  // Should be extracted from json instead of hardcoded variable
  const notes =  [
      'Rates vary and are open to suggestions.',
      'Additional materials which includes specific content is on a case-by-case basis and subject to discussion.',
      'Two major plot/character/topic revisions are allowed per commission.'
    ]

  return (
    <section className={styles['section']}>
      <div className={styles['section-header']}>
        <h2 lang='de' className={styles['header']}>COM&shy;MISSION</h2>
        <p className={styles['subtext']}>
          From captivating essays to immersive tales, 
          fan-fiction to originals, across diverse genres 
          and with compelling storytelling, I can bring your 
          narratives to life.
        </p>
      </div>
      <div className={styles['content-wrapper']}>
        <h3></h3>
        <div className={styles['page-info-container']}>
          <CommsInfo data={dataOriginal}/>
          <div className={styles['divider']}></div>
          <CommsInfo data={dataFanworks}/>
          <div className={styles['divider']}></div>
          <div className={styles['footnote-container']}>
            <div className={styles['footnote']}>
              {
                notes.map((item, index)=>{
                  return (
                    <span key={index}>*{item}<br/></span>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}