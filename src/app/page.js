"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import AppCard from "./components/AppCard";
import App from "next/app";
import Footer from "./components/Footer";
import AboutCard from "./components/AboutCard";
import ScrollButton from "./components/ScrollButton";

export default function Home() {
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
        
        <div className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.appCardList}>
            <AppCard 
              className={styles.firstAppCard}
              image="/remedify-homepage.png" 
              alt="Remedify" 
              name="Remedify" 
              link="/remedify"
              description="All-in-one mobile solution for emotional well-being, featuring personalized mood tracking, meditation guidance, and self-care recommendations."
            />
            <AppCard 
              image="/tranquify-homepage.png" 
              alt="Tranquify" 
              name="Tranquify" 
              link="/tranquify"
              description="All-in-one mobile solution for emotional well-being, featuring personalized mood tracking, meditation guidance, and self-care recommendations."
            />
            <AppCard 
              image="/navie-homepage.png" 
              alt="Navie" 
              name="Navie" 
              link="/navie"
              description="Mobile application for way-finding inside a grocery store, locating the nearest grocery stores, creating shopping list, and calculating total price with tax."
            />
            <AppCard 
              image="/squiz-homepage.png" 
              alt="Squiz" 
              name="Squiz" 
              link="/squiz"
              description="Web application that generates personalized quizzes from study materials for revisions through the utilization of ChatGPT."
            />
            <AppCard 
              image="/dolcedonuts-homepage.png" 
              alt="Dolce Donuts" 
              name="Dolce Donuts" 
              link="/dolceDonuts"
              description="Responsive website for a donut shop, featuring an interactive donut customization page."
            />
          </div>
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
      </main>
      <ScrollButton/>
      <Footer />
    </div>
  );
}
