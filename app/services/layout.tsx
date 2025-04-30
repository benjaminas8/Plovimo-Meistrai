import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paslaugos | Plovimo Meistrai - Profesionalus paviršių valymas',
  description: 'Teikiame aukščiausios kokybės stogų valymo, fasadų plovimo ir trinkelių valymo paslaugas. Naudojame modernią įrangą ir profesionalias valymo priemones.',
  keywords: 'plovimo paslaugos, stogų valymas, fasadų plovimas, trinkelių valymas, profesionalus valymas',
  openGraph: {
    title: 'Plovimo paslaugos | Plovimo Meistrai',
    description: 'Profesionalios paviršių valymo paslaugos visoje Lietuvoje. Stogų valymas, fasadų plovimas, trinkelių valymas.',
    url: 'https://plovimomeistrai.lt/services',
    siteName: 'Plovimo Meistrai',
    images: [
      {
        url: 'https://plovimomeistrai.lt/images/cleaning1.jpg',
        width: 1200,
        height: 630,
        alt: 'Profesionalios valymo paslaugos',
      },
    ],
    locale: 'lt_LT',
    type: 'website',
  },
  alternates: {
    canonical: 'https://plovimomeistrai.lt/services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
