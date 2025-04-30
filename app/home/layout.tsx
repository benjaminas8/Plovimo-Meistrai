import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plovimo Meistrai – Profesionalios valymo paslaugos visoje Lietuvoje",
  description: "Aukščiausios kokybės trinkelių, stogų, fasadų plovimo ir dažymo paslaugos. Dirbame visoje Lietuvoje, naudojame modernią įrangą ir profesionalias priemones.",
  keywords: "trinkelių plovimas, stogų valymas, fasadų plovimas, profesionalios paslaugos, Vilnius, Kaunas, Lietuva",
  alternates: {
    canonical: "https://plovimomeistrai.lt",
  },
  openGraph: {
    title: "Plovimo Meistrai – Profesionalios valymo paslaugos",
    description: "Aukščiausios kokybės trinkelių, stogų, fasadų plovimo ir dažymo paslaugos visoje Lietuvoje. Nemokamas įvertinimas.",
    url: "https://plovimomeistrai.lt",
    siteName: "Plovimo Meistrai",
    images: [
      {
        url: "https://plovimomeistrai.lt/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plovimo Meistrai - profesionalus paviršių valymas",
      },
    ],
    locale: "lt_LT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
