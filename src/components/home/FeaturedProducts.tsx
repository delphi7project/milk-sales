import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const FeaturedProducts = () => {
  const { dispatch } = useCart();

  const featuredProducts = products.slice(0, 6);

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные продукты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Самые востребованные молочные продукты от наших покупателей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-3 left-3 bg-green-600">
                  Свежее
                </Badge>
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{product.weight}</span>
                  <span className="text-sm text-gray-500">Жирность: {product.fatContent}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{product.price}₽</span>
                  <span className="text-sm text-gray-500">{product.brand}</span>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Link to={`/product/${product.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </Link>
                <Button 
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/catalog">
            <Button size="lg" variant="outline">
              Посмотреть все продукты
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;