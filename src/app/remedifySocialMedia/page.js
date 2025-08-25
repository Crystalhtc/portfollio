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
              src="/socialMedia/banner.png"
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
                    <p className={styles.appIntrorowContent}>Graphic Designer <br/> Social Media Content Creator</p>
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
                <a className={styles.button} href="https://www.figma.com/design/Eg3oN310XPng2Wi30vmui0/Remedify-Social-Media-Posts?node-id=1-2345&t=NDy5AIuTRGrsLxJG-1" target="_blank">
                    <button className={styles.button}>VIEW FIGMA DESIGN</button>
                </a>
                </div>
            </div>
        </div>
        </motion.div>
          </div>
          <div className={styles.userResearch} id="objectives">
                <UserResearch
                  title="Objectives"
                  descriptions={[
                    "Establish a cohesive visual identity on Instagram.",
                    "Educate audiences about the importance of medication adherence.",
                    "Showcase the team and mission behind Remedify to foster trust.",
                    "Highlight key app features and emphasize data security.",
                  ]}
                />
            </div>

          <div className={styles.detailsContainer} id="instagram-posts">
            <div className={styles.details}>
              <h2 className={styles.centerTitle}>Instagram Posts</h2>
              {/* <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p> */}
            </div>
            <div className={`${styles.post}`}>
              <div className={styles.postImage}>
                <Carousel images={images} aspect="1 / 1" ariaLabel="Remedify social posts" />
              </div>  
              <div className={styles.caption}>
                <ul className={styles.detailsList}>
                  <div>
                    <p className={styles.bold}>What is Remedify?</p>
                    <br/>
                    <li className={styles.indent}>Meet Remedify! 🐍 </li>
                    <br/>
                    <li className={styles.indent}>We’re more than just a pillbox—Remedify is your AI-powered partner in making medication management simpler and more empowering.</li>
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
                    <p className={styles.bold}>Why Medication Adherence Matters?</p>
                    <br/>
                    <li className={styles.indent}>Did you know that 50% of people with chronic illnesses don’t take their medications as prescribed? 🤔 Forgetfulness and misunderstanding directions are major causes.</li>
                    <br/>
                    <li className={styles.indent}>This is why we created Remedify – to make medication management simple, smart, and reliable. 💊</li>
                    <br/>
                    <li className={styles.indent}>✨ Here’s how we help:</li>
                    <li className={styles.indent}>✅ AI-powered label scanning for easy setup</li>
                    <li className={styles.indent}>✅ Timely reminders that fit your routine</li>
                    <li className={styles.indent}>✅ Clear medication library for better understanding</li>
                    <br/>
                    <li className={styles.indent}>Take control of your health with confidence! 💪</li>
                    <br/>
                    <li className={styles.indent}>#MedicationManagement #HealthTech #Remedify</li>
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
                    <p className={styles.bold}>Meet Remedify Team:</p>
                    <br/>
                    <li className={styles.indent}>👋 Meet the team behind Remedify! </li>
                    <br/>
                    <li className={styles.indent}>We’re a passionate, diverse group working together to make your life easier. Each of us brings unique skills to the table to build a simple, smart, and reliable experience for you.</li>
                    <br/>
                    <li className={styles.indent}>With a perfect blend of creativity, expertise, and collaboration, we’re here to handle the reminders – so you can focus on what truly matters. 💪 </li>
                    <br/>
                    <li className={styles.indent}>#MeetTheTeam #MedicationReminder #Remedify</li>
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
                    <p className={styles.bold}>Feature Highlight</p>
                    <br/>
                    <li className={styles.indent}>Discover the Features of Remedify! 🐍💫</li>
                    <br/>
                    <li className={styles.indent}>Managing your meds has never been easier. Here’s what makes Remedify your ultimate health companion:</li>
                    <li className={styles.indent}>⏰ Medication Reminders</li>
                    <li className={styles.indent}>🤳 AI-Powered Label Scanning</li>
                    <li className={styles.indent}>👆 One-Tap Medication Logging</li>
                    <li className={styles.indent}>📚 Accessible Medication Library</li>
                    <br/>
                    <li className={styles.indent}>Understand your medications better with clear, user-friendly details.</li>
                    <br/>
                    <li className={styles.indent}>Simplify your health journey today with Remedify! 💡</li>
                    <br/>
                    <li className={styles.indent}>#remedify #medicationreminder #healthsupport</li>
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
                    <p className={styles.bold}>Why can you trust Remedify?</p>
                    <br/>
                    <li className={styles.indent}>💊 Why Trust Remedify?</li>
                    <br/>
                    <li className={styles.indent}>Because we’ve got the facts to back it up!</li>
                    <li className={styles.indent}>Our app uses the Canadian Drug Product Database (DPD) and AI-powered insights to provide reliable, curated, and up-to-date information about your medications.</li>
                    <br/>
                    <li className={styles.indent}>📚 What is the DPD?</li>
                    <li className={styles.indent}>A comprehensive database from Health Canada offering detailed, product-specific information on medications approved for use.</li>
                    <br/>
                    <li className={styles.indent}>✨ With our DPD integration, you can access accurate medication details anytime, right at your fingertips!</li>
                    <br/>
                    <li className={styles.indent}>#remedify #canadiandrugproductdatabas #medicationlibrary #healthsupport</li>
                  </div>
                </ul>
              </div>    
            </div>
          </div>

           <div className={styles.detailsContainer} id="design-approach">
              <ContentSection
                  title="Design Approach"
                  image="/socialMedia/styleguide.png"
                  alt="Campus Canvas Style Guidee"
                  // overview="Remedify app's style guide is crafted to embody the app’s mission of supporting users in managing their health and medication. It is designed to provoke a calming, warm, inclusive, and accessible feeling."
                />
              <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      <div>
                        <li>Applied the <span className={styles.semiBold}>brand’s color palette</span> with warm oranges to convey empathy and support, and cool greens and blues to establish trust.</li>
                      </div>
                      <div>
                        <li>Used the <span className={styles.semiBold}>Poppins font</span> to ensure readability and accessibility, especially for older audiences.</li>
                      </div>
                      <div>
                        <li>Designed <span className={styles.semiBold}>carousel layouts</span> with clear hierarchy, bold typography, iconography, and rounded graphics for visual clarity.</li>
                      </div>
                      <div>
                        <li>Maintained an <span className={styles.semiBold}>approachable tone</span> for social media while upholding the professionalism required of a healthcare-related product.</li>
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

          <div className={styles.initialHiFi} id="impact">
              <ContentSection
                title="Impact"
                image="/socialMedia/social-media.png"
                alt="Remedify Social Media Campaign Impact"
                // overview="A digital version of the magazine is designed, allowing it to be accessed through digital devices like tablets and desktop as well."
              />
              <div className={styles.details}>
                <ul className={styles.detailsList}>
                      <div>
                        <li>Created a <span className={styles.semiBold}>consistent Instagram campaign</span> that positioned Remedify as both approachable and trustworthy.</li>
                      </div>
                      <div>
                        <li>Balanced <span className={styles.semiBold}>educational storytelling</span> with <span className={styles.semiBold}>brand-building visuals</span> to engage diverse audiences.</li>
                      </div>
                      <div>
                        <li>Developed assets adaptable for <span className={styles.semiBold}>cross-platform use</span>, including LinkedIn posts and motion graphics for wider reach.</li>
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
                    "Gained experience in aligning design with campaign objectives, ensuring each post contributed to awareness, credibility, and audience engagement.",
                    "Recognized the impact of content sequencing to build a narrative flow from introduction to credibility.",
                    "Recognized how visual consistency across multiple posts reinforces recognition and trust in a new brand.",
                  ]}
                />
            </div>

          <div className={styles.nextProject}>
                <h2>Next Project is...</h2>
                <NextCard
                  name="REPAIR Framework White Paper"
                  image="/whitePaper-homepage.png"
                  alt="REPAIR Framework White Paper"
                  link="/whitePaper"
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
