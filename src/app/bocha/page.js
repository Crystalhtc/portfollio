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
              src="/bocha/banner.png"
              alt="Bocha Banner"
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
                  <h1>Bocha</h1>
                  <p>
                    This project was a packaging design for Bocha, a conceptual bubble tea beverage brand. The objective was to create a series of cohesive can designs that distinguish each flavour while maintaining a unified brand identity. The visual direction emphasizes a fun, approachable, and modern aesthetic to appeal to a broad audience of milk tea lovers.
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
                        Adobe Illustrator
                      </p>
                    </div>
                    <div className={styles.appIntrodetails}>
                      <p className={styles.appIntrorowTitle}>Duration</p>
                      <p className={styles.appIntrorowContent}>
                        Oct 2024 - Nov 2024 (1 month)
                      </p>
                    </div>
                  </div>
                </div>
                </motion.div>
              </div>

              <div className={styles.prototypeBanner} id="mock-up">
                <div className={styles.prototypeTitle}>
                  <h2>Mock-up</h2>
                </div>
                <div className={styles.prototypes}>
                  <div className={styles.wireframeImages}>
                    <img
                      src="/bocha/mockup.png"
                      alt="Bocha Mockup"
                      width="600"
                      className={styles.wireframeImage}
                    />
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
                    src="/bocha/inspiration.png"
                    alt="Teaddy Inspiration"
                    width="600"
                    className={styles.wireframeImage}
                  />
                </div>
                <div className={styles.details}>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Research and Inspiration:</li>
                      <li className={styles.indent}>
                        To establish a distinctive brand identity, I studied existing beverage packaging trends, with a focus on bubble tea and flavored drinks. I analyzed how brands differentiate flavours while preserving visual unity across product lines.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.initialHiFi} id="proof-design">
                <ContentSection
                  title="Proof Design"
                  image="/bocha/proof-brown.png"
                  alt="Proof Design for Original Flavor"
                  overview="Production-ready dielines were created for each can. 
                  This stage focused on technical precision, ensuring proper bleed, safe zones, alignment, and bilingual labels, 
                  providing a clear guide for print proofing and manufacturer handoff."
                />
                <img
                    src="/bocha/proof-green.png"
                    alt="Proof Design for Matcha Flavor"
                    width="600"
                    className={styles.wireframeImage}
                  />
                <img
                    src="/bocha/proof-purple.png"
                    alt="Proof Design for Taro Flavor"
                    width="600"
                    className={styles.wireframeImage}
                  />
                <div className={styles.details}>
                  {/* <p>Two versions were developed:</p> */}
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Color palette:</li>
                      <li className={styles.indent}>
                        Warm and inviting tones designed to capture freshness and playfulness, with each flavour distinguished by its signature hue.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Milk splash graphic:</li>
                      <li className={styles.indent}>
                        A wave-like splash was placed at the bottom of each can to emphasize the drink’s creamy base.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Circular motifs:</li>
                      <li className={styles.indent}>
                        Rounded shapes and blobs were used to symbolize tapioca pearls (boba) and enhance the playful aesthetic.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Bilingual labels:</li>
                      <li className={styles.indent}>
                        Both English and French text were included to reflect Canadian market standards and broaden audience accessibility.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              {/* <div className={styles.detailsContainer} id="style-guide">
                <ContentSection
                  title="Style Guide"
                  image="/bocha/styleguide.png"
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
                  title="Final Design"
                  image="/bocha/final-brown.png"
                  alt="Final Design for Original Flavor"
                  overview="The final stage of the project brought the Bocha cans to life through high-fidelity mockups. These designs showcase how the playful brand identity translates from flat dielines into realistic, three-dimensional products."
                />
                <img
                    src="/bocha/final-green.png"
                    alt="Final Design for Matcha Flavor"
                    width="600"
                    className={styles.wireframeImage}
                  />
                <img
                    src="/bocha/final-purple.png"
                    alt="Final Design for Taro Flavor"
                    width="600"
                    className={styles.wireframeImage}
                  />
                {/* <div className={styles.details}>
                  <p>Key elements:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Teddy Bear Mascot:</li>
                      <li className={styles.indent}>
                        A central, eye-catching visual element that embodies the brand’s friendly and cozy essence.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Product Showcasing:</li>
                      <li className={styles.indent}>
                        Teaddy’s signature tea products are featured with the branding logo, reinforcing brand identity.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Slogans:</li>
                      <li className={styles.indent}>
                        Each poster contains a unique, playful tagline to keep the campaign fresh and engaging.
                      </li>
                    </div>
                  </ul>
                </div> */}
              </div>

              <div className={styles.detailsContainer} id="reflection">
                <div>
                  <div className={styles.details}>
                    <h2>Reflection and Learnings</h2>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Packaging Systems & Cohesion:</li>
                        <li className={styles.subIndent}>Learned how to design across multiple SKUs while maintaining consistency and brand recognition.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Visual Storytelling Through Graphics:</li>
                        <li className={styles.subIndent}>Discovered how playful motifs like milk splashes and circles can effectively convey the essence of a product without relying on literal imagery.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Balancing Playfulness & Functionality:</li>
                        <li className={styles.subIndent}>Explored ways to blend a cute, lively aesthetic with practical requirements such as bilingual text and nutritional labels.</li>
                      </div>
                      
                    </ul>
                  </div>
                </div>
            </div>

              <div className={styles.nextProject}>
                <h2>Next Project is...</h2>
                <NextCard
                  name="One Timeless Step"
                  image="/oneTimelessStep-homepage.png"
                  alt="One Timeless Step"
                  link="/oneTimelessStep"
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
