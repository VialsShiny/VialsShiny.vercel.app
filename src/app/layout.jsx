import "./globals.css";

export const metadata = {
  title: "Mon Portfolio | Développeur Web",
  description: "Découvrez mes projets et compétences en développement web, React, Next.js et animations GSAP.",
  keywords: "Portfolio, Développeur Web, React, Next.js, GSAP, Animations, Frontend",
  authors: [{ name: "VialsShiny" }],
  // openGraph: {
  //   title: "Mon Portfolio | Développeur Web",
  //   description: "Découvrez mes projets et compétences en développement web, React, Next.js et animations GSAP.",
  //   url: "https://votre-portfolio.com",
  //   siteName: "Portfolio",
  //   images: [
  //     {
  //       url: "https://votre-portfolio.com/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Aperçu de mon portfolio",
  //     },
  //   ],
  //   locale: "fr_FR",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Mon Portfolio | Développeur Web",
  //   description: "Découvrez mes projets et compétences en développement web, React, Next.js et animations GSAP.",
  //   images: ["https://votre-portfolio.com/og-image.png"],
  //   creator: "@VotreTwitter",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
