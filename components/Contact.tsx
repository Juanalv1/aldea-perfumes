'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Phone, Send, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hola Aldea de Perfumes!\n\nNombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje: ${formData.message}`
    );
    window.open(`https://wa.me/+573001234567?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte a encontrar la fragancia perfecta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Información de Contacto</h3>

            {/* Contact Buttons */}
            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/+573001234567?text=Hola%20Aldea%20de%20Perfumes!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500/10 border border-green-500/30 rounded-xl p-4 hover:bg-green-500/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <p className="text-white/60 text-sm">+57 300 123 4567</p>
                </div>
              </a>

              <a
                href="https://instagram.com/aldeadeperfumes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 hover:bg-pink-500/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Instagram</p>
                  <p className="text-white/60 text-sm">@aldeadeperfumes</p>
                </div>
              </a>

              <a
                href="tel:+573001234567"
                className="flex items-center gap-4 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 hover:bg-blue-500/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Llamar</p>
                  <p className="text-white/60 text-sm">+57 300 123 4567</p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-dark-gray rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-gold-primary" size={24} />
                <h4 className="text-white font-semibold text-lg">Horarios de Atención</h4>
              </div>
              <div className="space-y-2 text-white/60">
                <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                <p>Sábados: 10:00 AM - 5:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/60 text-sm mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-dark-gray border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:border-gold-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-dark-gray border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:border-gold-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Mensaje</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-dark-gray border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:border-gold-primary transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>Enviar por WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
