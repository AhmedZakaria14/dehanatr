'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'الخدمات', href: '/services' },
    { name: 'المقالات', href: '/blog' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-dark-primary">
            معلم دهانات <span className="text-gold">الرياض</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-dark-secondary hover:text-gold font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+966598971755"
            className="flex items-center gap-2 bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-dark-secondary transition-colors font-bold"
            dir="ltr"
          >
            <Phone size={18} />
            <span>0598971755</span>
          </a>
          <a
            href="https://wa.me/966598971755?text=مرحباً، أريد الاستفسار عن خدمات الدهانات"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors font-bold"
          >
            واتساب
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dark-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-dark-secondary font-medium p-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <a
                href="tel:+966598971755"
                className="flex items-center justify-center gap-2 bg-dark-primary text-white px-4 py-3 rounded-lg font-bold"
                dir="ltr"
              >
                <Phone size={18} />
                <span>0598971755</span>
              </a>
              <a
                href="https://wa.me/966598971755?text=مرحباً، أريد الاستفسار عن خدمات الدهانات"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold"
              >
                تواصل عبر الواتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
