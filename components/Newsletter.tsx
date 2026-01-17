'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-wine-red via-dark-wine to-wine-red" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gold-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gold-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-full bg-gold-primary/20 border border-gold-primary flex items-center justify-center mb-6">
            <Sparkles className="text-gold-primary" size={28} />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Recibe Ofertas Exclusivas
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Entérate primero de nuevos lanzamientos, promociones especiales y consejos de fragancias
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="w-full bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg py-3 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-gold-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'gradient-gold text-black hover:shadow-lg hover:shadow-gold-primary/30 hover:scale-105'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check size={20} />
                  <span>¡Suscrito!</span>
                </>
              ) : (
                <span>Suscribirse</span>
              )}
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-white/40 text-sm mt-4">
            Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
