"use client";
"use client";
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
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
                    {isScrolled ? (
                        <span className={styles.textLogo}>Crystal Cheung</span>
                    ) : (
                        <img
                            src="/logo.svg"
                            alt="Crystal Cheung's logo"
                            className={styles.logo}
                            loading="lazy"
                        />
                    )}
                </a>
                
                <a
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </a>
            </nav>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.menuContent}>
                    <button 
                        className={styles.closeButton}
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        {/* <X size={32} /> */}
                    </button>
                    <div className={styles.links}>
                        <a href="/" onClick={closeMenu}>Projects</a>
                        <a href="/about" onClick={closeMenu}>About</a>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            
                <div 
                    className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ''}`}
                    onClick={closeMenu}
                    aria-label="Close menu overlay"
                />
            
        </header>
    );
}