import { useState } from "react";
import styles from "./ImageModal.module.css";

export default function ImageModal({ src, alt, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={styles.img}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modal}>
            <img src={src} alt={alt} />
          </div>
        </div>
      )}
    </>
  );
}
