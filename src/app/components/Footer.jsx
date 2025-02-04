
"use client";
import styles from './Footer.module.css';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.upper}>
                    <div className={styles.info}>
                        <a className={styles.name} href="/">Crystal Cheung</a>
                        <p className={styles.role}>UX/UI Designer</p>
                    </div>
                
                <div className={styles.infoContainer}>
                    <div className={styles.siteLinks}>
                        <a href="/#project">Projects</a>
                        <a href="/about">About</a>
                    </div>
                    <div className={styles.connectContainer}>
                        <p className={styles.connect}>Connect with me!</p>
                        <div className={styles.iconContainer}>
                            <a href='https://www.linkedin.com/in/crystal-cheunghtc/' target="_blank"><img className={styles.icon} src='/linkedin.svg' alt='Linkedin Link' /></a>
                            <a href='mailto:crystalhtcheung@gmail.com' target="_blank"><img className={styles.icon} src='/email.svg' alt='email Link' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lower}>
                <p className={styles.copyright}>© 2025 Hoi Tung Crystal Cheung <span>. All rights reserved.</span> </p>
            </div>
        </footer>
    );
}