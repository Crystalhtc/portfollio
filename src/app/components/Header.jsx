"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectsMenu from "./ProjectsMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
   const projectsContainerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsProjectsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsProjectsHovered(false);
  };

  const scrollToProjects = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setIsProjectsHovered(false); // Close overlay
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";

    const projectSection = document.getElementById("project");
    const offset = 60; // Adjust if needed
    
    if (projectSection) {
      const sectionTop = projectSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });
    }
  };

  const projectPreviews = [
    {
      name: "Remedify",
      image: "/remedify-homepage.png",
      link: "/remedify",
    },
    {
      name: "Tranquify",
      image: "/tranquify-homepage.png",
      link: "/tranquify",
    },
    {
      name: "Navie",
      image: "/navie-homepage.png",
      link: "/navie",
    },
    {
      name: "Squiz",
      image: "/squiz-homepage.png",
      link: "/squiz",
    },
    {
      name: "Dolce Donuts",
      image: "/dolcedonuts-homepage.png",
      link: "/dolceDonuts",
    },
    {
      name: "Campus Canvas",
      image: "/campusCanvas-homepage.png",
      link: "/campusCanvas",
    },
    {
      name: "Teaddy",
      image: "/teaddy-homepage.png",
      link: "/teaddy",
    },
    {
      name: "Mood Tracking Motion Graphic Video",
      image: "/moodTracking-homepage.png",
      link: "/moodTracking",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setIsTransitioning(true);

      // Reset transitioning state after animation completes
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Match this with CSS transition duration

      return () => clearTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const scrollLeft = () => {
    projectsContainerRef.current.scrollBy({ left: -540, behavior: "smooth" });
  };

  const scrollRight = () => {
    projectsContainerRef.current.scrollBy({ left: 540, behavior: "smooth" });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <a href="/" className={styles.name}>
          <div className={styles.logoContainer}>
            <img
              src="/logo.svg"
              alt="Crystal Cheung's logo"
              className={`${styles.logo} ${
                isScrolled ? styles.logoHidden : ""
              } ${isTransitioning ? styles.transitioning : ""}`}
              loading="lazy"
            />
            <span
              className={`${styles.textLogo} ${
                isScrolled ? styles.textLogoVisible : ""
              } ${isTransitioning ? styles.transitioning : ""}`}
            >
              Crystal Cheung
            </span>
          </div>
        </a>

        <a
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </a>
      </nav>

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.menuContent}>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          />
          <div className={styles.links}>
            <div
              className={styles.projectsLink}
              onMouseEnter={handleMouseEnter}
            >
              <a href="#project" onClick={scrollToProjects}>Projects</a>
              {isProjectsHovered && (
                <div className={styles.projectsOverlay} onMouseLeave={() => setIsProjectsHovered(false)}>
                  <button className={styles.scrollButton} onClick={scrollLeft}>
                    <ChevronLeft size={40} />
                  </button>
                  <div className={styles.projectsContainer} ref={projectsContainerRef}>
                    {projectPreviews.map((project) => (
                      <a key={project.name} href={project.link} className={styles.projectPreview}>
                        <img src={project.image} alt={project.name} />
                        <span>{project.name}</span>
                      </a>
                    ))}
                  </div>
                  <button className={styles.scrollButton} onClick={scrollRight}>
                    <ChevronRight size={40} />
                  </button>
                </div>
              )}
            </div>
            <a href="/about" onClick={closeMenu}>
              About
            </a>
          </div>
        </div>
      </div>

      {/* <div 
                className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ''}`}
                onClick={closeMenu}
                aria-label="Close menu overlay"
            /> */}

      {isMenuOpen ? (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />
      ) : (
        <></>
      )}
    </header>
  );
}
