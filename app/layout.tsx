import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>LOGO</div>
          <nav>
            <ul>
              <li>
                <a href="">Pagrindinis</a>
                <a href="">Paslaugos</a>
                <a href="">Darbų pavyzdžiai</a>
                <a href="">Kontaktai</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
