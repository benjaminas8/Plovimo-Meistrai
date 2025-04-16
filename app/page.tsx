"use client";

// import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "../components/Slider/Slider";
import "@fontsource/rubik";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";

const facadeImages = [
  "/images/cleaning1.jpeg",
  "/images/cleaning2.jpeg",
  "/images/cleaning3.jpeg",
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.Introduction}>
        <div>
          {" "}
          <h1 className={styles.IntroductionH1}>Plovimo meistrai</h1>
          <p className={styles.IntroductionP}>
            Aukščiausios kokybės trinkelių, stogų, fasado plovimo ir dažymo
            paslaugos.
          </p>
        </div>

        <p className={styles.IntroductionList}>
          <span>
            <strong>Svarbiausia:</strong>
          </span>

          <span>✅ Pažangios technologijos</span>
          <span>✅ Saugios medžiagos</span>
          <span>✅ Nepriekaištingas rezultatas</span>
        </p>

        <p className={styles.IntroductionP}>
          <strong>Susisiekite su mumis</strong> ir užsisakykite paslaugas jau
          šiandien!
        </p>
        <div className={styles.button}>
          <Image
            src="/images/phone-icon.png"
            alt="Plovimo Meistrai Logo"
            width={25}
            height={25}
            priority
          />
          <span>Susisiekime</span>
        </div>
      </div>
      <Slider images={facadeImages} />
      {}
    </main>
  );
}
