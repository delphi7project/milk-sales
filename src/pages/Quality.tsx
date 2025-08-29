import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Microscope, Thermometer, Clock, Leaf } from 'lucide-react';

const Quality = () => {
  const qualityStandards = [
    {
      icon: Shield,
      title: 'ГОСТ сертификация',
      description: 'Все продукты соответствуют государственным стандартам качества',
      details: ['ГОСТ 31450-2013', 'ГОСТ 52090-2003', 'ТР ТС 033/2013']
    },
    {
      icon: Microscope,
      title: 'Лабораторный контроль',
      description: 'Каждая партия проходит микробиологический анализ',
      details: ['Анализ на патогены', 'Контроль кислотности', 'Проверка жирности']
    },
    {
      icon: Thermometer,
      title: 'Температурный режим',
      description: 'Строгое соблюдение холодовой цепи от производства до доставки',
      details: ['Производство: +4°C', 'Хранение: +2°C до +6°C', 'Доставка: +2°C до +6°C']
    },
    {
      icon: Clock,
      title: 'Контроль сроков',
      description: 'Мониторинг сроков годности на всех этапах',
      details: ['Автоматическая система учета', 'Ротация товара по принципу FIFO', 'Уведомления о сроках']
    }
  ];

  const certificates = [
    { name: 'ISO 22000', description: 'Система менеджмента безопасности пищевых продуктов' },
    { name: 'HACCP', description: 'Анализ рисков и критические контрольные точки' },
    { name: 'Органик', description: 'Сертификат органического производства' },
    { name: 'Халяль', description: 'Соответствие требованиям халяль' }
  ];

  const productionSteps = [
    {
      step: 1,
      title: 'Приемка сырья',
      description: 'Контроль качества молока-сырца от фермерских хозяйств'
    },
    {
      step: 2,
      title: 'Лабораторный анализ',
      description: 'Проверка на соответствие всем показателям качества'
    },
    {
      step: 3,
      title: 'Пастеризация',
      description: 'Термическая обработка для обеспечения безопасности'
    },
    {
      step: 4,
      title: 'Производство',
      description: 'Изготовление продукции на современном оборудовании'
    },
    {
      step: 5,
      title: 'Упаковка',
      description: 'Герметичная упаковка в стерильных условиях'
    },
    {
      step: 6,
      title: 'Контроль качества',
      description: 'Финальная проверка готовой продукции'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контроль качества</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы гарантируем высочайшее качество продукции благодаря строгому контролю 
            на всех этапах производства и доставки
          </p>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Стандарты качества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <standard.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {standard.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{standard.description}</p>
                  <ul className="space-y-2">
                    {standard.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Production Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Процесс производства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Сертификаты и награды</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quality Guarantee */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Гарантия качества</h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Мы настолько уверены в качестве наших продуктов, что предлагаем 100% гарантию. 
                Если продукт не соответствует вашим ожиданиям, мы вернем деньги или заменим товар.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-green-600">24 часа</div>
                  <div className="text-sm text-gray-600">на возврат/обмен</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">возврат средств</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">0₽</div>
                  <div className="text-sm text-gray-600">комиссия за возврат</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Lab Info */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наша лаборатория</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg"
                alt="Лаборатория контроля качества"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Современное оборудование для анализа
              </h3>
              <p className="text-gray-700 mb-6">
                Наша собственная лаборатория оснащена современным оборудованием для проведения 
                всех необходимых анализов. Мы проверяем каждую партию продукции на соответствие 
                стандартам качества и безопасности.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Leaf className="w-5 h-5 text-green-600 mr-3" />
                  <span>Анализ на антибиотики и пестициды</span>
                </li>
                <li className="flex items-center">
                  <Microscope className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Микробиологические исследования</span>
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-yellow-600 mr-3" />
                  <span>Контроль органолептических показателей</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quality;