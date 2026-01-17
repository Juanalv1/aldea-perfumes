'use client';

import { useCart } from '@/context/CartContext';
import { Check, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default function Toast() {
  const { toast } = useCart();

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 toast-enter">
      <div className="bg-dark-gray border border-gold-primary/30 rounded-lg shadow-xl p-4 flex items-center gap-3 max-w-xs">
        {toast.product && (
          <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
            <Image
              src={toast.product.image}
              alt={toast.product.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-green-400 mb-1">
            <Check size={16} />
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
          {toast.product && (
            <p className="text-white/60 text-xs truncate">
              {toast.product.brand} - {toast.product.name}
            </p>
          )}
        </div>
        <ShoppingCart className="text-gold-primary flex-shrink-0" size={20} />
      </div>
    </div>
  );
}
