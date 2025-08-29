import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      details: ['+7 (800) 123-45-67', 'Бесплатно по России'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@moloko.ru', 'Ответим в течение часа'],
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      details: ['г. Москва, ул. Молочная, 15', 'Офис и склад'],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      details: ['Пн-Пт: 8:00-22:00', 'Сб-Вс: 9:00-21:00'],
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Написать нам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Тема сообщения</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="О чем хотите написать?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Ваше сообщение..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className={i === 0 ? 'font-medium' : 'text-sm text-gray-600'}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Как нас найти</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Интерактивная карта</p>
                    <p className="text-sm">г. Москва, ул. Молочная, 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardHeader>
                <CardTitle>Дополнительная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Горячая линия</h4>
                  <p className="text-gray-600">Круглосуточная поддержка клиентов</p>
                  <p className="font-medium text-blue-600">+7 (800) 123-45-67</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Отдел качества</h4>
                  <p className="text-gray-600">Вопросы по качеству продукции</p>
                  <p className="font-medium text-blue-600">quality@moloko.ru</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Корпоративные продажи</h4>
                  <p className="text-gray-600">Для ресторанов и кафе</p>
                  <p className="font-medium text-blue-600">b2b@moloko.ru</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;