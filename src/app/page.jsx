'use client'

import React, { useEffect, useState } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, MapPin, ChevronDown, SquareArrowOutUpRight } from 'lucide-react';
import { portfolioData } from './data/info';

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
    <div className={`min-h-screen transition-colors duration-500 ${darkMode
      ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white'
      : 'bg-gradient-to-br from-purple-50 via-pink-50 to-white text-gray-800'
      }`}>
      {/* Bouton de basculement du thème */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${darkMode
          ? 'bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/50'
          : 'bg-pink-400 hover:bg-pink-500 shadow-lg shadow-pink-400/50'
          }`}
        aria-label='Changer de Thème de Couleur'
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center my-auto">

          {/* Section gauche - Présentation */}
          <div className="space-y-4 sm:space-y-6 animate-fadeIn">
            <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${darkMode ? 'bg-purple-500/30 text-purple-300' : 'bg-pink-200 text-pink-700'
              }`}>
              {portfolioData.age} ans • {portfolioData.localisation}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
                {portfolioData.prenom}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                {portfolioData.nom}
              </span>
            </h1>

            <p className={`text-xl sm:text-2xl font-medium ${darkMode ? 'text-purple-300' : 'text-pink-600'}`}>
              {portfolioData.titre}
            </p>

            <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {portfolioData.bio}
            </p>

            {/* Boutons de contact */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a href={`mailto:${portfolioData.email}`}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${darkMode
                  ? 'bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/50'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl'
                  }`}>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact
              </a>

              <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer"
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-100 shadow-md'
                  }`}
                aria-label='Mon Github'>
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer"
                className={`p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-100 shadow-md'
                  }`}
                aria-label='Mon Linkedin'>
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Section droite - Compétences et Projets */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">

            {/* Compétences - Accordéon */}
            <div className={`rounded-2xl sm:rounded-3xl backdrop-blur-sm transition-all duration-300 overflow-hidden ${darkMode
              ? 'bg-purple-900/30 border border-purple-500/30'
              : 'bg-white/70 border border-pink-200 shadow-xl'
              }`}>
              <button
                onClick={() => toggleAccordion('competences')}
                className={`w-full p-4 sm:p-6 lg:p-8 flex items-center justify-between transition-colors ${darkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'
                  }`}
              >
                <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  Compétences
                </h2>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${accordionOpen.competences ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${accordionOpen.competences
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 space-y-4">
                  {portfolioData.competences.map((comp, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm font-medium">
                        <span>{comp.nom}</span>
                        <span>{comp.niveau}%</span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${darkMode
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                            : 'bg-gradient-to-r from-purple-500 to-pink-400'
                            }`}
                          style={{ width: accordionOpen.competences ? `${comp.niveau}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projets récents - Accordéon */}
            <div className={`rounded-2xl sm:rounded-3xl backdrop-blur-sm transition-all duration-300 overflow-hidden ${darkMode
              ? 'bg-purple-900/30 border border-purple-500/30'
              : 'bg-white/70 border border-pink-200 shadow-xl'
              }`}>
              <button
                onClick={() => toggleAccordion('projets')}
                className={`w-full p-4 sm:p-6 lg:p-8 flex items-center justify-between transition-colors ${darkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'
                  }`}
              >
                <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  Projets Récents
                </h2>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${accordionOpen.projets ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${accordionOpen.projets
                ? 'max-h-86 opacity-100 overflow-y-scroll'
                : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 space-y-3 sm:space-y-4">
                  {portfolioData.projets.map((projet, idx) => (
                    <div
                      key={idx}
                      className={`p-3 sm:p-4 relative rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02] ${darkMode
                        ? 'bg-gray-800/50 hover:bg-gray-800'
                        : 'bg-purple-50 hover:bg-purple-100'
                        }`}>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 pr-8">{projet.titre}</h3>
                      <a href={projet.link} target='_blank' rel="noopener noreferrer"
                        aria-label={`Voir ${projet.titre}`}
                        className="absolute right-2 sm:right-3 top-2 sm:top-3 hover:scale-110 transition-transform">
                        <SquareArrowOutUpRight className='w-4 h-4 sm:w-5 sm:h-5' />
                      </a>
                      <p className={`text-xs sm:text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {projet.description}
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        {projet.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className={`px-2 py-0.5 rounded-md text-xs ${darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-500/20 text-purple-700'
                              }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particules décoratives */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-purple-500' : 'bg-pink-300'
          }`} />
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-pink-500' : 'bg-purple-300'
          }`} style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}