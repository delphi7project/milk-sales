import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Продукт не найден</h1>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_ITEM', product });
    }
    toast({
      title: 'Товар добавлен в корзину',
      description: `${product.name} (${quantity} шт.) добавлен в корзину`,
    });
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/catalog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться в каталог
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-green-600">
                В наличии
              </Badge>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">(4.8)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">156 отзывов</span>
              </div>
              <p className="text-lg text-gray-700">{product.description}</p>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Объем/Вес:</span>
                <p className="font-semibold">{product.weight}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Жирность:</span>
                <p className="font-semibold">{product.fatContent}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Бренд:</span>
                <p className="font-semibold">{product.brand}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Срок годности:</span>
                <p className="font-semibold">7 дней</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="text-3xl font-bold text-blue-600">{product.price}₽</div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <span className="text-gray-600">шт.</span>
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={addToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Truck className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Доставка в день заказа</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-600" />
                  <span>Гарантия качества</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Похожие продукты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{relatedProduct.description}</p>
                    <div className="text-lg font-bold text-blue-600">{relatedProduct.price}₽</div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link to={`/product/${relatedProduct.id}`} className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Посмотреть
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;