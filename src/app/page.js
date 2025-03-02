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
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export default function Home() {
  const [taglineScale, setTaglineScale] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldJumpToProject, setShouldJumpToProject] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const taglineSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") { // Prevents server-side execution
      setWindowWidth(window.innerWidth);
      
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
      
      // Add resize listener
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
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
        
        // Define different max scale values based on screen width
        const minScale = 1;
        let maxScale = 1.5; // Default for larger screens
        
        // Mobile screens (adjust these breakpoints as needed)
        if (windowWidth < 768) {
          maxScale = 1.2; // Smaller maximum scale for mobile
        } else if (windowWidth < 1024) {
          maxScale = 1.35; // Medium maximum scale for tablets
        }
        
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
        // After tagline section, keep maximum scale (device dependent)
        // Use the same max scale logic as above
        let maxScale = 1.5; // Default for larger screens
        
        if (windowWidth < 768) {
          maxScale = 1.2; // Smaller maximum scale for mobile
        } else if (windowWidth < 1024) {
          maxScale = 1.35; // Medium maximum scale for tablets
        }
        
        setTaglineScale(maxScale);
        
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
  }, [windowWidth]);

useEffect(() => {
  const cursor = document.getElementById('cursor');
  const heroImageContainer = document.querySelector('.' + styles.heroImageContainer);
  let lastX = 0; // Store the last X position of the mouse

  const moveCursor = (e) => {
    const { clientX, clientY } = e;
    cursor.style.left = `${clientX}px`;
    cursor.style.top = `${clientY}px`;

    // Determine movement direction
    if (clientX < lastX) {
      cursor.style.transform = 'rotate(-10deg)'; // Moving left
    } else {
      cursor.style.transform = 'rotate(10deg)'; // Moving right
    }
    
    lastX = clientX; // Update last X position
    
    // Check if cursor is within heroImageContainer
    const containerRect = heroImageContainer.getBoundingClientRect();
    if (
      clientX >= containerRect.left &&
      clientX <= containerRect.right &&
      clientY >= containerRect.top &&
      clientY <= containerRect.bottom
    ) {
      cursor.style.display = 'block';
    } else {
      cursor.style.display = 'none';
      cursor.style.transform = 'rotate(0deg)'; // Reset rotation when leaving
    }
  };

  document.addEventListener('mousemove', moveCursor);
  
  // Initial check for cursor position
  const checkInitialPosition = () => {
    const containerRect = heroImageContainer.getBoundingClientRect();
    if (
      lastX >= containerRect.left &&
      lastX <= containerRect.right
    ) {
      cursor.style.display = 'block';
    }
  };
  
  // Run initial check after a small delay to ensure elements are rendered
  setTimeout(checkInitialPosition, 100);

  return () => {
    document.removeEventListener('mousemove', moveCursor);
  };
}, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : (
        <div className={`${styles.page}`}>
          <Header />
          <main className={styles.main}>
            <div id="cursor" className={styles.cursor}>
              <img
                  src="/cursor.svg"
                  alt="Sakura Cursor"
                  width="30"
                />
            </div>
            <div className={styles.hero}>
              <div className={styles.heroImageContainer}>
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
                <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} className={styles.heroMovement}>
                  <MouseParallaxChild factorX={0.2} factorY={0.3} className={`${styles.crystal} ${styles.heroImageContainer}`}>
                    <img src="/cover-crystal.png" alt="Crystal" className={styles.heroImage}/>
                  </MouseParallaxChild>
                  <MouseParallaxChild factorX={0.5} factorY={0.6} className={`${styles.heroBg} ${styles.heroImageContainer}`}>
                    <img src="/cover-background.png" alt="Hero image background" className={styles.heroImage}/>
                  </MouseParallaxChild>
                </MouseParallaxContainer>
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
                  "Human-Centered Design, <br/>
                  Enriched by a social sciences perspective."
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