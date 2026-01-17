'use client';

import { motion } from 'framer-motion';
import { MapPin, Truck, Package, Check } from 'lucide-react';

const deliveryOptions = [
  {
    icon: MapPin,
    title: 'Pickup',
    description: 'Retira en nuestra tienda',
    price: 'Gratis',
    features: ['Sin costo adicional', 'Disponibilidad inmediata', 'Revisa tu pedido en tienda'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Entrega local el mismo día',
    price: 'Desde $3',
    features: ['Zona metropolitana', 'Entrega rápida', 'Pago contra entrega disponible'],
    color: 'from-blue-500 to-cyan-600',
    popular: true
  },
  {
    icon: Package,
    title: 'Envío Nacional',
    description: 'Cobertura en todo el país',
    price: 'Desde $8',
    features: ['24-48 horas', 'Tracking incluido', 'Empaque especial protector'],
    color: 'from-purple-500 to-pink-600'
  }
];

export default function DeliveryMethods() {
  return (
    <section id="delivery" className="py-20 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-wine-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Métodos de <span className="text-gradient-gold">Entrega</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tus necesidades
          </p>
        </motion.div>

        {/* Delivery Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {deliveryOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative bg-dark-gray rounded-2xl p-6 border ${
                option.popular ? 'border-gold-primary' : 'border-white/10'
              } hover:border-gold-primary/50 transition-all duration-300 group`}
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gold-primary to-gold-dark text-black text-xs font-bold px-4 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <option.icon className="text-white" size={32} />
              </div>

              {/* Title & Description */}
              <h3 className="text-white font-bold text-2xl mb-2">{option.title}</h3>
              <p className="text-white/50 mb-4">{option.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-gold-primary text-3xl font-bold">{option.price}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-white/70">
                    <Check className="text-green-400 flex-shrink-0" size={16} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
