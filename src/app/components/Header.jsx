"use client";
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            setIsTransitioning(true);
            
            // Reset transitioning state after animation completes
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
            }, 300); // Match this with CSS transition duration
            
            return () => clearTimeout(timeout);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <a href="/" className={styles.name}>
                    <div className={styles.logoContainer}>
                        <img
                            src="/logo.svg"
                            alt="Crystal Cheung's logo"
                            className={`${styles.logo} ${isScrolled ? styles.logoHidden : ''} ${isTransitioning ? styles.transitioning : ''}`}
                            loading="lazy"
                        />
                        <span className={`${styles.textLogo} ${isScrolled ? styles.textLogoVisible : ''} ${isTransitioning ? styles.transitioning : ''}`}>
                            Crystal Cheung
                        </span>
                    </div>
                </a>
                
                <a
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </a>
            </nav>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.menuContent}>
                    <button 
                        className={styles.closeButton}
                        onClick={closeMenu}
                        aria-label="Close menu"
                    />
                    <div className={styles.links}>
                        <a href="/" onClick={closeMenu}>Projects</a>
                        <a href="/about" onClick={closeMenu}>About</a>
                    </div>
                </div>
            </div>
            
            {/* <div 
                className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ''}`}
                onClick={closeMenu}
                aria-label="Close menu overlay"
            /> */}

            {isMenuOpen ? (
                <div 
                    className={styles.overlay}
                    onClick={closeMenu}
                    aria-label="Close menu overlay"
                />
                ) : (
                <></>
            )}
        </header>
    );
}