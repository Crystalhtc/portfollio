"use client";
import styles from './AboutCard.module.css';

export default function AboutCard({name, image, alt, link, button}) {
    return (
        <a href={link}>
            <div className={styles.card}>
                <img
                    src={image}
                    alt={alt}
                    className={styles.appImage}
                    loading="lazy"
                />
                <div className={styles.text}>
                    <h3 className={styles.appName}>{name}</h3>
                    
                        <button className={styles.button}>{button}</button>
                    
                </div>
            </div>
        </a>
    );
}