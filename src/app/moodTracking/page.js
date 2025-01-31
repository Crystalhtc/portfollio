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
              src="/moodTracking/banner.png"
              alt="Mood Tracking Motion Graphic Video"
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
                  <h1>The Importance of Mood Tracking</h1>
                  <p>
                    This motion graphic explainer video educates viewers on the benefits of mood tracking and different methods to monitor emotions. The animation aims to promote self-awareness, emotional balance, and improved mental well-being through engaging visuals and storytelling.
                  </p>
                  <div className={styles.appIntroContainer}>
                    <div className={styles.appIntrodetails}>
                      <p className={styles.appIntrorowTitle}>Role</p>
                      <p className={styles.appIntrorowContent}>
                        Motion Graphic, Graphic Design, Storyboarding
                      </p>
                    </div>
                    <div className={styles.appIntrodetails}>
                      <p className={styles.appIntrorowTitle}>Tools</p>
                      <p className={styles.appIntrorowContent}>
                        Adobe After Effects, Adobe Illustrator
                      </p>
                    </div>
                    <div className={styles.appIntrodetails}>
                      <p className={styles.appIntrorowTitle}>Duration</p>
                      <p className={styles.appIntrorowContent}>
                        Apr 2024 - May 2024 (2 month)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.prototypeBanner} id="final-product">
                <div className={styles.prototypeTitle}>
                  <h2>Final Video</h2>
                </div>
                <div className={styles.prototypes}>
                  <div className={styles.prototypeContainer}>
                    <iframe width="420" height="315"
                      src="https://www.youtube.com/watch?v=Olqu-rU1vaI">
                    </iframe>
                  </div>
                </div>
              </div>

              <div className={styles.detailsContainer} id="creative-process">
                <div className={styles.details}>
                  <h2>Research and Concept Development</h2>
                  <p>Conducted in-depth research on mood tracking and its psychological benefits, and developed a structured script and storyboard, ensuring a logical flow of information..</p>
                </div>
                <div className={styles.wireframeImages}>
                  <img
                    src="/mooodTracking/inspiration.png"
                    alt="Mood Tracking Inspiration"
                    width="600"
                    className={styles.wireframeImage}
                  />
                </div>
                <div className={styles.details}>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Identified three key benefits:</li>
                      <li className={styles.indent}>
                        Creating Space – Allows individuals to step back and process emotions without immediate reaction.
                      </li>
                      <li className={styles.indent}>
                        Recognizing Patterns – Helps detect emotional triggers and trends over time.
                      </li>
                      <li className={styles.indent}>
                        Better Self-Care – Encourages self-awareness, leading to improved coping strategies and self-improvement.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Explored three common ways to track moods:</li>
                      <li className={styles.indent}>
                        Mood Journal – Writing daily reflections to understand emotional trends.
                      </li>
                      <li className={styles.indent}>
                        Mood Chart – Visualizing emotions over time using colors, numbers, or symbols.
                      </li>
                      <li className={styles.indent}>
                        Mood Tracking Apps – Digital tools with reminders and insights for easier tracking.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.detailsContainer} id="style-guide">
                <ContentSection
                  title="Style Guide"
                  image="/moodTracking/styleguide.png"
                  alt="Mood Tracking Motion Graphic Video Style Guide"
                  overview=""
                />
                <div>
                  <div className={styles.details}>
                    <ul className={styles.detailsList}>
                      <div>
                        <li className={styles.bold}>Color Palette:</li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Green:</span>{" "}
                          Represents calmness, balance, and emotional stability.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Brown & Soft Yello:</span>{" "}
                          Serve as neutral, grounding colors to create warmth and familiarity.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Gray:</span>
                          A neutral complement that adds balance, warmth, and softness to the design.
                          </li>
                      </div>
                      <div>
                        <li className={styles.bold}>Typography:</li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Quicksand:</span> 
                          Chosen due to its rounded form, ensuring a friendlines and accessibility.
                        </li>
                      </div>
                      <div>
                        <li className={styles.bold}>Graphic Style:</li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Flat vector illustrations:</span> 
                          Simple, clean, and visually engaging.
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.initialHiFi} id="color">
                <ContentSection
                  title="Color Usage"
                  image="/moodTracking/scene-transition.png"
                  alt="Mood Tracking Motion Graphic Video Color Usage"
                  overview="Color plays a critical role in scene transitions and mood representation, helping to establish different settings and emotional states. This approach ensures a smooth visual flow while reinforcing the key message of how mood tracking can improve well-being."
                />
                <div className={styles.details}>
                  {/* <p>Two versions were developed:</p> */}
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Scene Transitions:</li>
                      <li className={styles.indent}>
                        Train Scene (Gray Tone) – Shows the tiring, routine feeling of commuting.
                      </li>
                      <li className={styles.indent}>
                        Office Scene (Blue Tone) - Represents a busy and structured work setting, where stress can build up.
                      </li>
                      <li className={styles.indent}>
                        Home Scene (Yellow Tone) - Creates a cozy and familiar atmosphere, but emotions can still fluctuate.
                      </li>
                    </div>
                    <div className={styles.wireframeImages}>
                      <img
                        src="/mooodTracking/mood-change.png"
                        alt="Mood Changes"
                        width="600"
                        className={styles.wireframeImage}
                      />
                    </div>
                    <div>
                      <li className={styles.bold}>Mood Changes:</li>
                      <li className={styles.indent}>
                        Anxiety & Stress (Purple Background) – Shows the tiring, routine feeling of commuting.
                      </li>
                      <li className={styles.indent}>
                        Calm & Balance (Green Background) – Symbolizing peace and emotional stability after mood tracking.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.initialHiFi} id="key-motion">
                <ContentSection
                  title="Key Animations"
                  image="/moodTracking/drafted-logos.png"
                  alt="Mood Tracking Motion Graphic Video Key Animations"
                  overview=""
                />
                <div className={styles.details}>
                  {/* <p>Two versions were developed:</p> */}
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Character animations:</li>
                      <li className={styles.indent}>
                        Demonstrating emotional changes and mood-tracking techniques.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Mascots animations:</li>
                      <li className={styles.indent}>
                        Visually express different emotions, such as happiness, sadness, frustration, and calmness.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Seamless transitions:</li>
                      <li className={styles.indent}>
                        Guiding the viewer smoothly from one topic to the next.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              {/* <div className={styles.initialHiFi} id="digital-design">
                <ContentSection
                  title="Final Design"
                  image="/moodTracking/final-design.png"
                  alt="Mood Tracking Motion Graphic Video Final Design"
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
              </div> */}

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

              {/* <div className={styles.nextProject}>
                <h2>Next Project is...</h2>
                <NextCard
                  name="Etoile Ballet Poster"
                  image="/teaddy-homepage.png"
                  alt="Etoile Ballet Academy poster"
                  link="/Etoile Ballet Academy poster"
                  button="Next Project"
                />
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <ScrollButton />
      <Footer />
    </div>
  );
}
