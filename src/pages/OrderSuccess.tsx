import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Заказ успешно оформлен!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Спасибо за ваш заказ. Мы уже начали его обработку.
          </p>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Номер заказа</h2>
                <div className="text-2xl font-bold text-blue-600 font-mono">#{orderNumber}</div>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Статус:</span>
                  <span className="font-semibold text-green-600">Принят в обработку</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ожидаемая доставка:</span>
                  <span className="font-semibold">Сегодня, 15:00-17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Способ оплаты:</span>
                  <span className="font-semibold">Наличными курьеру</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-8">
            <p className="text-gray-700">
              Наш менеджер свяжется с вами в течение 15 минут для подтверждения заказа.
            </p>
            <p className="text-gray-700">
              Вы также получите SMS с информацией о заказе и ссылкой для отслеживания.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Есть вопросы?</h3>
                <p className="text-sm text-gray-600 mb-3">Позвоните нам</p>
                <Button variant="outline" size="sm">
                  +7 (800) 123-45-67
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Напишите нам</h3>
                <p className="text-sm text-gray-600 mb-3">Ответим быстро</p>
                <Button variant="outline" size="sm">
                  info@moloko.ru
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button variant="outline" size="lg">
                Продолжить покупки
              </Button>
            </Link>
            <Link to="/order-history">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Мои заказы
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;