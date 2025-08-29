import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Политика конфиденциальности</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы серьезно относимся к защите ваших персональных данных
          </p>
        </section>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                Общие положения
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700">
                Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                пользователей сайта moloko.ru (далее — «Сайт») компанией МолокоМаркет (далее — «Компания»).
              </p>
              <p className="text-gray-700">
                Используя наш сайт, вы соглашаетесь с условиями данной политики конфиденциальности.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-green-600" />
                Какие данные мы собираем
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Персональная информация:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Имя и фамилия</li>
                    <li>Адрес электронной почты</li>
                    <li>Номер телефона</li>
                    <li>Адрес доставки</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Техническая информация:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>IP-адрес</li>
                    <li>Данные браузера</li>
                    <li>Информация об устройстве</li>
                    <li>Файлы cookie</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-purple-600" />
                Как мы используем данные
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  Обработка и выполнение заказов
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  Связь с клиентами по вопросам заказов
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  Улучшение качества обслуживания
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  Информирование о новых продуктах и акциях (с вашего согласия)
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  Анализ использования сайта для его улучшения
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-red-600" />
                Защита данных
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Мы применяем современные технические и организационные меры для защиты 
                  ваших персональных данных от несанкционированного доступа, изменения, 
                  раскрытия или уничтожения.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Технические меры:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• SSL-шифрование</li>
                      <li>• Защищенные серверы</li>
                      <li>• Регулярные обновления безопасности</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Организационные меры:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Ограниченный доступ к данным</li>
                      <li>• Обучение сотрудников</li>
                      <li>• Регулярный аудит безопасности</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ваши права</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>В соответствии с законодательством РФ вы имеете право:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    Получать информацию о обработке ваших персональных данных
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    Требовать уточнения, блокирования или уничтожения данных
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    Отзывать согласие на обработку данных
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    Обращаться в уполномоченный орган по защите прав субъектов персональных данных
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Файлы cookie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Наш сайт использует файлы cookie для улучшения пользовательского опыта. 
                  Cookie помогают нам:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    Запоминать ваши предпочтения
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    Анализировать трафик сайта
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    Персонализировать контент
                  </li>
                </ul>
                <p>
                  Вы можете отключить cookie в настройках браузера, но это может повлиять 
                  на функциональность сайта.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  По вопросам обработки персональных данных обращайтесь:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@moloko.ru</p>
                  <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                  <p><strong>Адрес:</strong> г. Москва, ул. Молочная, 15</p>
                </div>
                <p className="text-sm text-gray-600">
                  Дата последнего обновления: 1 января 2025 года
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;