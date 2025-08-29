import React from 'react';
import { Shield, Award, Truck, Heart, Users, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const QualitySection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Контроль качества',
      description: 'Строгий контроль на всех этапах производства'
    },
    {
      icon: Award,
      title: 'Сертификация',
      description: 'Все продукты имеют необходимые сертификаты качества'
    },
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Доставка в день заказа с соблюдением холодовой цепи'
    },
    {
      icon: Heart,
      title: 'Забота о здоровье',
      description: 'Продукты без консервантов и искусственных добавок'
    },
    {
      icon: Users,
      title: 'Семейные традиции',
      description: 'Производство по традиционным рецептам'
    },
    {
      icon: Leaf,
      title: 'Экологичность',
      description: 'Экологически чистое производство'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы гарантируем высочайшее качество продукции и сервиса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;