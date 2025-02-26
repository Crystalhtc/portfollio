"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Remedify.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppIntro from "../components/AppIntro";
import AppFeature1 from "../components/AppFeature1";
import AppFeature2 from "../components/AppFeature2";
import UserResearch from "../components/UserResearch";
import ContentSection from "../components/ContentSection";
import NextCard from "../components/NextCard";
import ScrollButton from "../components/ScrollButton";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import { motion } from "framer-motion";
import ImageModal from "../components/ImageModal";

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
              src="/remedify/banner.png"
              alt="Remedify"
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
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className={styles.appIntro} id="app-intro">
                <AppIntro 
                  appName="Remedify"
                  description="Low adherence rate, misunderstanding instructions, and forgetfulness are common challenges in medication management. Remedify is an intuitive mobile app designed to revolutionize the way people manage their medications. By utilizing AI technology, Remedify provides personalized medication reminders, detailed drug information, and intuitive scheduling features, all within a simple, accessible interface."
                  role="UX/UI Design, UX Research, Graphic Design, Usability Testing, Competitive Analysis, Frontend Development"
                  tools="Figma, Adobe Illustrator, Expo, React Native"
                  duration="Sep 2024 – Dec 2024 (3 months)"
                  prototypeLink="https://www.figma.com/proto/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14271&t=Zh0rrTMckVWV8wmW-1&scaling=scale-down&content-scaling=fixed&page-id=1797%3A14184&starting-point-node-id=1797%3A14295"
                  figmaLink="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14184&t=xd57gQUfuR5S6kpN-1"
                  styleguideLink="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5145-11431&t=IdXuzk5pD3d9AF8h-4"
                />
              </div>
            </motion.div>

            <div className={styles.prototypeBanner} id="prototype">
              <div className={styles.prototypeTitle}>
                <h2>Prototype</h2>
              </div> 
              <div className={styles.prototypes}>
                <div className={styles.prototypeContainer}>
                  <iframe 
                    className={styles.prototype} 
                    src="https://embed.figma.com/proto/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14271&scaling=scale-down&content-scaling=fixed&page-id=1797%3A14184&starting-point-node-id=1797%3A14295&embed-host=share" 
                    allowFullScreen
                  />
                  <div className={styles.nextButton}>
                    <a href="https://www.figma.com/proto/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14271&t=Zh0rrTMckVWV8wmW-1&scaling=scale-down&content-scaling=fixed&page-id=1797%3A14184&starting-point-node-id=1797%3A14295">
                      <button className={styles.button}>Light Mode</button>
                    </a>
                  </div>
                </div>

                <div className={styles.prototypeContainer}>
                  <iframe 
                    className={styles.prototype} 
                    src="https://embed.figma.com/proto/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5057-8734&scaling=scale-down&content-scaling=fixed&page-id=1797%3A14184&starting-point-node-id=1797%3A14295&embed-host=share" 
                    allowFullScreen
                  />
                  <div className={styles.nextButton}>
                    <a href="https://www.figma.com/proto/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5057-8734&t=0Ji5GbZNKZLLvUCy-0&scaling=scale-down&content-scaling=fixed&page-id=1797%3A14184&starting-point-node-id=1797%3A14295">
                      <button button  className={styles.button}>Dark Mode</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.problemSolution} id="problem-solution">
              <div className={styles.problem}>
                <h2>Problem</h2>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Low Adherence Rate:</li>
                      <li className={styles.indent}>Patients with chronic illnesses take only ~50% of prescribed medications.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Misunderstanding Instructions:</li>
                      <li className={styles.indent}>Over 60% of patients misunderstand medication directions after doctor visits.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Forgetfulness:</li>
                      <li className={styles.indent}>A major cause of non-adherence, affecting 49.6% of patients.</li>
                    </div>
                  </ul>
              </div>
              <div className={styles.solution}>
                <h2>Solution</h2>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Simplify Medication Regimens:</li>
                      <li className={styles.indent}>Provides clear, organized schedules to prevent confusion.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Explain Key Information:</li>
                      <li className={styles.indent}>Displays essential details about each medication, including what the drug is and why is it prescribed.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Smart Reminders:</li>
                      <li className={styles.indent}>Sends timely alerts to help users take medications on time.</li>
                    </div>
                  </ul>
              </div>
            </div>

            <div className={styles.appFeatures} id="features">
              <div className={styles.featureTitle}>
                <h2>Features</h2>
              </div> 
              <AppFeature1
                feature1="One-Tap Medication Logging"
                image1="/remedify/feature1.png"
                alt1="One-Tap Medication Logging"
                descriptions1={[
                  "Log each dose with just one tap", 
                  "Track medications effortlessly through a simple, intuitive interface"
                ]}
              />
              <AppFeature2
                feature2="AI-Powered Label Scanning"
                image2="/remedify/feature2.png"
                alt2="AI-Powered Label Scanning"
                descriptions2={[
                  "Easily scan medication labels to set up reminders automatically",
                  "Minimize the steps needed to remember and simplify the process"
                ]}
              />
              <AppFeature1
                feature1="Accessible Medication Library"
                image1="/remedify/feature3.png"
                alt1="Accessible Medication Library"
                descriptions1={[
                  "Review all medications in one clear, accessible library", 
                  "Reliable and easy-to-understand information about medications to empower users"
                ]}
              />
              <AppFeature2
                feature2="Dark Mode Support"
                image2="/remedify/feature4.png"
                alt2="Dark Mode Support"
                descriptions2={[
                  "includes a dark mode to reduce eye strain and enhance accessibility, especially for users with visual sensitivities"
                ]}
              />
            </div>

            <div className={styles.detailsContainer} id="user-research">
              <div className={styles.details}>
                <h2>User Research</h2>
                <p>Primary and secondary research were conducted to understand medication adherence and user needs. The primary research involved a survey distributed to 9 participants, along with interviews with self-administered patients, nurses, and caregivers to gather firsthand insights. For secondary research, existing studies, articles, and reports on medication routines were analyzed. Major findings are as follows:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Tracking Medication Issues:</li>
                    <li className={styles.indent}>Users often forget when or if they’ve taken their medication, highlighting the need for clear tracking and reminders.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Understanding the Medication:</li>
                    <li className={styles.indent}>Lack of knowledge about medications can lead to poor adherence, so educating users reduces fears and improves usage.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Simplicity is Key:</li>
                    <li className={styles.indent}>Existing apps often have a high learning curve, making them difficult to use.</li>
                  </div>
                </ul>
              </div>
                <div className={styles.linkButton}>
                  <a className={styles.button} href="https://docs.google.com/document/d/1MGyxeF7pkwpVo4VsNl829hrDaSTTYn5Frfa2RREm4Nc/edit?usp=sharing" target="_blank">
                    <button  className={styles.button}>View Findings</button>
                  </a>
                </div>
            </div>

            <div className={styles.competitiveAnalysis} id="competitive-analysis">
                <ContentSection
                  title="Competitive Analysis"
                  image="/remedify/competitive-analysis.png"
                  alt="Remedify Competitive Analysis"
                  overview="Analyzing the competition was a crucial step in understanding what is already available and identifying opportunities for improvement. By reviewing existing medication management apps, the team identified both their strengths and the gaps that needed to be addressed. This insight shaped Remedify into a smarter, more user-focused solution."
                />
                <div className={styles.details}>
                  <p>How Remedify Stands Out:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>AI-Driven Personalization:</li>
                      <li className={styles.indent}>Remedify uses AI to provide tailored health insights and reminders that adapt to each user’s specific needs, creating a more supportive experience.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Camera Scanning:</li>
                      <li className={styles.indent}>Users can quickly scan their medication labels instead of relying on manual entry, making the process faster, easier, and more accessible.</li>
                    </div>
                    {/* <div>
                      <li className={styles.bold}>Better UX/UI Design:</li>
                      <li className={styles.indent}>The app prioritizes a clean, user-friendly interface that is simple to navigate, ensuring accessibility for users of all ages and tech abilities.</li>
                    </div> */}
                  </ul>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/board/iWziE36DOEeWn9JDKIlI9B/Remedify-Competitive-Analysis-(UI-Focused)?node-id=0-1&p=f&t=cUPe0MNMm4oksBdT-0" target="_blank">
                      <button  className={styles.button}>View Competitive Analysis</button>
                    </a>
                  </div>
                </div>
            </div>


            {/* <div className={styles.detailsContainer} id="values">
              <div className={styles.details}>
                <h2>Values</h2>
                <p>Setting clear values for Remedify was essential to guide the design process and ensure the app meets its goals. These values influence every design decision and feature:</p>
                <ul>
                  <li className={styles.bold}>Improve Medication Adherence:</li>
                  <li className={styles.indent}>The app focuses on making medication management simple and efficient to help users stay on track with their doses.</li>
                  <li className={styles.bold}>Accessible:</li>
                  <li className={styles.indent}>Remedify is designed to be easy to use for everyone, with features like camera scanning and clear interfaces to accommodate all tech abilities and cognitive conditions.</li>
                  <li className={styles.bold}>Support:</li>
                  <li className={styles.indent}>The app offers continuous assistance, from reminders to guidance, ensuring users feel supported in managing their medication.</li>
                  <li className={styles.bold}>Empower:</li>
                  <li className={styles.indent}>Remedify gives users control over their medication schedule, enabling them to personalize settings and manage their health confidently.</li>
                </ul>
              </div>
            </div> */}
            
            {/* <div className={styles.detailsContainer} id="target-audience">
              <div className={styles.details}>
                <h2>Target Audience</h2>
                <ul>
                  <li className={styles.bold}>Polypharmacy</li>
                  <li className={styles.indent}>For those managing multiple medications, Remedify simplifies complex schedules with clear reminders, ensuring users stay on track and in control of their health.</li>
                  <li className={styles.bold}>Cognitive impairments</li>
                  <li className={styles.indent}>Remedify’s intuitive reminders help users with cognitive challenges remember their medications, supporting confidence and routine.</li>
                </ul>
              </div>
            </div> */}

            <div className={styles.competitiveAnalysis} id="user-persona">
                <ContentSection
                  title="User Persona"
                  image="/remedify/user-persona.png"
                  alt="Remedify User Persona"
                  overview="User personas are developed to better understand and address the needs of the target audience. They guide thoughtful design decisions, ensuring the app remains practical, user-friendly, and relevant."
                />
                <div className={styles.details}>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Primary Persona: Elderly Individual</li>
                      <li className={styles.indent}>The primary user is an older adult experiencing memory challenges who must manage multiple medications daily.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Secondary Persona: Caregiver</li>
                      <li className={styles.indent}>The secondary user is a caregiver responsible for overseeing the medication schedules of their loved ones.</li>
                    </div>
                  </ul>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/sFlvLVZM1M8rmGbnaQ6o8y/Remedify-User-Persona?node-id=64-4&t=8BGBLVHFu5cxMfyD-1" target="_blank">
                      <button className={styles.button}>View User Persona</button>
                    </a>
                  </div>
                </div>
            </div>

            <div className={styles.detailsContainer} id="style-guide">
                <ContentSection
                  title="Style Guide"
                  image="/remedify/styleguide.png"
                  alt="Remedify Style Guide"
                  overview="Remedify app's style guide is crafted to embody the app’s mission of supporting users in managing their health and medication. It is designed to provoke a calming, warm, inclusive, and accessible feeling."
                />
                <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Logo:</li>
                        <li className={styles.subIndent}>The logo combines symbols that represent health and reminders.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>The Rod of Asclepius:</span> A well-known medical symbol, highlights the app’s focus on healing and wellness.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>An exclamation mark:</span> Emphasizes the app’s purpose of helping users stay on track with their medication.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Colors:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Green and Blue:</span> Evoke a sense of calm and reassurance.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Orange:</span> Adds warmth, fostering a comforting experience for users, especially patients managing illnesses.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Silver White:</span> Conveys simplicity and cleanliness.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Typography:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Omnes Cyrillic:</span> Used for the logo wordmark, chosen for its rounded and approachable style.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Poppins:</span> Applied throughout the app for headings and button text due to its friendly and easy-to-read appearance.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Public Sans:</span> Used as the body font to create a clear visual hierarchy and enhance readability.</li>
                      </div>
                    </ul>
                    <div className={styles.linkButton}>
                      <a className={styles.button} href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5145-11431&t=3ICIYqKBCpA4qJrQ-4" target="_blank">
                        <button  className={styles.button}>View Style Guide</button>
                      </a>
                    </div>
                  </div>
                </div>
            </div>

            <div className={styles.detailsContainer} id="site-map">
                <ContentSection
                  title="Site Map"
                  image="/remedify/sitemap.png"
                  alt="Remedify Site Map"
                  overview="Based on user surveys, secondary research, and competitive analysis, a site map is developed for Remedify. It serves as a blueprint for the app’s structure, which helps organize features and ensure easy navigation."
                />
                <div>
                  <div className={styles.details}>
                    <p>Major Screens in Remedify:</p>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Home:</li>
                        <li className={styles.indent}>Users can see their medication schedule at a glance, with upcoming reminders and times clearly displayed.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Add Medication:</li>
                        <li className={styles.indent}>The app simplifies medication management by enabling users to scan labels with their camera or manually input details.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Medication Library:</li>
                        <li className={styles.indent}>Users can manage their medications and reminders in one place, giving them full control as needed.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Account Settings:</li>
                        <li className={styles.indent}>Users can add family members to help monitor their medications and adjust general app settings like font size and language preferences.</li>
                      </div>
                    </ul>
                    <div className={styles.linkButton}>
                      <a className={styles.button} href="https://www.figma.com/board/VrhDXG7Y3wxiZduuAapuib/Remedify-Site-Map?t=Key3IoYuNMjQCwtM-1" target="_blank">
                        <button  className={styles.button}>View Site Map</button>
                      </a>
                    </div>
                  </div>
                </div>
                

            </div>

            <div className={styles.userFlowChart} id="user-flow-map">
                <ContentSection
                  title="User Flow Map"
                  image="/remedify/user-flow-map.png"
                  alt="Remedify User Flow Chart"
                  overview="The user flow map outlines how users interact with Remedify, ensuring a smooth and intuitive experience from start to finish. With accessibility as a core value, the flow simplifies complex tasks while maintaining clear and user-friendly navigation."
                />
                <div className={styles.details}>
                  <p>Key User Journeys:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Logging Medication Intake:</li>
                      <li className={styles.indent}>Home screen → Confirm intake with one tap</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Adding a New Medication:</li>
                      <li className={styles.indent}>Home screen → Tap “Add Medication” → Scan medication label or input manually → Set reminders → Save and view in the Medication Library</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Viewing and Managing Medications:</li>
                      <li className={styles.indent}>Home screen → Navigate to “Medication Library” → View or edit details → Save changes and return to Library</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Adjusting Settings:</li>
                      <li className={styles.indent}>Home screen → Tap “Settings” → Adjust preferences, e.g.font size, language → Save changes and return to Home screen</li>
                    </div>
                  </ul>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/board/IlQbI2pQmUyfFw6szZLPHE/Remedify-User-Flow-Map?node-id=0-1&t=8VERkkMOfgUymhgJ-1" target="_blank">
                      <button  className={styles.button}>View User Flow Map</button>
                    </a>
                  </div>
                </div>
            </div>



            <div className={styles.detailsContainer} id="wireframing">
              <div className={styles.details}>
                <h2>Wireframing</h2>
                <p>Guided by the site map and user flow chart, the wireframe was developed to visualize the app's layout and user interactions. Drawing on insights from the competitive analysis, the focus was placed on crafting a user-friendly experience tailored to the needs of the target audience. The wireframe showcases how users will engage with each feature, ensuring intuitive navigation and ease of use.</p>
              </div>
              <div className={styles.wireframeImages}>
                <img
                  src="/remedify/wireframe.png"
                  alt="Remedify Wireframe"
                  width="600"
                  className={styles.wireframeImage}
                />
              </div>  
              <div className={styles.linkButton}>
                  <a className={styles.button} href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5150-11712&t=HTJDw3071SFJpKij-4" target="_blank">
                    <button  className={styles.button}>View Wireframe</button>
                  </a>
              </div>
            </div>

            <div className={styles.initialHiFi} id="initial-hifi">
              <ContentSection
                title="Initial Hi-Fi"
                image="/remedify/initial-hifi.png"
                alt="Remedify Initial Hi-Fi"
                overview="The hi-fi prototype aligns with the site map and user flow, incorporating colors from the style guide to create a design that is inviting, professional, and user-friendly."
              />
              <div className={styles.details}>
                <p>Design Highlights:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Icons and Graphics:</li>
                    <li className={styles.indent}>Intuitive visuals guide users and reduce cognitive load, making navigation simple and engaging.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Error Handling:</li>
                    <li className={styles.indent}>Clear error messages help users resolve issues, like failed scans or incomplete reminders, with ease.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Quick Dose Logging:</li>
                    <li className={styles.indent}>A "Mark Taken" button on each medication card allows one-tap tracking, ensuring a seamless experience for all users.</li>
                  </div>
                </ul>
                <div className={styles.linkButton}>
                  <a className={styles.button} href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=340-5993&t=0Ji5GbZNKZLLvUCy-1" target="_blank">
                    <button  className={styles.button}>View Initial Hi-Fi</button>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.detailsContainer} id="usability-testing">
              <div className={styles.details}>
                <h2>Usability Testing</h2>
                <p>Usability testing was conducted with 4 participants, which involved observing users as they interacted with Remedify. Insights are then drawn to improve the interface and functionality of the app.</p>
              </div>
              <div className={styles.usabilityTesting}>
                <div className={styles.testing}>
                  <h3 className={styles.testingTitle}>Upcoming medication logging </h3>
                  <div className={styles.testingImageContainer}>
                    <div>
                      {/* <img
                        src="/remedify/before1.png"
                        alt="Upcoming medication logging Before Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      /> */}
                      <ImageModal
                        src="/remedify/before1.png"
                        alt="Upcoming medication logging Before Usability Testing"
                        
                        className={styles.testingImage}
                      />
                    </div>
                    <div>
                      <img
                        src="/remedify/after1.png"
                        alt="Upcoming medication logging After Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                  </div>
                  <div className={styles.testingTextContainer}>
                    {/* <h3 className={styles.testingTitle}>Upcoming medication logging </h3> */}
                    <div className={styles.testingDetailsContainer}>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>Before:</p>
                            <li>Participants highlighted the need for a simplified way to log daily medications.</li>
                          </div>
                        </ul>
                      </div>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>After:</p>
                            <li>Introduce a prominent “Mark as Taken” button as the primary call-to-action (CTA) on the homepage. This feature streamlines daily interactions, enabling users to log medications quickly and efficiently.</li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.testing}>
                  <h3 className={styles.testingTitle}>Medication Library</h3>
                  <div className={styles.testingImageContainer}>
                    <div>
                      <img
                        src="/remedify/before2.png"
                        alt="Medication Library Before Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                    <div>
                      <img
                        src="/remedify/after2.png"
                        alt="Medication Library logging After Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                  </div>
                  <div className={styles.testingTextContainer}>
                    {/* <h3 className={styles.testingTitle}>Medication Library</h3> */}
                    <div className={styles.testingDetailsContainer}>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>Before:</p>
                            <li>Feedback indicated that the medication list was overwhelming and difficult to navigate.</li>
                          </div>
                        </ul>
                      </div>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>After:</p>
                            <li>Display medications as visually organized cards, presenting key details clearly. This update enhances navigation and keeps users informed without creating unnecessary complexity.</li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.testing}>
                  <h3 className={styles.testingTitle}>Color Palette</h3>
                  <div className={styles.testingImageContainer}>
                    <div>
                      <img
                        src="/remedify/before3.png"
                        alt="Color Palette Before Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                    <div>
                      <img
                        src="/remedify/after3.png"
                        alt="Color Palette After Usability Testing"
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                  </div>
                  <div className={styles.testingTextContainer}>
                    <div className={styles.testingDetailsContainer}>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>Before:</p>
                            <li>The heavy use of orange in the design was perceived as harsh and warning-like, detracting from the app's supportive tone.</li>
                          </div>
                        </ul>
                      </div>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>After:</p>
                            <li>Replace orange with green tones to create a calmer and more supportive aesthetic, aligning with the app's mission of promoting comfort and trust.</li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.testing}>
                  <h3 className={styles.testingTitle}>“Take Photo” Button</h3>
                  <div className={styles.testingImageContainer}>
                    <div>
                      <img
                        src="/remedify/before4.png"
                        alt='“Take Photo” Button Before Usability Testing'
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                    <div>
                      <img
                        src="/remedify/after4.png"
                        alt='“Take Photo” Button After Usability Testing'
                        width="600"
                        className={styles.testingImage}
                      />
                    </div>
                  </div>
                  <div className={styles.lastTestingTextContainer}>
                    {/* <h3 className={styles.testingTitle}>“Take Photo” Button</h3> */}
                    <div className={styles.testingDetailsContainer}>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>Before:</p>
                            <li>Participants mistook the “Take Photo” button for a static instruction rather than an actionable element.</li>
                          </div>
                        </ul>
                      </div>
                      <div className={styles.testingDetails}>
                        <ul className={styles.detailsList}>
                          <div>
                            <p className={styles.bold}>After:</p>
                            <li>Redesign the button to resemble a camera button, similar to those on smartphones, ensuring it is recognizable as interactive.</li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
              
            </div>

            {/* <div className={styles.initialHiFi} id="usability-testing">
              <ContentSection
                title="Usability Testing"
                image="/remedify/usability-testing.png"
                alt="Remedify Usability Testing"
                overview="Usability testing was conducted with 4 participants, which involved observing users as they interacted with Remedify. Insights are then drawn to improve the interface and functionality of the app."
              />
              <div className={styles.details}>
                <p>Areas of improvement: </p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>“Mark Taken” Button Confusion</li>
                    <li className={styles.indent}>The “Mark Taken” button was unclear to users, with many unsure of its purpose.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Confusing Labels for Medication Input Form</li>
                    <li className={styles.indent}>Users reported difficulty understanding some labels within the medication input form.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>“Take Photo” Button Misinterpretation</li>
                    <li className={styles.indent}>Participants mistook the “Take Photo” button for a static instruction rather than an actionable element.</li>
                  </div>
                </ul>
              </div>
              <div className={styles.recommendations}>
                <div>
                  <h3>Recommendations:</h3>
              </div>
              
              <AppFeature1
                feature1="“Mark Taken” Button"
                image1="/remedify/recommendation1.png"
                alt1="“Mark Taken” Button"
                descriptions1={[
                  "Simplify the label by changing it to “Take,” making the function more straightforward and intuitive"
                ]}
              />
              <AppFeature2
                feature2="Labels for Medication Input Form"
                image2="/remedify/recommendation2.png"
                alt2="Labels for Medication Input Form"
                descriptions2={[
                  "Add clear section headers to improve organization and readability", 
                  "Rearrange the order of input fields to logically group related items, such as grouping dose and strength, as well as duration and frequency"
                ]}
              />
              <AppFeature1
                feature1="“Take Photo” Button"
                image1="/remedify/recommendation3.png"
                alt1="“Take Photo” Button"
                descriptions1={[
                  "Redesign the button to resemble a camera button, similar to those on smartphones, ensuring it is recognizable as interactive"
                ]}
              />
            </div>

            </div> */}

            <div className={styles.initialHiFi} id="final-hifi">
                <ContentSection
                  title="Final Hi-Fi"
                  image="/remedify/final-hifi.png"
                  alt="Remedify Final Hi-Fi"
                  overview="After several design iterations and incorporating feedback from usability testing, the final design of Remedify is crafted to create an intuitive experience that fits user needs."
                />
                <div className={styles.details}>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5244-5265&t=9yDqh5qVIF2NRdlL-4" target="_blank">
                      <button  className={styles.button}>View Final Hi-Fi</button>
                    </a>
                  </div>
                </div>
            </div>

            <div className={styles.initialHiFi} id="marketing-landing-page">
                <ContentSection
                  title="Marketing Landing Page"
                  image="/remedify/landing-page.png"
                  alt="Remedify Marketing Landing Page"
                  overview="The marketing landing page for Remedify serves as the main introduction to the app, designed to inform and engage potential users. It is crafted to highlight the app’s unique features, target audience, and the team behind its development."
                />
                <div className={styles.details}>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.remedify.ca/" target="_blank">
                      <button  className={styles.button}>View Landing Page</button>
                    </a>
                  </div>
                </div>
            </div>

            <div className={styles.detailsContainer} id="reflection">
                <div>
                  <div className={styles.details}>
                    <h2>Reflection and Learnings</h2>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Integrating AI into App Design:</li>
                        <li className={styles.subIndent}>Building Remedify taught me how to use AI-driven features, like image recognition for medication identification, while ensuring a smooth and user-friendly experience.</li>
                        <li className={styles.subIndent}>I learned to balance automation with user control, making AI auto-fill helpful but still allowing manual inputs.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Effective Team Leadership:</li>
                        <li className={styles.subIndent}>Leading the design team strengthened my skills in guiding creative direction, managing workflows, and providing feedback.</li>
                        <li className={styles.subIndent}>I learned to balance different perspectives, resolve challenges, and keep the team motivated while meeting project deadlines.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Collaboration with Developers:</li>
                        <li className={styles.subIndent}>Working closely with developers helped me understand the importance of aligning design with functionality.</li>
                        <li className={styles.subIndent}>I improved my ability to communicate design ideas clearly, adapt to technical constraints, and refine UI elements for better usability and performance.</li>
                      </div>
                    </ul>
                   
                  </div>
                </div>
            </div>

            <div className={styles.nextProject}>
              <h2>Next Project is...</h2>
                <NextCard 
                name="Tranquify"
                image="/tranquify-homepage.png"
                alt="Tranquify"
                link="/tranquify"
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
