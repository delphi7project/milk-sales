import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Recycle, Droplets, Sun, Heart, Globe } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Экологичная упаковка',
      description: 'Переход на биоразлагаемую упаковку и сокращение пластика',
      progress: 85
    },
    {
      icon: Droplets,
      title: 'Водосбережение',
      description: 'Системы очистки и повторного использования воды',
      progress: 92
    },
    {
      icon: Sun,
      title: 'Возобновляемая энергия',
      description: 'Использование солнечных панелей на производстве',
      progress: 60
    },
    {
      icon: Recycle,
      title: 'Переработка отходов',
      description: 'Программа переработки и утилизации производственных отходов',
      progress: 78
    }
  ];

  const partnerships = [
    {
      name: 'Эко-фермы',
      description: 'Партнерство с органическими фермерскими хозяйствами',
      icon: '🌱'
    },
    {
      name: 'Зеленая логистика',
      description: 'Электротранспорт для доставки в центре города',
      icon: '🚛'
    },
    {
      name: 'Лесовосстановление',
      description: 'Программа посадки деревьев совместно с экологическими организациями',
      icon: '🌳'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Экологическая ответственность</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы заботимся о планете и будущих поколениях, внедряя экологичные решения во все аспекты нашей деятельности
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8 text-center">
              <Globe className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Наша экологическая миссия</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Мы стремимся к углеродной нейтральности к 2030 году, минимизируя воздействие 
                на окружающую среду и поддерживая устойчивое развитие молочной отрасли.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Initiatives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши инициативы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <initiative.icon className="w-6 h-6 text-green-600" />
                    </div>
                    {initiative.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс:</span>
                      <span className="font-semibold">{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnerships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Экологические партнерства</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{partnership.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{partnership.name}</h3>
                  <p className="text-gray-600 text-sm">{partnership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Цели на 2025 год</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">-30%</div>
                <div className="text-sm text-gray-600">сокращение углеродного следа</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">перерабатываемая упаковка</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">возобновляемая энергия</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">1000</div>
                <div className="text-sm text-gray-600">посаженных деревьев</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sustainability;