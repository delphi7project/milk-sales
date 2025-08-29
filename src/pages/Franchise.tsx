import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Store, TrendingUp, Users, Award, MapPin, DollarSign } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    investment: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш специалист по франшизе свяжется с вами в ближайшее время.',
    });
  };

  const franchiseAdvantages = [
    {
      icon: Store,
      title: 'Готовая бизнес-модель',
      description: 'Проверенная концепция с 25-летним опытом'
    },
    {
      icon: TrendingUp,
      title: 'Быстрая окупаемость',
      description: 'Возврат инвестиций в течение 12-18 месяцев'
    },
    {
      icon: Users,
      title: 'Обучение и поддержка',
      description: 'Полное обучение персонала и постоянная поддержка'
    },
    {
      icon: Award,
      title: 'Узнаваемый бренд',
      description: 'Сильный бренд с лояльной клиентской базой'
    }
  ];

  const investmentPackages = [
    {
      name: 'Мини-точка',
      investment: '500 000₽',
      area: '15-30 м²',
      products: 'Основной ассортимент',
      support: 'Базовая поддержка'
    },
    {
      name: 'Стандарт',
      investment: '1 200 000₽',
      area: '50-80 м²',
      products: 'Полный ассортимент',
      support: 'Расширенная поддержка'
    },
    {
      name: 'Премиум',
      investment: '2 500 000₽',
      area: '100+ м²',
      products: 'Премиум линейка',
      support: 'VIP поддержка'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Франшиза МолокоМаркет</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Станьте частью успешной сети магазинов молочной продукции
          </p>
        </section>

        {/* Hero Stats */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-blue-100">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-blue-100">франчайзи</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-blue-100">успешных точек</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">18</div>
                  <div className="text-blue-100">месяцев окупаемость</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Преимущества франшизы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {franchiseAdvantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Investment Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Инвестиционные пакеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentPackages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{pkg.investment}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Площадь:</span>
                    <span className="font-semibold">{pkg.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ассортимент:</span>
                    <span className="font-semibold">{pkg.products}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Поддержка:</span>
                    <span className="font-semibold">{pkg.support}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Заявка на франшизу</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя и фамилия *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
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
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">Город для открытия *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Опыт в бизнесе</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="Расскажите о своем опыте"
                    />
                  </div>

                  <div>
                    <Label htmlFor="investment">Размер инвестиций</Label>
                    <Input
                      id="investment"
                      value={formData.investment}
                      onChange={(e) => setFormData(prev => ({ ...prev, investment: e.target.value }))}
                      placeholder="Сумма готовых инвестиций"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Этапы сотрудничества</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold">Подача заявки</h4>
                      <p className="text-sm text-gray-600">Заполните форму и отправьте заявку</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold">Собеседование</h4>
                      <p className="text-sm text-gray-600">Встреча с менеджером по франшизе</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold">Подписание договора</h4>
                      <p className="text-sm text-gray-600">Оформление франчайзингового соглашения</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold">Запуск бизнеса</h4>
                      <p className="text-sm text-gray-600">Обучение, настройка и открытие точки</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Что входит в франшизу</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Право использования торговой марки
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Дизайн-проект и брендбук
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Обучение персонала
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Маркетинговая поддержка
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Система управления запасами
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Постоянная поддержка
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Franchise;