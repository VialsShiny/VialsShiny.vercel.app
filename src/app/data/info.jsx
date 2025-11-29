import { FaDocker, FaGitAlt, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import {
    SiJavascript,
    SiLaravel,
    SiNextdotjs,
    SiTailwindcss,
} from 'react-icons/si';

export const portfolioData = {
    prenom: 'Thibault',
    nom: 'Vialatou',
    pseudo: 'VialsShiny',
    age: 17,
    titre: 'Développeur Full Stack',
    localisation: 'Paris, France',
    email: 'vialscorp@hotmail.com',
    github: 'github.com/VialsShiny',
    linkedin: 'linkedin.com/in/thibault-vialatou-44baa8307',
    bio: "Passionnée par le développement web et la création d'expériences utilisateur exceptionnelles. Spécialisée en React et Laravel.",
    competences: [
        {nom: 'React', icon: <FaReact />},
        {nom: 'Javascript', icon: <SiJavascript />},
        {nom: 'Laravel', icon: <SiLaravel />},
        {nom: 'Tailwind CSS', icon: <SiTailwindcss />},
        {nom: 'Next.js', icon: <SiNextdotjs />},
        {nom: 'MySql', icon: <GrMysql />},
        {nom: 'Docker', icon: <FaDocker />},
        {nom: 'Git', icon: <FaGitAlt />},
    ],
    projets: [
        {
            titre: 'Mini Social',
            description:
                'Mini réseau social interactif offrant un flux de contenus en temps réel pour découvrir de nouveaux posts et interagir facilement avec la communauté.',
            link: 'https://mini-social-phi.vercel.app',
            tags: ['react', 'express', 'javascript'],
        },
        {
            titre: "Pep's your fête",
            description:
                'Pep’s Your Fête transforme vos événements en souvenirs inoubliables grâce à des formules déco entièrement personnalisables.',
            link: 'https://pepsyourfete.fr',
            tags: ['php', 'javascript', 'html', 'css'],
        },
        {
            titre: 'Resto App',
            description:
                'Application web de vente de plats (pizza, burger, etc.) permettant de gérer commandes et menus de manière efficace, avec une interface utilisateur conviviale.',
            link: 'https://github.com/VialsShiny/resto_app_react',
            tags: ['react', 'laravel', 'javascript'],
        },
    ],
};
