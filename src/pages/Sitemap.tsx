import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      category: 'Основные страницы',
      pages: [
        { name: 'Главная', url: '/' },
        { name: 'О компании', url: '/about' },
        { name: 'Каталог', url: '/catalog' },
        { name: 'Контакты', url: '/contacts' }
      ]
    },
    {
      category: 'Покупки',
      pages: [
        { name: 'Корзина', url: '/cart' },
        { name: 'Оформление заказа', url: '/checkout' },
        { name: 'Доставка и оплата', url: '/delivery' },
        { name: 'Возврат товаров', url: '/returns' }
      ]
    },
    {
      category: 'Информация',
      pages: [
        { name: 'Качество продукции', url: '/quality' },
        { name: 'Польза молочных продуктов', url: '/nutrition' },
        { name: 'Рецепты', url: '/recipes' },
        { name: 'Новости', url: '/news' },
        { name: 'Блог', url: '/blog' }
      ]
    },
    {
      category: 'Клиентский сервис',
      pages: [
        { name: 'Помощь', url: '/help' },
        { name: 'Часто задаваемые вопросы', url: '/faq' },
        { name: 'Отзывы', url: '/reviews' },
        { name: 'Программа лояльности', url: '/loyalty' }
      ]
    },
    {
      category: 'Личный кабинет',
      pages: [
        { name: 'Профиль', url: '/profile' },
        { name: 'История заказов', url: '/order-history' },
        { name: 'Избранное', url: '/wishlist' },
        { name: 'Сравнение товаров', url: '/compare' }
      ]
    },
    {
      category: 'Бизнес',
      pages: [
        { name: 'Оптовые продажи', url: '/wholesale' },
        { name: 'Франшиза', url: '/franchise' },
        { name: 'Карьера', url: '/careers' },
        { name: 'Инвесторам', url: '/investors' }
      ]
    },
    {
      category: 'Компания',
      pages: [
        { name: 'Пресс-центр', url: '/press' },
        { name: 'Экологическая ответственность', url: '/sustainability' },
        { name: 'Акции и предложения', url: '/promotions' }
      ]
    },
    {
      category: 'Правовая информация',
      pages: [
        { name: 'Пользовательское соглашение', url: '/terms' },
        { name: 'Политика конфиденциальности', url: '/privacy' },
        { name: 'Карта сайта', url: '/sitemap' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Карта сайта</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полная структура сайта для удобной навигации
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link 
                        to={page.url}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Дополнительная информация</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            <p>
              Если вы не можете найти нужную страницу, воспользуйтесь поиском по сайту 
              или обратитесь в службу поддержки.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">функциональных страниц</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">товаров в каталоге</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">доступность сайта</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sitemap;