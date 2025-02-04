"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import AppCard from "./components/AppCard";
import App from "next/app";
import Footer from "./components/Footer";
import AboutCard from "./components/AboutCard";
import ScrollButton from "./components/ScrollButton";
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
    const scrollToProjects = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    document.body.style.overflow = "unset";

    const projectSection = document.getElementById("project");
    const offset = 60; // Adjust if needed
    
    if (projectSection) {
      const sectionTop = projectSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });
    }
  };
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.headingSmall}>Hi, I am </p>
            <h1 className={styles.heading}>
              Crystal Cheung
            </h1>
            <h2 className={styles.jobTitle}>UX/UI Designer | Graphic Designer</h2>
            <button className={styles.ctaButton} onClick={scrollToProjects}>View Projects</button>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              src="/hero-image.png"
              alt="Crystal Cheung"
              width="351"
              className={styles.heroImage}
            />
          </div>
          {/* <div>
            <img
              src="/hero.png"
              alt="Crystal Cheung"
              width="300"
              className={styles.heroImage}
            />
          </div> */}
        </div>
        
        <div className={styles.background}>
        <div className={styles.taglineContainer}>
          <h3 className={styles.tagline}>"Crafts user-centric designs that enhance quality of life."</h3>
        </div>

        <div className={styles.projects} id="project">
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
      </main>
      <ScrollButton/>
      <Footer />
    </div>
  );
}
