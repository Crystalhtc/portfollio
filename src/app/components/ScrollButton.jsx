"use client"
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import styles from "./ScrollButton.module.css";

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
        window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return (
        <>
        {isVisible && (
            <button
            onClick={scrollToTop}
            className={styles.scroll}
            aria-label="Scroll to top"
            >
                <ChevronUp size={30} />
            </button>
        )}
        </>
    );
};

export default ScrollButton;
