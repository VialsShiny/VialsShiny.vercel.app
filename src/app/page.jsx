'use client'

import { ChevronDown, Github, Linkedin, Mail, Moon, SquareArrowOutUpRight, Sun } from 'lucide-react';
import { BsStars } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { portfolioData } from './data/info';
import Accordion from './components/Accordion';
import ContactBtn from './components/ContactBtn';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState({ competences: true, projets: true });

  useEffect(() => {
    const initTheme = () => {
      const storedTheme = localStorage.getItem('theme');
      const isDark = storedTheme !== null ? storedTheme === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;

      setDarkMode(isDark);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

      if (storedTheme === null) {
        localStorage.setItem('theme', isDark);
      }
    };

    requestAnimationFrame(initTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme);
  };

  const toggleAccordion = (section) => {
    setAccordionOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-gradient-theme xl:max-h-screen min-h-screen overflow-hidden text-theme transition-colors duration-500">
      {/* Bouton de basculement du thème */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 bg-accent hover:bg-accent-hover shadow-lg"
        aria-label='Changer de Thème de Couleur'
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center my-auto">

          {/* Section gauche - Présentation */}
          <div className="space-y-4 sm:space-y-6 animate-fadeIn">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold badge">
              {portfolioData.age} ans • {portfolioData.localisation}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary-light">
                {portfolioData.prenom}
              </span>
              <br />
              <span className="bg-clip-text">
                {portfolioData.nom}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-primary-light">
              {portfolioData.titre}
            </p>

            <p className="text-base sm:text-lg text-text-secondary">
              {portfolioData.bio}
            </p>

            {/* Boutons de contact */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">

              {/* Contact */}
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 bg-gradient-button text-white hover:shadow-xl shadow-lg"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact
              </a>

              {/* GitHub */}
              <ContactBtn hrefA={`https://${portfolioData.github}`} targetA={true} ariaLabel="Mon Github">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </ContactBtn>

              {/* Linkedin */}
              <ContactBtn hrefA={`https://${portfolioData.linkedin}`} targetA={true} ariaLabel="Mon Linkedin">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </ContactBtn>
            </div>
          </div>

          {/* Section droite - Compétences et Projets */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <Accordion toggleAccordion={() => toggleAccordion('competences')} accordionTheme={accordionOpen.competences} title="Compétences">
              <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {portfolioData.competences.map((comp, idx) => (
                    <div
                      key={idx}
                      className="bg-project hover:bg-project-hover p-4 rounded-xl transition-all duration-300 hover:scale-105 flex flex-col items-center gap-3 text-center"
                    >
                      {/* Icône */}
                      <div className="w-12 h-12 bg-gradient-skill rounded-lg flex items-center justify-center text-white text-2xl shadow-md">
                        {comp.icon}
                      </div>

                      {/* Nom de la compétence */}
                      <span className="font-semibold text-sm">{comp.nom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Accordion>

            <Accordion toggleAccordion={() => toggleAccordion('projets')} accordionTheme={accordionOpen.projets} title="Projets Récents">
              <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 space-y-3 sm:space-y-4">
                {portfolioData.projets.map((projet, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 relative rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02] bg-project hover:bg-project-hover"
                  >
                    {idx === 0 ? (
                      <div className='flex space-x-2 items-center mb-1 pr-8'>
                        <BsStars />
                        <h3 className="relative font-semibold text-base sm:text-lg">
                          {projet.titre}
                        </h3>
                      </div>
                    ) : (
                      <h3 className="relative font-semibold text-base sm:text-lg mb-1 pr-8">
                        {projet.titre}
                      </h3>
                    )}



                    {/* 🔗 Lien projet */}
                    <a
                      href={projet.link}
                      target='_blank'
                      rel="noopener noreferrer"
                      aria-label={`Voir ${projet.titre}`}
                      className="absolute right-2 sm:right-3 top-2 sm:top-3 hover:scale-110 transition-transform"
                    >
                      <SquareArrowOutUpRight className='w-4 h-4 sm:w-5 sm:h-5' />
                    </a>

                    <p className="text-xs sm:text-sm mb-2 text-text-tertiary">
                      {projet.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {projet.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-0.5 rounded-md text-xs project-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>


      {/* Particules décoratives */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse bg-particle-1" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse bg-particle-2" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}