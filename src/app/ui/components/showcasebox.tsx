'use client';
import styles from './showcasebox.module.css'
import ShowcaseItems from './showcaseitems'
import CarouselScroll from '../design/carouselscroll';
import Button from './button';
import { ShowcasePropsArr } from '../../lib/interface'
import { useState } from 'react';

export default function ShowcaseBox({data} : ShowcasePropsArr) {
  const [currItem, setCurrItem] = useState(0);

  const handleCarouselScroll = (scroll:number) => {
    setCurrItem(scroll);
  }

  return(
    <section className={styles['section']}>
      <div className={styles['showcase-box-border']}>
        <ShowcaseItems data={data} state={currItem}/>
        <div className={styles['placeholder']}></div>
        <div className={styles['complement-text-container']}>
          <div className={styles['complement-text']}>LATEST</div>
          <div className={styles['complement-text']}>
            {/* The value is in css. Changes from 'TITLE' to 'TITLES' for mobile*/}
          </div>
          <div className={styles['complement-text']}>GENRE</div>
          <div className={styles['complement-text']}>DATE</div>
        </div>
      </div>
      <CarouselScroll scrollNumber={handleCarouselScroll}/>
      <div className={styles['button-container']}>
        <Button text='MORE' link='/works'/>
      </div>
    </section>
  )
}