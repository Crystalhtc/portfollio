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

export default function Remedify() {
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
            <div className={styles.appIntrocard}>
            <h1>Campus Canvas</h1>
            <p>Campus Canvas is a magazine that celebrates campus architectural designs from around the world. This issue focuses on the unique design style of The Chinese University of Hong Kong (CUHK). The architecture of the university reflects a blend of modernity and functionality, with a minimalistic aesthetic that transitions seamlessly into the natural surroundings. The goal of this project is to capture and communicate the essence of this design style in both print and digital formats.</p>
            <div className={styles.appIntroContainer}>
                <div className={styles.appIntrodetails}>
                    <p className={styles.appIntrorowTitle}>Role</p>
                    <p className={styles.appIntrorowContent}>Graphic Design</p>
                </div>
                <div className={styles.appIntrodetails}>
                    <p className={styles.appIntrorowTitle}>Tools</p>
                    <p className={styles.appIntrorowContent}>Adobe InDesign</p>
                </div>
                <div className={styles.appIntrodetails}>
                    <p className={styles.appIntrorowTitle}>Duration</p>
                    <p className={styles.appIntrorowContent}>Oct 2024 (1 month)</p>
                </div>
                <div className={styles.appIntrobuttons}>
                <a className={styles.button} href="https://indd.adobe.com/view/bf5a23eb-0abe-44da-92d4-f3d4b5b0d9bd" target="_blank">
                    <button className={styles.button}>View Digital Design</button>
                </a>
            </div>
            </div>
        </div>
          </div>

          <div className={styles.prototypeBanner} id="mock-up">
              <div className={styles.prototypeTitle}>
                <h2>Mock Up</h2>
              </div> 
              <div className={styles.prototypes}>
                <div className={styles.prototypeContainer}>
                  <img
                    src="/campusCanvas/print-mockup.png"
                    alt="Print Design"
                    className={styles.prototype}
                    priority="true"
                  />
                  <div className={styles.nextButton}>
                    <h3>Print Design</h3>
                  </div>
                </div>

                <div className={styles.prototypeContainer}>
                  <img
                    src="/campusCanvas/digital-mockup.png"
                    alt="Digital Design"
                    className={styles.prototype}
                    priority="true"
                  />
                  <div className={styles.nextButton}>
                    <h3>Digital Design</h3>
                  </div>
                </div>
              </div>
            </div>

          <div className={styles.detailsContainer} id="creative-process">
            <div className={styles.details}>
              <h2>Creative Process</h2>
              {/* <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p> */}
            </div>
            <div className={styles.wireframeImages}>
              <img
                src="/campusCanvas/inspiration.png"
                alt="Campus Canvas Inspiration"
                width="600"
                className={styles.wireframeImage}
              />
            </div>  
            <div className={styles.details}>
                <ul className={styles.detailsList}>
                  <div>
                    <li className={styles.bold}>Research and Inspiration:</li>
                    <li className={styles.indent}>The project draws inspiration from existing magazine designs, especially architecture magazines. These references provided insights into clean layouts, consistent photo treatments, and strong typography hierarchies.</li>
                  </div>
                  <div>
                    <li className={styles.bold}>Concept Development</li>
                    <li className={styles.indent}>Considering CUHK’s minimalistic and geometric architectural style, a structured grid layout with rectangular elements was chosen.</li>
                    <li className={styles.indent}>The design aims at reflecting the minimalistic and functional aesthetic of CUHK’s architecture.</li>
                  </div>
                </ul>
                {/* <div className={styles.linkButton}>
                  <a href="https://www.figma.com/design/ZN5Q97M2j8T6LoKXgcoA6l/Tranquify?node-id=3092-2648&t=iypaE9sj1OUFEwxt-4" target="_blank">
                    <button  className={styles.button}>View Wireframe</button>
                  </a>
                </div> */}
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
