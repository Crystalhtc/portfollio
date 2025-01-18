"use client";
import styles from "./Navie.module.css";
import Header from "../components/Header";
import AppCard from "../components/AppCard";
import App from "next/app";
import Footer from "../components/Footer";
import AppIntro from "../components/AppIntro";
import AppFeature1 from "../components/AppFeature1";
import AppFeature2 from "../components/AppFeature2";
import UserResearch from "../components/UserResearch";
import StyleGuide from "../components/StyleGuide";

export default function Navie() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <img
              src="/squiz/banner.png"
              alt="Squiz"
              width="300"
              className={styles.heroImage}
            />
          </div>
        </div>
        
        <div className={styles.appIntro}>
          <AppIntro 
            appName="Squiz"
            description="Squiz is a student-centered study tool designed to revolutionize exam preparation. Through advanced AI technology, including user-friendly PDF upload, content analysis, and dynamic quiz generation, Squiz offers personalized revision quizzes tailored to your specific study materials. By streamlining the study process, Squiz saves time, enhances engagement, and optimizes learning efficiency."
            role="UI/UX Design, UX Research, Usability Testing"
            tools="Figma, Adobe Illustrator"
            duration="20 Jan 2024 – 21 Jan 2024 (2-days Hackathon)"
            prototypeLink="https://www.figma.com/proto/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=114-3189&t=xzfJ6dbfUQ1Vl63N-1&scaling=scale-down&content-scaling=fixed&page-id=30%3A619&starting-point-node-id=114%3A3189"
            figmaLink="https://www.figma.com/design/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=30-619&p=f&t=O1Id74WD6aQ3oFJY-0"
            styleguideLink="https://www.figma.com/design/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=2010-809&t=O1Id74WD6aQ3oFJY-4"
          />
        </div>

        <div className={styles.appFeatures}>
          <AppFeature1
            feature1="Gamified Learning Experience"
            image1="/squiz/feature1.png"
            alt1="Gamified Learning Experience"
            descriptions1={[
              "Offers an intuitive and engaging quiz interface designed to enhance the learning process", 
              "Incorporates a charming squid mascot throughout the app, adding a playful and friendly touch to the study experience",
            ]}
            
          />
          <AppFeature2
            feature2="AI-Powered Quiz Generation"
            image2="/squiz/feature2.png"
            alt2="AI-Powered Quiz Generation"
            descriptions2={[
              "Utilizes ChatGPT to analyze content and formulate personalized multiple-choice quizzes based on the user’s course materials",
              "Automatically extracts key content from PDF lecture notes uploaded by the user"
            ]}
          />
          <AppFeature1
            feature1="Customization Options"
            image1="/squiz/feature3.png"
            alt1="Customization Options"
            descriptions1={[
              "Choose quiz difficulty, number of questions", 
              "Name and save the quiz for future revision purposes"
            ]}
          />
        </div>

        <div className={styles.userResearch}>
            <UserResearch
              title="User Needs"
              descriptions={[
                "Users need a way to quickly absorb and review key information from their study materials without spending excessive time on traditional revision methods.",
                "Students require personalized study tools that cater to their specific course materials and learning objectives, ensuring a focused and effective revision process.",
                "Many learners struggle with maintaining interest and engagement during study sessions. They seek interactive and dynamic study methods to keep them motivated and involved.",
              ]}
            />
        </div>
            
        <div className={styles.persona}>
          <div className={styles.personaText}>
            <h2>Wireframing</h2>
            {/* <p>Crafting user personas for end users provides essential insights into our target audience. This approach prioritizes user needs, allowing us to customize our products accordingly and deliver a delightful user experience.</p> */}
          </div>
          <div className={styles.personaImages}>
            <img
              src="/squiz/wireframe.png"
              alt="Squiz Wireframe"
              width="600"
              className={styles.personaImage}
            />
          </div>  
        </div>

        <div className={styles.styleGuide}>
            <StyleGuide
              title="Style Guide"
              image="/squiz/styleguide.png"
              alt="Squiz Style Guide"
              styleguideLink="https://www.figma.com/design/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=2010-809&t=O1Id74WD6aQ3oFJY-4"
            />
        </div>

        <div className={styles.prototypeContainer}>
          <div className={styles.prototypeTitle}>
            <h2>Prototype</h2>
          </div> 
          <div>
            <iframe className={styles.prototype} width="500" height="450" src="https://embed.figma.com/proto/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=114-3189&scaling=scale-down&content-scaling=fixed&page-id=30%3A619&starting-point-node-id=114%3A3189&embed-host=share"></iframe>
          </div>
        </div>

        <div className={styles.nextButton}>
            <a href="/dolceDonuts">
              <button>NEXT PROJECT</button>
            </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
