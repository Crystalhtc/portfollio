import React from 'react';
import styles from "./Uxui.module.css";
import AppCard from "./AppCard";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      category: 'ux',
      image: "/remedify-homepage.png",
      alt: "Remedify",
      name: "Remedify",
      link: "/remedify",
      description: "AI-powered medication management app with personalized reminders, detailed drug information, and intuitive scheduling—designed for simplicity and accessibility.",
      skills: ["UX/UI Design", "UX Research", "Graphic Design"],
      application: "Mobile App",
      appIcon: "/phone.svg",
      appType: "Mobile Application"
    },
    {
      category: 'ux',
      image: "/equityFirst-homepage.png",
      alt: "Equity First HR",
      name: "Equity First HR",
      link: "/equityFirstHR",
      description: "An inclusive and modern website experience reflecting Equity First HR’s values-driven mission, highlighting consulting services, interactive tools, and accessible content through a cohesive and professional interface.",
      skills: ["UX/UI Redesign", "Rebranding", "Data Visualization"],
      application: "Website",
      appIcon: "/computer.svg",
      appType: "Website"
    },
    {
      category: 'ux',
      image: "/tranquify-homepage.png",
      alt: "Tranquify",
      name: "Tranquify",
      link: "/tranquify",
      description: "All-in-one mobile solution for emotional well-being, featuring personalized mood tracking, meditation guidance, and self-care recommendations.",
      skills: ["UX/UI Design", "UX Research", "Graphic Design", "Front-end development"],
      application: "Mobile App",
      appIcon: "/phone.svg",
      appType: "Mobile Application"
    },
    {
      category: 'ux',
      image: "/westPointHotel-homepage.png",
      alt: "West Point Hotel",
      name: "West Point Hotel",
      link: "/westPointHotel",
      description: "An immersive website experience reflecting West Point Hotel's elegant and contemporary design. Tailored for adult couples, business retreats, and weddings, it showcases stunning amenities with seamless, intuitive navigation for effortless booking.",
      skills: ["UX/UI Design", "UX Research", "WordPress"],
      application: "Website",
      appIcon: "/computer.svg",
      appType: "Website"
    },
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
