"use client";
import styles from "./Remedify.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppFeature1 from "../components/AppFeature1";
import AppFeature2 from "../components/AppFeature2";
import UserResearch from "../components/UserResearch";
import StyleGuide from "../components/StyleGuide";
import ContentSection from "../components/ContentSection";
import NextCard from "../components/NextCard";
import ScrollButton from "../components/ScrollButton";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import { motion } from "framer-motion";

// Section fade-in and float-up animation
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Remedify() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <img
              src="/oneTimelessStep/banner.png"
              alt="One Timeless Step Poster"
              className={styles.heroImage}
              priority="true"
            />
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.sideMenu}>
            <SideMenu />
          </div>

          <div className={styles.contentFullWidth}>
            <TopMenu />
            <div className={styles.content}>
              <div className={styles.appIntro} id="app-intro">
                <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              >
                <div className={styles.appIntrocard}>
                  <h1>One Timeless Step</h1>
                  <p>
                    "One Timeless Step" is a poster design created for the Étoile Ballet Academy’s Gala Performance 2024. The event celebrates the artistry and legacy of ballet through an evening of performances. The goal of this project was to capture the elegance, timelessness, and poise of ballet in a single visual moment, blending classic aesthetics with a modern graphic sensibility. A poster design that visually encapsulates the spirit of ballet — timeless, graceful, and aspirational — through strong imagery, refined typography, and a delicate color palette.
                  </p>
                  <div className={styles.appIntroContainer}>
                    <div className={styles.appIntrodetails}>
                      <p className={styles.appIntrorowTitle}>Role</p>
                      <p className={styles.appIntrorowContent}>
                        Graphic Design
                      </p>
                    </div>
                    <div className={styles.appIntrodetails}>
                      <p className={styles.appIntrorowTitle}>Tools</p>
                      <p className={styles.appIntrorowContent}>
                        Adobe Photoshop, Adobe Illustrator
                      </p>
                    </div>
                    <div className={styles.appIntrodetails}>
                      <p className={styles.appIntrorowTitle}>Duration</p>
                      <p className={styles.appIntrorowContent}>
                        Nov 2024 - Dec 2024 (1 month)
                      </p>
                    </div>
                  </div>
                </div>
                </motion.div>
              </div>

              <div className={styles.prototypeBanner} id="final-design">
                <div className={styles.prototypeTitle}>
                  <h2>Mock-up</h2>
                </div>
                <div className={styles.prototypes}>
                  <div className={styles.prototypeContainer}>
                    <img
                      src="/oneTimelessStep/ad-mockup.png"
                      alt="One Timeless Step Poster Mockup"
                      className={styles.prototype}
                      priority="true"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.detailsContainer} id="creative-process">
                <div className={styles.details}>
                  <h2>Creative Process</h2>
                  <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p>
                </div>
                <div className={styles.wireframeImages}>
                  <img
                    src="/oneTimelessStep/inspiration.png"
                    alt="One Timeless Step Poster Inspiration"
                    width="600"
                    className={styles.wireframeImage}
                  />
                </div>
                <div className={styles.details}>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Research and Inspiration:</li>
                      <li className={styles.indent}>
                        The design draws inspiration from dance performance posters, focusing on layouts that highlight the dancer’s movement, strategic placement of figures and typography, and techniques that emphasize fluidity and energy within a static image.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              {/* <div className={styles.detailsContainer} id="style-guide">
                <ContentSection
                  title="Style Guide"
                  image="/oneTimelessStep/styleguide.png"
                  alt="Teaddy Style Guidee"
                  overview="The color palette is designed to reflect the essence of our brand, creating a warm, inviting, and playful atmosphere."
                />
                <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Color Palette:</li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Brown:</span>{" "}
                          Represents our mascot, a teddy bear, evoking comfort and warmth.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Green:</span>{" "}
                          Symbolizes tea leaves, reinforcing the focus on high-quality tea products.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Beige:</span>
                          A neutral complement that adds balance, warmth, and softness to the design.
                          </li>
                      </div>
                      <div>
                        <li className={styles.bold}>Typography:</li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Noteworthy:</span> 
                          Used for titles and slogans due to its rounded, handwritten form, adding a fun and friendly touch.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>
                            Gill Sans:
                          </span>{" "}
                          Used for body text because of its clean, modern sans-serif style, ensuring easy readability while maintaining a refined aesthetic.
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div> */}

              <div className={styles.initialHiFi} id="final-design">
                <ContentSection
                  title="Poster Design: Final Design"
                  image="/oneTimelessStep/final-design.png"
                  alt="Campus Canvas Digital Design"
                  overview="The final design incorporates key elements to ensure brand recognition and audience engagement:"
                />
                <div className={styles.details}>
                  <p>Key elements:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Central Dancer:</li>
                      <li className={styles.indent}>
                        A key visual focus, using color contrast against a grayscale background to immediately capture attention.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Background Details:</li>
                      <li className={styles.indent}>
                        A close-up shot of a dancer’s feet, enhanced with dynamic splashes of pastel brush strokes, bringing softness and vibrancy.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Movement Indicators:</li>
                      <li className={styles.indent}>
                        Subtle stripes beside the dancer’s feet add implied motion, enhancing the sense of dance without cluttering the design.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Title and Event Information:</li>
                      <li className={styles.indent}>
                        Bold and elegant title placement.
                      </li>
                      <li className={styles.indent}>
                        Clear details including event name, slogan, date, time, venue, ticket prices, and a QR code for quick access to more information.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.userResearch} id="reflection">
                <UserResearch
                  title="Reflection and Learnings"
                  descriptions={[
                    "Deepened my appreciation for how small graphic decisions, such as from the dancer's pose and subtle color treatments can powerfully evoke emotion.",
                    "Reinforced the importance of balancing minimalism with expressiveness.",
                    "Strengthened my skills in visual storytelling and movement depiction through static design."
                  ]}
                />
              </div>

              <div className={styles.nextProject}>
                <h2>Next Project is...</h2>
                <NextCard
                  name="Mood Tracking Motion Graphic Video"
                  image="/moodTracking-homepage.png"
                  alt="Mood Tracking Motion Graphic Video"
                  link="/moodTracking"
                  button="Next Project"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <ScrollButton />
      <Footer />
    </div>
  );
}
