'use client';
import styles from './carouselscroll.module.css'
import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";
import { useEffect, useState } from 'react';

interface CarouselScrollProps {
  scrollNumber: (scroll: number) => void;
}

export default function CarouselScroll({scrollNumber} : CarouselScrollProps) {
  const [currActive, setCurrActive] = useState(0);
  const circleCount = 5

  const handlePrev = () => {
    setCurrActive(currActive > 0 ? currActive - 1 : 4)
  }
  const handleNext = () => {
    setCurrActive(currActive < 4 ? currActive + 1 : 0)
  }
  const handleManual = (index:number) => {
    setCurrActive(index)
  }

  const active = {
    backgroundColor: "var(--color-dovegrey)"
  }
  const inactive = {
    transform: "scale(.5)",
    backgroundColor: "var(--color-darkivory)"
  }

  useEffect(() => {
    scrollNumber(currActive); 
  }, [currActive, scrollNumber]);

  return (
    <div className={styles['scrollbar-container']}>
      <div className={styles['button-container']}>
        <SlArrowLeft className={styles['buttonL']} onClick={handlePrev}/>
      </div>
      <div className={styles['circles-container']}>
        {
          Array(circleCount).fill(0).map((_, index)=>{
            return (
              <div className={styles['circle-container']} 
                key={index}
                onClick={()=>{handleManual(index)}}>
                <div className={styles['circle']} 
                  style={currActive==index ? active : inactive}></div>
              </div>
            )
          })
        }
      </div>
      <div className={styles['button-container']}>
        <SlArrowRight className={styles['buttonR']} onClick={handleNext}/>
      </div>
    </div>
  );
}