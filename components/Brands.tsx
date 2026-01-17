'use client';

import { motion } from 'framer-motion';
import { brands } from '@/data/products';

export default function Brands() {
  return (
    <section className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Marcas <span className="text-gradient-gold">Premium</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Trabajamos con las casas de perfumería más prestigiosas del mundo
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-charcoal rounded-xl p-6 border border-white/5 hover:border-gold-primary/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              <span className="text-white/60 group-hover:text-gold-primary font-semibold text-center transition-colors duration-300 text-sm sm:text-base">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
