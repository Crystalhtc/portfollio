import React, { useState, useEffect } from 'react';
import styles from './SideMenu.module.css';

const SideMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // List of sections with their corresponding IDs
  const sections = [
    { name: 'Prototype', id: 'prototype' },
    { name: 'Features', id: 'features' },
    { name: 'User Research', id: 'user-research' },
    { name: 'Competitive Analysis', id: 'competitive-analysis' },
    { name: 'Values', id: 'values' },
    { name: 'Target Audience', id: 'target-audience' },
    { name: 'User Persona', id: 'user-persona' },
    { name: 'Style Guide', id: 'style-guide' },
    { name: 'Site Map', id: 'site-map' },
    { name: 'User Flow Map', id: 'user-flow-map' },
    { name: 'Wireframing', id: 'wireframing' },
    { name: 'Initial Hi-Fi', id: 'initial-hifi' },
    { name: 'Design Iteration', id: 'design-iteration' },
    { name: 'Usability Testing', id: 'usability-testing' },
    { name: 'Final Hi-Fi', id: 'final-hifi' },
    { name: 'Marketing Landing Page', id: 'marketing-landing-page' }
  ];

  // Handle scroll and section tracking
  useEffect(() => {
    const handleScroll = () => {
      const appIntroElement = document.getElementById('app-intro');
      const scrollPosition = window.scrollY;

      if (appIntroElement) {
        const { top } = appIntroElement.getBoundingClientRect();
        setIsVisible(scrollPosition > top + window.innerHeight / 2);
      }

      // Find the section currently in view
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section with offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90; // Adjust this value to control the offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`${styles.sideMenu}`}
    >
      <nav>
        <ul>
          {sections.map((section) => (
            <li 
              key={section.id}
              className={activeSection === section.id ? styles.activeSection : ''}
              onClick={() => scrollToSection(section.id)}
            >
              {section.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;