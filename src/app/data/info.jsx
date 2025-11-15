import { FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiExpress } from 'react-icons/si';
import { GrMysql } from "react-icons/gr";

export const portfolioData = {
  prenom: "Thibault",
  nom: "Vialatou",
  age: 17,
  titre: "Développeur Full Stack",
  localisation: "Paris, France",
  email: "vialscorp@hotmail.com",
  github: "github.com/VialsShiny",
  linkedin: "linkedin.com/in/thibault-vialatou-44baa8307",
  bio: "Passionnée par le développement web et la création d'expériences utilisateur exceptionnelles. Spécialisée en React et Laravel.",
  competences: [
    { nom: "React", icon: <FaReact /> },
    { nom: "Javascript", icon: <SiJavascript /> },
    { nom: "Express", icon: <SiExpress /> },
    { nom: "Tailwind CSS", icon: <SiTailwindcss /> },
    { nom: "Next.js", icon: <SiNextdotjs /> },
    { nom: "MySql", icon: <GrMysql /> },
    { nom: "Docker", icon: <FaDocker /> },
    { nom: "Git", icon: <FaGitAlt /> }
  ],
  projets: [
    {
      titre: "Mini Social",
      description: "Mini réseau social interactif offrant un flux de contenus en temps réel pour découvrir de nouveaux posts et interagir facilement avec la communauté.",
      link: "https://mini-social-phi.vercel.app",
      tags: ['react', 'express', 'javascript']
    },
    {
      titre: "Piscine Atlantis",
      description: "Site vitrine mettant en valeur l’expertise de l’entreprise dans les piscines, spas et équipements bien-être, avec un design moderne et une navigation intuitive.",
      link: "https://piscineatlantis.fr",
      tags: ["php", "javascript", "html", "css", 'twig'],
    },
    {
      titre: "Resto App",
      description: "Application web de vente de plats (pizza, burger, etc.) permettant de gérer commandes et menus de manière efficace, avec une interface utilisateur conviviale.",
      link: "https://github.com/VialsShiny/resto_app_react",
      tags: ['react', 'laravel', 'javascript']
    }
  ]
};