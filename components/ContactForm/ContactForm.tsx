"use client";
import { useState } from "react";
import styles from "../../app/contacts/page.module.css";

export default function ContactForm() {
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
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Jūsų vardas" required />
      <input type="tel" name="phone" placeholder="Telefono numeris" required />
      <input type="email" name="email" placeholder="El. paštas" required />
      <textarea name="message" placeholder="Jūsų žinutė" rows={4} required />
      <button type="submit" className={styles.button}>
        Siųsti
      </button>
      {status && <div>{status}</div>}
    </form>
  );
}
