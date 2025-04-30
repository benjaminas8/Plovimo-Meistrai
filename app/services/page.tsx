"use client";

import styles from "./page.module.css";
import Script from "next/script";
import Slider from "@/components/Slider/Slider";

const facadeImages = [
  "/images/cleaning1.jpg",
  "/images/cleaning2.jpg",
  "/images/cleaning3.jpg",
  "/images/cleaning4.jpg",
  "/images/cleaning5.jpg",
  "/images/cleaning6.jpg",
  "/images/cleaning7.jpg",
  "/images/cleaning8.jpg",
];

const pavingImages = [
  "/images/paving1.jpg",
  "/images/paving2.jpeg",
  "/images/paving3.jpg",
  "/images/paving4.jpeg",
  "/images/paving5.jpeg",
  "/images/paving6.jpeg",
];

const roofImages = ["/images/roof1.jpg", "/images/roof2.jpeg"];

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Plovimo Meistrai - Paslaugos",
            description: "Profesionalios valymo paslaugos: stogų plovimas, fasadų plovimas. Dirbame visoje Lietuvoje.",
            url: "https://plovimomeistrai.lt/services",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "Service",
                  name: "Stogų plovimas",
                  url: "https://plovimomeistrai.lt/services/stogu-plovimas",
                  description: "Profesionalus stogų plovimas ir valymas"
                },
                {
                  "@type": "Service",
                  name: "Fasadų plovimas",
                  url: "https://plovimomeistrai.lt/services/fasadu-plovimas",
                  description: "Efektyvus fasadų plovimas ir atnaujinimas"
                }
              ]
            }
          })
        }}
      />
      <main className={styles.main}>
        <h1 className={styles.servicesHeader}>
          Profesionalios paviršių valymo paslaugos visoje Lietuvoje
        </h1>
        <div className={styles.servicesWrapper} role="list">
          <article className={styles.serviceCard} role="listitem">
            <Slider images={facadeImages} />
            <h2>Namų fasadų valymas</h2>
            <p className={styles.serviceCardDescriptionParagraph} itemProp="description">
              Profesionaliai nuvalome namų fasadus nuo purvo, dulkių, samanų ir
              kitų nešvarumų visoje Lietuvoje. Naudojame modernią aukšto slėgio įrangą 
              ir saugias valymo priemones. Mūsų patirtis leidžia užtikrinti aukščiausią
              kokybę ir ilgalaikį rezultatą. Dirbame visuose Lietuvos regionuose.
            </p>
            <meta itemProp="areaServed" content="Lietuva" />
            <meta itemProp="serviceType" content="Fasadų valymas" />
          </article>

          <article className={styles.serviceCard} role="listitem">
            <Slider images={pavingImages} />
            <h2>Trinkelių valymas</h2>
            <p className={styles.serviceCardDescriptionParagraph} itemProp="description">
              Atgaiviname trinkeles pašalindami samanas, kerpes, alyvos dėmes ir
              kitus nešvarumus. Mūsų profesionalios valymo technologijos ir
              specializuotos priemonės užtikrina, kad trinkelės išliktų tvarkingos
              ir saugios vaikščioti visus metus. Teikiame paslaugas visoje Lietuvoje
              tiek privatiems, tiek komerciniams klientams.
            </p>
            <meta itemProp="areaServed" content="Lietuva" />
            <meta itemProp="serviceType" content="Trinkelių valymas" />
          </article>

          <article className={styles.serviceCard} role="listitem">
            <Slider images={roofImages} />
            <h2>Stogų valymas</h2>
            <p className={styles.serviceCardDescriptionParagraph} itemProp="description">
              Saugiai ir kruopščiai valome stogus nuo samanų, lapų, purvo bei
              kitų apnašų visoje Lietuvoje. Mūsų specialistai naudoja pažangias valymo 
              technologijas ir laikosi visų saugumo reikalavimų. Prailginame stogo 
              tarnavimo laiką ir užtikriname estetišką jūsų namo išvaizdą. Dirbame su 
              visų tipų stogų dangomis visuose Lietuvos regionuose.
            </p>
            <meta itemProp="areaServed" content="Lietuva" />
            <meta itemProp="serviceType" content="Stogų valymas" />
          </article>
        </div>
      </main>
    </>
  );
}
