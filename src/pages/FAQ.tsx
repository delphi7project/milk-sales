import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: 'Заказы и доставка',
      questions: [
        {
          q: 'Как оформить заказ на сайте?',
          a: 'Выберите товары в каталоге, добавьте их в корзину, заполните форму заказа с контактными данными и адресом доставки, выберите способ оплаты и подтвердите заказ.'
        },
        {
          q: 'Сколько стоит доставка?',
          a: 'Доставка бесплатная при заказе от 1500₽ по Москве в пределах МКАД. При заказе менее 1500₽ стоимость доставки составляет 200₽. Для Подмосковья бесплатная доставка от 2000₽.'
        },
        {
          q: 'В какое время осуществляется доставка?',
          a: 'Доставка осуществляется ежедневно с 8:00 до 22:00. Вы можете выбрать удобный 2-часовой интервал при оформлении заказа.'
        },
        {
          q: 'Можно ли изменить или отменить заказ?',
          a: 'Да, вы можете изменить или отменить заказ до момента его отправки со склада. Свяжитесь с нами по телефону +7 (800) 123-45-67.'
        }
      ]
    },
    {
      category: 'Оплата',
      questions: [
        {
          q: 'Какие способы оплаты доступны?',
          a: 'Мы принимаем оплату наличными курьеру, банковскими картами (Visa, MasterCard, МИР), онлайн-переводами (СБП, Яндекс.Деньги) и банковскими переводами для юридических лиц.'
        },
        {
          q: 'Безопасно ли платить картой онлайн?',
          a: 'Да, все онлайн-платежи защищены SSL-шифрованием. Мы не храним данные банковских карт. Платежи обрабатываются через сертифицированные платежные системы.'
        },
        {
          q: 'Можно ли получить чек об оплате?',
          a: 'Да, при оплате наличными курьер выдаст вам кассовый чек. При безналичной оплате чек будет отправлен на ваш email.'
        }
      ]
    },
    {
      category: 'Качество продукции',
      questions: [
        {
          q: 'Как проверяется качество продуктов?',
          a: 'Каждая партия продукции проходит лабораторный контроль в нашей собственной лаборатории. Мы проверяем микробиологические показатели, жирность, кислотность и органолептические свойства.'
        },
        {
          q: 'Какие сертификаты качества у продукции?',
          a: 'Вся наша продукция имеет сертификаты соответствия ГОСТ, декларации о соответствии ТР ТС, сертификаты ISO 22000 и HACCP.'
        },
        {
          q: 'Что делать, если товар оказался испорченным?',
          a: 'Если товар не соответствует качеству, немедленно свяжитесь с нами. Мы заменим товар или вернем деньги в течение 24 часов.'
        }
      ]
    },
    {
      category: 'Программа лояльности',
      questions: [
        {
          q: 'Как работает программа лояльности?',
          a: 'За каждую покупку вы получаете баллы (1% от суммы заказа). Баллами можно оплачивать до 50% стоимости следующих заказов. Также доступны специальные статусы с дополнительными привилегиями.'
        },
        {
          q: 'Как получить статус VIP-клиента?',
          a: 'VIP-статус присваивается при общей сумме покупок от 15000₽. VIP-клиенты получают 5% кэшбэк, персонального менеджера, приоритетную доставку и доступ к эксклюзивным товарам.'
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      item => 
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Найдите ответы на самые популярные вопросы о наших продуктах и услугах
          </p>
        </section>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Поиск по вопросам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQ.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-lg text-gray-600">Вопросы не найдены</p>
            <p className="text-gray-500">Попробуйте изменить поисковый запрос</p>
          </div>
        )}

        {/* Contact Support */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Не нашли ответ?</h2>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нашей службой поддержки, и мы поможем решить любой вопрос
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Позвонить: +7 (800) 123-45-67
              </Button>
              <Button variant="outline">
                Написать: info@moloko.ru
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;