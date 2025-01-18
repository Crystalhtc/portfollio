"use client";
import styles from './AppIntro.module.css';

export default function AppIntro({appName, description, role, tools, duration, prototypeLink, figmaLink, styleguideLink}) {

    return (
        <div className={styles.card}>
            <h1>{appName}</h1>
            <p>{description}</p>
            <div className={styles.detailsContainer}>
                <div className={styles.details}>
                    <p className={styles.rowTitle}>Role</p>
                    <p className={styles.rowContent}>{role}</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.rowTitle}>Tools</p>
                    <p className={styles.rowContent}>{tools}</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.rowTitle}>Duration</p>
                    <p className={styles.rowContent}>{duration}</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <a href={prototypeLink} target="_blank">
                    <button>VIEW FIGMA PROTOTYPE</button>
                </a>
                <a href={figmaLink} target="_blank">
                    <button>VIEW FIGMA DESIGN</button>
                </a>
                <a href={styleguideLink} target="_blank">
                    <button>VIEW FIGMA STYLE GUIDE</button>
                </a>
            </div>
        </div>
    );
}