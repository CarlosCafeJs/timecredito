"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#000141] w-full p-5 relative z-50">
      <div className="flex flex-row items-center sm:justify-between md:justify-around lg:justify-between text-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <svg 
            viewBox="0 0 232 62" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 h-8 sm:w-40 sm:h-10 md:w-45 md:h-10 lg:w-56 lg:h-14 transition-all duration-300"
          >
            <g clipPath="url(#clip0_81_238)">
              <path d="M9 15.8442V8H45.8541V15.8442H32.116V53H22.7381V15.8442H9Z" fill="white" />
              <path d="M61.4108 8V53H51.9234V8H61.4108Z" fill="white" />
              <path d="M69.2165 8H80.9169L93.2747 38.2344H93.8005L106.158 8H117.859V53H108.656V23.7104H108.284L96.6709 52.7803H90.4043L78.7916 23.6006H78.4191V53H69.2165V8Z" fill="white" />
              <path d="M125.675 53V8H155.912V15.8442H135.163V26.5669H154.357V34.4111H135.163V45.1558H156V53H125.675Z" fill="white" />
              <path d="M223.531 28.7793L212.846 29.316C211.076 29.4048 209.58 30.6563 209.132 32.3708C204.766 49.088 199.862 56.0659 190.052 64.6549C189.39 65.2347 188.55 65.5701 187.671 65.6186L157.8 67.2674C157.513 67.2833 157.241 67.4013 157.033 67.6002C156.225 68.3725 156.81 69.7332 157.926 69.678L189.471 68.1182C190.086 68.0878 190.693 67.9122 191.229 67.6103C209.432 57.3631 218.3 49.3394 227.12 34.6024C228.721 31.9289 226.642 28.6231 223.531 28.7793Z" fill="white" />
              <path d="M223.284 47.057L226.242 46.7814C230.569 46.3781 232.344 52.1944 228.528 54.2757L193.96 73.1316C193.447 73.4115 192.879 73.5755 192.295 73.6122L163.542 75.4204C161.839 75.5275 161.181 73.2466 162.678 72.4297C162.89 72.3143 163.125 72.2483 163.366 72.2368L190.675 70.935C191.363 70.9022 192.036 70.6891 192.618 70.322C207.289 61.0735 214.224 55.8931 220.545 48.4962C221.241 47.6827 222.219 47.1563 223.284 47.057Z" fill="#FF5E00" />
              <path d="M160.205 57.6707C170.38 47.4317 174.373 38.5585 174.863 24.1303C174.925 22.3292 176.121 20.7446 177.86 20.271L191.56 16.5393L203.601 13.6248C206.088 13.0229 208.501 14.886 208.458 17.4444C208.151 36.0175 203.641 46.7698 189.78 62.3998C189.081 63.1884 188.088 63.6638 187.036 63.7227L163.304 65.0504C159.47 65.2649 157.499 60.3941 160.205 57.6707Z" fill="#FF5E00" />
            </g>
            <rect x="1" y="1" width="230" height="60" rx="7" stroke="white" strokeWidth="2" />
            <defs>
              <clipPath id="clip0_81_238">
                <rect width="232" height="62" rx="8" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* Menu Desktop - Oculto em telas pequenas */}
        <nav className="hidden md:flex">
          <ul className="flex flex-row justify-around space-x-6 lg:space-x-8 text-white items-center text-sm lg:text-base font-['SF Compact'] font-medium tracking-[.13em]">
            <li className="hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <Link href="/">Início</Link>
            </li>
            <li className="hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <Link href="/pages/nossas-vantagens">Nossas Vantagens</Link>
            </li>
            <li className="hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <Link href="/pages/nossa-equipe">Nossa Equipe</Link>
            </li>
            <li className="hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <Link href="/pages/quem-somos">Quem Somos</Link>
            </li>
            <li className="hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <Link href="/pages/tire-suas-duvidas">Tire suas Dúvidas (FAQ)</Link>
            </li>
          </ul>
        </nav>

        {/* Botão Hamburger - Visível apenas em telas pequenas */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile - Slide down */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#000141] border-t border-white/20 transition-all duration-500 ease-in-out z-50 ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="py-6">
          <ul className="flex flex-col text-white font-['SF_Compact'] font-light tracking-[.13em]">
            <li>
              <Link 
                href="/" 
                onClick={closeMenu}
                className="block px-6 py-4 text-base hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2"
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                href="/pages/nossas-vantagens" 
                onClick={closeMenu}
                className="block px-6 py-4 text-base hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2"
              >
                Nossas Vantagens
              </Link>
            </li>
            <li>
              <Link 
                href="/pages/nossa-equipe" 
                onClick={closeMenu}
                className="block px-6 py-4 text-base hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2"
              >
                Nossa Equipe
              </Link>
            </li>
            <li>
              <Link 
                href="/pages/quem-somos" 
                onClick={closeMenu}
                className="block px-6 py-4 text-base hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link 
                href="/pages/tire-suas-duvidas" 
                onClick={closeMenu}
                className="block px-6 py-4 text-base hover:bg-white/10 hover:text-[#FF5E00] active:bg-white/20 transition-all duration-300 ease-in-out transform hover:translate-x-2"
              >
                Tire suas Dúvidas (FAQ)
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay para fechar menu ao clicar fora (opcional) */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40" 
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default ResponsiveHeader;