'use client';

import Link from 'next/link';
import { Instagram, MessageCircle, Phone, CreditCard, Banknote, Wallet } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-wine-red to-dark-wine flex items-center justify-center border-2 border-gold-primary">
                <span className="text-gold-primary font-bold text-lg">AP</span>
              </div>
              <div>
                <h3 className="text-gold-primary font-semibold text-lg leading-tight">ALDEA</h3>
                <p className="text-gold-light text-xs tracking-widest">PERFUMES</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-4">
              Perfume, Expresión de tu esencia. Perfumes 100% originales con envío a todo el país.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/aldeadeperfumes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/+584121234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="tel:+584121234567"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalogo?gender=mujer" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Perfumes para Mujer
                </Link>
              </li>
              <li>
                <Link href="/catalogo?gender=hombre" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Perfumes para Hombre
                </Link>
              </li>
              <li>
                <Link href="/catalogo?gender=unisex" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Perfumes Unisex
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Ver Catálogo Completo
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#delivery" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Pickup en Tienda
                </Link>
              </li>
              <li>
                <Link href="/#delivery" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Delivery Local
                </Link>
              </li>
              <li>
                <Link href="/#delivery" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Envíos Nacionales
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Asesoría Personalizada
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#contacto" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-white/60 hover:text-gold-primary transition-colors text-sm">
                  Contacto
                </Link>
              </li>
              <li>
                <span className="text-white/60 text-sm">
                  Política de Envíos
                </span>
              </li>
              <li>
                <span className="text-white/60 text-sm">
                  Términos y Condiciones
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm">Métodos de pago:</span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center" title="Tarjetas">
                  <CreditCard className="text-white/60" size={16} />
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center" title="Transferencia">
                  <Banknote className="text-white/60" size={16} />
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center" title="Efectivo">
                  <Wallet className="text-white/60" size={16} />
                </div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-400 text-xs font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-gold-primary rounded-full" />
                <span className="text-gold-primary text-xs font-medium">Garantía Original</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Aldea de Perfumes. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs mt-2">
            @aldeadeperfumes · @aldeadeperfumes1
          </p>
        </div>
      </div>
    </footer>
  );
}
