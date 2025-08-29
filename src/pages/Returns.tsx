import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, Clock, Shield, Phone } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Возврат и обмен товаров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы гарантируем качество всех продуктов и готовы решить любые вопросы
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Условия возврата</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Сроки возврата</h4>
                    <p className="text-gray-600">Товар можно вернуть в течение 24 часов с момента получения</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Гарантия качества</h4>
                    <p className="text-gray-600">100% возврат средств при обнаружении дефектов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <RotateCcw className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Простая процедура</h4>
                    <p className="text-gray-600">Минимум документов и быстрое рассмотрение заявки</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Как оформить возврат</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Свяжитесь с нами</h4>
                      <p className="text-gray-600">Позвоните по телефону +7 (800) 123-45-67 или напишите на info@moloko.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Опишите проблему</h4>
                      <p className="text-gray-600">Расскажите, что не устроило в товаре, приложите фото при необходимости</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Получите решение</h4>
                      <p className="text-gray-600">Мы рассмотрим заявку и предложим замену товара или возврат средств</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button className="w-full" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Написать в чат
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Статистика возвратов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">0.2%</div>
                    <div className="text-sm text-gray-600">возвратов от общего объема</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">15 мин</div>
                    <div className="text-sm text-gray-600">среднее время рассмотрения</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-gray-600">удовлетворенных клиентов</div>
                  </div>
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

export default Returns;