'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  MapPin,
  Truck,
  Package,
  MessageCircle,
  ArrowRight,
  Tag
} from 'lucide-react';
import { useState } from 'react';

export default function CarritoPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryMethod,
    setDeliveryMethod,
    deliveryCost,
    total,
    clearCart
  } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const deliveryOptions = [
    {
      key: 'pickup' as const,
      icon: MapPin,
      title: 'Pickup',
      description: 'Retira en tienda',
      price: 'Gratis',
      cost: 0
    },
    {
      key: 'delivery' as const,
      icon: Truck,
      title: 'Delivery',
      description: 'Entrega local',
      price: '$3',
      cost: 3
    },
    {
      key: 'national' as const,
      icon: Package,
      title: 'Envío Nacional',
      description: '24-48 horas',
      price: '$10',
      cost: 10
    },
  ];

  const generateWhatsAppMessage = () => {
    const itemsList = items.map(item =>
      `- ${item.brand} ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const deliveryText = deliveryOptions.find(opt => opt.key === deliveryMethod);

    const message = `¡Hola Aldea de Perfumes! 🌸

Quiero hacer un pedido:

${itemsList}

Subtotal: $${subtotal.toFixed(2)}
Envío (${deliveryText?.title}): $${deliveryCost.toFixed(2)}
------------------
TOTAL: $${total.toFixed(2)}

Método de entrega: ${deliveryText?.title}

¡Gracias!`;

    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    const whatsappUrl = `https://wa.me/+584121234567?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="mx-auto text-white/20 mb-6" size={80} />
          <h1 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío</h1>
          <p className="text-white/60 mb-8">Explora nuestro catálogo y encuentra tu fragancia ideal</p>
          <Link href="/catalogo" className="btn-primary inline-flex items-center gap-2">
            <span>Ver Catálogo</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Mi <span className="text-gradient-gold">Carrito</span>
          </h1>
          <p className="text-white/60">
            {items.length} {items.length === 1 ? 'producto' : 'productos'} en tu carrito
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-dark-gray rounded-2xl p-6 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 bg-charcoal rounded-xl p-4"
                >
                  {/* Image */}
                  <Link href={`/catalogo/${item.slug}`} className="flex-shrink-0">
                    <div className="relative w-24 h-28 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/catalogo/${item.slug}`}>
                      <p className="text-gold-primary text-sm font-medium">{item.brand}</p>
                      <h3 className="text-white font-semibold text-lg truncate hover:text-gold-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-white/50 text-sm mb-3">{item.volume} · {item.concentration}</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-1 bg-black/30 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-wine-red transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center text-white font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-gold-primary transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-gold-primary font-bold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-white/40 hover:text-red-400 transition-colors self-start p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))}

              {/* Clear Cart */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={clearCart}
                  className="text-white/40 hover:text-red-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Trash2 size={14} />
                  <span>Vaciar carrito</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-dark-gray rounded-2xl p-6 sticky top-28">
              <h2 className="text-xl font-semibold text-white mb-6">Resumen del Pedido</h2>

              {/* Delivery Method */}
              <div className="mb-6">
                <label className="block text-white/60 text-sm mb-3">Método de entrega</label>
                <div className="space-y-2">
                  {deliveryOptions.map((option) => (
                    <button
                      key={option.key}
                      onClick={() => setDeliveryMethod(option.key)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                        deliveryMethod === option.key
                          ? 'border-gold-primary bg-gold-primary/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <option.icon
                        size={20}
                        className={deliveryMethod === option.key ? 'text-gold-primary' : 'text-white/60'}
                      />
                      <div className="flex-1 text-left">
                        <p className={`font-medium ${deliveryMethod === option.key ? 'text-white' : 'text-white/80'}`}>
                          {option.title}
                        </p>
                        <p className="text-white/50 text-sm">{option.description}</p>
                      </div>
                      <span className={`font-semibold ${deliveryMethod === option.key ? 'text-gold-primary' : 'text-white/60'}`}>
                        {option.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Coupon */}
              <div className="mb-6">
                <label className="block text-white/60 text-sm mb-2">Cupón de descuento</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="CÓDIGO"
                      className="w-full bg-charcoal border border-white/10 rounded-lg py-2 pl-9 pr-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-primary transition-colors text-sm"
                    />
                  </div>
                  <button className="px-4 py-2 bg-charcoal border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-gold-primary transition-colors text-sm">
                    Aplicar
                  </button>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Envío</span>
                  <span>${deliveryCost.toFixed(2)}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-400">
                    <span>Descuento</span>
                    <span>-$0.00</span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-white text-lg font-semibold">Total</span>
                <span className="text-gold-primary text-3xl font-bold">${total.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/30"
              >
                <MessageCircle size={22} />
                <span>Hacer Pedido por WhatsApp</span>
              </button>

              {/* Info */}
              <p className="text-white/40 text-xs text-center mt-4">
                Serás redirigido a WhatsApp para confirmar tu pedido
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
