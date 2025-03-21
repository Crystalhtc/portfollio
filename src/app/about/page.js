"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import { motion } from "framer-motion";
import DanceGame from "../components/DanceGame";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6 },
  }),
};

const connectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.8 }, 
  },
};

export default function About() {
  const skills = [
    {
      title: "Graphics and Design Skills",
      description:
        "Prototyping, Wireframing, User Research, User Testing, Project Management",
    },
    {
      title: "Design Tools",
      description:
        "Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Indesign, Canva",
    },
    {
      title: "Development Skills",
      description:
        "HTML, CSS, JavaScript, Node.js, React, React Native, Next.js, Expo, Bootstrap, GitHub, WordPress",
    },
    {
      title: "Language Skills",
      description: "Cantonese, English, Mandarin, Japanese",
    },
  ];

  const interests = [
    {
      title: "Dancing 🩰",
      description:
        "I love dancing, especially ballet. It allows me to express emotions through movement and brings a sense of grace and discipline.",
      image: "/ballet.png",
    },
    {
      title: "Watching Anime and Dramas 🎥",
      description:
        "I enjoy watching anime and dramas. They allow me to escape into different stories and inspire my creativity.",
      image: "/anime.png",
    },
    {
      title: "Listening to Music 🎵",
      description:
        "Music has always been a big part of my life, and lately, I've been enjoying J-pop. It helps me relax and stay focused.",
      image: "/music.png",
    },
    {
      title: "Traveling ✈️",
      description:
        "I love traveling and have visited places like Japan, Taiwan, Australia, Switzerland, Thailand, and Malaysia. Each trip brings new experiences and perspectives.",
      image: "/travel.png",
    },
  ];

  const interestRef = useRef(null);
  const slidesRef = useRef(null);
  const [isInterestVisible, setIsInterestVisible] = useState(false);
  const [activeInterestIndex, setActiveInterestIndex] = useState(0);
  const [scrollSource, setScrollSource] = useState(null); // 'hover' or 'scroll'
  const scrollTimeoutRef = useRef(null);
  const isManualScrollRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInterestVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (interestRef.current) {
      observer.observe(interestRef.current);
    }

    return () => {
      if (interestRef.current) {
        observer.unobserve(interestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (slidesRef.current && scrollSource === 'hover') {
      const imageHeight = slidesRef.current.children[0].offsetHeight;
      const targetScrollTop = activeInterestIndex * imageHeight;
      
      isManualScrollRef.current = true;
      
      slidesRef.current.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
      
      setTimeout(() => {
        isManualScrollRef.current = false;
      }, 500);
    }
    
    const timeout = setTimeout(() => {
      setScrollSource(null);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [activeInterestIndex, scrollSource]);

  useEffect(() => {
    const handleScroll = () => {
      if (!slidesRef.current || isManualScrollRef.current) return;
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        const imageHeight = slidesRef.current.children[0].offsetHeight;
        const scrollTop = slidesRef.current.scrollTop;
        
        const index = Math.round(scrollTop / imageHeight);
        
        if (index !== activeInterestIndex && index >= 0 && index < interests.length) {
          setScrollSource('scroll');
          setActiveInterestIndex(index);
        }
      }, 50);
    };

    if (slidesRef.current) {
      slidesRef.current.style.scrollBehavior = 'smooth';
      slidesRef.current.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (slidesRef.current) {
        slidesRef.current.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeInterestIndex, interests.length, scrollSource]);

  const handleInterestHover = (index) => {
    setScrollSource('hover');
    setActiveInterestIndex(index);
  };

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
                  src="/profile-pic-square.png"
                  alt="Crystal Cheung"
                  width="300"
                  className={styles.profilePic}
                />
              </div>
              <div className={styles.text}>
                <p>
                  Hi! I'm Crystal Cheung, a UX/UI designer with a background in
                  social sciences. I love creating designs that aren't just
                  pretty but actually make people's lives easier and more
                  enjoyable!
                </p>
                <p>
                  I'm currently studying Digital Design and Development at BCIT,
                  where I've been diving into UX research, wireframing, and
                  prototyping. My social sciences background helps me understand
                  people on a deeper level, so I always design with empathy and
                  a user-first mindset.
                </p>
                <p>
                  When I'm not designing, you'll probably find me dancing
                  ballet. Whether I'm perfecting a pirouette or refining a user
                  flow, I believe great design, just like dance, is all about
                  precision, balance, and creativity.
                </p>
                <p>
                  Excited to connect and create meaningful experiences together!
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className={styles.connect}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={connectVariants}
          >
            <div className={styles.social}>
              <h2>Connect with me!</h2>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/crystal-cheunghtc/"
                  target="_blank"
                >
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
              <a
                className={styles.button}
                href="https://drive.google.com/file/d/10Nc8TYV3dkn4aR8IB-kjcmLq0EuW9H3L/view?usp=sharing"
                target="_blank"
              >
                <button>Resume</button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.skillSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={styles.interestTitle}>My Skills</h2>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.skills}
                variants={itemVariants}
                custom={index}
              >
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            ref={interestRef}
            className={styles.interestSection}
            initial="hidden"
            animate={isInterestVisible ? "visible" : "hidden"}
          >
            <div>
              <h2 className={styles.interestTitle}>What I like to do...</h2>
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className={`${styles.interest} ${
                    index === activeInterestIndex ? styles.interestActive : ""
                  }`}
                  variants={itemVariants}
                  custom={index}
                  onMouseEnter={() => handleInterestHover(index)}
                >
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </motion.div>
              ))}
            </div>
            <div className={styles.slidesContainer}>
              <div className={styles.slides} ref={slidesRef}>
                {interests.map((interest, index) => (
                  <div key={index} className={styles.imageWrapper}>
                    <img
                      src={interest.image}
                      alt={`Crystal ${interest.title.toLowerCase()}`}
                      width="250"
                      className={styles.interestImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className={styles.danceGame}>
          <DanceGame />
        </div>
      </main>
      <ScrollButton />
      <Footer />
    </div>
  );
}