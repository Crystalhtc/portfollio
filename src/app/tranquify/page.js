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
              src="/tranquify/banner.png"
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
            <AppIntro 
              appName="Tranquify"
              description="A user-friendly mobile app designed to enhance mood tracking and meditation. By prioritizing user research, prototyping, and usability testing, Tranquify offers a seamless experience for tracking moods and practicing meditation, with personalized suggestions for self-care."
              role="UX/UI Design, UX Research, Graphic Design, Usability Testing, Frontend Development"
              tools="Figma, Adobe Illustrator, Adobe After Effects, Next.js"
              duration="Feb 2024 – May 2024 (3 months)"
              prototypeLink="https://www.figma.com/proto/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=3309-3595&p=f&t=ZPZCTFg42gVI1Dhf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
              figmaLink="https://www.figma.com/design/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=0-1&p=f&t=CSUZirXANw8ms29c-0"
              styleguideLink="https://tranquify-style-guide.vercel.app/"
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
                  src="https://embed.figma.com/proto/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=3309-3595&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share" 
                  allowFullScreen
                />
                <div className={styles.nextButton}>
                  <a href="https://www.figma.com/proto/4ni9gyLkBDkeQNBfia2rgo/Remedify-Hi-fi?node-id=1797-14271&t=Zh0rrTMckVWV8wmW-1&scaling=scale-down&content-scaling=fixed&page-id=1797%3A14184&starting-point-node-id=1797%3A14295">
                    <button  className={styles.button}>View Prototype</button>
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
                      <li className={styles.bold}>Stress & Anxiety:</li>
                      <li className={styles.indent}>A growing number of people face stress and struggle to achieve inner peace.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Lack of Mental Health Support:</li>
                      <li className={styles.indent}>Many individuals struggle with managing emotional health on their own.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Difficulty in Building Healthy Habits:</li>
                      <li className={styles.indent}>Incorporating meditation and mindfulness into daily life can be challenging.</li>
                    </div>
                  </ul>
              </div>
              <div className={styles.solution}>
                <h2>Solution</h2>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Tracks Mood Patterns:</li>
                      <li className={styles.indent}>Helps users monitor their emotional well-being over time.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Provides Personalized Recommendations:</li>
                      <li className={styles.indent}>Provides tailored mental well-being and meditation tips.</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Integrates Meditation Contents:</li>
                      <li className={styles.indent}>Offers guided sessions and resources for seamless meditation practice.</li>
                    </div>
                  </ul>
              </div>
            </div>

          <div className={styles.appFeatures} id="features">
            <div className={styles.featureTitle}>
              <h2>Features</h2>
            </div> 
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

          <div className={styles.userResearch} id="user-research">
              <UserResearch
                title="User Research"
                descriptions={[
                  "Users often seek to gain insights into their emotional well-being, identify patterns, and manage stress or anxiety, while looking for accessible meditation practices that helps them relax at the same time.",
                  "The key challenge for users is finding a comprehensive solution that integrates mood tracking with personalized meditation guidance, offering a holistic approach to emotional health and wellness."
                ]}
              />
              {/* <div className={styles.nextButton}>
                <a href="https://docs.google.com/document/d/1MGyxeF7pkwpVo4VsNl829hrDaSTTYn5Frfa2RREm4Nc/edit?usp=sharing" target="_blank">
                  <button  className={styles.button}>VIEW FINDINGS</button>
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
                    <button  className={styles.button}>View Competitive Analysis</button>
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

          <div className={styles.detailsContainer} id="user-persona">
            <div className={styles.details}>
                <h2>User Persona</h2>
                <p>Crafting user personas for end users provides essential insights into our target audience. This approach prioritizes user needs, allowing us to customize our products accordingly and deliver a delightful user experience.</p>
                <ul className={styles.detailsList}>
                  <div>
                    <img
                      src="/tranquify/persona1.png"
                      alt="User Persona 1"
                      width="600"
                      className={styles.wireframeImage}
                    />
                    <li className={styles.bold}>Primary Persona: Elderly Individual</li>
                    <li className={styles.indent}>The primary user is an older adult experiencing memory challenges who must manage multiple medications daily.</li>
                  </div>
                  <div>
                    <img
                      src="/tranquify/persona2.png"
                      alt="User Persona 2"
                      width="600"
                      className={styles.wireframeImage}
                    />
                    <li className={styles.bold}>Secondary Persona: Caregiver</li>
                    <li className={styles.indent}>The secondary user is a caregiver responsible for overseeing the medication schedules of their loved ones.</li>
                  </div>
                  <div>
                    <img
                      src="/tranquify/persona3.png"
                      alt="User Persona 3"
                      width="600"
                      className={styles.wireframeImage}
                    />
                    <li className={styles.bold}>Secondary Persona: Caregiver</li>
                    <li className={styles.indent}>The secondary user is a caregiver responsible for overseeing the medication schedules of their loved ones.</li>
                  </div>
                </ul>
                <div className={styles.linkButton}>
                  <a className={styles.button} href="https://docs.google.com/presentation/d/19od2HCri96Ox-DJ3LtkctFdLnKAP0Vr3pxA15SFT8rU/edit?usp=sharing" target="_blank">
                    <button  className={styles.button}>View User Persona</button>
                  </a>
                </div>
              </div>
          </div>

          <div className={styles.detailsContainer} id="style-guide">
              <StyleGuide
                title="Style Guide"
                image="/tranquify/styleguide.png"
                alt="Tranquify Style Guide"
                styleguideLink="https://tranquify-style-guide.vercel.app/"
              />
          </div>

          <div className={styles.detailsContainer} id="wireframing">
            <div className={styles.details}>
              <h2>Wireframing</h2>
              <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p>
            </div>
            <div className={styles.wireframeImages}>
              <img
                src="/tranquify/wireframe.png"
                alt="Tranquify Wireframe"
                width="600"
                className={styles.wireframeImage}
              />
            </div>  
            <div className={styles.details}>
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
                  <a className={styles.button} href="https://www.figma.com/design/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=3092-2648&t=iypaE9sj1OUFEwxt-4" target="_blank">
                    <button  className={styles.button}>View Wireframe</button>
                  </a>
                </div>
              </div>
          </div>

          <div className={styles.initialHiFi} id="initial-hifi">
              <ContentSection
                title="Initial Hi-Fi"
                image="/tranquify/initial-hifi.png"
                alt="Tranquify Initial Hi-Fi"
                overview="The initial design of Tranquify focused on creating a mood tracking and meditation app that promotes a sense of calm and balance. The design choices were made with careful consideration of both aesthetic appeal and the emotional impact on users."
              />
              <div className={styles.details}>
                {/* <p>Major Changes:</p> */}
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Color Palette Integration:</li>
                    <li className={styles.indent}>The green and beige color palette promotes calmness, stability, and trust, ensuring that users feel at ease while interacting with the app.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Captivating Mascots:</li>
                    <li className={styles.indent}>Mascots were introduced to represent mood states and foster a sense of engagement.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Round borders:</li>
                    <li className={styles.indent}>All design elements feature rounded borders to create a softer and more inviting user interface.</li>
                  </div>
                </ul>
                <div className={styles.linkButton}>
                  <a className={styles.button} href="https://www.figma.com/proto/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=3309-5407&t=811DAQoWWI79VsGh-1&scaling=min-zoom&content-scaling=fixed&page-id=3309%3A4796" target="_blank">
                    <button  className={styles.button}>View Initial Hi-Fi</button>
                  </a>
                </div>
              </div>
          </div>
          <div className={styles.initialHiFi} id="usability-testing">
              <ContentSection
                title="Usability Testing"
                image="/tranquify/usability-testing.png"
                alt="Tranquify Usability Testing"
                overview="Usability testing is crucial in ensuring Tranquify meets the needs and expectations of its users. The testing was conducted with 5 participants, revealing 4 key areas for improvement."
              />
              <div className={styles.details}>
                <p>Areas of improvement:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Add meditation to Favourites:</li>
                    <li className={styles.indent}>The heart icon used to "Favourite" an item was not easily noticeable to users.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Meditation categories:</li>
                    <li className={styles.indent}>Participants expressed confusion about the category cards on the meditation page, as they were unclear about the purpose of these cards.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Weather section:</li>
                    <li className={styles.indent}>The weather feature on the homepage created slight confusion for users, as it detracted from the app's primary goal of promoting mindfulness and relaxation.</li>
                  </div>
                </ul>
                {/* <div className={styles.linkButton}>
                  <a href="https://www.figma.com/proto/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=3309-5407&t=811DAQoWWI79VsGh-1&scaling=min-zoom&content-scaling=fixed&page-id=3309%3A4796" target="_blank">
                    <button  className={styles.button}>View Initial Hi-Fi</button>
                  </a>
                </div> */}
              </div>
              <div className={styles.appFeatures}>
                <div className={styles.featureTitle}>
                  <h2>Recommendations</h2>
                </div> 
                <AppFeature1
                  feature1="One-Tap Medication Logging"
                  image1="/tranquify/recommendation1.png"
                  alt1="One-Tap Medication Logging"
                  descriptions1={[
                    "Log each dose with just one tap", 
                    "Track medications effortlessly through a simple, intuitive interface"
                  ]}
                />
                <AppFeature2
                  feature2="AI-Powered Label Scanning"
                  image2="/tranquify/recommendation2.png"
                  alt2="AI-Powered Label Scanning"
                  descriptions2={[
                    "Easily scan medication labels to set up reminders automatically",
                    "Minimize the steps needed to remember and simplify the process"
                  ]}
                />
                <AppFeature1
                  feature1="Accessible Medication Library"
                  image1="/tranquify/recommendation3.png"
                  alt1="Accessible Medication Library"
                  descriptions1={[
                    "Review all medications in one clear, accessible library", 
                    "Reliable and easy-to-understand information about medications to empower users"
                  ]}
                />
              </div>
          </div>

          

          <div className={styles.initialHiFi} id="final-hifi">
              <ContentSection
                title="Final Design"
                image="/tranquify/final-hifi.png"
                alt="Tranquify Final Design"
                overview="The final design of Tranquify reflects a user-centered approach, incorporating feedback from usability testing to create a more intuitive and visually appealing experience."
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
                  <a className={styles.button} href="https://www.figma.com/design/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=3002-2006&t=bkwpxL6IxRzZO4iG-4" target="_blank">
                    <button  className={styles.button}>View Final Hi-Fi</button>
                  </a>
                </div>
              </div>
          </div>

          <div className={styles.initialHiFi} id="web-app">
              <ContentSection
                title="Final Product: Web App"
                image="/tranquify/webapp.png"
                alt="Tranquify Web App"
                overview="A web app is developed using Next.js, featuring a fully coded interface. Real-time weather data is integrated into the homepage through a weather API, offering users up-to-date and localized weather information. The onboarding animations created in After Effects are implemented using  Lottie, enhancing engagement."
              />
              <div className={styles.details}>
                <div className={styles.linkButton}>
                  <a className={styles.button} href="https://tranquify.vercel.app/" target="_blank">
                    <button  className={styles.button}>View Web App</button>
                  </a>
                </div>
                {/* <div className={styles.githubButton}>
                  <a href="https://github.com/ohmaruko/Tranquify" target="_blank">
                    <button  className={styles.button}>View Github Repository</button>
                  </a>
                </div> */}
              </div>
          </div>

          <div className={styles.detailsContainer} id="style-guide">
                <div>
                  <div className={styles.details}>
                    <h2>Reflection and Learnings</h2>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Iterative Design:</li>
                        <li className={styles.subIndent}>Designing Tranquify reinforced the importance of iterative design and refining features based on user feedback.</li>
                        <li className={styles.subIndent}>Small adjustments, like repositioning the favoriting icon can significantly improve user experience.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Enhancing Engagement with Motion Graphics:</li>
                        <li className={styles.subIndent}>Using animations strategically made interactions feel smooth and intuitive rather than overwhelming.</li>
                        <li className={styles.subIndent}>Motion graphics can make the app more engaging, and microinteractions, like button feedback can improve usability.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Web-app development with Next.js:</li>
                        <li className={styles.subIndent}>Developing Tranquify as a web app using Next.js taught me how to build a fully coded interface that remains true to the design vision.</li>
                      </div>
                    </ul>
                   
                  </div>
                </div>
            </div>

          <div className={styles.nextProject}>
            <h2>Next Project is...</h2>
              <NextCard 
              name="Navie"
              image="/navie-homepage.png"
              alt="Navie"
              link="/navie"
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
