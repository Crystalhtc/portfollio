import React, { useState, useEffect } from 'react';
import styles from './SideMenu.module.css';

const SideMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [availableSections, setAvailableSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // List of all possible sections
  const allSections = [
    { name: 'Introduction', id: "app-intro" },
    { name: 'Final Video', id: "final-video" },
    { name: 'WordPress Website', id: "wordpress" },
    { name: 'Prototype', id: 'prototype' },
    { name: 'Problem and Solution', id: 'problem-solution' },
    { name: 'Features', id: 'features' },
    { name: 'Client Requirements', id: 'client-requirements' },
    { name: 'User Research', id: 'user-research' },
    { name: 'Competitive Analysis', id: 'competitive-analysis' },
    { name: 'Values', id: 'values' },
    { name: 'Target Audience', id: 'target-audience' },
    { name: 'User Persona', id: 'user-persona' },
    { name: 'Mock Up', id: 'mock-up' },
    { name: 'Research', id: 'research' },
    { name: 'Creative Process', id: 'creative-process' },
    { name: 'Logo Design', id: 'logo-design' },
    { name: 'Style Guide', id: 'style-guide' },
    { name: 'Site Map', id: 'site-map' },
    { name: 'User Story Map', id: 'user-story-map' },
    { name: 'User Flow Map', id: 'user-flow-map' },
    { name: 'Wireframing', id: 'wireframing' },
    { name: 'Initial Hi-Fi', id: 'initial-hifi' },
    { name: 'Design Iteration', id: 'design-iteration' },
    { name: 'Usability Testing', id: 'usability-testing' },
    { name: 'Final Hi-Fi', id: 'final-hifi' },
    { name: 'Marketing Landing Page', id: 'marketing-landing-page' },
    { name: 'Web App', id: 'web-app' },
    { name: 'Color Usage', id: 'color' },
    { name: 'Key Animations', id: 'key-motion' },
    { name: 'Digital Design', id: 'digital-design' },
    { name: 'Final Design', id: 'final-design' },
    { name: 'Reflection and Learnings', id: 'reflection' },
  ];

  // Check which sections exist in the current page
  useEffect(() => {
    const checkAvailableSections = () => {
      const sections = allSections.filter(section => 
        document.getElementById(section.id) !== null
      );
      setAvailableSections(sections);
      setIsLoading(false);
    };

    // Wait for DOM to be fully loaded
    if (document.readyState === 'complete') {
      checkAvailableSections();
    } else {
      window.addEventListener('load', checkAvailableSections);
      return () => window.removeEventListener('load', checkAvailableSections);
    }
  }, []);

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
      const currentSection = availableSections.find(section => {
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
  }, [availableSections]);

  // Scroll to section with offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Loading placeholder items
  const LoadingPlaceholders = () => (
    <div className={styles.loadingContainer}>
      {[...Array(6)].map((_, index) => (
        <div key={index} className={styles.loadingItem}>
          <div className={styles.loadingBar} />
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.sideMenu}>
      <nav>
        {isLoading ? (
          <LoadingPlaceholders />
        ) : (
          <ul>
            {availableSections.map((section) => (
              <li 
                key={section.id}
                className={activeSection === section.id ? styles.activeSection : ''}
                onClick={() => scrollToSection(section.id)}
              >
                {section.name}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default SideMenu;