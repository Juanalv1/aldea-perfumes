'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const stockBadge = {
    in_stock: { text: 'En stock', color: 'bg-green-500' },
    low_stock: { text: 'Últimas unidades', color: 'bg-yellow-500' },
    out_of_stock: { text: 'Agotado', color: 'bg-red-500' }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-product group relative"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        <span className="bg-gradient-to-r from-gold-primary to-gold-dark text-black text-xs font-bold px-2 py-1 rounded">
          ORIGINAL
        </span>
        <span className={`${stockBadge[product.stock].color} text-white text-xs font-medium px-2 py-1 rounded`}>
          {stockBadge[product.stock].text}
        </span>
      </div>

      {/* Like Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-wine-red group/like"
      >
        <Heart
          size={16}
          className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-white group-hover/like:text-white'}`}
        />
      </button>

      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-transparent to-transparent" />

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
          <Link
            href={`/catalogo/${product.slug}`}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold-primary hover:text-black transition-all duration-300"
          >
            <Eye size={18} />
          </Link>
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 'out_of_stock'}
            className="w-10 h-10 rounded-full bg-gold-primary flex items-center justify-center text-black hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Gender Icon */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-gold-primary text-xs font-medium uppercase tracking-wider">
            {product.brand}
          </span>
          <span className="text-white/60 text-lg">
            {product.gender === 'mujer' ? '♀' : product.gender === 'hombre' ? '♂' : '⚥'}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-white font-semibold text-lg mb-1 truncate group-hover:text-gold-primary transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <span className="text-gold-primary text-2xl font-bold">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 'out_of_stock'}
            className="flex items-center gap-2 bg-wine-red hover:bg-dark-wine text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-wine-red/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Agregar</span>
          </button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-primary/50 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
