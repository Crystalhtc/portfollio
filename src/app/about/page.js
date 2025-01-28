"use client";
import styles from "./About.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";

export default function About() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        
        <div className={styles.content}>
          <div className={styles.details}>
            <h1 className={styles.heading}>Who is Crystal?</h1>
            <div className={styles.about}>
              <div className={styles.profilePic}>
                <img
                  src="/profile-pic.png"
                  alt="Crystal Cheung"
                  width="300"
                  className={styles.profilePic}
                />
              </div>
              <div className={styles.text}>
                <p>
                  Hi! I am a student of the Digital Design and Development program at British Columbia Institute of Technology (BCIT). I aspire to specialize as a UX/UI designer with front-end development skills, and my passion lies in crafting innovative digital experiences.
                </p>
                <p>
                  My background in social science and internship experiences have honed my skills in graphic design, communication, and problem-solving, which are crucial for creating engaging and user-friendly web applications.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.connect}>
            <div className={styles.social}>
              <h2>Connect with me!</h2>
              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/crystal-cheunghtc/" target="_blank">
                  <img
                    src="/linkedin.svg"
                    alt="Crystal's LinkedIn"
                    width="40"
                    className={styles.socialIcon}
                  />
                </a>
                <a href="mailto:crystalhtcheung@gmail.com" target="_blank">
                  <img
                    src="/email.svg"
                    alt="Crystal's email"
                    width="40"
                    className={styles.socialIcon}
                  />
                </a>
              </div>
            </div>
            <div className={styles.resume}>
              <h2>Check out my resume!</h2>
              <a href="https://drive.google.com/file/d/10Nc8TYV3dkn4aR8IB-kjcmLq0EuW9H3L/view?usp=sharing" target="_blank">
                <button>Resume</button>
              </a>
            </div>
          </div>

          <div className={styles.interestSection}>
            <h2 className={styles.interestTitle}>My Skills</h2>
            <div className={styles.interest}>
              <h3>Graphics and Design Skills</h3>
              <p>
                Prototyping, Wireframing, User Research, User Testing, Project Management
              </p>
            </div>
            <div className={styles.interest}>
              <h3>Design Tools</h3>
              <p>
                Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Indesign, Canva
              </p>
            </div>
            <div className={styles.interest}>
              <h3>Development Skills</h3>
              <p>
                HTML, CSS, JavaScript, Node.js, React, React Native, Next.js, Expo, Bootstrap, GitHub, WordPress
              </p>
            </div>
            <div className={styles.interest}>
              <h3>Language Skills</h3>
              <p>
                Cantonese, English, Mandarin, Japanese
              </p>
            </div>
          </div>

          <div className={styles.interestSection}>
            <h2 className={styles.interestTitle}>What I like to do...</h2>
            <div className={styles.interest}>
              <h3>Dancing 🩰</h3>
              <p>
                I’ve been dancing ballet since I was 5, and I still love it at 24. Ballet has taught me discipline and how to express myself through movement.
              </p>
            </div>
            <div className={styles.interest}>
              <h3>Watching Anime and Dramas 🎥</h3>
              <p>
                I enjoy watching anime and dramas. They allow me to escape into different stories and inspire my creativity.
              </p>
            </div>
            <div className={styles.interest}>
              <h3>Listening to Music 🎵</h3>
              <p>
                Music has always been a big part of my life, and lately, I’ve been enjoying J-pop. It helps me relax and stay focused.
              </p>
            </div>
            <div className={styles.interest}>
              <h3>Traveling ✈️</h3>
              <p>
                I love traveling and have visited places like Japan, Taiwan, Australia, Switzerland, Thailand, and Malaysia. Each trip brings new experiences and perspectives.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ScrollButton/>
      <Footer />
    </div>
  );
}
