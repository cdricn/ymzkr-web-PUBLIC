import styles from './navbar.module.css'
import NavbarButton from './navbar-button';
//import { useState, useEffect } from 'react';

export default function Navbar() {
  //const [test, setTest] = useState(1);

  const color = [
    { backgroundColor: 'var(--color-yellow)' },
    { backgroundColor: 'var(--color-green)' },
    { backgroundColor: 'var(--color-brown)' },
  ]

  return (
    <>
      <NavbarButton />
      <header className={styles['site-header']}>
        <nav className={styles['site-navigation']}>
          <ul className={styles['menu-container']}>
            <li className={styles['menu-item']}>
              <a href=''>
              </a>
              <div className={styles['underline']} style={color[2]}></div>
            </li>
            <li className={styles['menu-item']}>
              <a href=''>
              </a>
              <div className={styles['underline']} style={color[1]}></div>
            </li>
            <li className={styles['menu-item']}>
              <a href=''>
              </a>
              <div className={styles['underline']} style={color[0]}></div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
