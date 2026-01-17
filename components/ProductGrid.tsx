'use client';

import { useState } from 'react';
import { products, Product } from '@/data/products';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

interface ProductGridProps {
  showFilters?: boolean;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({ showFilters = false, limit, title, subtitle }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mujer' | 'hombre'>('all');

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'all') return true;
    return product.gender === activeFilter;
  });

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section id="productos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {title.split(' ').map((word, i) =>
                  i === title.split(' ').length - 1
                    ? <span key={i} className="text-gradient-gold">{word}</span>
                    : <span key={i}>{word} </span>
                )}
              </h2>
            )}
            {subtitle && (
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Filter Pills */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            {[
              { key: 'all', label: 'Todos' },
              { key: 'mujer', label: 'Mujer' },
              { key: 'hombre', label: 'Hombre' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as 'all' | 'mujer' | 'hombre')}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-wine-red to-gold-primary text-white shadow-lg shadow-gold-primary/20'
                    : 'bg-dark-gray text-white/70 hover:text-white hover:bg-charcoal'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        {limit && filteredProducts.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="/catalogo" className="btn-secondary inline-block">
              Ver Todo el Catálogo
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
