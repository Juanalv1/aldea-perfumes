'use client';

import { motion } from 'framer-motion';
import { Shield, Users, HeartHandshake, Package, Gift } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Autenticidad Garantizada',
    description: 'Productos 100% originales con certificación de autenticidad'
  },
  {
    icon: Users,
    title: '95K+ Clientes Satisfechos',
    description: 'Una comunidad que confía en nosotros desde hace años'
  },
  {
    icon: HeartHandshake,
    title: 'Asesoría Personalizada',
    description: 'Te ayudamos a elegir la fragancia ideal para cada ocasión'
  },
  {
    icon: Package,
    title: 'Envíos Seguros',
    description: 'Empaque especial diseñado para proteger tu perfume'
  },
  {
    icon: Gift,
    title: 'Envolturas de Regalo',
    description: 'Presentaciones especiales sin costo adicional'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por qué <span className="text-gradient-gold">Elegirnos?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Más que una tienda, somos tu destino para fragancias exclusivas
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-wine-red/20 to-gold-primary/20 border border-gold-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-gold-primary transition-all duration-300">
                <reason.icon className="text-gold-primary" size={28} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
