'use client';

import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MiniCart() {
  const { items, isCartOpen, setIsCartOpen, totalItems, subtotal, updateQuantity, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-dark-gray z-50 shadow-2xl transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-gold-primary" size={24} />
            <h2 className="text-xl font-semibold text-white">Mi Carrito</h2>
            <span className="bg-gold-primary text-black text-sm font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto text-white/20 mb-4" size={64} />
              <p className="text-white/60">Tu carrito está vacío</p>
              <Link
                href="/catalogo"
                onClick={() => setIsCartOpen(false)}
                className="inline-block mt-4 text-gold-primary hover:underline"
              >
                Explorar catálogo
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-charcoal rounded-lg p-3 group"
                >
                  <div className="relative w-16 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm truncate">{item.brand}</h3>
                    <p className="text-white/60 text-xs truncate">{item.name}</p>
                    <p className="text-gold-primary font-semibold mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-white/10 hover:bg-wine-red text-white flex items-center justify-center transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-white/10 hover:bg-gold-primary hover:text-black text-white flex items-center justify-center transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-white/40 hover:text-red-400 transition-colors self-start"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/10 p-4 bg-black/50">
            <div className="flex justify-between text-lg mb-4">
              <span className="text-white/80">Subtotal:</span>
              <span className="text-gold-primary font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <Link
              href="/carrito"
              onClick={() => setIsCartOpen(false)}
              className="block w-full btn-primary text-center"
            >
              Ver Carrito Completo
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
