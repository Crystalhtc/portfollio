"use client";
import styles from "./Tranquify.module.css";
import Header from "../components/Header";
import AppCard from "../components/AppCard";
import App from "next/app";
import Footer from "../components/Footer";
import AppIntro from "../components/AppIntro";
import AppFeature1 from "../components/AppFeature1";
import AppFeature2 from "../components/AppFeature2";
import UserResearch from "../components/UserResearch";
import StyleGuide from "../components/StyleGuide";

export default function Tranquify() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <img
              src="/tranquify/banner.png"
              alt="Tranquify"
              width="300"
              className={styles.heroImage}
            />
          </div>
        </div>
        
        <div className={styles.appIntro}>
          <AppIntro 
            appName="Tranquify"
            description="A user-friendly mobile app designed to enhance mood tracking and meditation. By prioritizing user research, prototyping, and usability testing, Tranquify offers a seamless experience for tracking moods and practicing meditation, with personalized suggestions for self-care."
            role="UI/UX Design, UX Research, Graphic Design, Usability Testing, Frontend Development"
            tools="Figma, Adobe Illustrator, Adobe After Effects, Next.js"
            duration="Feb 2024 – May 2024 (3 months)"
            prototypeLink="https://www.figma.com/proto/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=157-971&t=CSUZirXANw8ms29c-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=157%3A971"
            figmaLink="https://www.figma.com/design/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=0-1&p=f&t=CSUZirXANw8ms29c-0"
            styleguideLink="https://tranquify-style-guide.vercel.app/"
          />
        </div>

        <div className={styles.appFeatures}>
          <AppFeature1
            feature1="Mood Tracking"
            image1="/tranquify/feature1.webp"
            alt1="Mood Tracking"
            descriptions1={[
              "Track daily mood, stress levels, and sleep quality", 
              "Visualize your emotional journey through Mood Calendar"
            ]}
          />
          <AppFeature2
            feature2="Personalized suggestions"
            image2="/tranquify/feature2.webp"
            alt2="Personalized suggestions"
            descriptions2={[
              "Get personalized suggestions according to your mood tracking input",
              "Get customized recommendations of meditation content for better self-care"
            ]}
          />
        </div>

        <div className={styles.userResearch}>
            <UserResearch
              title="User Research"
              descriptions={[
                "Users often seek to gain insights into their emotional well-being, identify patterns, and manage stress or anxiety, while looking for accessible meditation practices that helps them relax at the same time.",
                "The key challenge for users is finding a comprehensive solution that integrates mood tracking with personalized meditation guidance, offering a holistic approach to emotional health and wellness."
              ]}
            />
        </div>
            
        <div className={styles.persona}>
          <div className={styles.personaText}>
            <h2>User Persona</h2>
            <p>Crafting user personas for end users provides essential insights into our target audience. This approach prioritizes user needs, allowing us to customize our products accordingly and deliver a delightful user experience.</p>
          </div>
          <div className={styles.personaImages}>
            <img
              src="/tranquify/persona1.png"
              alt="User Persona 1"
              width="600"
              className={styles.personaImage}
            />
            <img
              src="/tranquify/persona2.png"
              alt="User Persona 2"
              width="600"
              className={styles.personaImage}
            />
            <img
              src="/tranquify/persona3.png"
              alt="User Persona 3"
              width="600"
              className={styles.personaImage}
            />
          </div>  
        </div>

        <div className={styles.styleGuide}>
            <StyleGuide
              title="Style Guide"
              image="/tranquify/styleguide.png"
              alt="Tranquify Style Guide"
              styleguideLink="https://tranquify-style-guide.vercel.app/"
            />
        </div>

        <div className={styles.prototypeContainer}>
          <div className={styles.prototypeTitle}>
            <h2>Prototype</h2>
          </div> 
          <div>
            <iframe className={styles.prototype} width="500" height="700" src="https://embed.figma.com/proto/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=157-971&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=157%3A971&embed-host=share"></iframe>
          </div>
        </div>

        <div className={styles.nextButton}>
            <a href="/navie">
              <button>NEXT PROJECT</button>
            </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
