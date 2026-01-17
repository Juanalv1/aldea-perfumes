'use client';

import { useState, useMemo } from 'react';
import { products, brands, families } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown, Search } from 'lucide-react';

export default function CatalogoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState<string>('default');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGender = selectedGender === 'all' || product.gender === selectedGender;
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
      const matchesFamily = selectedFamily === 'all' || product.family === selectedFamily;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesGender && matchesBrand && matchesFamily && matchesPrice;
    });

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedGender, selectedBrand, selectedFamily, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedGender('all');
    setSelectedBrand('all');
    setSelectedFamily('all');
    setPriceRange([0, 200]);
    setSortBy('default');
  };

  const hasActiveFilters = searchQuery || selectedGender !== 'all' || selectedBrand !== 'all' || selectedFamily !== 'all' || priceRange[0] !== 0 || priceRange[1] !== 200;

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-gradient-gold">Catálogo</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explora nuestra colección de fragancias premium de las mejores marcas del mundo
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre o marca..."
                className="w-full bg-dark-gray border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-gold-primary transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-dark-gray border border-white/10 rounded-lg py-3 pl-4 pr-10 text-white focus:outline-none focus:border-gold-primary transition-colors cursor-pointer"
              >
                <option value="default">Ordenar por</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name">Nombre A-Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={18} />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                showFilters || hasActiveFilters
                  ? 'bg-gold-primary text-black'
                  : 'bg-dark-gray text-white border border-white/10 hover:border-gold-primary/50'
              }`}
            >
              <Filter size={18} />
              <span>Filtros</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-wine-red" />
              )}
            </button>
          </div>

          {/* Filter Panel */}
          <div className={`overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <div className="bg-dark-gray rounded-xl p-6 border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Gender */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">Género</label>
                  <select
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="w-full appearance-none bg-charcoal border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-gold-primary transition-colors cursor-pointer"
                  >
                    <option value="all">Todos</option>
                    <option value="mujer">Mujer</option>
                    <option value="hombre">Hombre</option>
                    <option value="unisex">Unisex</option>
                  </select>
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">Marca</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full appearance-none bg-charcoal border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-gold-primary transition-colors cursor-pointer"
                  >
                    <option value="all">Todas las marcas</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Family */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">Familia Olfativa</label>
                  <select
                    value={selectedFamily}
                    onChange={(e) => setSelectedFamily(e.target.value)}
                    className="w-full appearance-none bg-charcoal border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-gold-primary transition-colors cursor-pointer"
                  >
                    <option value="all">Todas</option>
                    {families.map(family => (
                      <option key={family} value={family}>{family}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Precio: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-gold-primary"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-4 flex items-center gap-2 text-wine-red hover:text-red-400 transition-colors text-sm"
                >
                  <X size={16} />
                  <span>Limpiar filtros</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-white/60">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'} encontrados
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg mb-4">No se encontraron productos con los filtros seleccionados</p>
            <button
              onClick={clearFilters}
              className="btn-secondary"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
