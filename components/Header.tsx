'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import MiniCart from './MiniCart';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsCartOpen, isCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/#delivery', label: 'Pickup/Delivery' },
    { href: '/#contacto', label: 'Contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glassmorphism py-2 shadow-lg shadow-black/20' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-wine-red to-dark-wine flex items-center justify-center border-2 border-gold-primary transition-transform duration-300 group-hover:scale-110">
                <span className="text-gold-primary font-bold text-lg">AP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-gold-primary font-semibold text-lg leading-tight">ALDEA</h1>
                <p className="text-gold-light text-xs tracking-widest">PERFUMES</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white/80 hover:text-gold-primary transition-colors p-2"
                aria-label="Buscar"
              >
                <Search size={20} />
              </button>

              {/* User */}
              <button className="hidden sm:block text-white/80 hover:text-gold-primary transition-colors p-2" aria-label="Mi cuenta">
                <User size={20} />
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative text-white/80 hover:text-gold-primary transition-colors p-2"
                aria-label="Carrito"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-primary text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+573001234567?text=Hola%20Aldea%20de%20Perfumes!"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white/80 hover:text-gold-primary transition-colors p-2"
                aria-label="Menú"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isSearchOpen ? 'max-h-20 mt-4' : 'max-h-0'
            }`}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar perfumes, marcas..."
                className="w-full bg-dark-gray border border-gold-primary/30 rounded-lg py-3 px-4 pr-12 text-white placeholder-white/40 focus:outline-none focus:border-gold-primary transition-colors"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-primary" size={20} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4 bg-black/95">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-gold-primary transition-colors py-2 text-lg font-medium border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/+573001234567?text=Hola%20Aldea%20de%20Perfumes!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg text-lg font-medium mt-2"
            >
              <MessageCircle size={20} />
              <span>Contáctanos por WhatsApp</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Mini Cart Dropdown */}
      <MiniCart />
    </>
  );
}
