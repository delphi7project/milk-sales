import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Star, Crown, Zap, Users, Heart } from 'lucide-react';

const Loyalty = () => {
  const loyaltyLevels = [
    {
      level: 'Новичок',
      icon: Star,
      color: 'bg-gray-100 text-gray-800',
      minSpent: 0,
      benefits: ['1% кэшбэк', 'Уведомления об акциях'],
      iconColor: 'text-gray-600'
    },
    {
      level: 'Друг',
      icon: Heart,
      color: 'bg-blue-100 text-blue-800',
      minSpent: 5000,
      benefits: ['3% кэшбэк', 'Персональные скидки', 'Приоритетная доставка'],
      iconColor: 'text-blue-600'
    },
    {
      level: 'VIP',
      icon: Crown,
      color: 'bg-purple-100 text-purple-800',
      minSpent: 15000,
      benefits: ['5% кэшбэк', 'Эксклюзивные товары', 'Бесплатная доставка', 'Персональный менеджер'],
      iconColor: 'text-purple-600'
    }
  ];

  const bonusActions = [
    { action: 'Регистрация', bonus: '500 баллов', icon: Users },
    { action: 'Первый заказ', bonus: '1000 баллов', icon: Gift },
    { action: 'Отзыв с фото', bonus: '200 баллов', icon: Star },
    { action: 'Приглашение друга', bonus: '1500 баллов', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Программа лояльности</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Покупайте больше, экономьте больше! Накапливайте баллы и получайте эксклюзивные преимущества
          </p>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Регистрируйтесь</h3>
              <p className="text-sm text-gray-600">Создайте аккаунт и получите приветственные баллы</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Покупайте</h3>
              <p className="text-sm text-gray-600">За каждую покупку начисляются баллы</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Накапливайте</h3>
              <p className="text-sm text-gray-600">Баллы накапливаются и повышают ваш статус</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Тратьте</h3>
              <p className="text-sm text-gray-600">Используйте баллы для оплаты заказов</p>
            </div>
          </div>
        </section>

        {/* Loyalty Levels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Уровни программы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loyaltyLevels.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <level.icon className={`w-10 h-10 ${level.iconColor}`} />
                  </div>
                  <CardTitle className="flex items-center justify-center">
                    <Badge className={level.color}>{level.level}</Badge>
                  </CardTitle>
                  <p className="text-gray-600">От {level.minSpent.toLocaleString()}₽</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Zap className="w-4 h-4 text-yellow-500 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bonus Actions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как заработать баллы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonusActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <action.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{action.action}</h3>
                  <div className="text-lg font-bold text-green-600">{action.bonus}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Terms */}
        <Card>
          <CardHeader>
            <CardTitle>Условия программы лояльности</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Начисление баллов</h4>
              <p className="text-gray-600">
                Баллы начисляются в течение 24 часов после получения заказа. 
                1 балл = 1 рубль при оплате следующих заказов.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Срок действия баллов</h4>
              <p className="text-gray-600">
                Баллы действительны в течение 12 месяцев с момента начисления. 
                При новых покупках срок продлевается автоматически.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Использование баллов</h4>
              <p className="text-gray-600">
                Баллами можно оплатить до 50% стоимости заказа. Минимальная сумма для использования баллов — 100 баллов.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Loyalty;