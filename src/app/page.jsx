'use client'

import React, { useEffect, useState } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from './data/info';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const initTheme = () => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme !== null) {
        setDarkMode(storedTheme === 'true');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
        localStorage.setItem('theme', prefersDark);
      }
    };

    requestAnimationFrame(initTheme);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`md:min-h-screen md:overflow-hidden transition-colors duration-500 ${darkMode
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
      <div className="container mx-auto px-6 py-12 xl:h-screen flex items-center">
        <div className="w-full grid grid-cols-1 2xl:grid-cols-2 gap-12 items-center">

          {/* Section gauche - Présentation */}
          <div className="space-y-6 animate-fadeIn">
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-purple-500/30 text-purple-300' : 'bg-pink-200 text-pink-700'
              }`}>
              {portfolioData.age} ans • {portfolioData.localisation}
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className={darkMode ? 'text-purple-400' : 'text-purple-600'}>
                {portfolioData.prenom}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                {portfolioData.nom}
              </span>
            </h1>

            <p className={`text-2xl font-medium ${darkMode ? 'text-purple-300' : 'text-pink-600'}`}>
              {portfolioData.titre}
            </p>

            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {portfolioData.bio}
            </p>

            {/* Boutons de contact */}
            <div className="flex gap-4 pt-4">
              <a href={`mailto:${portfolioData.email}`}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${darkMode
                  ? 'bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/50'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl'
                  }`}>
                <Mail className="w-5 h-5" />
                Contact
              </a>

              <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-100 shadow-md'
                  }`}
                aria-label='Mon Github'>
                <Github className="w-6 h-6" />
              </a>

              <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-100 shadow-md'
                  }`}
                aria-label='Mon Linkedin'>
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Section droite - Compétences et Projets */}
          <div className="space-y-8">

            {/* Compétences */}
            <div className={`p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${darkMode
              ? 'bg-purple-900/30 border border-purple-500/30'
              : 'bg-white/70 border border-pink-200 shadow-xl'
              }`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                Compétences
              </h2>

              <div className="space-y-4">
                {portfolioData.competences.map((comp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{comp.nom}</span>
                      <span>{comp.niveau}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div
                        className={`h-full rounded-full bar-animated ${darkMode
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'bg-gradient-to-r from-purple-500 to-pink-400'
                          }`}
                        style={{ '--target-width': `${comp.niveau}%` }}
                      />
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Projets récents */}
            <div className={`p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${darkMode
              ? 'bg-purple-900/30 border border-purple-500/30'
              : 'bg-white/70 border border-pink-200 shadow-xl'
              }`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                Projets Récents
              </h2>

              <div className="space-y-4">
                {portfolioData.projets.map((projet, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${darkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800'
                      : 'bg-purple-50 hover:bg-purple-100'
                      }`}>
                    <h3 className="font-semibold text-lg mb-1">{projet.titre}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {projet.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particules décoratives */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-purple-500' : 'bg-pink-300'
          }`} />
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-pink-500' : 'bg-purple-300'
          }`} />
      </div>
    </div>
  );
}