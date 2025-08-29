import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Percent, Gift, Clock } from 'lucide-react';

const PromotionsSection = () => {
  const promotions = [
    {
      id: '1',
      title: 'Скидка 20% на первый заказ',
      description: 'Новым клиентам скидка на весь ассортимент',
      discount: '20%',
      code: 'WELCOME20',
      validUntil: '31 января 2025',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg'
    },
    {
      id: '2',
      title: 'Комплект "Семейный завтрак"',
      description: 'Молоко + творог + сметана со скидкой',
      discount: '15%',
      code: 'FAMILY15',
      validUntil: '15 февраля 2025',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Акции и предложения</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выгодные предложения и скидки на любимые продукты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {promotions.map((promotion) => (
            <Card key={promotion.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={promotion.image}
                  alt={promotion.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-red-600 text-white">
                  <Percent className="w-3 h-3 mr-1" />
                  {promotion.discount}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{promotion.title}</h3>
                <p className="text-gray-600 mb-4">{promotion.description}</p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Промокод:</span>
                    <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                      {promotion.code}
                    </code>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Действует до {promotion.validUntil}</span>
                </div>
                
                <Link to="/catalog">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Воспользоваться предложением
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/promotions">
            <Button size="lg" variant="outline">
              Все акции и предложения
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;