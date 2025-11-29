import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vials-shiny.vercel.app"),
  title: "Thibault Vialatou (VialsShiny) | Développeur Fullstack",
  description:
    "Portfolio de Thibault Vialatou, alias VialsShiny, développeur web Fullstack spécialisé en React, Javascript et PHP.",
  keywords:
    "Portfolio, Développeur Web, React, Next.js, Animations, Frontend, Backend, Php, Thibault Vialatou, VialsShiny, Vials",
  authors: [
    { name: "Thibault Vialatou", url: "https://vials-shiny.vercel.app" },
    { name: "VialsShiny", url: "https://vials-shiny.vercel.app" },
    { name: "Vials", url: "https://vials-shiny.vercel.app" }
  ],
  openGraph: {
    title: "Thibault Vialatou (VialsShiny) | Développeur Fullstack",
    description:
      "Portfolio de Thibault Vialatou, alias VialsShiny, développeur web Fullstack spécialisé en React, Javascript et PHP.",
    url: "/",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Thibault Vialatou (VialsShiny)",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thibault Vialatou (VialsShiny) | Développeur Fullstack",
    description:
      "Portfolio de Thibault Vialatou, alias VialsShiny, développeur web Fullstack spécialisé en React, Javascript et PHP.",
    images: ["/og-image.png"],
    creator: "@VialsShiny",
  },
  verification: {
    google: "UEuRcAxf1ul07aumSUX_6oSxBnWhQTUD4cRBFcyP1yo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        {children}
      </body>
    </html>
  );
}
