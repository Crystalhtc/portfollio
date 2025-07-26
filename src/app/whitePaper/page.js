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
              src="/whitePaper/banner.png"
              alt="Teaddy"
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
                  <h1>REPAIR Framework White Paper</h1>
                  <p>
                    The REPAIR Framework for Equity-Centered Organizational Change is a white paper created for Equity First HR to introduce its proprietary equity-centered change model. Designed to align seamlessly with the company’s existing brand identity, the piece employs the established color palette and typography while transforming a dense Word document into a visually engaging, easy-to-navigate format. The final design features clear sectioning, infographic storytelling, and strong hierarchy to communicate complex ideas effectively.
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
                        Adobe Illustrator, Adobe Photoshop, Figma 
                      </p>
                    </div>
                    <div className={styles.appIntrodetails}>
                      <p className={styles.appIntrorowTitle}>Duration</p>
                      <p className={styles.appIntrorowContent}>
                        May 2025 (1 month)
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
                  <div className={styles.prototypeContainer}>
                    <img
                      src="/whitePaper/ad-mockup.png"
                      alt="Print Design"
                      className={styles.prototype}
                      priority="true"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.problemSolution} id="problem-solution">
              <div className={styles.problem}>
                <h2>Problem</h2>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Overly dense and text-heavy original content</li>
                      <li className={styles.bold}>Lack of visual hierarchy and user-friendly organization</li>
                      <li className={styles.bold}>Risk of reader disengagement due to overwhelming layout</li>
                    </div>
                  </ul>
              </div>
              <div className={styles.solution}>
                <h2>Solution</h2>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Use strategic sectioning and clear typographic hierarchy to guide readers</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Transform complex concepts into branded infographics for quick understanding</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Design a clean, engaging layout that supports readability and sustained attention</li>
                    </div>
                  </ul>
              </div>
            </div>

              <div className={styles.detailsContainer} id="creative-process">
                <div className={styles.details}>
                  <h2>Creative Process</h2>
                  {/* <p>Wireframing serves as a blueprint for creating user interfaces. It provides a visual representation of the structure and layout of an application or website, focusing on functionality and user experience.</p> */}
                </div>
                <div className={styles.wireframeImages}>
                  <img
                    src="/whitePaper/inspiration.png"
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
                        The design approach was informed by research into contemporary editorial and white paper design trends, with a focus on clarity and professionalism. These examples emphasize clean layouts, structured information flow, and approachable visual language. These references guided the balance between formal presentation and readability, ensuring the white paper resonated with diverse audiences.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.detailsContainer} id="style-guide1">
                <ContentSection
                  title="Style Guide"
                  image="/whitePaper/styleguide.png"
                  alt="Equity First HR's Style Guide"
                  overview="The Equity First HR style guide is designed to reflect the company’s professionalism and inclusivity."
                />
                <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      {/* <div>
                        <li className={styles.bold}>Logo:</li>
                        <li className={styles.subIndent}>Logo features feathers gently wrapping inward, symbolizing freedom, unity, and inclusion.</li>
                        <li className={styles.subIndent}>Three colors represent equity, diversity, and inclusion.</li>
                        <li className={styles.subIndent}>Designed for both print and digital use.</li>
                      </div> */}
                      <div>
                        <li className={styles.bold}>Colors:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Green:</span> Represents equity, growth, and forward movement—evoking harmony and clarity.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Blue:</span> Promotes calm and trust.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>White:</span> Conveys simplicity and accessibility, creating a clean and welcoming space.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Typography:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Mulish:</span> A friendly yet professional sans-serif used for headings, enhancing hierarchy and tone.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Noto Sans:</span> A clean, neutral body font designed for readability across devices, supporting inclusive communication.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Graphic Elements:</li>
                        <li className={styles.subIndent}>Rounded icons and graphic accents introduce softness while maintaining structure</li>
                      </div>
                    </ul>
                    <div className={styles.linkButton}>
                      <a className={styles.button} href="https://www.figma.com/design/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR?node-id=932-3803&p=f&t=S46cMl1IVwfFA1Ir-0" target="_blank">
                        <button  className={styles.button}>View Style Guide</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.initialHiFi} id="cover-design">
                <ContentSection
                  title="Cover Design: Draft Concepts"
                  image="/whitePaper/drafted-covers.png"
                  alt="Teaddy Drafted Logos"
                  overview="Several potential cover designs were created to explore different ways of visually introducing the REPAIR framework while maintaining brand consistency."
                />
                <div className={styles.details}>
                  <ul className={styles.detailsList}>
                    {/* <div>
                      <li>Several potential cover designs were created to explore different ways of visually introducing the REPAIR framework while maintaining brand consistency.</li>
                      
                    </div> */}
                    <div>
                      <li >The proposed designs were presented to the client during review meetings, where feedback was gathered and discussed. </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.initialHiFi}>
                <ContentSection
                  title="Cover Design: Final Design"
                  image="/whitePaper/final-cover.png"
                  alt="Teaddy Final Logo"
                  overview="After iterative refinement, the final cover was selected for its strong alignment with the company’s visual identity and its clear, professional presentation."
                />
                <div className={styles.details}>
                  <p className={styles.bold}>Final cover design:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li>The ribbon-like graphic element combined with the cover photo subtly echoes the shape of the company’s logo, reinforcing brand recognition in an abstract yet elegant way</li>
                      
                    </div>
                    <div>
                      <li>A deep, dark blue background was chosen to evoke trust, stability, and sophistication, complementing the overall color palette while creating a strong first impression</li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.detailsContainer} id="infographics">
                <ContentSection
                  title="Infographics"
                  image="/whitePaper/infographic.png"
                  alt="Equity First HR's Infographics Design on REPAIR Framework white paper"
                  overview="The REPAIR framework, a justice-focused tool for centering equity-deserving groups, is transformed into clear, engaging visuals that enhance understanding and retention. By turning complex concepts into accessible graphics, the design helps readers quickly grasp the framework’s key principles while keeping the content visually appealing."
                />
                <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Focus on Clarity:</li>
                        <li className={styles.indent}>The REPAIR acronym is prominently highlighted to create a strong, memorable impression, with each letter clearly defined and contextualized.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Visual Aids:</li>
                        <li className={styles.indent}>Custom icons illustrate each stage of the framework, providing intuitive, at-a-glance comprehension and supporting readers with diverse learning preferences.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Branded Consistency:</li>
                        <li className={styles.indent}>The infographics maintain the organization’s established color palette, typography, and visual style to ensure cohesion and reinforce brand identity.</li>
                      </div>
                      
                    </ul>
                    <div className={styles.linkButton}>
                      <a className={styles.button} href="https://www.figma.com/design/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR?node-id=932-3803&p=f&t=S46cMl1IVwfFA1Ir-0" target="_blank">
                        <button  className={styles.button}>View Style Guide</button>
                      </a>
                    </div>
                  </div>
                </div>
            </div>

              <div className={styles.initialHiFi} id="final-design">
                <ContentSection
                  title="Poster Design: Final Design"
                  image="/whitePaper/final-design.png"
                  alt="Campus Canvas Digital Design"
                  overview="The final design incorporates key elements to ensure brand recognition and audience engagement:"
                />
                <div className={styles.details}>
                  {/* <p>Key elements:</p> */}
                  <ul className={styles.detailsList}>
                    <div>
                      <li>A clear, intuitive typographic hierarchy</li>
                    </div>
                    <div>
                      <li>Well-defined sections for readability</li>
                    </div>
                    <div>
                      <li>Branded infographics to enhance understanding</li>
                    </div>
                    <div>
                      <li>Alignment with Equity First HR’s visual identity and mission</li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.detailsContainer} id="reflection">
                <div>
                  <div className={styles.details}>
                    <h2>Reflection and Learnings</h2>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Making Information Inclusive & Accessible</li>
                        <li className={styles.subIndent}>Learned how to use editorial design, visual hierarchy, and infographics to transform dense, equity-focused information into clear, approachable, and engaging communication.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Maintaining Brand Alignment</li>
                        <li className={styles.subIndent}>Understood the importance of reinforcing a consistent brand identity through color, typography, and tone.</li>
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
