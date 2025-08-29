import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const Help = () => {
  const faqCategories = [
    {
      title: 'Заказы и доставка',
      questions: [
        { q: 'Как оформить заказ?', a: 'Выберите товары в каталоге и добавьте их в корзину...' },
        { q: 'Сколько стоит доставка?', a: 'Доставка бесплатная при заказе от 1500₽...' },
        { q: 'В какое время осуществляется доставка?', a: 'Доставка с 8:00 до 22:00 с интервалом 2 часа...' }
      ]
    },
    {
      title: 'Оплата',
      questions: [
        { q: 'Какие способы оплаты доступны?', a: 'Наличными, картой, онлайн-переводом...' },
        { q: 'Можно ли оплатить картой при получении?', a: 'Да, наши курьеры принимают оплату картой...' }
      ]
    },
    {
      title: 'Качество продукции',
      questions: [
        { q: 'Как проверяется качество продуктов?', a: 'Каждая партия проходит лабораторный контроль...' },
        { q: 'Что делать, если товар испорчен?', a: 'Мы заменим товар или вернем деньги...' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Центр поддержки</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Найдите ответы на часто задаваемые вопросы или свяжитесь с нашей службой поддержки
          </p>
        </section>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Поиск по базе знаний..."
              className="pl-12 py-3 text-lg"
            />
          </div>
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Позвонить</h3>
              <p className="text-gray-600 mb-4">+7 (800) 123-45-67</p>
              <Button variant="outline" size="sm">Позвонить сейчас</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Написать</h3>
              <p className="text-gray-600 mb-4">info@moloko.ru</p>
              <Button variant="outline" size="sm">Написать письмо</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Онлайн-чат</h3>
              <p className="text-gray-600 mb-4">Быстрые ответы</p>
              <Button variant="outline" size="sm">Начать чат</Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="space-y-8">
          {faqCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <div key={qIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold mb-2">{item.q}</h4>
                      <p className="text-gray-600">{item.a}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;