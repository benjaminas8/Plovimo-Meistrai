"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getMessage() {
      try {
        const res = await fetch("/api/hello");
        if (!res.ok) throw new Error("Failed to fetch API");
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getMessage();
  }, []);

  return (
    <main>
      <h1>Plovimo meistrai</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        doloremque delectus tempore magni enim voluptatem sunt quod vel, iure
        reprehenderit blanditiis assumenda quae, a eius, quisquam obcaecati
        corporis laborum quis.
      </p>
      {loading ? (
        <p>Loading API data...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>API data: {message}</p>
      )}
    </main>
  );
}
