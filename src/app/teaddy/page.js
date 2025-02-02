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
              src="/teaddy/banner.png"
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
                <div className={styles.appIntrocard}>
                  <h1>Teaddy</h1>
                  <p>
                    This project is a branded advertisement campaign that
                    focuses on creating a warm and inviting brand identity
                    through a series of visually engaging posters and a custom
                    logo for a tea shop called Teaddy. The campaign integrates
                    the concept of a teddy bear with tea to convey a sense of
                    comfort and charm. By combining playful design elements, the
                    campaign aims to enhance brand recognition, attract
                    customers, and establish Teaddy as an approachable and
                    memorable brand.
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
                        Jan 2024 (1 month)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.prototypeBanner} id="final-design">
                <div className={styles.prototypeTitle}>
                  <h2>Mock-up</h2>
                </div>
                <div className={styles.prototypes}>
                  <div className={styles.prototypeContainer}>
                    <img
                      src="/teaddy/ad-mockup.png"
                      alt="Print Design"
                      className={styles.prototype}
                      priority="true"
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
                    src="/teaddy/inspiration.png"
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
                        To craft a distinctive brand identity, I analyzed
                        various bear-themed logos, focusing on how they conveyed
                        warmth, friendliness, and approachability.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.initialHiFi} id="logo-design">
                <ContentSection
                  title="Logo Design: Drafted Logos"
                  image="/teaddy/drafted-logos.png"
                  alt="Teaddy Drafted Logos"
                  overview="To integrate the bear theme with tea, multiple logo variations were created, experimenting with different bear graphics and compositions."
                />
                <div className={styles.details}>
                  <p>Two versions were developed:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Simple Color Logo:</li>
                      <li className={styles.indent}>
                        A clean and modern representation.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Detailed Color Logo:</li>
                      <li className={styles.indent}>
                        Featuring intricate details for a more dynamic look.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.initialHiFi}>
                <ContentSection
                  title="Logo Design: Final Logos"
                  image="/teaddy/final-logo.png"
                  alt="Teaddy Final Logo"
                  overview="The logo with two bears, a white bear and a brown bear, embracing tea leaves are chosen as the final logo."
                />
                <div className={styles.details}>
                  {/* <p>The logo with two bears, a white bear and a brown bear, embracing tea leaves are chosen as the final logo.</p> */}
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Reason:</li>
                      <li className={styles.indent}>
                        The embrace of tea leaves of the logo symbolizes the shop’s dedication to high-quality tea. 
                      </li>
                      <li className={styles.indent}>
                        This gesture also represents the warmth and care the shop has for both its tea products and services, reinforcing its commitment to excellence.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.detailsContainer} id="style-guide">
                <ContentSection
                  title="Style Guide"
                  image="/teaddy/styleguide.png"
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
              </div>

              <div className={styles.initialHiFi} id="final-design">
                <ContentSection
                  title="Poster Design: Final Design"
                  image="/teaddy/final-design.png"
                  alt="Campus Canvas Digital Design"
                  overview="The final design incorporates key elements to ensure brand recognition and audience engagement:"
                />
                <div className={styles.details}>
                  <p>Key elements:</p>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Teddy Bear Mascot:</li>
                      <li className={styles.indent}>
                        TA central, eye-catching visual element that embodies the brand’s friendly and cozy essence.
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
                </div>
              </div>

              <div className={styles.userResearch} id="reflection">
                <UserResearch
                  title="Reflection and Learnings"
                  descriptions={[
                    "Learned how to create a visual identity that aligns with a brand’s mission and personality.",
                    "Discovered the impact of using mascots to evoke emotions and build brand recognition.",
                    "Explored ways to blend a cute and friendly theme with a refined, modern aesthetic."
                  ]}
                />
              </div>

              <div className={styles.nextProject}>
                <h2>Next Project is...</h2>
                <NextCard
                  name="Mood Tracking Motion Graphic Video"
                  image="/moodTracking-homepage.png"
                  alt="Mood Tracking Motion Graphic Video"
                  link="/moodTracking"
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
