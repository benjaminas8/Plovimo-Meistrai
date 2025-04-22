import styles from "./page.module.css";
import Slider from "@/components/Slider/Slider";
import Script from "next/script";

export function generateMetadata() {
  return {
    title: "Mūsų paslaugos - Plovimo Meistrai",
    description:
      "Profesionalios trinkelių, stogų, fasadų valymo paslaugos Vilniuje ir apylinkėse.",
  };
}

const facadeImages = [
  "/images/cleaning1.jpeg",
  "/images/cleaning2.jpeg",
  "/images/cleaning3.jpeg",
];
const pavingImages = [
  "/images/paving1.png",
  "/images/paving2.jpeg",
  "/images/paving3.jpg",
];
const roofImages = [
  "/images/roof1.jpeg",
  "/images/roof2.jpg",
  "/images/roof3.jpg",
];

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Paviršių valymo paslaugos",
            provider: {
              "@type": "LocalBusiness",
              name: "Plovimo Meistrai",
            },
            areaServed: {
              "@type": "Country",
              name: "Lietuva",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Valymo paslaugos",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Trinkelių valymas",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stogų valymas",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fasadų valymas",
                  },
                },
              ],
            },
          }),
        }}
      />
      <main className={styles.main}>
        <h1 className={styles.servicesHeader}>Mūsų paslaugos</h1>
        <div className={styles.servicesWrapper}>
          <div className={styles.serviceCard}>
            <Slider images={facadeImages} />
            <h2>Namų fasadų valymas</h2>
            <p className={styles.serviceCardDescriptionParagraph}>
              Profesionaliai nuvalome namų fasadus nuo purvo, dulkių, samanų ir
              kitų nešvarumų. Atstatome pastato išvaizdą, naudojame saugias ir
              efektyvias valymo priemones, kad jūsų namai vėl spindėtų švara.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Slider images={pavingImages} />
            <h2>Trinkelių valymas</h2>
            <p className={styles.serviceCardDescriptionParagraph}>
              Atgaiviname trinkeles pašalindami samanas, kerpes, alyvos dėmes ir
              kitus nešvarumus. Mūsų valymo technologijos užtikrina, kad
              trinkelės išliktų tvarkingos ir saugios vaikščioti visus metus.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Slider images={roofImages} />
            <h2>Stogų valymas</h2>
            <p className={styles.serviceCardDescriptionParagraph}>
              Saugiai ir kruopščiai valome stogus nuo samanų, lapų, purvo bei
              kitų apnašų. Taip prailginame stogo tarnavimo laiką ir užtikriname
              estetišką jūsų namo išvaizdą.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
