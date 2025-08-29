import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Careers = () => {
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const openPositions = [
    {
      id: '1',
      title: 'Технолог молочного производства',
      department: 'Производство',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '3+ года',
      salary: '80 000 - 120 000₽'
    },
    {
      id: '2',
      title: 'Менеджер по продажам',
      department: 'Продажи',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '2+ года',
      salary: '60 000 - 100 000₽'
    },
    {
      id: '3',
      title: 'Курьер-экспедитор',
      department: 'Логистика',
      location: 'Москва',
      type: 'Полная/частичная',
      experience: 'Без опыта',
      salary: '50 000 - 80 000₽'
    },
    {
      id: '4',
      title: 'Специалист по качеству',
      department: 'Контроль качества',
      location: 'Московская область',
      type: 'Полная занятость',
      experience: '1+ год',
      salary: '70 000 - 90 000₽'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Медицинское страхование',
      description: 'ДМС для сотрудников и их семей'
    },
    {
      icon: TrendingUp,
      title: 'Карьерный рост',
      description: 'Программы развития и повышения квалификации'
    },
    {
      icon: Users,
      title: 'Дружный коллектив',
      description: 'Корпоративные мероприятия и командообразование'
    },
    {
      icon: Briefcase,
      title: 'Стабильная работа',
      description: 'Официальное трудоустройство и своевременная зарплата'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Резюме отправлено!',
      description: 'Мы рассмотрим вашу кандидатуру и свяжемся с вами.',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Карьера в МолокоМаркет</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Присоединяйтесь к нашей команде профессионалов и развивайтесь вместе с нами
          </p>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Наша корпоративная культура</h2>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Мы ценим каждого сотрудника и создаем условия для профессионального и личностного роста. 
                В нашей команде работают увлеченные своим делом профессионалы.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">сотрудников</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">5 лет</div>
                  <div className="text-sm text-gray-600">средний стаж</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">довольных сотрудников</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">25</div>
                  <div className="text-sm text-gray-600">лет компании</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Что мы предлагаем</h2>
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

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Открытые вакансии</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold">{position.title}</h3>
                        <Badge variant="outline">{position.department}</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {position.experience}
                        </div>
                        <div className="font-semibold text-green-600">
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 mt-4 lg:mt-0">
                      <Button variant="outline">
                        Подробнее
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Откликнуться
                      </Button>
                    </div>
                  </div>
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
                <CardTitle>Отправить резюме</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя и фамилия *</Label>
                      <Input
                        id="name"
                        value={applicationData.name}
                        onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={applicationData.phone}
                        onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="position">Желаемая позиция</Label>
                    <Input
                      id="position"
                      value={applicationData.position}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, position: e.target.value }))}
                      placeholder="Название вакансии"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Опыт работы</Label>
                    <Textarea
                      id="experience"
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="Расскажите о своем опыте..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сопроводительное письмо</Label>
                    <Textarea
                      id="message"
                      value={applicationData.message}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Почему вы хотите работать у нас?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить резюме
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Company Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Почему стоит работать у нас</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Стабильная компания</h4>
                    <p className="text-sm text-gray-600">25 лет успешной работы на рынке</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Развитие и обучение</h4>
                    <p className="text-sm text-gray-600">Инвестируем в развитие сотрудников</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Современные технологии</h4>
                    <p className="text-sm text-gray-600">Работа с передовым оборудованием</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Социальный пакет</h4>
                    <p className="text-sm text-gray-600">Полный соцпакет и дополнительные льготы</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контакты HR-отдела</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Анна Козлова</h4>
                    <p className="text-sm text-gray-600">HR-менеджер</p>
                    <p className="text-blue-600">hr@moloko.ru</p>
                    <p className="text-blue-600">+7 (495) 123-45-67 доб. 105</p>
                  </div>
                  
                  <div className="border-t pt-3">
                    <h4 className="font-semibold">Режим работы</h4>
                    <p className="text-sm text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Стажировка для студентов</h3>
                <p className="text-gray-700 mb-4">
                  Предлагаем программы стажировки для студентов профильных специальностей
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Узнать больше
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

export default Careers;