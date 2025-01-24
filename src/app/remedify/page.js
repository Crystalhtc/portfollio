"use client";
import styles from "./Remedify.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppIntro from "../components/AppIntro";
import AppFeature1 from "../components/AppFeature1";
import AppFeature2 from "../components/AppFeature2";
import UserResearch from "../components/UserResearch";
import StyleGuide from "../components/StyleGuide";
import ContentSection from "../components/ContentSection";
import NextCard from "../components/NextCard";
import ScrollButton from "../components/ScrollButton";

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
        
        <div className={styles.content}>
          <div className={styles.appIntro}>
            <AppIntro 
              appName="Remedify"
              description="An intuitive mobile app designed to revolutionize the way people manage their medications. By utilizing AI technology, Remedify provides personalized medication reminders, detailed drug information, and intuitive scheduling features—all within a simple, accessible interface."
              role="UX/UI Design, UX Research, Graphic Design, Usability Testing, Competitive Analysis, Frontend Development"
              tools="Figma, Adobe Illustrator, Expo, React Native"
              duration="Sep 2024 – Dec 2024 (3 months)"
              prototypeLink="https://www.figma.com/proto/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14271&t=Zh0rrTMckVWV8wmW-1&scaling=scale-down&content-scaling=fixed&page-id=1797%3A14184&starting-point-node-id=1797%3A14295"
              figmaLink="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14184&t=xd57gQUfuR5S6kpN-1"
              styleguideLink="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5145-11431&t=IdXuzk5pD3d9AF8h-4"
            />
          </div>

          <div className={styles.prototypeBanner}>
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
                    <button>Light Mode</button>
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
                    <button>Dark Mode</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.appFeatures}>
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

          <div className={styles.userResearch}>
              <UserResearch
                title="User Research"
                descriptions={[
                  "Tracking Medication Issues: Users often forget when or if they’ve taken their medication, highlighting the need for clear tracking and reminders.",
                  "Understanding the Medication: Lack of knowledge about medications can lead to poor adherence, so educating users reduces fears and improves usage.",
                  "Simplicity is Key: Existing apps often have a high learning curve, making them difficult to use"
                ]}
              />
              <div className={styles.nextButton}>
                <a href="https://docs.google.com/document/d/1MGyxeF7pkwpVo4VsNl829hrDaSTTYn5Frfa2RREm4Nc/edit?usp=sharing" target="_blank">
                  <button>VIEW FINDINGS</button>
                </a>
              </div>
          </div>

          <div className={styles.competitiveAnalysis}>
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
                  <div>
                    <li className={styles.bold}>Better UI/UX Design:</li>
                    <li className={styles.indent}>The app prioritizes a clean, user-friendly interface that is simple to navigate, ensuring accessibility for users of all ages and tech abilities.</li>
                  </div>
                </ul>
                <div className={styles.linkButton}>
                  <a href="https://www.figma.com/board/iWziE36DOEeWn9JDKIlI9B/Remedify-Competitive-Analysis-(UI-Focused)?node-id=0-1&p=f&t=cUPe0MNMm4oksBdT-0" target="_blank">
                    <button>View Competitive Analysis</button>
                  </a>
                </div>
              </div>

          </div>


          <div className={styles.detailsContainer}>
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
          </div>
          
          <div className={styles.detailsContainer}>
            <div className={styles.details}>
              <h2>Target Audience</h2>
              <ul>
                <li className={styles.bold}>Polypharmacy</li>
                <li className={styles.indent}>For those managing multiple medications, Remedify simplifies complex schedules with clear reminders, ensuring users stay on track and in control of their health.</li>
                <li className={styles.bold}>Accessible</li>
                <li className={styles.indent}>Remedify’s intuitive reminders help users with cognitive challenges remember their medications, supporting confidence and routine.</li>
              </ul>
            </div>
          </div>

          <div className={styles.detailsContainer}>
            <div className={styles.details}>
                <h2>User Persona</h2>
                <p>User personas are developed to better understand and address the needs of the target audience. They guide thoughtful design decisions, ensuring the app remains practical, user-friendly, and relevant.</p>
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
                  <a href="https://www.figma.com/design/sFlvLVZM1M8rmGbnaQ6o8y/Remedify-User-Persona?node-id=64-4&t=8BGBLVHFu5cxMfyD-1" target="_blank">
                    <button>View User Persona</button>
                  </a>
                </div>
              </div>
          </div>

          {/* <div className={styles.styleGuide}>
              <StyleGuide
                title="Style Guide"
                image="/remedify/styleguide.png"
                alt="Remedify Style Guide"
                styleguideLink="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5145-11431&t=3ICIYqKBCpA4qJrQ-4"
              />
          </div> */}

          <div className={styles.detailsContainer}>
              <ContentSection
                title="Style Guide"
                image="/remedify/styleguide.png"
                alt="Remedify Style Guide"
                overview="Remedify app's style guide is crafted to embody the app’s mission of supporting users in managing their health and medication. It is designed to provoke a calming, warm, inclusive, and accessible feeling."
              />
              <div>
                <div className={styles.details}>
                  {/* <p>Major Screens in Remedify:</p> */}
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
                    <a href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=5145-11431&t=3ICIYqKBCpA4qJrQ-4" target="_blank">
                      <button>View Style Guide</button>
                    </a>
                  </div>
                </div>
              </div>
          </div>

          <div className={styles.detailsContainer}>
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
                    <a href="https://www.figma.com/board/VrhDXG7Y3wxiZduuAapuib/Remedify-Site-Map?t=Key3IoYuNMjQCwtM-1" target="_blank">
                      <button>View Site Map</button>
                    </a>
                  </div>
                </div>
              </div>
              

          </div>

          <div className={styles.userFlowChart}>
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
                  <a href="https://www.figma.com/board/IlQbI2pQmUyfFw6szZLPHE/Remedify-User-Flow-Map?node-id=0-1&t=8VERkkMOfgUymhgJ-1" target="_blank">
                    <button>View User Flow Map</button>
                  </a>
                </div>
              </div>
          </div>



          <div className={styles.detailsContainer}>
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
          </div>

          <div className={styles.initialHiFi}>
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
                <a href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=340-5993&t=0Ji5GbZNKZLLvUCy-1" target="_blank">
                  <button>View Initial Hi-Fi</button>
                </a>
              </div>
            </div>
          </div>

            <div className={styles.initialHiFi}>
              <ContentSection
                title="Design Iteration"
                image="/remedify/design-iteration.png"
                alt="Remedify Design Iteration"
                overview="Based on user feedback, the high-fidelity prototype was refined with several major updates to enhance usability and accessibility."
              />
              <div className={styles.details}>
                <p>Major Changes:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Quick Daily Actions on the Homepage:</li>
                    <li className={styles.indent}>A prominent “Taken” button is introduced as the primary call-to-action (CTA) on the homepage. This feature simplifies daily interactions, allowing users to log medications quickly and efficiently.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Organized Medication Library:</li>
                    <li className={styles.indent}>Medications are now displayed as visually organized cards, showcasing key details of the medications. This update makes navigation intuitive and helps users stay informed without feeling overwhelmed.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Adjusted Color Palette:</li>
                    <li className={styles.indent}>The use of orange, often perceived as a warning color, was reduced and replaced with green to create a calmer and more supportive tone throughout the app.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Enhanced Typography:</li>
                    <li className={styles.indent}>To improve visual hierarchy and readability, Public Sans is added as a secondary font. This pairing with the existing font creates clear differentiation between headings, subheadings, and body text.</li>
                  </div>
                </ul>
                {/* <div className={styles.linkButton}>
                  <a href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14184&t=xd57gQUfuR5S6kpN-1" target="_blank">
                    <button>View Final Hi-Fi</button>
                  </a>
                </div> */}
              </div>
          </div>

          <div className={styles.initialHiFi}>
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
                  <li className={styles.bold}>Confusing Labels for Medication Input Form</li>
                  <li className={styles.indent}>Users reported difficulty understanding some labels within the medication input form.</li>
                </div>
                <div>
                  <li className={styles.bold}>“Mark Taken” Button Confusion</li>
                  <li className={styles.indent}>The “Mark Taken” button was unclear to users, with many unsure of its purpose.</li>
                </div>
                <div>
                  <li className={styles.bold}>“Take Photo” Button Misinterpretation</li>
                  <li className={styles.indent}>Participants mistook the “Take Photo” button for a static instruction rather than an actionable element.</li>
                </div>
              </ul>
              {/* <div className={styles.linkButton}>
                <a href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=340-5993&t=0Ji5GbZNKZLLvUCy-1" target="_blank">
                  <button>View Initial Hi-Fi</button>
                </a>
              </div> */}
            </div>
            <div className={styles.appFeatures}>
              <div>
                <h3>Recommendations:</h3>
            </div>
            <AppFeature1
              feature1="Labels for Medication Input Form"
              image1="/remedify/recommendation1.png"
              alt1="Labels for Medication Input Form"
              descriptions1={[
                "Add clear section headers to improve organization and readability", 
                "Rearrange the order of input fields to logically group related items, such as grouping dose and strength, as well as duration and frequency"
              ]}
            />
            <AppFeature2
              feature2="“Mark Taken” Button"
              image2="/remedify/recommendation2.png"
              alt2="“Mark Taken” Button"
              descriptions2={[
                "Simplify the label by changing it to “Take,” making the function more straightforward and intuitive"
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

          </div>

          <div className={styles.initialHiFi}>
              <ContentSection
                title="Final Hi-Fi"
                image="/remedify/final-hifi.png"
                alt="Remedify Final Hi-Fi"
                overview="After several design iterations and incorporating feedback from usability testing, the final design of Remedify is crafted to create an intuitive experience that fits user needs."
              />
              <div className={styles.details}>
                {/* <p>Major Changes:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Quick Daily Actions on the Homepage:</li>
                    <li className={styles.indent}>A prominent “Taken” button is introduced as the primary call-to-action (CTA) on the homepage. This feature simplifies daily interactions, allowing users to log medications quickly and efficiently.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Organized Medication Library:</li>
                    <li className={styles.indent}>Medications are now displayed as visually organized cards, showcasing key details of the medications. This update makes navigation intuitive and helps users stay informed without feeling overwhelmed.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Adjusted Color Palette:</li>
                    <li className={styles.indent}>The use of orange, often perceived as a warning color, was reduced and replaced with green to create a calmer and more supportive tone throughout the app.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Enhanced Typography:</li>
                    <li className={styles.indent}>To improve visual hierarchy and readability, Public Sans is added as a secondary font. This pairing with the existing font creates clear differentiation between headings, subheadings, and body text.</li>
                  </div>
                </ul> */}
                <div className={styles.linkButton}>
                  <a href="https://www.figma.com/design/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14184&t=xd57gQUfuR5S6kpN-1" target="_blank">
                    <button>View Final Hi-Fi</button>
                  </a>
                </div>
              </div>
          </div>

          <div className={styles.initialHiFi}>
              <ContentSection
                title="Marketing Landing Page"
                image="/remedify/landing-page.png"
                alt="Remedify Marketing Landing Page"
                overview="The marketing landing page for Remedify serves as the main introduction to the app, designed to inform and engage potential users. It is crafted to highlight the app’s unique features, target audience, and the team behind its development."
              />
              <div className={styles.details}>
                {/* <p>Major Changes:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Quick Daily Actions on the Homepage:</li>
                    <li className={styles.indent}>A prominent “Taken” button is introduced as the primary call-to-action (CTA) on the homepage. This feature simplifies daily interactions, allowing users to log medications quickly and efficiently.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Organized Medication Library:</li>
                    <li className={styles.indent}>Medications are now displayed as visually organized cards, showcasing key details of the medications. This update makes navigation intuitive and helps users stay informed without feeling overwhelmed.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Adjusted Color Palette:</li>
                    <li className={styles.indent}>The use of orange, often perceived as a warning color, was reduced and replaced with green to create a calmer and more supportive tone throughout the app.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Enhanced Typography:</li>
                    <li className={styles.indent}>To improve visual hierarchy and readability, Public Sans is added as a secondary font. This pairing with the existing font creates clear differentiation between headings, subheadings, and body text.</li>
                  </div>
                </ul> */}
                <div className={styles.linkButton}>
                  <a href="https://www.remedify.ca/" target="_blank">
                    <button>View Landing Page</button>
                  </a>
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
      </main>
      <ScrollButton/>
      <Footer />
    </div>
  );
}
