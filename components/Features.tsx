'use client';

import { motion } from 'framer-motion';
import { Diamond, MapPin, Truck, Package, MessageCircle, Gift } from 'lucide-react';

const features = [
  {
    icon: Diamond,
    title: '100% Originales',
    description: 'Garantía de autenticidad en todas nuestras fragancias'
  },
  {
    icon: MapPin,
    title: 'Pickup Disponible',
    description: 'Retira tu pedido directamente en nuestra tienda'
  },
  {
    icon: Truck,
    title: 'Delivery Local',
    description: 'Entrega rápida en zona metropolitana'
  },
  {
    icon: Package,
    title: 'Envíos Nacionales',
    description: 'Llegamos a todo el país con tracking incluido'
  },
  {
    icon: MessageCircle,
    title: 'Atención Personalizada',
    description: 'Asesoría experta para elegir tu fragancia ideal'
  },
  {
    icon: Gift,
    title: 'Envolturas de Regalo',
    description: 'Presentaciones especiales sin costo adicional'
  }
];

export default function Features() {
  return (
    <section id="servicios" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-gradient-gold">Servicios</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para disfrutar de la mejor experiencia en fragancias
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-charcoal rounded-2xl p-6 border border-white/5 hover:border-gold-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-wine-red to-dark-wine flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-gold-primary" size={28} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-gold-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/50">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
