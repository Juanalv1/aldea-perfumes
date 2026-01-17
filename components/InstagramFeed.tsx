'use client';

import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const instagramPosts = [
  'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1595425964071-2c1ecb10f330?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300&h=300&fit=crop'
];

export default function InstagramFeed() {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-gold-primary" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              @aldeadeperfumes
            </h2>
          </div>
          <p className="text-white/60 text-lg">
            Síguenos en Instagram · <span className="text-gold-primary font-semibold">95.2K seguidores</span>
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/aldeadeperfumes"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={post}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/aldeadeperfumes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Instagram size={20} />
            <span>Ver más en Instagram</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
