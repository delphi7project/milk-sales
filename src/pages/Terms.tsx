import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Пользовательское соглашение</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Условия использования сайта и услуг МолокоМаркет
          </p>
        </section>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                1. Общие положения
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения 
                между ООО «МолокоМаркет» (далее — «Компания») и пользователями сайта moloko.ru 
                (далее — «Сайт»).
              </p>
              <p>
                Используя Сайт, вы подтверждаете, что ознакомились с условиями настоящего Соглашения 
                и согласны их соблюдать.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="w-5 h-5 mr-2 text-green-600" />
                2. Права и обязанности сторон
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Компания обязуется:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-2" />
                    Предоставлять качественные товары и услуги
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-2" />
                    Обеспечивать безопасность персональных данных
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-2" />
                    Выполнять обязательства по доставке
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-2" />
                    Предоставлять актуальную информацию о товарах
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Пользователь обязуется:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-1 mr-2" />
                    Предоставлять достоверную информацию
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-1 mr-2" />
                    Не нарушать работу Сайта
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-1 mr-2" />
                    Соблюдать условия оплаты и получения товаров
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-1 mr-2" />
                    Уважать права других пользователей
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Условия заказа и доставки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                <strong>3.1.</strong> Заказ считается принятым после подтверждения Компанией 
                и внесения предоплаты (если требуется).
              </p>
              <p>
                <strong>3.2.</strong> Компания оставляет за собой право отказать в выполнении 
                заказа при отсутствии товара на складе или других объективных причинах.
              </p>
              <p>
                <strong>3.3.</strong> Сроки доставки указываются приблизительно и могут изменяться 
                в зависимости от обстоятельств.
              </p>
              <p>
                <strong>3.4.</strong> Риск случайной гибели товара переходит к покупателю 
                с момента передачи товара.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Оплата</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                <strong>4.1.</strong> Цены на товары указаны в рублях и включают НДС.
              </p>
              <p>
                <strong>4.2.</strong> Компания оставляет за собой право изменять цены 
                без предварительного уведомления.
              </p>
              <p>
                <strong>4.3.</strong> Оплата производится одним из способов, указанных на Сайте.
              </p>
              <p>
                <strong>4.4.</strong> При оплате банковской картой все операции проводятся 
                в соответствии с требованиями платежных систем.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Возврат и обмен</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                <strong>5.1.</strong> Возврат товара надлежащего качества возможен в течение 
                24 часов с момента получения.
              </p>
              <p>
                <strong>5.2.</strong> Товар ненадлежащего качества подлежит замене или возврату 
                в любое время в течение срока годности.
              </p>
              <p>
                <strong>5.3.</strong> Возврат денежных средств осуществляется в течение 
                10 рабочих дней с момента получения заявления.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Ответственность</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                <strong>6.1.</strong> Компания не несет ответственности за ущерб, причиненный 
                неправильным использованием товаров.
              </p>
              <p>
                <strong>6.2.</strong> Ответственность Компании ограничивается стоимостью товара.
              </p>
              <p>
                <strong>6.3.</strong> Компания не несет ответственности за временную недоступность 
                Сайта по техническим причинам.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Заключительные положения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                <strong>7.1.</strong> Настоящее Соглашение может быть изменено Компанией 
                в одностороннем порядке.
              </p>
              <p>
                <strong>7.2.</strong> Все споры разрешаются в соответствии с законодательством РФ.
              </p>
              <p>
                <strong>7.3.</strong> При возникновении вопросов обращайтесь по адресу: 
                legal@moloko.ru
              </p>
              <p className="text-sm text-gray-600 border-t pt-4">
                Дата последнего обновления: 1 января 2025 года
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;