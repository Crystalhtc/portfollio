import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(onLoadingComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={styles.container}
      style={{
        opacity,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: opacity === 0 ? 'none' : 'auto'
      }}
    >
      <div className={styles.logoWrapper}>
        <img
          src="/logo.svg"
          alt="Logo"
          className={styles.logo}
        />
        {/* <div className={styles.loadingBarContainer}>
          <div className={styles.loadingBar} />
        </div> */}
      </div>
    </div>
  );
};

export default LoadingScreen;