import React, { useState } from 'react';
import styles from "./ProjectsSection.module.css";
import AppCard from "./AppCard";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      category: 'ux',
      image: "/remedify-homepage.png",
      alt: "Remedify",
      name: "Remedify",
      link: "/remedify",
      description: "AI-powered medication management app with personalized reminders, detailed drug information, and intuitive scheduling—designed for simplicity and accessibility."
    },
    {
      category: 'ux',
      image: "/tranquify-homepage.png",
      alt: "Tranquify",
      name: "Tranquify",
      link: "/tranquify",
      description: "All-in-one mobile solution for emotional well-being, featuring personalized mood tracking, meditation guidance, and self-care recommendations."
    },
    {
      category: 'ux',
      image: "/westPointHotel-homepage.png",
      alt: "West Point Hotel",
      name: "West Point Hotel",
      link: "/westPointHotel",
      description: "An immersive website experience reflecting West Point Hotel's elegant and contemporary design. Tailored for adult couples, business retreats, and weddings, it showcases stunning amenities with seamless, intuitive navigation for effortless booking."
    },
    {
      category: 'ux',
      image: "/navie-homepage.png",
      alt: "Navie",
      name: "Navie",
      link: "/navie",
      description: "Mobile application for way-finding inside a grocery store, locating the nearest grocery stores, creating shopping list, and calculating total price with tax."
    },
    {
      category: 'ux',
      image: "/squiz-homepage.png",
      alt: "Squiz",
      name: "Squiz",
      link: "/squiz",
      description: "Web application that generates personalized quizzes from study materials for revisions through the utilization of ChatGPT."
    },
    {
      category: 'ux',
      image: "/dolcedonuts-homepage.png",
      alt: "Dolce Donuts",
      name: "Dolce Donuts",
      link: "/dolceDonuts",
      description: "Responsive website for a donut shop, featuring an interactive donut customization page."
    },
    {
      category: 'graphic',
      image: "/campusCanvas-homepage.png",
      alt: "Campus Canvas",
      name: "Campus Canvas",
      link: "/campusCanvas",
      description: "Magazine designed in both print and digital formats, showcasing campus architecture worldwide, highlighting CUHK's modern, functional, and nature-inspired design"
    },
    {
      category: 'graphic',
      image: "/teaddy-homepage.png",
      alt: "Teaddy",
      name: "Teaddy",
      link: "/teaddy",
      description: ""
    },
    {
      category: 'graphic',
      image: "/moodTracking-homepage.png",
      alt: "Mood Tracking Motion Graphic Video",
      name: "Mood Tracking Motion Graphic Video",
      link: "/moodTracking",
      description: "Motion graphic explainer video illustrating the benefits of mood tracking and various methods to monitor emotions through engaging visuals and storytelling."
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || 
    (activeFilter === 'ux' && project.category === 'ux') ||
    (activeFilter === 'graphic' && project.category === 'graphic')
  );

  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.filterContainer}>
        <a
          onClick={() => setActiveFilter('all')}
          className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
        >
          All
        </a>
        <a
          onClick={() => setActiveFilter('ux')}
          className={`${styles.filterButton} ${activeFilter === 'ux' ? styles.active : ''}`}
        >
          UX/UI Design
        </a>
        <a
          onClick={() => setActiveFilter('graphic')}
          className={`${styles.filterButton} ${activeFilter === 'graphic' ? styles.active : ''}`}
        >
          Graphic Design
        </a>
      </div>
      <div className={styles.appCardList}>
        {filteredProjects.map((project, index) => (
          <AppCard
            key={project.name}
            className={index === 0 ? styles.firstAppCard : ''}
            image={project.image}
            alt={project.alt}
            name={project.name}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;