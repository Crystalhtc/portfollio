"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import Graphic from "../components/Graphic";


export default function About() {
  

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          
          <div className={styles.projects}>
            <Graphic />
          </div>
          
        </div>
      </main>
      <ScrollButton />
      <Footer />
    </div>
  );
}