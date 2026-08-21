import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Media', path: '/media' },
    { name: 'Give/Dues', path: '/give' },
    { name: 'Alumni', path: '/alumni' },
  ];

  return (
    <nav
      className={clsx(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-surface-color/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/gnasscctulogo.png" alt="GNASS CCTU Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className={clsx(
                "font-bold text-xl tracking-tight",
                isScrolled ? "text-[var(--color-royal-blue)] dark:text-white" : "text-white"
              )}>
                GNASS CCTU
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-[var(--color-golden-yellow)]',
                  location.pathname === link.path 
                    ? 'text-[var(--color-golden-yellow)]' 
                    : isScrolled ? 'text-text-color' : 'text-white/90'
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={clsx(
                "p-2 rounded-full transition-colors",
                isScrolled ? "hover:bg-gray-200 dark:hover:bg-gray-700 text-text-color" : "hover:bg-white/20 text-white"
              )}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/give"
              className="bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] px-5 py-2 rounded-full font-bold text-sm hover:bg-[var(--color-golden-yellow-light)] transition-colors"
            >
              Give Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={clsx(
                "p-2 rounded-full",
                isScrolled ? "text-text-color" : "text-white"
              )}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className={clsx(
                "focus:outline-none",
                isScrolled ? "text-text-color" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-color shadow-lg py-4 px-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={clsx(
                "block text-base font-semibold p-2 rounded-lg",
                location.pathname === link.path 
                  ? "bg-[var(--color-royal-blue)] text-white" 
                  : "text-text-color hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/give"
            onClick={closeMenu}
            className="block text-center bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] px-5 py-3 rounded-lg font-bold mt-2"
          >
            Give Now
          </Link>
        </div>
      )}
    </nav>
  );
}
