import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  soldOut?: boolean;
  onSale?: boolean;
  salePrice?: number;
}
interface ProductCardProps {
  product: Product;
  onPurchase: (product: Product) => void;
}
const ProductCard = ({
  product,
  onPurchase
}: ProductCardProps) => {
  const handlePurchase = () => {
    const message = `Hi! I would like to place an order for: ${product.name} - R${product.onSale ? product.salePrice : product.price}`;
    const whatsappUrl = `https://wa.me/27847482489?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="bg-gray-900/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 group">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-2 right-2 space-y-1">
          {product.onSale && <Badge className="bg-red-500 hover:bg-red-600">
              SALE
            </Badge>}
          {product.soldOut && <Badge variant="destructive">
              SOLD OUT
            </Badge>}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4 space-y-3 bg-stone-50">
        <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {product.onSale ? <>
                <span className="text-lg font-bold text-yellow-400">
                  R{product.salePrice}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  R{product.price}
                </span>
              </> : <span className="text-lg font-bold text-yellow-400">
                R{product.price}
              </span>}
          </div>
          
          <Button onClick={handlePurchase} disabled={product.soldOut} className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.soldOut ? 'Sold Out' : 'Buy Now'}
          </Button>
        </div>
      </div>
    </div>;
};
export default ProductCard;