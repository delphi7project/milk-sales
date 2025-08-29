import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Smartphone, Banknote, Building } from 'lucide-react';

const Payment = () => {
  const paymentMethods = [
    {
      icon: Banknote,
      title: 'Наличными курьеру',
      description: 'Оплата при получении заказа',
      features: ['Без комиссии', 'Сдача с любой суммы', 'Чек об оплате']
    },
    {
      icon: CreditCard,
      title: 'Банковской картой',
      description: 'Visa, MasterCard, МИР',
      features: ['Безопасные платежи', 'Мгновенное подтверждение', 'Возврат на карту']
    },
    {
      icon: Smartphone,
      title: 'Онлайн-переводом',
      description: 'СБП, Яндекс.Деньги, QIWI',
      features: ['Быстрые переводы', 'Низкие комиссии', 'Удобно с телефона']
    },
    {
      icon: Building,
      title: 'Банковским переводом',
      description: 'Для юридических лиц',
      features: ['Безналичный расчет', 'Документооборот', 'Отсрочка платежа']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Способы оплаты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите удобный для вас способ оплаты заказа
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <method.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg">{method.title}</div>
                    <div className="text-sm text-gray-600 font-normal">{method.description}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Info */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center">Безопасность платежей</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold mb-2">SSL шифрование</h3>
                <p className="text-sm text-gray-600">Все данные передаются в зашифрованном виде</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold mb-2">PCI DSS</h3>
                <p className="text-sm text-gray-600">Соответствие стандартам безопасности</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">Проверенные платежи</h3>
                <p className="text-sm text-gray-600">Защита от мошеннических операций</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Часто задаваемые вопросы об оплате</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Безопасно ли платить картой онлайн?</h4>
                <p className="text-gray-600">
                  Да, мы используем защищенное соединение SSL и не храним данные банковских карт. 
                  Все платежи обрабатываются через сертифицированные платежные системы.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Можно ли изменить способ оплаты после оформления заказа?</h4>
                <p className="text-gray-600">
                  Да, до момента отправки заказа вы можете изменить способ оплаты, 
                  связавшись с нашей службой поддержки.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Как происходит возврат средств?</h4>
                <p className="text-gray-600">
                  Возврат осуществляется тем же способом, которым была произведена оплата. 
                  Средства поступают на счет в течение 3-5 рабочих дней.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;