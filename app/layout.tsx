import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

export const metadata = {
  title:
    "Plovimo Meistrai – Trinkelių, stogų, fasadų plovimas visoje Lietuvoje",
  description:
    "Aukščiausios kokybės trinkelių, stogų, fasado plovimo ir dažymo paslaugos visoje Lietuvoje.",
  keywords:
    "trinkelių plovimas, stogų valymas, fasadų plovimas, Vilnius, Kaunas, Lietuva",
  alternates: {
    canonical: "https://plovimomeistrai.lt",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://plovimomeistrai.lt",
    siteName: "Plovimo Meistrai",
    title: "Profesionalios plovimo paslaugos visoje Lietuvoje",
    description:
      "Aukščiausios kokybės trinkelių, stogų, fasado plovimo ir dažymo paslaugos visoje Lietuvoje.",
    images: [
      {
        url: "https://plovimomeistrai.lt/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plovimo Meistrai - profesionalus paviršių valymas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4KJ0SGEFWF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
  `}
        </Script>

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Plovimo Meistrai",
              description:
                "Aukščiausios kokybės trinkelių, stogų, fasado plovimo ir dažymo paslaugos.",
              url: "https://plovimomeistrai.lt",
              telephone: "+37067797443",
              email: "plovimomeistrai@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vilnius",
                addressCountry: "LT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "54.6872",
                longitude: "25.2797",
              },
              image: "https://plovimomeistrai.lt/images/logo.png",
              priceRange: "€€",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "54.6872",
                  longitude: "25.2797",
                },
                geoRadius: "50000",
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
