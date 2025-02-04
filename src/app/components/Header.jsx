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
            <a className={styles.connectContainer} href='https://www.linkedin.com/in/crystal-cheunghtc/' target="_blank">
              <button className={styles.connect}>
                <svg className={styles.linkedin} xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                <p>Connect</p>
              </button>
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
