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
import { InstagramEmbed } from 'react-social-media-embed';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

import Carousel from "../components/Carousel";

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
  const images = [
      { src: "/socialMedia/1.1.png", alt: "What is Remedify? Image 1" },
      { src: "/socialMedia/1.2.png", alt: "What is Remedify? Image 2" },
      { src: "/socialMedia/1.3.png", alt: "What is Remedify? Image 3" },
      { src: "/socialMedia/1.4.png", alt: "What is Remedify? Image 4" },
    ];

  const images2 = [
    { src: "/socialMedia/2.1.png", alt: "Why Medication Adherence Matters? Image 1" },
    { src: "/socialMedia/2.2.png", alt: "Why Medication Adherence Matters? Image 2" },
    { src: "/socialMedia/2.3.png", alt: "Why Medication Adherence Matters? Image 3" },
    { src: "/socialMedia/2.4.png", alt: "Why Medication Adherence Matters? Image 4" },
    { src: "/socialMedia/2.5.png", alt: "Why Medication Adherence Matters? Image 5" },
    { src: "/socialMedia/2.6.png", alt: "Why Medication Adherence Matters? Image" },
  ];

  const images3 = [
    { src: "/socialMedia/3.1.png", alt: "Meet Remedify Team Image 1" },
    { src: "/socialMedia/3.2.png", alt: "Meet Remedify Team Image 2" },
  ];

    const images4 = [
    { src: "/socialMedia/4.1.png", alt: "Feature Highlight Image 1" },
    { src: "/socialMedia/4.2.png", alt: "Feature Highlight Image 2" },
    { src: "/socialMedia/4.3.png", alt: "Feature Highlight Image 3" },
    { src: "/socialMedia/4.4.png", alt: "Feature Highlight Image 4" },
    { src: "/socialMedia/4.5.png", alt: "Feature Highlight Image 5" },
    { src: "/socialMedia/4.6.png", alt: "Feature Highlight Image" },
  ];

  const images5 = [
    { src: "/socialMedia/5.1.png", alt: "Why can you trust Remedify Image 1" },
    { src: "/socialMedia/5.2.png", alt: "Why can you trust Remedify Image 2" },
    { src: "/socialMedia/5.3.png", alt: "Why can you trust Remedify Image 3" },
    { src: "/socialMedia/5.4.png", alt: "Why can you trust Remedify Image 4" },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <img
              src="/campusCanvas/banner.png"
              alt="Tranquify"
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
            <h1>Remedify Social Media Campaign</h1>
            <p>Remedify is an AI-powered medication reminder app designed to individuals managing multiple medications (polypharmacy) and those facing cognitive challenges. To introduce the app and build a trusted online presence, a series of five Instagram posts was designed to communicate the brand’s purpose, values, and features in an engaging and accessible way.</p>
            <div className={styles.appIntroContainer}>
                <div className={styles.appIntrodetails}>
                    <p className={styles.appIntrorowTitle}>Role</p>
                    <p className={styles.appIntrorowContent}>Graphic Designer, Social Media Content Creator</p>
                </div>
                <div className={styles.appIntrodetails}>
                    <p className={styles.appIntrorowTitle}>Tools</p>
                    <p className={styles.appIntrorowContent}>Figma, Adobe Illustrator</p>
                </div>
                <div className={styles.appIntrodetails}>
                    <p className={styles.appIntrorowTitle}>Duration</p>
                    <p className={styles.appIntrorowContent}>Nov 2024 - Dec 2024 (1 month)</p>
                </div>
                <div className={styles.appIntrobuttons}>
                <a className={styles.button} href="https://www.instagram.com/rememberwithremedify/" target="_blank">
                    <button className={styles.button}>View instagram</button>
                </a>
                </div>
            </div>
        </div>
        </motion.div>
          </div>

          <div className={styles.prototypeBanner} id="instagram-page">
              <div className={styles.prototypeTitle}>
                <h2>Instagram Page</h2>
              </div> 
              <div className={styles.prototypes}>
                <div className={styles.prototypeContainer}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <InstagramEmbed url="https://www.instagram.com/rememberwithremedify/" width={500} /> */}
                  </div>
                  {/* <div className={styles.appIntrobuttons}>
                    <a className={styles.button} href="https://www.instagram.com/rememberwithremedify/" target="_blank">
                        <button className={styles.button}>View instagram</button>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

          <div className={styles.detailsContainer} id="instagram-series">
            <div className={styles.details}>
              <h2>Instagram Posts</h2>
              {/* <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p> */}
            </div>
            <div className={`${styles.post}`}>
              <div className={styles.postImage}>
                <Carousel images={images} aspect="1 / 1" ariaLabel="Remedify social posts" />
              </div>  
              <div className={styles.caption}>
                <ul className={styles.detailsList}>
                  <div>
                    <p className={styles.bold}>Caption:</p>
                    <br/>
                    <li className={styles.indent}>Meet Remedify! 🐍 We’re more than just a pillbox—Remedify is your AI-powered partner in making medication management simpler and more empowering.</li>
                    <br/>
                    <li className={styles.indent}>Take control of your health with ease and confidence. Let’s make wellness simpler—together. 💪</li>
                    <br/>
                    <li className={styles.indent}>#remedify #healthsupport #medicationreminder #AIpowered </li>
                  </div>
                </ul>
              </div>    
            </div>

            <div className={`${styles.post}`}>
              <div className={styles.postImage}>
                <Carousel images={images2} aspect="1 / 1" ariaLabel="Remedify social posts" />
              </div>  
              <div className={styles.caption}>
                <ul className={styles.detailsList}>
                  <div>
                    <p className={styles.bold}>Caption:</p>
                    <br/>
                    <li className={styles.indent}>Meet Remedify! 🐍 We’re more than just a pillbox—Remedify is your AI-powered partner in making medication management simpler and more empowering.</li>
                    <br/>
                    <li className={styles.indent}>Take control of your health with ease and confidence. Let’s make wellness simpler—together. 💪</li>
                    <br/>
                    <li className={styles.indent}>#remedify #healthsupport #medicationreminder #AIpowered </li>
                  </div>
                </ul>
              </div>    
            </div>

            <div className={`${styles.post}`}>
              <div className={styles.postImage}>
                <Carousel images={images3} aspect="1 / 1" ariaLabel="Remedify social posts" />
              </div>  
              <div className={styles.caption}>
                <ul className={styles.detailsList}>
                  <div>
                    <p className={styles.bold}>Caption:</p>
                    <br/>
                    <li className={styles.indent}>Meet Remedify! 🐍 We’re more than just a pillbox—Remedify is your AI-powered partner in making medication management simpler and more empowering.</li>
                    <br/>
                    <li className={styles.indent}>Take control of your health with ease and confidence. Let’s make wellness simpler—together. 💪</li>
                    <br/>
                    <li className={styles.indent}>#remedify #healthsupport #medicationreminder #AIpowered </li>
                  </div>
                </ul>
              </div>    
            </div>

            <div className={`${styles.post}`}>
              <div className={styles.postImage}>
                <Carousel images={images4} aspect="1 / 1" ariaLabel="Remedify social posts" />
              </div>  
              <div className={styles.caption}>
                <ul className={styles.detailsList}>
                  <div>
                    <p className={styles.bold}>Caption:</p>
                    <br/>
                    <li className={styles.indent}>Meet Remedify! 🐍 We’re more than just a pillbox—Remedify is your AI-powered partner in making medication management simpler and more empowering.</li>
                    <br/>
                    <li className={styles.indent}>Take control of your health with ease and confidence. Let’s make wellness simpler—together. 💪</li>
                    <br/>
                    <li className={styles.indent}>#remedify #healthsupport #medicationreminder #AIpowered </li>
                  </div>
                </ul>
              </div>    
            </div>

            <div className={`${styles.post}`}>
              <div className={styles.postImage}>
                <Carousel images={images5} aspect="1 / 1" ariaLabel="Remedify social posts" />
              </div>  
              <div className={styles.caption}>
                <ul className={styles.detailsList}>
                  <div>
                    <p className={styles.bold}>Caption:</p>
                    <br/>
                    <li className={styles.indent}>Meet Remedify! 🐍 We’re more than just a pillbox—Remedify is your AI-powered partner in making medication management simpler and more empowering.</li>
                    <br/>
                    <li className={styles.indent}>Take control of your health with ease and confidence. Let’s make wellness simpler—together. 💪</li>
                    <br/>
                    <li className={styles.indent}>#remedify #healthsupport #medicationreminder #AIpowered </li>
                  </div>
                </ul>
              </div>    
            </div>
          </div>

           <div className={styles.detailsContainer} id="style-guide">
              <ContentSection
                  title="Style Guide"
                  image="/campusCanvas/styleguide.png"
                  alt="Campus Canvas Style Guidee"
                  // overview="Remedify app's style guide is crafted to embody the app’s mission of supporting users in managing their health and medication. It is designed to provoke a calming, warm, inclusive, and accessible feeling."
                />
              <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Color Palette:</li>
                        <li className={styles.subIndent}>To maintain a minimalist aesthetic, the magazine’s color palette is derived primarily from the carefully chosen photographs.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Gray:</span> Inspired by the campus's concrete architecture, create a clean, minimalistic foundation while emphasizing the modern style.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Blue:</span> Symbolizes tranquility and aligns with the open sky.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Green:</span>Represents the greenery that complement the rigid architectural forms.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Typography:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Futura:</span> Used in cover titles and headings. Futura Condensed Medium is chosen particularly for headings, as its narrow forms echo the verticality of the campus buildings.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Minion Variable Concept:</span> Used in body text. The serif font was selected for its high readability and academic feel, matching the university’s intellectual atmosphere.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Graphic Elements:</li>
                        <li className={styles.subIndent}>All graphic elements and photos follow a rectangular structure to reflect the rigid, minimalist architectural style of the campus.</li>
                        <li className={styles.subIndent}>The use of negative space emphasizes the modern aesthetic while ensuring the layout remains clean and organized.</li>
                      </div>
                    </ul>
                    {/* <div className={styles.linkButton}>
                      <a href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5145-11431&t=3ICIYqKBCpA4qJrQ-4" target="_blank">
                        <button  className={styles.button}>View Style Guide</button>
                      </a>
                    </div> */}
                  </div>
                </div>
          </div>

          <div className={styles.initialHiFi} id="digital-design">
              <ContentSection
                title="Digital Design"
                image="/campusCanvas/digital-design.png"
                alt="Campus Canvas Digital Design"
                overview="A digital version of the magazine is designed, allowing it to be accessed through digital devices like tablets and desktop as well."
              />
              <div className={styles.details}>
                <p>Major Adjustments:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Landscape Layout:</li>
                    <li className={styles.indent}>The layout is changed from portrait view to landscape view to fit the viewport of tablet and desktop.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Interactive Element:</li>
                    <li className={styles.indent}>An interactive table of content is added to allow easy navigation.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Animations:</li>
                    <li className={styles.indent}>Animations were added to enhance user experience.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Font Size:</li>
                    <li className={styles.indent}>Font sizes are enlarged to enhance comfort while reading on a digital device.</li>
                  </div>
                </ul>
                <div className={styles.linkButton}>
                  <a className={styles.button} href="https://indd.adobe.com/view/bf5a23eb-0abe-44da-92d4-f3d4b5b0d9bd" target="_blank">
                    <button  className={styles.button}>View Digital Design</button>
                  </a>
                </div>
              </div>
          </div>

          <div className={styles.userResearch} id="reflection">
                <UserResearch
                  title="Reflection and Learnings"
                  descriptions={[
                    "Designing across both print and digital formats enhanced my understanding of how layouts need to adapt to different mediums.",
                    "Incorporating interactive elements and animations in Adobe InDesign provided an opportunity to expand my skill set in digital design."
                  ]}
                />
            </div>

          <div className={styles.nextProject}>
            <h2>Next Project is...</h2>
              <NextCard 
              name="Teaddy"
              image="/teaddy-homepage.png"
              alt="Teaddy"
              link="/teaddy"
              button="Next Project"
            />
          </div>
        </div>
        </div>
        </div>
      </main>
      <ScrollButton/>
      <Footer />
    </div>
  );
}
