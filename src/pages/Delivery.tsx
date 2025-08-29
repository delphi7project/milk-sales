import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Clock, MapPin, CreditCard, Shield, Phone } from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    { zone: 'Центр Москвы', time: '2-4 часа', price: 'Бесплатно от 1500₽' },
    { zone: 'Москва в пределах МКАД', time: '3-6 часов', price: 'Бесплатно от 1500₽' },
    { zone: 'Ближайшее Подмосковье', time: '4-8 часов', price: 'Бесплатно от 2000₽' },
    { zone: 'Дальнее Подмосковье', time: 'На следующий день', price: 'Бесплатно от 3000₽' }
  ];

  const paymentMethods = [
    { name: 'Наличными курьеру', description: 'Оплата при получении заказа' },
    { name: 'Банковской картой', description: 'Visa, MasterCard, МИР' },
    { name: 'Онлайн-переводом', description: 'СБП, Яндекс.Деньги, QIWI' },
    { name: 'Банковским переводом', description: 'Для юридических лиц' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка и оплата</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Быстрая и надежная доставка свежих молочных продуктов с соблюдением холодовой цепи
          </p>
        </section>

        {/* Delivery Info */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-sm text-gray-600">От 2 часов по Москве</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Холодовая цепь</h3>
                <p className="text-sm text-gray-600">Поддержание температуры</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Точное время</h3>
                <p className="text-sm text-gray-600">Доставка в удобное время</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Уведомления</h3>
                <p className="text-sm text-gray-600">SMS о статусе заказа</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Delivery Zones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{zone.zone}</span>
                    <Badge variant="outline">{zone.time}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">Стоимость доставки:</span>
                    </div>
                    <span className="font-semibold text-green-600">{zone.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CreditCard className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{method.name}</h3>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как происходит доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Оформление заказа</h3>
              <p className="text-sm text-gray-600">Выберите продукты и оформите заказ на сайте</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Подтверждение</h3>
              <p className="text-sm text-gray-600">Менеджер свяжется для подтверждения</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Сборка заказа</h3>
              <p className="text-sm text-gray-600">Комплектация и упаковка продуктов</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Доставка</h3>
              <p className="text-sm text-gray-600">Курьер доставит заказ в указанное время</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Часто задаваемые вопросы</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли заказать доставку на определенное время?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, при оформлении заказа вы можете выбрать удобный временной интервал доставки. 
                  Мы предлагаем интервалы по 2 часа с 8:00 до 22:00.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что делать, если товар не подошел?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы гарантируем качество всех продуктов. Если товар не соответствует ожиданиям, 
                  мы заменим его или вернем деньги в течение 24 часов.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как отследить статус заказа?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  После оформления заказа вы получите SMS с номером заказа. Статус можно отследить 
                  в личном кабинете или по телефону горячей линии.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Delivery;