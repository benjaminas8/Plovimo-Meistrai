"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function ContactsPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Siunčiama...");

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Žinutė išsiųsta sėkmingai!");
      form.reset();
    } else {
      setStatus("Įvyko klaida. Bandykite dar kartą.");
    }
  }

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
          <a href="plovimomeistrai@gmail.com" className={styles.contactLink}>
            plovimomeistrai@gmail.com
          </a>
        </div>
        <div className={styles.contactCard}>
          <h3>Adresas</h3>
          <p>Vilnius, Lietuva</p>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <h2>Greita užklausa</h2>
        <form
          className={styles.contactForm}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Jūsų vardas" required />
          <input
            type="tel"
            name="phone"
            placeholder="Telefono numeris"
            required
          />
          <input type="email" name="email" placeholder="El. paštas" required />
          <textarea
            name="message"
            placeholder="Jūsų žinutė"
            rows={4}
            required
          />
          <button type="submit" className={styles.button}>
            Siųsti
          </button>
          {status && <div>{status}</div>}
        </form>
      </div>
    </main>
  );
}
