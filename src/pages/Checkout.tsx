import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Truck, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Москва',
    postalCode: '',
    deliveryTime: '',
    paymentMethod: '',
    notes: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    // Имитация отправки заказа
    toast({
      title: 'Заказ оформлен!',
      description: 'Спасибо за заказ. Менеджер свяжется с вами в течение 15 минут.',
    });

    dispatch({ type: 'CLEAR_CART' });
    navigate('/order-success');
  };

  const deliveryPrice = state.total >= 1500 ? 0 : 200;
  const totalPrice = state.total + deliveryPrice;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">Добавьте товары в корзину для оформления заказа</p>
          <Link to="/catalog">
            <Button>Перейти в каталог</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/cart" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться в корзину
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Оформление заказа</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя и фамилия *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Адрес доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">Город</Label>
                      <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Москва">Москва</SelectItem>
                          <SelectItem value="Подмосковье">Подмосковье</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Почтовый индекс</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        placeholder="123456"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="ул. Примерная, д. 1, кв. 1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryTime">Время доставки</Label>
                    <Select value={formData.deliveryTime} onValueChange={(value) => handleInputChange('deliveryTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9-11">9:00 - 11:00</SelectItem>
                        <SelectItem value="11-13">11:00 - 13:00</SelectItem>
                        <SelectItem value="13-15">13:00 - 15:00</SelectItem>
                        <SelectItem value="15-17">15:00 - 17:00</SelectItem>
                        <SelectItem value="17-19">17:00 - 19:00</SelectItem>
                        <SelectItem value="19-21">19:00 - 21:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="notes">Комментарий к заказу</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Дополнительная информация для курьера"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Способ оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите способ оплаты" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Наличными курьеру</SelectItem>
                      <SelectItem value="card">Банковской картой</SelectItem>
                      <SelectItem value="online">Онлайн-переводом</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.product.id} className="flex justify-between items-center">
                      <div className="flex-1">
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-gray-600">{item.quantity} × {item.product.price}₽</p>
                      </div>
                      <span className="font-semibold">{item.product.price * item.quantity}₽</span>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Товары</span>
                      <span>{state.total}₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span className={deliveryPrice === 0 ? 'text-green-600' : ''}>
                        {deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice}₽`}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого</span>
                    <span className="text-blue-600">{totalPrice}₽</span>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Оформить заказ
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;