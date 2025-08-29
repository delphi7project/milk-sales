import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building, Users, Truck, Calculator, FileText, Handshake } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Wholesale = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    expectedVolume: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш менеджер по корпоративным продажам свяжется с вами в течение рабочего дня.',
    });
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
      businessType: '',
      expectedVolume: '',
      message: ''
    });
  };

  const benefits = [
    {
      icon: Calculator,
      title: 'Оптовые цены',
      description: 'Скидки до 25% при больших объемах заказа'
    },
    {
      icon: Truck,
      title: 'Логистика',
      description: 'Организуем доставку по всей России'
    },
    {
      icon: FileText,
      title: 'Документооборот',
      description: 'Полный пакет документов для юридических лиц'
    },
    {
      icon: Handshake,
      title: 'Персональный менеджер',
      description: 'Индивидуальный подход к каждому клиенту'
    }
  ];

  const clientTypes = [
    { type: 'Рестораны и кафе', volume: 'от 500кг/месяц', discount: 'до 15%' },
    { type: 'Продуктовые магазины', volume: 'от 1000кг/месяц', discount: 'до 20%' },
    { type: 'Торговые сети', volume: 'от 5000кг/месяц', discount: 'до 25%' },
    { type: 'Производители', volume: 'от 10000кг/месяц', discount: 'индивидуально' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Оптовые продажи</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выгодные условия поставки молочной продукции для бизнеса
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Преимущества работы с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Client Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Условия для разных типов бизнеса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientTypes.map((client, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="w-5 h-5 mr-2 text-blue-600" />
                    {client.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Минимальный объем:</span>
                      <span className="font-semibold">{client.volume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Скидка:</span>
                      <span className="font-semibold text-green-600">{client.discount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Заявка на сотрудничество</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Название компании *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      placeholder="ООО Пример"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactPerson">Контактное лицо *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="info@company.com"
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
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Адрес</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Адрес компании"
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessType">Тип бизнеса</Label>
                    <Input
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                      placeholder="Ресторан, магазин, производство..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="expectedVolume">Ожидаемый объем закупок</Label>
                    <Input
                      id="expectedVolume"
                      value={formData.expectedVolume}
                      onChange={(e) => setFormData(prev => ({ ...prev, expectedVolume: e.target.value }))}
                      placeholder="кг/литров в месяц"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Расскажите о ваших потребностях..."
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

          {/* Additional Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Почему выбирают нас</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Опыт работы</h4>
                    <p className="text-sm text-gray-600">25 лет на рынке молочной продукции</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Надежность</h4>
                    <p className="text-sm text-gray-600">Более 500 корпоративных клиентов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Truck className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Логистика</h4>
                    <p className="text-sm text-gray-600">Собственный автопарк и склады</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контакты отдела продаж</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Михаил Петров</h4>
                  <p className="text-sm text-gray-600">Менеджер по корпоративным продажам</p>
                  <p className="text-blue-600">+7 (495) 123-45-67 доб. 101</p>
                  <p className="text-blue-600">b2b@moloko.ru</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Режим работы</h4>
                  <p className="text-sm text-gray-600">Пн-Пт: 9:00-18:00</p>
                  <p className="text-sm text-gray-600">Сб-Вс: выходные</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Специальное предложение</h3>
                <p className="text-gray-700 mb-4">
                  Новым корпоративным клиентам скидка 10% на первый заказ
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Узнать подробности
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wholesale;