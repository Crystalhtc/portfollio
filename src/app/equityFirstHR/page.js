"use client";
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
              src="/equityFirst/banner.png"
              alt="Equity First HR"
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
              <AppIntro 
                appName="Equity First HR"
                description="This project aimed to modernize the digital presence of Equity First HR while reflecting its core values of equity, diversity, and inclusion. The redesign addressed outdated visuals, unclear navigation, and a lack of integration for new services. A refreshed brand identity and accessible website were developed to better serve clients and reflect the organization’s credibility."
                role="UX/UI Re-design, Rebranding, Infographics, UX Research, Graphic Design, Usability Testing, Competitive Analysis"
                tools="Figma, Adobe Illustrator"
                duration="Apr 2025 – May 2025 (1 month)"
                prototypeLink="https://www.figma.com/proto/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR-Branding---Website-Redesign?node-id=479-3713&p=f&t=MTec5UwLcT8sfExJ-1&scaling=scale-down-width&content-scaling=fixed&page-id=475%3A1532&starting-point-node-id=493%3A6545"
                figmaLink="https://www.figma.com/design/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR-Branding---Website-Redesign--Copy-?node-id=475-1532&t=bV3HteFHgKXOr5es-1"
                styleguideLink="https://www.figma.com/design/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR?node-id=932-3803&p=f&t=S46cMl1IVwfFA1Ir-0"
              />
              </motion.div>
            </div>

            <div className={styles.prototypeBanner} id="prototype">
              <div className={styles.prototypeTitle}>
                <h2>Prototype</h2>
              </div> 
              <div className={styles.prototypes}>
                <div className={styles.prototypeContainer}>
                  <iframe 
                    className={styles.prototype} 
                    src="https://embed.figma.com/proto/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR?node-id=479-3713&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=475%3A1532&starting-point-node-id=493%3A6545&embed-host=share" 
                    allowFullScreen
                  />
                  <div className={styles.nextButton}>
                    <a target="_blank" href="https://www.figma.com/proto/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR-Branding---Website-Redesign?node-id=479-3713&p=f&t=MTec5UwLcT8sfExJ-1&scaling=scale-down-width&content-scaling=fixed&page-id=475%3A1532&starting-point-node-id=493%3A6545">
                      <button className={styles.button}>View Prototype</button>
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
                      <li className={styles.bold}>Outdated and inconsistent visual design</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Navigation issues and accessibility limitations</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Lack of integration of new services like Learning Management System (LMS) and Bias Detection</li>
                    </div>
                  </ul>
              </div>
              <div className={styles.solution}>
                <h2>Solution</h2>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Establish a modern, professional, and inclusive visual identity</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Improve site structure and navigation for all users</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Create clear entry points for new digital services</li>
                    </div>
                  </ul>
              </div>
            </div>

            <div className={styles.prototypeBanner} id="redesign">
              <div className={styles.prototypeTitle}>
                <h2>Rebranding and UX/UI Redesign</h2>
              </div> 
              <div className={styles.prototypes}>
                <div className={styles.prototypeContainer}>
                  <img
                    src="/equityFirst/old-design.png"
                    alt="Print Design"
                    className={styles.square}
                    priority="true"
                  />
                  <div className={styles.nextButton}>
                    <h3>Previous Design</h3>
                  </div>
                </div>

                <div className={styles.prototypeContainer}>
                  <img
                    src="/equityFirst/new-design.png"
                    alt="Digital Design"
                    className={styles.square}
                    priority="true"
                  />
                  <div className={styles.nextButton}>
                    <h3>Current Design</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.appFeatures} id="features">
              <div className={styles.featureTitle}>
                <h2>Features</h2>
              </div> 
              <AppFeature1
                feature1="Easy Navigation"
                image1="/equityFirst/feature1.png"
                alt1="Easy Navigation"
                descriptions1={[
                  "Clear menu hierarchy, intuitive page layout, and visible call-to-actions ensure users can quickly find what they need without confusion"
                ]}
              />
              <AppFeature2
                feature2="Interactive Infographic"
                image2="/equityFirst/feature2.png"
                alt2="Interactive Infographic"
                descriptions2={[
                  "Engaging visual elements break down complex consulting processes, allowing users to explore information at their own pace and improving content comprehension",
                ]}
              />
              <AppFeature1
                feature1="Great accessibility"
                image1="/equityFirst/feature3.png"
                alt1="Great accessibility"
                descriptions1={[
                  "Designed to meet WCAG AA standards with proper color contrast, readable typography, and clear visual hierarchy to support all users"
                ]}
              />
              <AppFeature2
                feature2="Consistent Branding and Design Style"
                image2="/equityFirst/feature4.png"
                alt2="Consistent Branding and Design Style"
                descriptions2={[
                  "Unified use of typography, color palette, iconography, and layout builds trust and reinforces brand identity across every page and interaction"
                ]}
              />
            </div>

            <div className={styles.client} id="client-requirements">
              <div className={styles.details}>
                <h2>Client Requirements</h2>
                <p>Following the discussion with the Equity First HR, the following key requirements were gathered:</p>
                <table className={styles.table}>
                  <tr>
                    <th>Branding</th>
                    <td>
                      <ul>
                        <li>Modern, professional, welcoming</li>
                        <li>Clean, rounded design </li>
                        <li>Blue and green color palette, no pink</li>
                        <li>Images used should reflect inclusivity and diversity</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Goals</th>
                    <td>
                      <ul>
                        <li>Makes the brand and website look more professional</li>
                        <li>Attracts more clients</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Target Audience</th>
                    <td>
                      <ul>
                        <li>Organizations that value inclusion, accountability, and systemic transformation</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Requirements content</th>
                    <td>
                      <ul>
                        <li>Includes interactive infographic about consulting process</li>
                        <li>Serves as a portal to new services, LMS and Bias Detection</li>
                        <li>Allows people to download their latest whitepaper</li>
                      </ul>
                    </td>
                  </tr>
                  
                </table>
              </div>
            </div>

            <div className={styles.competitiveAnalysis} id="competitive-analysis">
                <ContentSection
                  title="Competitive Analysis"
                  image="/equityFirst/competitive-analysis.png"
                  alt="Equity First HR Competitive Analysis"
                  overview="A review of competing HR and EDI consulting firms revealed common issues such as inconsistent branding, lack of accessible design, and overly complex navigation."
                />
                <div className={styles.details}>
                  <p>How Equity First HR’s Website Redesign Stands Out:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Ensure Accessibility:</li>
                      <li className={styles.indent}>Full compliance with WCAG AA standards, including sufficient color contrast and readable font sizes</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Intuitive Navigation:</li>
                      <li className={styles.indent}>Clear hierarchy and consistent menu labels (e.g. “Services” instead of “More”)</li>
                      <li className={styles.indent}>Prevent hidden items on  navigation bar</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Consistent Visual Identity:</li>
                      <li className={styles.indent}>Consistent colors, buttons, icons, and page layouts across all sections</li>
                      <li className={styles.indent}>Round diagonal corner rectangles and rounded rectangles for all components and buttons</li>
                    </div>
                  </ul>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR?node-id=2044-8841&p=f&t=S46cMl1IVwfFA1Ir-0" target="_blank">
                      <button  className={styles.button}>View Competitive Analysis</button>
                    </a>
                  </div>
                </div>

            </div>

            
            {/* <div className={styles.detailsContainer} id="target-audience">
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

            <div className={styles.detailsContainer} id="style-guide">
                <ContentSection
                  title="Style Guide"
                  image="/equityFirst/styleguide.png"
                  alt="Equity First HR's Style Guide"
                  overview="The Equity First HR style guide is designed to reflect the company’s professionalism and inclusivity."
                />
                <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Logo:</li>
                        <li className={styles.subIndent}>Logo features feathers gently wrapping inward, symbolizing freedom, unity, and inclusion.</li>
                        <li className={styles.subIndent}>Three colors represent equity, diversity, and inclusion.</li>
                        <li className={styles.subIndent}>Designed for both print and digital use.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Colors:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Green:</span> Represents equity, growth, and forward movement—evoking harmony and clarity.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Blue:</span> Promotes calm and trust.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>White:</span>Conveys simplicity and accessibility, creating a clean and welcoming space.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Typography:</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Mulish:</span> A friendly yet professional sans-serif used for headings, enhancing hierarchy and tone.</li>
                        <li className={styles.subIndent}><span className={styles.semiBold}>Noto Sans:</span> A clean, neutral body font designed for readability across devices, supporting inclusive communication.</li>
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

            <div className={styles.userFlowChart} id="user-flow-map">
                <ContentSection
                  title="User Flow Map"
                  image="/equityFirst/user-flow-map.png"
                  alt="Equity First HR User Flow Map"
                  overview="The user flow map outlines how users interact with Equity First HR’s website, ensuring a smooth and intuitive experience from start to finish. With accessibility as a main focus, the flow simplifies complex tasks while maintaining clear and user-friendly navigation."
                />
                {/* <div className={styles.details}>
                  <p>Key User Journeys:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>User Types:</li>
                      <li className={styles.indent}>Couples,  Business Travelers, General guests</li>
                    </div>
                    <div>
                      <li className={styles.bold}>Core User Activities:</li>
                      <li className={styles.indent}>Book accommodation, Manage reservation, Explore experience, explore ways to get to the hotel, book wedding or business retreat, explore dining experiences, contact support, VIP sign up</li>
                    </div>
                    
                  </ul>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/qFjWPiD5Q6kgdJ6m7CcxVv/West-Point-Hotel-User-Story?node-id=0-1&t=CrDunG94NPT3CElN-1" target="_blank">
                      <button className={styles.button}>View User Story Map</button>
                    </a>
                  </div>
                </div> */}
            </div>



            <div className={styles.detailsContainer} id="wireframing">
              <div className={styles.details}>
                <h2>Wireframing</h2>
                <p>Guided by the site map and user story map, the wireframe was developed to visualize the website's layout and user interactions. Drawing on insights from the competitive analysis, the focus was placed on crafting a user-friendly experience tailored to the needs of the target audience. The wireframe showcases how users will engage with each feature, ensuring intuitive navigation and ease of use.</p>
              </div>
              <div className={styles.wireframeImages}>
                <img
                  src="/equityFirst/wireframe.png"
                  alt="Equity First HR Wireframe"
                  width="600"
                  className={styles.wireframeImage}
                />
              </div>  
              <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR?node-id=302-178&p=f&t=S46cMl1IVwfFA1Ir-0" target="_blank">
                      <button className={styles.button}>View Wireframe</button>
                    </a>
                  </div>
            </div>

            <div className={styles.initialHiFi} id="final-hifi">
                <ContentSection
                  title="Final Hi-Fi"
                  image="/equityFirst/final-hifi.png"
                  alt="West Point Hotel Final Hi-Fi"
                  overview="The final HI-Fi prototype of Equity First HR's redesigned website incorporates client feedback to provide an intuitive, visually appealing, and highly functional website experience."
                />
                <div className={styles.details}>
                  <div className={styles.linkButton}>
                    <a className={styles.button} href="https://www.figma.com/design/57WnoTyPGOE5hvJN5O0Lvm/Equity-First-HR?node-id=475-1532&p=f&t=S46cMl1IVwfFA1Ir-0" target="_blank">
                      <button  className={styles.button}>View Final Hi-Fi</button>
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
                        <li className={styles.bold}>Rebranding:</li>
                        <li className={styles.subIndent}>Aligning brand identity with organizational values by developing a cohesive visual system that communicates professionalism, inclusivity, and trust.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>UX/UI Redesign:</li>
                        <li className={styles.subIndent}>Evaluate and improve existing websites by identifying usability issues, restructuring content, and implementing modern, accessible design patterns.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Data Visualization: </li>
                        <li className={styles.subIndent}>Developing interactive infographics that translate complex consulting processes into digestible, engaging visuals—enhancing clarity and user engagement.</li>
                      </div>
                      <div>
                        <li className={styles.bold}>Remote Collaboration:</li>
                        <li className={styles.subIndent}>Close coordination with clients (via Zoom, Figma, Discord and email) ensures designs evolve to meet real business needs.</li>
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
