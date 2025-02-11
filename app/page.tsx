"use client";

// import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Slider from "../components/Slider/Slider";

export default function Home() {
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   async function getMessage() {
  //     try {
  //       const res = await fetch("/api/hello");
  //       if (!res.ok) throw new Error("Failed to fetch API");
  //       const data = await res.json();
  //       setMessage(data.message);
  //     } catch (err) {
  //       setError((err as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   getMessage();
  // }, []);

  return (
    <main className={styles.main}>
      <div className={styles.Introduction}>
        <h1>Plovimo meistrai</h1>
        <p>
          Mes siūlome aukščiausios kokybės trinkelių, stogų, fasado plovimo ir
          dažymo paslaugas. Naudojame tik pažangias technologijas ir saugias
          medžiagas, kad jūsų namų ir kiemo išvaizda būtų nepriekaištinga.
        </p>
        <p>
          Pasirūpinkite savo namų grožiu jau šiandien! Susisiekite su mumis ir
          sužinokite daugiau apie mūsų paslaugas.
        </p>
        <button className={styles.button}>Susisiekime</button>
      </div>
      <Slider></Slider>
      {/* {loading ? (
        <p>Loading API data...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>API data: {message}</p>
      )} */}
    </main>
  );
}
