import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, X } from 'lucide-react';

const Wishlist = () => {
  // Пример избранных товаров
  const wishlistItems = [
    {
      id: '1',
      name: 'Молоко цельное 3.2%',
      price: 89,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      inStock: true
    },
    {
      id: '2',
      name: 'Творог домашний',
      price: 159,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Избранные товары</h1>
          <p className="text-gray-600">Сохраненные товары для быстрого заказа</p>
        </div>

        {wishlistItems.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Список избранного пуст</h2>
              <p className="text-gray-600 mb-6">Добавляйте товары в избранное для быстрого доступа</p>
              <Link to="/catalog">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Перейти в каталог
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">{item.price}₽</span>
                    <span className={`text-sm ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {item.inStock ? 'В наличии' : 'Нет в наличии'}
                    </span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Link to={`/product/${item.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Подробнее
                    </Button>
                  </Link>
                  <Button 
                    size="sm"
                    disabled={!item.inStock}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;