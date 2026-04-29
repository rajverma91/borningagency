import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: "WORK", path: "/work" },
  { label: "SERVICES", path: "/services" },
  { label: "ABOUT", path: "/about" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isDarkPage = ['/', '/about'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-full mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className={`text-lg md:text-xl font-black tracking-tight transition-colors ${
              !scrolled && isDarkPage ? 'text-white' : 'text-foreground'
            }`}
          >
            BORNING AGENCY
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-medium tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#00cc65]'
                    : !scrolled && isDarkPage
                    ? 'text-white/80 hover:text-white'
                    : 'text-muted-foreground'
                } hover:text-[#00cc65]`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${
              !scrolled && isDarkPage ? 'text-white' : 'text-foreground'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="flex flex-col items-center gap-6 pt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-[#00cc65]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}