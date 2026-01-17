'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Heart,
  Share2,
  ChevronLeft,
  Plus,
  Minus,
  Droplets,
  Wind,
  Leaf
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Producto no encontrado</h1>
          <Link href="/catalogo" className="btn-primary">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.gender === product.gender)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const stockBadge = {
    in_stock: { text: 'En stock', color: 'bg-green-500' },
    low_stock: { text: 'Últimas unidades', color: 'bg-yellow-500' },
    out_of_stock: { text: 'Agotado', color: 'bg-red-500' }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/60 hover:text-gold-primary transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Volver</span>
          </button>
        </motion.div>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-gray">
              <Image
                src={product.image}
                alt={`${product.brand} ${product.name}`}
                fill
                className="object-cover"
                priority
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-gradient-to-r from-gold-primary to-gold-dark text-black text-sm font-bold px-3 py-1 rounded">
                  ORIGINAL
                </span>
                <span className={`${stockBadge[product.stock].color} text-white text-sm font-medium px-3 py-1 rounded`}>
                  {stockBadge[product.stock].text}
                </span>
              </div>
              {/* Actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-wine-red"
                >
                  <Heart
                    size={20}
                    className={isLiked ? 'fill-red-500 text-red-500' : 'text-white'}
                  />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-gold-primary hover:text-black text-white">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Brand & Gender */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-gold-primary font-medium tracking-wider uppercase">
                {product.brand}
              </span>
              <span className="text-white/60 text-2xl">
                {product.gender === 'mujer' ? '♀' : product.gender === 'hombre' ? '♂' : '⚥'}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-white/70 text-lg mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gold-primary text-5xl font-bold">
                ${product.price}
              </span>
              <span className="text-white/40 text-lg">
                {product.concentration} · {product.volume}
              </span>
            </div>

            {/* Notes */}
            <div className="bg-dark-gray rounded-xl p-6 mb-8">
              <h3 className="text-white font-semibold text-lg mb-4">Notas Olfativas</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-gold-primary mb-2">
                    <Wind size={18} />
                    <span className="text-sm font-medium">Salida</span>
                  </div>
                  <ul className="text-white/60 text-sm space-y-1">
                    {product.notes.top.map(note => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gold-primary mb-2">
                    <Droplets size={18} />
                    <span className="text-sm font-medium">Corazón</span>
                  </div>
                  <ul className="text-white/60 text-sm space-y-1">
                    {product.notes.heart.map(note => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gold-primary mb-2">
                    <Leaf size={18} />
                    <span className="text-sm font-medium">Fondo</span>
                  </div>
                  <ul className="text-white/60 text-sm space-y-1">
                    {product.notes.base.map(note => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-charcoal text-white/70 text-sm px-4 py-2 rounded-full">
                {product.family}
              </span>
              <span className="bg-charcoal text-white/70 text-sm px-4 py-2 rounded-full">
                {product.concentration}
              </span>
              <span className="bg-charcoal text-white/70 text-sm px-4 py-2 rounded-full">
                {product.volume}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Quantity */}
              <div className="flex items-center bg-dark-gray rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center text-white font-semibold text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 'out_of_stock'}
                className="flex-1 btn-primary flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={22} />
                <span>Agregar al Carrito</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Productos <span className="text-gradient-gold">Relacionados</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct, index) => (
                <ProductCard key={relProduct.id} product={relProduct} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
