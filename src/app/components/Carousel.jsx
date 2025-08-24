"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ images = [], aspect = "1 / 1", ariaLabel = "Image carousel" }) {
  const viewportRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Snap to a specific slide
  const goTo = useCallback((i) => {
    const el = viewportRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(i, images.length - 1));
    const slide = el.children[0]?.children[clamped];
    if (slide) slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [images.length]);

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Track current index on scroll
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const handler = () => {
      const slideWidth = el.clientWidth;
      const i = Math.round(el.scrollLeft / slideWidth);
      setIndex(i);
    };

    el.addEventListener("scroll", handler, { passive: true });
    // Initialize index in case of SSR/refresh
    handler();
    return () => el.removeEventListener("scroll", handler);
  }, []);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className={styles.wrapper} aria-label={ariaLabel}>
      <div className={styles.viewport} ref={viewportRef}>
        <ul className={styles.track}>
          {images.map((img, i) => (
            <li className={styles.slide} key={img.src}>
              <div className={styles.media} style={{ aspectRatio: aspect }}>
                {/* Use next/image if you prefer; plain img keeps it simple */}
                <img
                  src={img.src}
                  alt={img.alt || `Slide ${i + 1}`}
                  className={styles.image}
                  draggable={false}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        onClick={prev}
        aria-label="Previous slide"
        disabled={index === 0}
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        onClick={next}
        aria-label="Next slide"
        disabled={index === images.length - 1}
      >
        ›
      </button>

      <div className={styles.dots} role="tablist" aria-label="Carousel pagination">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
