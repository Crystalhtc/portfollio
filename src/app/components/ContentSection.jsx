"use client";
import styles from './ContentSection.module.css';

export default function ContentSection({
    image, 
    alt, 
    title, 
    overview,
}) {
    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{overview}</p>
            </div>
            <div>
                <img
                    src={image}
                    alt={alt}
                    className={styles.image}
                />
            </div>
        </div>
    );
}