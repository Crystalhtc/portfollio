"use client";
import styles from "./dolceDonuts.module.css";
import Header from "../components/Header";
import AppCard from "../components/AppCard";
import App from "next/app";
import Footer from "../components/Footer";
import AppIntro from "../components/AppIntro";
import AppFeature1 from "../components/AppFeature1";
import AppFeature2 from "../components/AppFeature2";
import UserResearch from "../components/UserResearch";
import StyleGuide from "../components/StyleGuide";

export default function DolceDonuts() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <img
              src="/dolceDonuts/banner.png"
              alt="Dolce Donuts"
              width="300"
              className={styles.heroImage}
            />
          </div>
        </div>
        
        <div className={styles.appIntro}>
          <AppIntro 
            appName="Dolce Donuts"
            description="Introducing the Dolce Donuts Website project— a focused effort to enhance our online presence and create a more enjoyable online experience for our customers. With a dedication to user research, user-centered design principles, our goal is to create a delightful and user-friendly website that mirrors the warmth and delicious offerings of our physical cafe. Visitors can look forward to a smoother journey, whether they’re browsing our menu, placing orders, customizing their own donuts, or connecting with our community."
            role="	UI/UX Design, User research"
            tools="Figma, Adobe Illustrator"
            duration="Sep 2023 – Dec 2023 (3 months)"
            prototypeLink="https://www.figma.com/proto/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1-16&t=ZRJUINahPqI9L4to-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A16"
            figmaLink="https://www.figma.com/design/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=0-1&p=f&t=E6n8gLtbaFJiPonv-0"
            styleguideLink="https://www.figma.com/design/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1202-2437&p=f&t=E6n8gLtbaFJiPonv-0"
          />
        </div>

        <div className={styles.appFeatures}>
          <AppFeature1
            feature1="Interactive Donut Customization"
            image1="/dolceDonuts/feature1.png"
            alt1="Interactive Donut Customization"
            descriptions1={[
              "Enables users to customize their donut orders with ease", 
              "Offers real-time previews of donut modifications, including dough types, toppings, fillings, and decorations",
            ]}
            
          />
          <AppFeature2
            feature2="Dynamic Menu Navigation"
            image2="/dolceDonuts/feature2.png"
            alt2="Dynamic Menu Navigation"
            descriptions2={[
              "Implements a dynamic menu navigation system for easy exploration of donuts, bakery items, and drinks",
              "Incorporates a “Go to Top” button for effortless navigation within long menu sections, enabling users to quickly return to the top of the page"
            ]}
          />
          <AppFeature1
            feature1="User-Friendly Cart"
            image1="/dolceDonuts/feature3.png"
            alt1="User-Friendly Cart"
            descriptions1={[
              "Upon clicking the “Add to Cart” button, a user-friendly pop-up notification appears, confirming the addition of the item", 
              "The cart icon dynamically updates to display the total number of items added, providing instant visual feedback to the user"
            ]}
          />
        </div>

        {/* <div className={styles.userResearch}>
            <UserResearch
              title="User Needs"
              descriptions={[
                "Users need a way to quickly absorb and review key information from their study materials without spending excessive time on traditional revision methods.",
                "Students require personalized study tools that cater to their specific course materials and learning objectives, ensuring a focused and effective revision process.",
                "Many learners struggle with maintaining interest and engagement during study sessions. They seek interactive and dynamic study methods to keep them motivated and involved.",
              ]}
            />
        </div> */}
            
        <div className={styles.persona}>
          <div className={styles.personaText}>
            <h2>Wireframing</h2>
            {/* <p>Crafting user personas for end users provides essential insights into our target audience. This approach prioritizes user needs, allowing us to customize our products accordingly and deliver a delightful user experience.</p> */}
          </div>
          <div className={styles.personaImages}>
            <img
              src="/dolceDonuts/wireframe.png"
              alt="Dolce Donuts Wireframe"
              width="600"
              className={styles.personaImage}
            />
          </div>  
        </div>

        <div className={styles.styleGuide}>
            <StyleGuide
              title="Style Guide"
              image="/dolceDonuts/styleguide.png"
              alt="Dolce Donuts Style Guide"
              styleguideLink="https://www.figma.com/design/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1202-2437&p=f&t=E6n8gLtbaFJiPonv-0"
            />
        </div>

        <div className={styles.prototypeContainer}>
          <div className={styles.prototypeTitle}>
            <h2>Prototype</h2>
          </div> 
          <div>
            <iframe className={styles.prototype} width="500" height="450" src="https://embed.figma.com/proto/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1-16&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A16&embed-host=share"></iframe>
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
