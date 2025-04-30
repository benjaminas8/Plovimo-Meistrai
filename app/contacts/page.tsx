"use client";

import styles from "./page.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Script from "next/script";

export default function ContactsPage() {
  return (
    <>
      <Script
        id="contacts-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Plovimo Meistrai - Kontaktai",
            description:
              "Susisiekite su mumis dėl profesionalių valymo paslaugų. Nemokamai įvertinsime darbų apimtis ir pateiksime pasiūlymą.",
            url: "https://plovimomeistrai.lt/contacts",
            mainEntity: {
              "@type": "Organization",
              name: "Plovimo Meistrai",
              telephone: "+370 677 97443",
              email: "plovimomeistrai@gmail.com",
              areaServed: {
                "@type": "Country",
                name: "Lietuva",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+370 677 97443",
                email: "plovimomeistrai@gmail.com",
                contactType: "customer service",
                areaServed: "LT",
                availableLanguage: ["lt", "en", "ru"],
              },
            },
          }),
        }}
      />
      <main className={styles.main}>
        <div className={styles.introduction}>
          <h1 className={styles.contactsHeader}>Susisiekite su mumis</h1>
          <p itemProp="description">
            Susisiekite su mumis dėl paslaugų užsakymo ar nemokamos
            konsultacijos. Atsakysime į visus Jūsų klausimus ir pateiksime
            geriausią sprendimą.
          </p>
        </div>
        <div
          className={styles.contactsWrapper}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div className={styles.contactCard}>
            <h3>Telefonas</h3>
            <a
              href="tel:+37067797443"
              className={styles.contactLink}
              itemProp="telephone"
              title="Paskambinti"
              aria-label="Paskambinti telefonu +370 677 97443"
            >
              +370 677 97443
            </a>
          </div>
          <div className={styles.contactCard}>
            <h3>El. paštas</h3>
            <a
              href="mailto:plovimomeistrai@gmail.com"
              className={styles.contactText}
              itemProp="email"
              title="Siųsti el. laišką"
              aria-label="Siųsti el. laišką į plovimomeistrai@gmail.com"
            >
              plovimomeistrai@gmail.com
            </a>
          </div>
          <div className={styles.contactCard}>
            <h3>Dirbame</h3>
            <p className={styles.contactText} itemProp="areaServed">
              Visoje Lietuvoje
            </p>
          </div>
        </div>
        <section className={styles.formWrapper}>
          <h2>Greita užklausa</h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
