
import { useState } from 'react';
import { ShoppingBag, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import { products, Product } from '@/data/products';

const Merch = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProducts];
    
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    
    setFilteredProducts(sorted);
  };

  const handleFilter = (value: string) => {
    setFilterBy(value);
    let filtered = products;
    
    switch (value) {
      case 'sale':
        filtered = products.filter(p => p.onSale);
        break;
      case 'available':
        filtered = products.filter(p => !p.soldOut);
        break;
      case 'sold-out':
        filtered = products.filter(p => p.soldOut);
        break;
      default:
        filtered = products;
    }
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-12">
        {/* Header */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Official Merch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Show your love for F.O.T.U with our exclusive merchandise collection. 
              All proceeds support the next generation of creatives.
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-yellow-400" />
                <Select value={filterBy} onValueChange={handleFilter}>
                  <SelectTrigger className="w-40 bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Items</SelectItem>
                    <SelectItem value="sale">On Sale</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="sold-out">Sold Out</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={handleSort}>
                <SelectTrigger className="w-40 bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard 
                  product={product} 
                  onPurchase={() => {}}
                />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more items.</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="container mx-auto px-4 py-12 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Why Buy F.O.T.U Merch?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white">Premium Quality</h3>
                <p className="text-gray-400">High-quality materials and professional printing for long-lasting wear.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-black">🎵</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Support Artists</h3>
                <p className="text-gray-400">Your purchase directly supports the next generation of creatives and DJs.</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-black">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Join the Family</h3>
                <p className="text-gray-400">Become part of the F.O.T.U community and connect with like-minded music lovers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merch;
