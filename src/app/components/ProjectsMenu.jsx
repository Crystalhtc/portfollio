import React from 'react';
import styles from './ProjectsMenu.module.css';

const ProjectsMenu = () => {
    const projects = [
        {
            name: "Remedify",
            image: "/remedify-homepage.png",
            description: "All-in-one mobile solution for emotional well-being",
            link: "/remedify"
        },
        {
            name: "Tranquify",
            image: "/tranquify-homepage.png",
            description: "All-in-one mobile solution for emotional well-being",
            link: "/tranquify"
        },
        {
            name: "Navie",
            image: "/navie-homepage.png",
            description: "Mobile application for way-finding inside a grocery store",
            link: "/navie"
        },
        {
            name: "Squiz",
            image: "/squiz-homepage.png",
            description: "Web application that generates personalized quizzes",
            link: "/squiz"
        },
        {
            name: "Dolce Donuts",
            image: "/dolcedonuts-homepage.png",
            description: "Responsive website for a donut shop",
            link: "/dolceDonuts"
        }
    ];

    return (
        <div className={styles.menu}>
            <div className={styles.menuContent}>
                {projects.map((project, index) => (
                    <a href={project.link} key={index} className={styles.projectCard}>
                        <div className={styles.imageContainer}>
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className={styles.projectInfo}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProjectsMenu;