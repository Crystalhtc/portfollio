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
              src="/navie/banner.png"
              alt="Navie"
              width="300"
              className={styles.heroImage}
            />
          </div>
        </div>
        
        <div className={styles.appIntro}>
          <AppIntro 
            appName="Navie"
            description="A user-focused mobile app designed to improve your grocery shopping experience. Through user research, wireframing, prototyping, and usability testing, Navie offers easy route finding, quick product search, and convenient shopping list management, providing an intuitive experience."
            role="UI/UX Design, UX Research, Usability Testing"
            tools="Figma, Adobe Illustrator"
            duration="Sep 2023 – Dec 2023 (3 months)"
            prototypeLink="https://www.figma.com/proto/yV7FPG1caTMggZewOycFYB/Navie?node-id=509-482&t=f7VVWRqPGj8iaflM-0&scaling=scale-down&content-scaling=fixed&page-id=131%3A4620&starting-point-node-id=509%3A482&show-proto-sidebar=1"
            figmaLink="https://www.figma.com/design/yV7FPG1caTMggZewOycFYB/Navie?node-id=131-4620&p=f&t=f7VVWRqPGj8iaflM-0"
            styleguideLink="https://www.figma.com/design/yV7FPG1caTMggZewOycFYB/Navie?node-id=2255-2774&t=f7VVWRqPGj8iaflM-4"
          />
        </div>

        <div className={styles.appFeatures}>
          <AppFeature1
            feature1="Route Finding"
            image1="/navie/feature1.png"
            alt1="Route Finding"
            descriptions1={[
              "Locate products effortlessly within store", 
              "Navigate directly to the aisle where your desired items are located",
              "Augmented reality (AR) functionality provides interactive visual cues, guiding you directly to your selected items"
            ]}
            
          />
          <AppFeature2
            feature2="Product Search"
            image2="/navie/feature2.png"
            alt2="Product Search"
            descriptions2={[
              "Easily search for products within store",
              "Check current product availability"
            ]}
          />
          <AppFeature1
            feature1="Shopping List"
            image1="/navie/feature3.png"
            alt1="Shopping List"
            descriptions1={[
              "Create and manage your personal shopping lists", 
              "Enjoy a streamlined and organized shopping experience, without juggling multiple apps while shopping"
            ]}
          />
            <AppFeature2
              feature2="Price Calculator"
              image2="/navie/feature4.png"
              alt2="Price Calculator"
              descriptions2={[
                "Calculate the total cost of your cart, including taxes and any additional fees",
                "Keep track of your spending and stay within budget"
              ]}
            />
        </div>

        <div className={styles.userResearch}>
            <UserResearch
              title="User Research"
              descriptions={[
                "Users often struggle with locating specific products in grocery stores, which can lead to inefficient shopping experiences.",
                "Users often encounter difficulties in determining whether desired items are in stock before heading to the store.",
                "Users are uncertain about the final price of items, especially after factoring in taxes and fees.",
                "Users often struggle with managing shopping lists across multiple apps or platforms."
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
              src="/navie/wireframe.png"
              alt="Navie Wireframe"
              width="600"
              className={styles.personaImage}
            />
          </div>  
        </div>

        <div className={styles.styleGuide}>
            <StyleGuide
              title="Style Guide"
              image="/navie/styleguide.png"
              alt="Navie Style Guide"
              styleguideLink="https://www.figma.com/design/yV7FPG1caTMggZewOycFYB/Navie?node-id=2255-2774&t=tJToOHvcFXXZAPXP-4"
            />
        </div>

        <div className={styles.prototypeContainer}>
          <div className={styles.prototypeTitle}>
            <h2>Prototype</h2>
          </div> 
          <div>
            <iframe className={styles.prototype} width="500" height="450" src="https://embed.figma.com/proto/yV7FPG1caTMggZewOycFYB/Navie?node-id=509-482&scaling=scale-down&content-scaling=fixed&page-id=131%3A4620&starting-point-node-id=509%3A482&embed-host=share" allowfullscreen></iframe>
          </div>
        </div>

        <div className={styles.nextButton}>
            <a href="/squiz">
              <button>NEXT PROJECT</button>
            </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
