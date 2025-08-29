import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Корзина пуста</h1>
            <p className="text-gray-600 mb-8">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <Link to="/catalog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Корзина</h1>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              {state.items.reduce((sum, item) => sum + item.quantity, 0)} товаров в корзине
            </p>
            <Button variant="ghost" onClick={clearCart} className="text-red-600 hover:text-red-700">
              <Trash2 className="w-4 h-4 mr-2" />
              Очистить корзину
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.product.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{item.product.name}</h3>
                      <p className="text-gray-600 text-sm">{item.product.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{item.product.weight}</span>
                        <span>•</span>
                        <span>{item.product.brand}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">
                        {item.product.price * item.quantity}₽
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.product.price}₽ за шт.
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Итого по заказу</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Товары ({state.items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                  <span>{state.total}₽</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span className={state.total >= 1500 ? 'text-green-600' : ''}>
                    {state.total >= 1500 ? 'Бесплатно' : '200₽'}
                  </span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Итого</span>
                  <span className="text-blue-600">
                    {state.total + (state.total >= 1500 ? 0 : 200)}₽
                  </span>
                </div>

                {state.total < 1500 && (
                  <div className="bg-blue-50 p-3 rounded-lg text-sm">
                    <p className="text-blue-800">
                      Добавьте товаров на {1500 - state.total}₽ для бесплатной доставки
                    </p>
                  </div>
                )}

                <Link to="/checkout" className="block">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Оформить заказ
                  </Button>
                </Link>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Truck className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Доставка в день заказа</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-600" />
                    <span>Гарантия свежести</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;