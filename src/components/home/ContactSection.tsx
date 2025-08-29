import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и помочь с выбором продукции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (800) 123-45-67</p>
              <p className="text-sm text-gray-500">Бесплатно по России</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@moloko.ru</p>
              <p className="text-sm text-gray-500">Ответим в течение часа</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва</p>
              <p className="text-sm text-gray-500">ул. Молочная, 15</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <p className="text-gray-600">Пн-Пт: 8:00-22:00</p>
              <p className="text-sm text-gray-500">Сб-Вс: 9:00-21:00</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link to="/contacts">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;