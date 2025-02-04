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
              src="/navie/banner.png"
              alt="Navie"
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

          <div className={styles.prototypeBanner} id="prototype">
            <div className={styles.prototypeTitle}>
              <h2>Prototype</h2>
            </div> 
            <div className={styles.prototypes}>
              <div className={styles.prototypeContainer}>
                <iframe 
                  className={styles.prototype} 
                  src="https://embed.figma.com/proto/yV7FPG1caTMggZewOycFYB/Navie?node-id=509-482&scaling=scale-down&content-scaling=fixed&page-id=131%3A4620&starting-point-node-id=509%3A482&embed-host=share" 
                  allowFullScreen
                />
                <div className={styles.nextButton}>
                  <a href="https://www.figma.com/proto/yV7FPG1caTMggZewOycFYB/Navie?node-id=509-482&t=f7VVWRqPGj8iaflM-0&scaling=scale-down&content-scaling=fixed&page-id=131%3A4620&starting-point-node-id=509%3A482&show-proto-sidebar=1">
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

          <div className={styles.userResearch} id="user-research">
              <UserResearch
                title="User Research"
                descriptions={[
                  "Users often struggle with locating specific products in grocery stores, which can lead to inefficient shopping experiences.",
                "Users often encounter difficulties in determining whether desired items are in stock before heading to the store.",
                "Users are uncertain about the final price of items, especially after factoring in taxes and fees.",
                "Users often struggle with managing shopping lists across multiple apps or platforms."
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
              <h2>Target Audience</h2>
              <ul>
                <li className={styles.bold}>Polypharmacy</li>
                <li className={styles.indent}>For those managing multiple medications, Remedify simplifies complex schedules with clear reminders, ensuring users stay on track and in control of their health.</li>
                <li className={styles.bold}>Accessible</li>
                <li className={styles.indent}>Remedify’s intuitive reminders help users with cognitive challenges remember their medications, supporting confidence and routine.</li>
              </ul>
            </div>
          </div> */}

          <div className={styles.styleGuide} id="style-guide">
              <StyleGuide
                title="Style Guide"
                image="/navie/styleguide.png"
                alt="Navie Style Guide"
                styleguideLink="https://www.figma.com/design/yV7FPG1caTMggZewOycFYB/Navie?node-id=2255-2774&t=tJToOHvcFXXZAPXP-4"
              />
          </div>

          <div className={styles.detailsContainer} id="wireframing">
            <div className={styles.details}>
              <h2>Wireframing</h2>
              <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p>
            </div>
              <div className={styles.wireframeImages}>
                <img
                  src="/navie/wireframe.png"
                  alt="Navie Wireframe"
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

          <div className={styles.initialHiFi} id="usability-testing">
              <ContentSection
                title="Navie Testing"
                image="/navie/usability-testing.png"
                alt="Navie Usability Testing"
                overview="The usability of the design of Navie is evaluated based on Jakob Nielsen’s 10 Usability Heuristics for User Interface Design. Insights are then drawn to improve the interface and functionality of the app."
              />
              <div className={styles.details}>
                <p>Areas of improvement:</p>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Search Suggestions:</li>
                    <li className={styles.indent}>Users may struggle to find relevant products quickly as there are no search suggestions when entering a product name.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Add to Price Calculator:</li>
                    <li className={styles.indent}>The option to add products to the Price Calculator is limited to certain pages, potentially disrupting the user flow during the shopping process.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Error handling:</li>
                    <li className={styles.indent}>There is a lack of feedback for error-prone pages, leaving users unsure about the cause of the problem.</li>
                  </div>
                </ul>
              </div>
              <div className={styles.appFeatures}>
                <div className={styles.featureTitle}>
                  <h2>Recommendations</h2>
                </div> 
                <AppFeature1
                  feature1="Search Suggestions"
                  image1="/navie/recommendation1.png"
                  alt1="Search Suggestions"
                  descriptions1={[
                    "Display related product suggestions under the search bar when users start typing."
                  ]}
                />
                <AppFeature2
                  feature2="Add to Price Calculator"
                  image2="/navie/recommendation2.png"
                  alt2="Add to Price Calculator"
                  descriptions2={[
                    "Expand the availability of the “Add to Price Calculator” option to additional pages, such as the “Shortest Route” page",
                    "Allows users to add items to the calculator seamlessly at any point in the shopping process"
                  ]}
                />
                <AppFeature1
                  feature1="Error handling"
                  image1="/navie/recommendation3.png"
                  alt1="Error handling"
                  descriptions1={[
                    "Add pop-ups for error-prone pages to notify users of any issues", 
                    "In the Product Scanning page, provide an error alert if the product cannot be scanned, offering suggestions for resolving the issue"
                  ]}
                />
              </div>
          </div>

          

          <div className={styles.initialHiFi} id="final-hifi">
              <ContentSection
                title="Final Design"
                image="/navie/final-hifi.png"
                alt="Navie Final Design"
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
                  <a className={styles.button} href="https://www.figma.com/design/yV7FPG1caTMggZewOycFYB/Navie?node-id=2255-2546&t=oFCmS4D8QB72urwk-4" target="_blank">
                    <button >View Final Hi-Fi</button>
                  </a>
                </div>
              </div>
          </div>

          <div className={styles.nextProject}>
            <h2>Next Project is...</h2>
              <NextCard 
              name="Squiz"
              image="/squiz-homepage.png"
              alt="Squiz"
              link="/squiz"
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
