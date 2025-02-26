"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import AppCard from "./components/AppCard";
import Footer from "./components/Footer";
import AboutCard from "./components/AboutCard";
import ScrollButton from "./components/ScrollButton";
import ProjectsSection from './components/ProjectsSection';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [taglineScale, setTaglineScale] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldJumpToProject, setShouldJumpToProject] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const taglineSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") { // Prevents server-side execution
      if (!sessionStorage.getItem("homePageLoaded")) {
        sessionStorage.setItem("homePageLoaded", "true");
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000); // Simulate loading time
      }

      // Check if the user needs to jump to the project section
      if (sessionStorage.getItem("jumpToProject")) {
        sessionStorage.removeItem("jumpToProject"); // Clear flag
        setShouldJumpToProject(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!isLoading && shouldJumpToProject) {
      const projectSection = document.getElementById("project");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "auto" }); // Instant jump
      }
    }
  }, [isLoading, shouldJumpToProject]);

  const scrollToProjects = (event) => {
    event.preventDefault();
    document.body.style.overflow = "unset";

    const projectSection = document.getElementById("project");
    if (projectSection) {
      const sectionTop = projectSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = document.querySelector(`.${styles.hero}`).offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Define the scroll range where tagline should be in focus
      const taglineStartPosition = heroHeight;
      const taglineEndPosition = heroHeight + windowHeight;
      
      // Only apply effects when we're in the tagline section
      if (scrollPosition >= taglineStartPosition && scrollPosition <= taglineEndPosition) {
        // Calculate how far through the tagline section we've scrolled (0-1)
        const scrollProgress = (scrollPosition - taglineStartPosition) / (taglineEndPosition - taglineStartPosition);
        
        // Scale from 1 to 1.2 based on scroll progress
        const minScale = 1;
        const maxScale = 1.5;
        const newScale = minScale + ((maxScale - minScale) * scrollProgress);
        
        setTaglineScale(newScale);
        
        // Make tagline sticky during this phase
        if (taglineSectionRef.current) {
          taglineSectionRef.current.style.position = 'sticky';
          taglineSectionRef.current.style.top = '0';
        }
      } else if (scrollPosition < taglineStartPosition) {
        // Before tagline section, reset to minimum scale
        setTaglineScale(1);
        
        if (taglineSectionRef.current) {
          taglineSectionRef.current.style.position = 'relative';
          taglineSectionRef.current.style.top = '0';
        }
      } else {
        // After tagline section, keep maximum scale
        setTaglineScale(1.5);
        
        if (taglineSectionRef.current) {
          taglineSectionRef.current.style.position = 'relative';
          taglineSectionRef.current.style.top = windowHeight + 'px';
        }
      }
      
      // Show projects after scrolling past the tagline section
      if (scrollPosition > taglineEndPosition) {
        setShowProjects(true);
      } else {
        setShowProjects(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : (
        <div className={`${styles.page}`}>
          <Header />
          <main className={styles.main}>
            <div className={styles.hero}>
              <div className={styles.heroImageContainer}>
                <img
                  src="/cover.png"
                  alt="Crystal Cheung"
                  width="500"
                  className={styles.heroImage}
                />
                <img
                  src="/cover-tablet.png"
                  alt="Crystal Cheung"
                  width="500"
                  className={styles.heroImageTablet}
                />
                <img
                  src="/cover-mobile.png"
                  alt="Crystal Cheung"
                  width="500"
                  className={styles.heroImageMobile}
                />
              </div>
            
              <div className={styles.heroTextContainer}>
                <div className={styles.heroText}>
                  <p className={styles.headingSmall}>Hi, I am </p>
                  <h1 className={styles.heading}>Crystal Cheung</h1>
                  <h2 className={styles.jobTitle}>UX/UI Designer | Graphic Designer</h2>
                </div>
                <div className={styles.cta}>
                  <h3>Crafts user-centric designs that enhance quality of life.</h3>
                  <button className={styles.ctaButton} onClick={scrollToProjects}>
                    View Projects
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.background}>
              <div 
                ref={taglineSectionRef}
                className={`${styles.taglineContainer} ${styles.taglineSticky}`}
              >
                <h3 
                  className={styles.tagline} 
                  style={{ transform: `scale(${taglineScale})` }}
                >
                  "Crafts user-centric designs that enhance quality of life."
                </h3>
              </div>

              <div className={`${styles.projectsWrapper} ${showProjects ? styles.showProjects : ''}`}>
                <div className={styles.projectOffset} id="project"></div>
                <div className={styles.projects}>
                  <ProjectsSection />
                </div>

                <div className={styles.aboutMe}>
                  <h2>Who is Crystal?</h2>
                  <AboutCard 
                    name="Crystal Cheung"
                    image="/profile-pic-square.png"
                    alt="Crystal Cheung"
                    link="/about"
                    button="About Me"
                  />
                </div>
              </div>
            </div>
          </main>
          <ScrollButton />
          <Footer />
        </div>
      )}
    </>
  );
}