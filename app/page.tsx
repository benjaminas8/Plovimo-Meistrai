async function getMessage() {
  const res = await fetch(`http://localhost:3000/api/hello`);
  return res.json();
}

export default async function Home() {
  const data = await getMessage();
  return (
    <main>
      <h1>Plovimo meistrai</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        doloremque delectus tempore magni enim voluptatem sunt quod vel, iure
        reprehenderit blanditiis assumenda quae, a eius, quisquam obcaecati
        corporis laborum quis.
      </p>
      <p>API data: {data.message}</p>
    </main>
  );
}
