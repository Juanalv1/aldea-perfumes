'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Package, Truck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1920&h=1080&fit=crop')"
        }}
      />
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine-red/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-gold-primary rounded-full animate-pulse" />
            <span className="text-gold-light text-sm">Perfumes 100% Originales</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Perfume,</span>
            <br />
            <span className="text-gradient-gold">Expresión de tu esencia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Descubre nuestra exclusiva colección de fragancias originales con envío a todo el país
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/catalogo" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Ver Catálogo
            </Link>
            <Link href="/#servicios" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              Tienda Virtual
            </Link>
          </div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <MapPin className="text-gold-primary" size={18} />
              <span className="text-white/80 text-sm">Pickup</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Truck className="text-gold-primary" size={18} />
              <span className="text-white/80 text-sm">Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Package className="text-gold-primary" size={18} />
              <span className="text-white/80 text-sm">Envíos Nacionales</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold-primary/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
