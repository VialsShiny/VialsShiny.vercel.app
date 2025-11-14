import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

export const metadata = {
  title: "Thibault Vialatou | Développeur Fullstack",
  description: "Portfolio de Thibault Vialatou, développeur web Fullstack spécialisé en React, Javascript et PHP.",
  keywords: "Portfolio, Développeur Web, React, Next.js, Animations, Frontend, Backend, Php, Thibault Vialatou",
  authors: [{ name: "Thibault Vialatou" }],
  openGraph: {
    title: "Thibault Vialatou | Développeur Fullstack",
    description: "Portfolio de Thibault Vialatou, développeur web Fullstack spécialisé en React, Javascript et PHP.",
    url: "https://vials-shiny.vercel.app",
    siteName: "Portfolio",
    images: [
      {
        url: "https://vials-shiny.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Thibault Vialatou",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thibault Vialatou | Développeur Fullstack",
    description: "Portfolio de Thibault Vialatou, développeur web Fullstack spécialisé en React, Javascript et PHP.",
    images: ["https://vials-shiny.vercel.app/og-image.png"],
    creator: "@VialsShiny",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
