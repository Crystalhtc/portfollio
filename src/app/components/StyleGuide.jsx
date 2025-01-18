"use client";
import styles from './StyleGuide.module.css';

export default function StyleGuide({image, alt, styleguideLink, title}) {
    return (
        <div className={styles.styleguide}>
            <div className={styles.text}>
                <h2>{title}</h2>
            </div>
            <div>
                <img
                    src={image}
                    alt={alt}
                    className={styles.image}
                />
            </div>
            <div className={styles.buttonContainer}>
                <a href={styleguideLink} target="_blank">
                    <button className={styles.button}>View Style Guide</button>
                </a>
            </div>
        </div>
    );
}