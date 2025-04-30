import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Susisiekite | Plovimo Meistrai - Profesionalios valymo paslaugos",
  description: "Susisiekite su mumis dėl profesionalių trinkelių, stogų, ar fasadų valymo paslaugų visoje Lietuvoje. Nemokamai įvertinsime darbų apimtis ir pateiksime pasiūlymą.",
  keywords: "kontaktai, susisiekite, valymo paslaugos, plovimo paslaugos, nemokamas įvertinimas",
  openGraph: {
    title: "Susisiekite | Plovimo Meistrai - Profesionalios valymo paslaugos",
    description: "Susisiekite su mumis dėl profesionalių valymo paslaugų. Nemokamai įvertinsime darbų apimtis ir pateiksime pasiūlymą.",
    url: "https://plovimomeistrai.lt/contacts",
    siteName: "Plovimo Meistrai",
    locale: "lt_LT",
    type: "website",
  },
  alternates: {
    canonical: "https://plovimomeistrai.lt/contacts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
