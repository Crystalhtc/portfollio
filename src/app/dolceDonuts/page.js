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
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";

export default function Remedify() {
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
        
        <div className={styles.contentContainer}>
          <div className={styles.sideMenu}>
            <SideMenu />
          </div>

        <div className={styles.contentFullWidth}>
          <TopMenu />
          <div className={styles.content}>
          <div className={styles.appIntro} id="app-intro">
            <AppIntro 
            appName="Dolce Donuts"
            description="The Dolce Donuts Website project is a focused effort to enhance online presence and create a more enjoyable online experience for customers. With a dedication to user research, user-centered design principles, the goal is to create a delightful and user-friendly website that mirrors the warmth and delicious offerings. Visitors can look forward to a smoother journey, whether they’re browsing our menu, placing orders, customizing their own donuts, or connecting with our community."
            role="	UI/UX Design, User research"
            tools="Figma, Adobe Illustrator"
            duration="Sep 2023 – Dec 2023 (3 months)"
            prototypeLink="https://www.figma.com/proto/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1-16&t=ZRJUINahPqI9L4to-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A16"
            figmaLink="https://www.figma.com/design/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=0-1&p=f&t=E6n8gLtbaFJiPonv-0"
            styleguideLink="https://www.figma.com/design/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1202-2437&p=f&t=E6n8gLtbaFJiPonv-0"
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
                  src="https://embed.figma.com/proto/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1-16&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A16&embed-host=share" 
                  allowFullScreen
                />
                <div className={styles.nextButton}>
                  <a href="https://www.figma.com/proto/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1-16&t=ZRJUINahPqI9L4to-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A16">
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
              image="/dolceDonuts/styleguide.png"
              alt="Dolce Donuts Style Guide"
              styleguideLink="https://www.figma.com/design/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=1202-2437&p=f&t=E6n8gLtbaFJiPonv-0"
            />
          </div>

          <div className={styles.detailsContainer} id="wireframing">
            <div className={styles.details}>
              <h2>Wireframing</h2>
              <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p>
            </div>
              <div className={styles.wireframeImages}>
                <img
                  src="/dolceDonuts/wireframe.png"
                  alt="Dolce Donuts Wireframe"
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
                image="/dolceDonuts/final-hifi.png"
                alt="Dolce Donuts Final Design"
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
                  <a className={styles.button} href="https://www.figma.com/design/8ogYcfirxJHYjrCvLm2mut/DolceDonuts?node-id=0-1&p=f&t=E6n8gLtbaFJiPonv-0" target="_blank">
                    <button>View Final Hi-Fi</button>
                  </a>
                </div>
              </div>
          </div>

          <div className={styles.nextProject}>
            <h2>Next Project is...</h2>
              <NextCard 
              name="Campus Canvas"
              image="/campusCanvas-homepage.png"
              alt="Campus Canvas"
              link="/campusCanvas"
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
