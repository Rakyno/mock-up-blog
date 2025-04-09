import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <header className={styles.header}>
      <h1><Link to="/">My Blog</Link></h1>
      <label className={styles.toggleSwitch}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(prev => !prev)}
        />
        <span className={styles.slider}></span>
      </label>
    </header>
  );
}

export default Header;

