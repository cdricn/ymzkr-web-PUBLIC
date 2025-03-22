import styles from './scrollindicator.module.css';
import { SlArrowDown } from "react-icons/sl";

export default function ScrollIndicator() {
  return (
    <div className={styles['arrow-container']}>
      <SlArrowDown className={styles['arrow']}/>
    </div>
  );
}