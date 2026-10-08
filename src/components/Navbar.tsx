import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { Button } from './ui/Button';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Navigate to homepage with hash
      navigate(`/${href}`);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#10131A]/85 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Shrivara Bhat Home"
          >
            <div className="w-9 h-9 rounded-lg bg-surface border border-surface-border flex items-center justify-center font-mono font-bold text-sm text-accent group-hover:border-accent/50 group-hover:bg-surface-elevated transition-colors shadow-sm">
              SB.
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white tracking-tight group-hover:text-accent transition-colors">
                Shrivara Bhat
              </span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">
                VJTI · IT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/50 border border-surface-border/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-medium text-gray-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-surface-elevated transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href="#contact"
              onClick={(e: any) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex border-accent/30 text-accent hover:bg-accent/10"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Let's Talk
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-surface border border-surface-border flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-700 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-surface-border bg-surface/95 backdrop-blur-xl px-4 py-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between text-sm font-medium text-gray-200 hover:text-accent p-2.5 rounded-lg hover:bg-surface-elevated transition-colors"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
              <div className="pt-4 border-t border-surface-border mt-2">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={(e: any) => handleNavClick(e, '#contact')}
                  className="w-full justify-center"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
