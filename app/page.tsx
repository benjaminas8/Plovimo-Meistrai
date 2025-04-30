"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/Slider/Slider";
import "@fontsource/rubik";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import Link from "next/link";
import Script from "next/script";

const facadeImages = [
  "/images/paving5.jpeg",
  "/images/cleaning1.jpg",
  "/images/paving4.jpeg",
];

export default function Home() {
  return (
    <>
      <Script
        id="local-business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Plovimo Meistrai",
            image: "https://plovimomeistrai.lt/images/logo.png",
            "@id": "https://plovimomeistrai.lt",
            url: "https://plovimomeistrai.lt",
            telephone: "+370 677 97443",
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              addressCountry: "LT"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 54.6872,
              longitude: 25.2797
            },
            areaServed: {
              "@type": "Country",
              name: "Lietuva"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Valymo paslaugos",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stogų plovimas",
                    url: "https://plovimomeistrai.lt/services/stogu-plovimas"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fasadų plovimas",
                    url: "https://plovimomeistrai.lt/services/fasadu-plovimas"
                  }
                }
              ]
            }
          })
        }}
      />
      <main className={styles.main}>
        <div className={styles.Introduction}>
          <div>
            <h1 className={styles.IntroductionH1}>
              Plovimo meistrai - Profesionalios paviršių valymo paslaugos
            </h1>
            <p className={styles.IntroductionP}>
              Aukščiausios kokybės stogų ir fasadų plovimo ir dažymo
              paslaugos visoje Lietuvoje.
            </p>
          </div>

          <div className={styles.IntroductionList} role="list">
            <span>
              <strong>Svarbiausia:</strong>
            </span>
            <span role="listitem">✅ Pažangios technologijos</span>
            <span role="listitem">✅ Saugios medžiagos</span>
            <span role="listitem">✅ Nepriekaištingas rezultatas</span>
          </div>

          <p className={styles.IntroductionP}>
            <strong>Susisiekite su mumis</strong> ir užsisakykite paslaugas jau
            šiandien!
          </p>
          <Link 
            className={styles.buttonLink} 
            href="/contacts"
            title="Susisiekti dėl paslaugų"
            aria-label="Susisiekti dėl paslaugų"
          >
            <div className={styles.button}>
              <Image
                src="/images/phone-icon.png"
                alt="Susisiekti telefonu"
                width={25}
                height={25}
                priority
              />
              <span>Susisiekti</span>
            </div>
          </Link>
        </div>
        <Slider images={facadeImages} />
      </main>
    </>
  );
}
