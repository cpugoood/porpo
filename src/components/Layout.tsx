import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../hooks/useTheme';

const NAV_ITEMS = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            GOOOD
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-slate-700" />}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-slate-700" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-white" />
                <span className="block w-6 h-0.5 bg-white" />
                <span className="block w-4 h-0.5 bg-white" />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass px-4 py-4 space-y-2">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left text-white/90 py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>{children}</main>
    </>
  );
}
