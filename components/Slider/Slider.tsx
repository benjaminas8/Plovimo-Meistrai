"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./slider.module.css";

const images = [
  "/images/cleaning1.jpeg",
  "/images/cleaning2.jpeg",
  "/images/cleaning3.jpeg",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  console.log("Slider component is rendering");

  return (
    <div className={styles.slider}>
      <button className={styles.navButton} onClick={prevSlide}>
        ❮
      </button>
      <div className={styles.imageWrapper}>
        <Image
          src={images[currentIndex]}
          alt="Cleaning service"
          fill
          sizes="(max-width: 1000px) 100vw, 1000px"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <button className={styles.navButton} onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}
