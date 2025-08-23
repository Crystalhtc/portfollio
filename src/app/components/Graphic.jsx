import React from 'react';
import styles from "./Graphic.module.css";
import AppCard from "./AppCard";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      category: 'graphic',
      image: "/campusCanvas-homepage.png",
      alt: "Campus Canvas",
      name: "Campus Canvas",
      link: "/campusCanvas",
      description: "Magazine designed in both print and digital formats, showcasing campus architecture worldwide, highlighting CUHK's modern, functional, and nature-inspired design.",
      skills: ["Graphic Design"],
      application: "Magazine",
      appIcon: "/magazine.svg",
      appType: "Magazine"
    },
    {
      category: 'graphic',
      image: "/teaddy-homepage.png",
      alt: "Teaddy",
      name: "Teaddy",
      link: "/teaddy",
      description: "Branded advertisement campaign featuring visually engaging posters and a custom logo, blending the warmth of a teddy bear with the charm of tea to create a welcoming identity for Teaddy.",
      skills: ["Graphic Design"],
      application: "Poster",
      appIcon: "/poster.svg",
      appType: "Poster"
    },
    {
      category: 'graphic',
      image: "/whitePaper-homepage.png",
      alt: "REPAIR Framework White Paper",
      name: "REPAIR Framework White Paper",
      link: "/whitePaper",
      description: "A branded white paper redesign that turns complex equity-focused content into a clear, accessible publication with strong hierarchy, custom infographics, and a polished layout for Equity First HR.",
      skills: ["Graphic Design"],
      application: "White Paper",
      appIcon: "/magazine.svg",
      appType: "White Paper"
    },
    {
      category: 'graphic',
      image: "/oneTimelessStep-homepage.png",
      alt: "One Timeless Step",
      name: "One Timeless Step",
      link: "/oneTimelessStep",
      description: "Event poster design capturing the elegance and timelessness of ballet, blending dynamic movement and soft pastel accents to create a graceful visual identity for Étoile Ballet Academy’s Gala Performance 2024.",
      skills: ["Graphic Design"],
      application: "Poster",
      appIcon: "/poster.svg",
      appType: "Poster"
    },
    {
      category: 'graphic',
      image: "/moodTracking-homepage.png",
      alt: "Mood Tracking Motion Graphic Video",
      name: "Mood Tracking Motion Graphic Video",
      link: "/moodTracking",
      description: "Motion graphic explainer video illustrating the benefits of mood tracking and various methods to monitor emotions through engaging visuals and storytelling.",
      skills: ["Graphic Design", "Storyboarding"],
      application: "Motion Graphic",
      appIcon: "/motion.svg",
      appType: "Motion Graphic"
    }
  ];

  return (
    <div className={styles.projects}>
      <h2>UX/UI Projects</h2>
      <div className={styles.appCardList}>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AppCard
              image={project.image}
              alt={project.alt}
              name={project.name}
              link={project.link}
              description={project.description}
              skills={project.skills}
              application={project.application}
              appIcon={project.appIcon}
              appType={project.appType}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
