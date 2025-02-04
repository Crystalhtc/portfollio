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
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";

export default function Remedify() {
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
        
        <div className={styles.contentContainer}>
          <div className={styles.sideMenu}>
            <SideMenu />
          </div>

        <div className={styles.contentFullWidth}>
          <TopMenu />
          <div className={styles.content}>
          <div className={styles.appIntro} id="app-intro">
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

          <div className={styles.prototypeBanner} id="prototype">
            <div className={styles.prototypeTitle}>
              <h2>Prototype</h2>
            </div> 
            <div className={styles.prototypes}>
              <div className={styles.prototypeContainer}>
                <iframe 
                  className={styles.prototype} 
                  src="https://embed.figma.com/proto/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=114-3189&scaling=scale-down&content-scaling=fixed&page-id=30%3A619&starting-point-node-id=114%3A3189&embed-host=share" 
                  allowFullScreen
                />
                <div className={styles.nextButton}>
                  <a href="https://www.figma.com/proto/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=114-3189&t=xzfJ6dbfUQ1Vl63N-1&scaling=scale-down&content-scaling=fixed&page-id=30%3A619&starting-point-node-id=114%3A3189">
                    <button>View Prototype</button>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.appFeatures} id="features">
            <div className={styles.featureTitle}>
              <h2>Features</h2>
            </div> 
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

          <div className={styles.userResearch} id="user-research">
              <UserResearch
              title="User Needs"
              descriptions={[
                "Users need a way to quickly absorb and review key information from their study materials without spending excessive time on traditional revision methods.",
                "Students require personalized study tools that cater to their specific course materials and learning objectives, ensuring a focused and effective revision process.",
                "Many learners struggle with maintaining interest and engagement during study sessions. They seek interactive and dynamic study methods to keep them motivated and involved.",
              ]}
            />
              {/* <div className={styles.nextButton}>
                <a href="https://docs.google.com/document/d/1MGyxeF7pkwpVo4VsNl829hrDaSTTYn5Frfa2RREm4Nc/edit?usp=sharing" target="_blank">
                  <button>VIEW FINDINGS</button>
                </a>
              </div> */}
          </div>

          {/* <div className={styles.competitiveAnalysis}>
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

          </div> */}


          {/* <div className={styles.detailsContainer}>
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
          
          {/* <div className={styles.detailsContainer}>
            <div className={styles.details}>
              <h2>Target Audience</h2>
              <ul>
                <li className={styles.bold}>Polypharmacy</li>
                <li className={styles.indent}>For those managing multiple medications, Remedify simplifies complex schedules with clear reminders, ensuring users stay on track and in control of their health.</li>
                <li className={styles.bold}>Accessible</li>
                <li className={styles.indent}>Remedify’s intuitive reminders help users with cognitive challenges remember their medications, supporting confidence and routine.</li>
              </ul>
            </div>
          </div> */}

          {/* <div className={styles.detailsContainer}>
            <div className={styles.details}>
                <h2>User Persona</h2>
                <p>Crafting user personas for end users provides essential insights into our target audience. This approach prioritizes user needs, allowing us to customize our products accordingly and deliver a delightful user experience.</p>
                <ul className={styles.detailsList}>
                  <div>
                    <img
                      src="/tranquify/persona1.png"
                      alt="User Persona 1"
                      width="600"
                      className={styles.personaImage}
                    />
                    <li className={styles.bold}>Primary Persona: Elderly Individual</li>
                    <li className={styles.indent}>The primary user is an older adult experiencing memory challenges who must manage multiple medications daily.</li>
                  </div>
                  <div>
                    <img
                      src="/tranquify/persona2.png"
                      alt="User Persona 2"
                      width="600"
                      className={styles.personaImage}
                    />
                    <li className={styles.bold}>Secondary Persona: Caregiver</li>
                    <li className={styles.indent}>The secondary user is a caregiver responsible for overseeing the medication schedules of their loved ones.</li>
                  </div>
                  <div>
                    <img
                      src="/tranquify/persona3.png"
                      alt="User Persona 3"
                      width="600"
                      className={styles.personaImage}
                    />
                    <li className={styles.bold}>Secondary Persona: Caregiver</li>
                    <li className={styles.indent}>The secondary user is a caregiver responsible for overseeing the medication schedules of their loved ones.</li>
                  </div>
                </ul>
                <div className={styles.linkButton}>
                  <a href="" target="_blank">
                    <button>View User Persona</button>
                  </a>
                </div>
              </div>
          </div> */}

          <div className={styles.styleGuide} id="style-guide">
              <StyleGuide
              title="Style Guide"
              image="/squiz/styleguide.png"
              alt="Squiz Style Guide"
              styleguideLink="https://www.figma.com/design/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=2010-809&t=O1Id74WD6aQ3oFJY-4"
            />
          </div>

          <div className={styles.detailsContainer} id="wireframing">
            <div className={styles.details}>
              <h2>Wireframing</h2>
              <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p>
            </div>
              <div className={styles.wireframeImages}>
                <img
                  src="/squiz/wireframe.png"
                  alt="Squiz Wireframe"
                  width="600"
                  className={styles.wireframeImage}
                />
              </div>
            {/* <div className={styles.details}>
                <p>Major Screens in Tranquify:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Home:</li>
                    <li className={styles.indent}>Users can view their mood over the week in a calendar view and recommended meditation content.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Mood Tracker</li>
                    <li className={styles.indent}>The app allows users to log their emotions, enter a short journey, and gain personalized recommendations to improve their mental well-being.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Meditation Content</li>
                    <li className={styles.indent}>Users can explore a library of guided meditations, breathing exercises, and mindfulness practices tailored to their preferences and goals.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Mood Calendar</li>
                    <li className={styles.indent}>Users can visualize their mood patterns over time on an interactive calendar, helping them track emotional trends and identify triggers or progress.</li>
                  </div>
                </ul>
                <div className={styles.linkButton}>
                  <a href="https://www.figma.com/design/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=3092-2648&t=iypaE9sj1OUFEwxt-4" target="_blank">
                    <button>View Wireframe</button>
                  </a>
                </div>
              </div> */}
          </div>

          <div className={styles.initialHiFi} id="final-hifi">
              <ContentSection
                title="Final Design"
                image="/squiz/final-hifi.png"
                alt="Squiz Final Design"
                overview="The final design of Navie reflects a user-centered approach, incorporating feedback from usability testing to create a more intuitive and visually appealing experience."
              />
              <div className={styles.details}>
                {/* <p>Based on participant feedback, the following recommendations were made to refine the app:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Favoriting System:</li>
                    <li className={styles.indent}>The heart icon for favoriting meditation content was made more prominent and repositioned for greater visibility, allowing users to save their favorite meditations effortlessly.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Meditation Categories:</li>
                    <li className={styles.indent}>Labels were added above meditation categories to clarify their purpose, addressing user confusion.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Weather Section:</li>
                    <li className={styles.indent}>The weather feature on the homepage was redesigned to be less prominent, ensuring it supports the app’s purpose without overshadowing its core features.</li>
                  </div>
                </ul> */}
                <div className={styles.linkButton}>
                  <a className={styles.button} href="https://www.figma.com/design/JvOScxfe8zCuqGOnjl2GTo/Squiz?node-id=30-619&p=f&t=O1Id74WD6aQ3oFJY-0" target="_blank">
                    <button>View Final Hi-Fi</button>
                  </a>
                </div>
              </div>
          </div>

          <div className={styles.nextProject}>
            <h2>Next Project is...</h2>
              <NextCard 
              name="Dolce Donuts"
              image="/dolcedonuts-homepage.png"
              alt="Dolce Donuts"
              link="/dolceDonuts"
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
