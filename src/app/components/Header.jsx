import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null); // "ux" | "graphic" | null
  const projectsContainerRef = useRef(null);

  const handleMouseLeave = () => setHoveredCategory(null);

  const projectPreviews = [
    { name: "Remedify", image: "/remedify-homepage.png", link: "/remedify" },
    { name: "Equity First HR", image: "/equityFirst-homepage.png", link: "/equityFirstHR" },
    { name: "Tranquify", image: "/tranquify-homepage.png", link: "/tranquify" },
    { name: "West Point Hotel", image: "/westPointHotel-homepage.png", link: "/westPointHotel" },
    // { name: "Navie", image: "/navie-homepage.png", link: "/navie" },
    // { name: "Squiz", image: "/squiz-homepage.png", link: "/squiz" },
    // { name: "Dolce Donuts", image: "/dolcedonuts-homepage.png", link: "/dolceDonuts" },
    { name: "Remedify Social Media Campaign", image: "/socialMedia-homepage.png", link: "/remedifySocialMedia" },
    { name: "REPAIR Framework White Paper", image: "/whitePaper-homepage.png", link: "/whitePaper" },
    { name: "Campus Canvas", image: "/campusCanvas-homepage.png", link: "/campusCanvas" },
    { name: "Teaddy", image: "/teaddy-homepage.png", link: "/teaddy" },
    { name: "Bocha", image: "/bocha-homepage.png", link: "/bocha" },
    { name: "One Timeless Step", image: "/oneTimelessStep-homepage.png", link: "/oneTimelessStep" },
    { name: "Mood Tracking Motion Graphic Video", image: "/moodTracking-homepage.png", link: "/moodTracking" }
  ];

  const uxProjects = [
    "Remedify", "Equity First HR", "Tranquify", "West Point Hotel", "Navie", "Squiz", "Dolce Donuts"
  ];
  const graphicProjects = [
    "Remedify Social Media Campaign", "REPAIR Framework White Paper", "Campus Canvas", "Teaddy", "Bocha", "One Timeless Step", "Mood Tracking Motion Graphic Video"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setIsTransitioning(true);
      const timeout = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (!next) setHoveredCategory(null); // ensure overlay cleared when closing via toggle
      return next;
    });
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setHoveredCategory(null); // <— key: clear overlay on close
    document.body.style.overflow = "unset";
  };

  const scrollLeft = () => {
    projectsContainerRef.current?.scrollBy({ left: -540, behavior: "smooth" });
  };

  const scrollRight = () => {
    projectsContainerRef.current?.scrollBy({ left: 540, behavior: "smooth" });
  };

  const filtered = (category) => {
    const names = category === "ux" ? uxProjects : graphicProjects;
    return projectPreviews.filter((p) => names.includes(p.name));
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <a href="/" className={styles.name} onClick={closeMenu}>
          <div className={styles.logoContainer}>
            <img
              src="/logo.svg"
              alt="Crystal Cheung's logo"
              className={`${styles.logo} ${isScrolled ? styles.logoHidden : ""} ${isTransitioning ? styles.transitioning : ""}`}
              loading="lazy"
            />
            <span
              className={`${styles.textLogo} ${isScrolled ? styles.textLogoVisible : ""} ${isTransitioning ? styles.transitioning : ""}`}
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

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.menuContent}>
          <button className={styles.closeButton} onClick={closeMenu} aria-label="Close menu" />
          <div className={styles.links}>
            {/* UX/UI */}
            <div
              className={styles.projectsLink}
              onMouseEnter={() => setHoveredCategory("ux")}
            >
              <a href="/uxui" onClick={closeMenu}>UX/UI Design</a>
              {hoveredCategory === "ux" && (
                <div className={styles.projectsOverlay} onMouseLeave={handleMouseLeave}>
                  <button className={styles.scrollButton} onClick={scrollLeft}>
                    <ChevronLeft size={40} />
                  </button>

                  <div className={styles.projectsContainer} ref={projectsContainerRef}>
                    {filtered("ux").map((project) => (
                      <a
                        key={project.name}
                        href={project.link}
                        className={styles.projectPreview}
                        onClick={closeMenu} // clear overlay & close menu on click
                      >
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

            {/* Graphic */}
            <div
              className={styles.projectsLink}
              onMouseEnter={() => setHoveredCategory("graphic")}
            >
              <a href="/graphic" onClick={closeMenu}>Graphic Design</a>
              {hoveredCategory === "graphic" && (
                <div className={styles.projectsOverlay} onMouseLeave={handleMouseLeave}>
                  <button className={styles.scrollButton} onClick={scrollLeft}>
                    <ChevronLeft size={40} />
                  </button>

                  <div className={styles.projectsContainer} ref={projectsContainerRef}>
                    {filtered("graphic").map((project) => (
                      <a
                        key={project.name}
                        href={project.link}
                        className={styles.projectPreview}
                        onClick={closeMenu} // clear overlay & close menu on click
                      >
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

            <a href="/about" onClick={closeMenu}>About</a>

            <a
              className={styles.connectContainer}
              href="https://www.linkedin.com/in/crystal-cheunghtc/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <button className={styles.connect}>
                <svg className={styles.linkedin} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                <p>Connect</p>
              </button>
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} aria-label="Close menu overlay" />}
    </header>
  );
}
