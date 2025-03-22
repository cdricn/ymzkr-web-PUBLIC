import styles from './waves.module.css';

export default function Waves() {
  // Credits to GoodKatz. The wave animation is a modified version of his Simple CSS Waves.
  // https://codepen.io/goodkatz 
  return (
    <div className={styles['waves-container']}>
      <svg className={styles['waves']} xmlns="http://www.w3.org/2000/svg"
      viewBox="0 24 150 61" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        <path id="tall-wave" d="M-160 44c30 0 58-28 88-28s 58 28 88 28 58-28 88-28 58 28 88 28 v44h-352z" />
        <path id="freq-wave" d="M-160 44c30 -20 58-18 88-18s 58 30 88 18 58-20 88-18 58 30 88 18 v44h-352z" />
      </defs>
      <g className={styles['parallax']}>
        <use href="#gentle-wave" x="48" y="0" fill="none" stroke="#79776F"/>
        <use href="#gentle-wave" x="48" y="5" fill="none" stroke="#79776F"/>
        <use href="#gentle-wave" x="48" y="10" fill="none" stroke="#79776F"/>
        <use href="#gentle-wave" x="48" y="15" fill="none" stroke="#79776F"/>
        <use href="#gentle-wave" x="48" y="20" fill="none" stroke="#79776F"/>
        <use href="#gentle-wave" x="48" y="25" fill="none" stroke="#79776F"/>
        <use href="#gentle-wave" x="48" y="30" fill="none" stroke="#79776F"/>
        <use href="#gentle-wave" x="48" y="35" fill="none" stroke="#79776F"/>
        <use href="#gentle-wave" x="48" y="40" fill="none" stroke="#79776F"/>
      </g>
      </svg>
    </div>
  );
}