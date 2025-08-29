import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Percent, Gift, Clock, Tag, Calendar } from 'lucide-react';

const Promotions = () => {
  const currentPromotions = [
    {
      id: '1',
      title: 'Скидка 20% на первый заказ',
      description: 'Новым клиентам скидка на весь ассортимент молочной продукции',
      discount: '20%',
      code: 'WELCOME20',
      validUntil: '31 января 2025',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      type: 'new-customer'
    },
    {
      id: '2',
      title: 'Комплект "Семейный завтрак"',
      description: 'Молоко + творог + сметана + масло со скидкой 15%',
      discount: '15%',
      code: 'FAMILY15',
      validUntil: '15 февраля 2025',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      type: 'bundle'
    },
    {
      id: '3',
      title: 'Бесплатная доставка',
      description: 'При заказе от 1000₽ доставка бесплатно в любую точку Москвы',
      discount: 'Бесплатно',
      code: 'FREEDEL',
      validUntil: '28 февраля 2025',
      image: 'https://images.pexels.com/photos/6544364/pexels-photo-6544364.jpeg',
      type: 'delivery'
    }
  ];

  const upcomingPromotions = [
    {
      title: 'День влюбленных',
      description: 'Романтические наборы молочных продуктов',
      startDate: '10 февраля 2025',
      discount: '25%'
    },
    {
      title: 'Масленица',
      description: 'Скидки на молоко и сметану для блинов',
      startDate: '24 февраля 2025',
      discount: '30%'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'new-customer': return 'bg-blue-100 text-blue-800';
      case 'bundle': return 'bg-green-100 text-green-800';
      case 'delivery': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'new-customer': return 'Для новых клиентов';
      case 'bundle': return 'Комплект';
      case 'delivery': return 'Доставка';
      default: return 'Акция';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Акции и предложения</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выгодные предложения и скидки на качественные молочные продукты
          </p>
        </section>

        {/* Current Promotions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Текущие акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPromotions.map((promotion) => (
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
                  <Badge className={`absolute top-3 right-3 ${getTypeColor(promotion.type)}`}>
                    {getTypeText(promotion.type)}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{promotion.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{promotion.description}</p>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Промокод:</span>
                      <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                        {promotion.code}
                      </code>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Действует до {promotion.validUntil}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Воспользоваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Promotions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Предстоящие акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingPromotions.map((promotion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{promotion.title}</h3>
                      <p className="text-gray-600 mb-3">{promotion.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Начало: {promotion.startDate}</span>
                        <Badge variant="outline">{promotion.discount}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Loyalty Program */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Программа лояльности</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Станьте участником нашей программы лояльности и получайте дополнительные скидки, 
              эксклюзивные предложения и накапливайте баллы за покупки.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-2xl font-bold text-purple-600">5%</div>
                <div className="text-sm text-gray-600">кэшбэк баллами</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">500</div>
                <div className="text-sm text-gray-600">баллов за регистрацию</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">VIP</div>
                <div className="text-sm text-gray-600">статус и привилегии</div>
              </div>
            </div>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Присоединиться к программе
            </Button>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Promotions;