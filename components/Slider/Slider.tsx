"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./slider.module.css";

interface SliderProps {
  images: string[];
  category?: string;
  imageAlt?: string;
  imageTitle?: string;
}

export default function Slider({ 
  images, 
  category = "Paslaugų", 
  imageAlt = "Plovimo paslaugos visoje Lietuvoje",
  imageTitle = "Profesionalios plovimo paslaugos"
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <figure 
      className={styles.slider}
      role="group"
      aria-label={`${category} nuotraukų galerija`}
    >
      <button 
        className={styles.navButton} 
        onClick={prevSlide}
        aria-label="Ankstesnė nuotrauka"
        title="Ankstesnė nuotrauka"
      >
        ❮
      </button>
      <div 
        className={styles.imageWrapper}
        role="img"
        aria-label={`${currentIndex + 1} nuotrauka iš ${images.length}`}
      >
        <Image
          src={images[currentIndex]}
          alt={`${imageAlt} - ${currentIndex + 1} nuotrauka iš ${images.length}`}
          title={`${imageTitle} - ${currentIndex + 1} nuotrauka iš ${images.length}`}
          fill
          sizes="(max-width: 1000px) 100vw, 1000px"
          style={{
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "15px",
          }}
          priority={currentIndex === 0}
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />
      </div>
      <button 
        className={styles.navButton} 
        onClick={nextSlide}
        aria-label="Kita nuotrauka"
        title="Kita nuotrauka"
      >
        ❯
      </button>
      <figcaption className={styles.imageCounter}>
        <span className={styles.srOnly}>Nuotraukų galerijos navigacija</span>
        <div className={styles.dots} role="tablist">
          {images.map((_, index) => (
            <button
              key={index}
              className={styles.dot + ' ' + (index === currentIndex ? styles.activeDot : '')}
              onClick={() => setCurrentIndex(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Pereiti į ${index + 1} nuotrauką iš ${images.length}`}
              title={`${index + 1} nuotrauka iš ${images.length}`}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
