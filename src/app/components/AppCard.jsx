"use client";
import styles from './AppCard.module.css';

export default function AppCard({name, description, image, alt, link}) {
    return (
        <div className={styles.card}>
            <img
                src={image}
                alt={alt}
                className={styles.appImage}
                loading="lazy"
            />
            <div className={styles.text}>
                <h3 className={styles.appName}>{name}</h3>
                <p>{description}</p>
                <a href={link} className={styles.link}>
                    <button className={styles.button}>Read More</button>
                </a>
            </div>
        </div>
    );
}