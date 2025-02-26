"use client";
import styles from "./Remedify.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
                <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              >
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
                </motion.div>
              </div>

              <div className={styles.prototypeBanner} id="final-video">
                <div className={styles.prototypeTitle}>
                  <h2>Final Video</h2>
                </div>
                <div className={styles.prototypes}>
                  <div className={styles.prototypeContainer}>
                  {/* <div className={styles.prototypeContainer}>
                    <iframe src="https://www.youtube.com/watch?v=Olqu-rU1vaI" allowFullScreen />
                  </div> */}
                  <video controls autoPlay loop poster="/moodTracking/thumbnail.png" className={styles.prototypeContainer}>
                    <source src="/moodTracking/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                  <div className={styles.nextButton}>
                    <a className={styles.button} href="https://www.youtube.com/watch?v=Olqu-rU1vaI" target="_blank">
                    <button>View on Youtube</button>
                  </a>
                </div>
                </div>
                </div>
              </div>

              <div className={styles.detailsContainer} id="research">
                <div className={styles.details}>
                  <h2>Research and Concept Development</h2>
                  <p>Conducted in-depth research on mood tracking and its psychological benefits, and developed a structured script and storyboard, ensuring a logical flow of information..</p>
                </div>
                <div className={styles.wireframeImages}>
                  <img
                    src="/moodTracking/inspiration.png"
                    alt="Mood Tracking Inspiration"
                    width="600"
                    className={styles.wireframeImage}
                  />
                </div>
                <div className={styles.details}>
                  <ul className={styles.detailsList}>
                    <div>
                        <li className={styles.bold}>Identified three key benefits:</li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Creating Space:</span>{" "}
                          Allows individuals to step back and process emotions without immediate reaction.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Recognizing Patterns:</span>{" "}
                          Helps detect emotional triggers and trends over time.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Better Self-Care: </span>
                          Encourages self-awareness, leading to improved coping strategies and self-improvement.
                          </li>
                    </div>
                    <div>
                        <li className={styles.bold}>Explored three common ways to track moods:</li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Mood Journal:</span>{" "}
                          Writing daily reflections to understand emotional trends.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Mood Chart</span>{" "}
                          Visualizing emotions over time using colors, numbers, or symbols.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Mood Tracking Apps: </span>
                          Digital tools with reminders and insights for easier tracking.
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
                          <span className={styles.semiBold}>Brown & Soft Yellow:</span>{" "}
                          Serve as neutral, grounding colors to create warmth and familiarity.
                        </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Gray: </span>
                          A neutral complement that adds balance to the design.
                          </li>
                      </div>
                      <div>
                        <li className={styles.bold}>Typography: </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Quicksand: </span> 
                          Chosen due to its rounded form, ensuring a friendlines and accessibility.
                        </li>
                      </div>
                      <div>
                        <li className={styles.bold}>Graphic Style: </li>
                        <li className={styles.subIndent}>
                          <span className={styles.semiBold}>Flat vector illustrations: </span> 
                          Simple, clean, and visually engaging.
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.detailsContainer} id="color">
                <div className={styles.details}>
                  <h2>Color Usage</h2>
                  <p>Color plays a critical role in scene transitions and mood representation, helping to establish different settings and emotional states. This approach ensures a smooth visual flow while reinforcing the key message of how mood tracking can improve well-being.</p>
                </div>
                <div className={styles.wireframeImages}>
                  <img
                    src="/moodTracking/scene-transition.png"
                    alt="Mood Tracking Motion Graphic Video Color Usage"
                    width="600"
                    className={styles.wireframeImage}
                  />
                </div>
                <div className={styles.details}>
                  <h3>Scene Transitions:</h3>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Train Scene (Gray Tone):</li>
                      <li className={styles.indent}>
                        Shows the tiring, routine feeling of commuting.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Office Scene (Blue Tone):</li>
                      <li className={styles.indent}>
                        Represents a busy and structured work setting, where stress can build up.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Home Scene (Yellow Tone):</li>
                      <li className={styles.indent}>
                        Creates a cozy and familiar atmosphere, but emotions can still fluctuate.
                      </li>
                    </div>
                  </ul>
                </div>
                  <div className={styles.wireframeImages}>
                      <img
                        src="/moodTracking/mood-change.png"
                        alt="Mood Changes"
                        width="600"
                        className={styles.wireframeImage}
                      />
                  </div>
                  <div className={styles.details}>
                    <h3>Mood Changes:</h3>
                  <ul className={styles.detailsList}>
                    <div>
                      <li className={styles.bold}>Anxiety & Stress (Purple Background): </li>
                      <li className={styles.indent}>
                        Shows the tiring, routine feeling of commuting.
                      </li>
                    </div>
                    <div>
                      <li className={styles.bold}>Calm & Balance (Green Background): </li>
                      <li className={styles.indent}>
                        Symbolizing peace and emotional stability after mood tracking.
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className={styles.initialHiFi} id="key-motion">
                <ContentSection
                  title="Key Animations"
                  image="/moodTracking/key-animation.gif"
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
                    'Learned how to "Show Not Tell" by using visual storytelling to convey complex ideas and emotions.',
                    'Discovered the importance of color psychology in setting the tone and mood of a narrative.',
                    'Enhanced skills in character design and animation to create relatable and engaging visuals.',
                  ]}
                />
              </div>

              <div className={styles.nextProject}>
                <h2>Next Project is...</h2>
                <NextCard
                  name="Remedify"
                  image="/remedify-homepage.png"
                  alt="Remedify"
                  link="/remedify"
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
