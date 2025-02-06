"use client";
import styles from './AppCard.module.css';

export default function AppCard({name, description, image, alt, link, skills}) {
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
                <div className={styles.skillsContainer}>
                    {skills && skills.map((skill, index) => (
                        <span key={index} className={styles.skillTag}>
                            {skill}
                        </span>
                    ))}
                </div>
                <a href={link}>
                    <button className={styles.button}>Read More</button>
                </a>
            </div>
        </div>
    );
}