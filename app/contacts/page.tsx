import styles from "./page.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export function generateMetadata() {
  return {
    title: "Susisiekite - Plovimo Meistrai",
    description:
      "Susisiekite su mumis dėl trinkelių, stogų, ar fasadų valymo paslaugų Vilniuje.",
    openGraph: {
      title: "Susisiekite su mumis - Plovimo Meistrai",
      description: "Susisiekite su mumis dėl profesionalių valymo paslaugų",
    },
  };
}

export default function ContactsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        <h1 className={styles.contactsHeader}>Kontaktai</h1>
        <p>
          Susisiekite su mumis dėl paslaugų užsakymo ar konsultacijos!
          Atsakysime į visus Jūsų klausimus.
        </p>
      </div>
      <div className={styles.contactsWrapper}>
        <div className={styles.contactCard}>
          <h3>Telefonas</h3>
          <a href="tel:+37067797443" className={styles.contactLink}>
            +370 677 97443
          </a>
        </div>
        <div className={styles.contactCard}>
          <h3>El. paštas</h3>
          <p className={styles.contactText}>plovimomeistrai@gmail.com</p>
        </div>
        <div className={styles.contactCard}>
          <h3>Dirbame</h3>
          <p className={styles.contactText}>Visoje Lietuvoje</p>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <h2>Greita užklausa</h2>
        <ContactForm />
      </div>
    </main>
  );
}
