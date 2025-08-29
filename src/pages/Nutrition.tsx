import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Zap, Shield, Leaf } from 'lucide-react';

const Nutrition = () => {
  const nutritionFacts = [
    {
      product: 'Молоко цельное 3.2%',
      per100g: {
        calories: 64,
        protein: 3.2,
        fat: 3.6,
        carbs: 4.7,
        calcium: 120,
        vitamins: ['A', 'D', 'B12']
      }
    },
    {
      product: 'Творог 9%',
      per100g: {
        calories: 159,
        protein: 18.0,
        fat: 9.0,
        carbs: 3.0,
        calcium: 164,
        vitamins: ['A', 'B2', 'B12']
      }
    },
    {
      product: 'Кефир 1%',
      per100g: {
        calories: 40,
        protein: 3.0,
        fat: 1.0,
        carbs: 4.0,
        calcium: 120,
        vitamins: ['B1', 'B2', 'B12']
      }
    }
  ];

  const healthBenefits = [
    {
      icon: Heart,
      title: 'Здоровье сердца',
      description: 'Калий и магний поддерживают работу сердечно-сосудистой системы',
      color: 'text-red-600'
    },
    {
      icon: Zap,
      title: 'Энергия и сила',
      description: 'Белки и углеводы обеспечивают организм энергией на весь день',
      color: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Крепкие кости',
      description: 'Кальций и витамин D укрепляют костную ткань и зубы',
      color: 'text-blue-600'
    },
    {
      icon: Leaf,
      title: 'Пищеварение',
      description: 'Пробиотики в кисломолочных продуктах улучшают пищеварение',
      color: 'text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Польза молочных продуктов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте о пищевой ценности и пользе наших продуктов для здоровья
          </p>
        </section>

        {/* Health Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Польза для здоровья</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nutrition Facts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Пищевая ценность</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nutritionFacts.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-center">{item.product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{item.per100g.calories}</div>
                      <div className="text-sm text-gray-600">ккал на 100г</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="font-semibold text-lg">{item.per100g.protein}г</div>
                        <div className="text-xs text-gray-600">Белки</div>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{item.per100g.fat}г</div>
                        <div className="text-xs text-gray-600">Жиры</div>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{item.per100g.carbs}г</div>
                        <div className="text-xs text-gray-600">Углеводы</div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Кальций:</span>
                        <span className="font-semibold">{item.per100g.calcium}мг</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Витамины: </span>
                        {item.per100g.vitamins.map((vitamin, i) => (
                          <Badge key={i} variant="outline" className="ml-1 text-xs">
                            {vitamin}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Dietary Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Диетическая информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Для детей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Молочные продукты особенно важны для растущего организма. Они обеспечивают:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Кальций для формирования костей и зубов
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Белок для роста мышечной массы
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Витамины для развития нервной системы
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Для взрослых</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Молочные продукты в рационе взрослого человека помогают:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Поддерживать плотность костной ткани
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Контролировать артериальное давление
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Улучшать работу пищеварительной системы
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recommendations */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-center">Рекомендации по употреблению</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">2-3</div>
                <div className="text-sm text-gray-600">порции молочных продуктов в день</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-2">300мл</div>
                <div className="text-sm text-gray-600">рекомендуемая порция молока</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">100г</div>
                <div className="text-sm text-gray-600">оптимальная порция творога</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Nutrition;