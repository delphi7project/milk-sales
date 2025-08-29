import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Truck, CreditCard } from 'lucide-react';

const DeliverySection = () => {
  const deliveryFeatures = [
    {
      icon: Clock,
      title: 'Доставка в день заказа',
      description: 'Заказы до 14:00 доставляются в тот же день'
    },
    {
      icon: MapPin,
      title: 'По всей Москве',
      description: 'Доставляем в пределах МКАД и ближайшее Подмосковье'
    },
    {
      icon: Truck,
      title: 'Холодовая цепь',
      description: 'Специальный транспорт с поддержанием температуры'
    },
    {
      icon: CreditCard,
      title: 'Удобная оплата',
      description: 'Наличными, картой или онлайн-переводом'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Доставка и оплата</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Быстро, надежно и с заботой о качестве продукции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliveryFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Бесплатная доставка от 1500₽</h3>
          <p className="text-blue-100 mb-6">
            Оформите заказ на сумму от 1500 рублей и получите бесплатную доставку
          </p>
          <Link to="/delivery">
            <Button variant="secondary" size="lg">
              Узнать подробности
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;