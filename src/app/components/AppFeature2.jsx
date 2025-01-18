"use client";
import styles from './AppFeatures.module.css';

export default function AppFeature2({
    feature2,
    descriptions2 = [],
    image2,
    alt2
}) {
    return (
        <div className={styles.features}>
            <div className={`${styles.feature} ${styles.opposite}`}>
                <div className={`${styles.text} ${styles.textLeft}`}>
                    <h3>{feature2}</h3>
                    <ul className={styles.descriptionList}>
                        {descriptions2.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.appImage}>
                    <img
                        src={image2}
                        alt={alt2}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={`${styles.feature} ${styles.normal}`}>
                <div className={styles.appImage}>
                    <img
                        src={image2}
                        alt={alt2}
                        className={styles.image}
                    />
                </div>
                <div className={`${styles.text} ${styles.textLeft}`}>
                    <h3>{feature2}</h3>
                    <ul className={styles.descriptionList}>
                        {descriptions2.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}