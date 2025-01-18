"use client";
import styles from './AppFeatures.module.css';

export default function AppFeature1({
    feature1,
    descriptions1 = [],
    image1,
    alt1,
}) {
    return (
        <div className={styles.features}>
            <div className={styles.feature}>
                <div className={styles.appImage}>
                    <img
                        src={image1}
                        alt={alt1}
                        className={styles.image}
                    />
                </div>
                <div className={`${styles.text} ${styles.textRight}`}>
                    <h3>{feature1}</h3>
                    <ul className={styles.descriptionList}>
                        {descriptions1.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}