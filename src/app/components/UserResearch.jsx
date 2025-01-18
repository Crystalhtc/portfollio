
"use client";
import styles from './UserResearch.module.css';

export default function UserResearch({title, descriptions = []}) {

    return (
        <div className={styles.userResearch}>
            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <ul className={styles.list}>
                    {descriptions.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
}