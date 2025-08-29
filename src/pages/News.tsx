import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Search, Clock } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles = [
    {
      id: '1',
      title: 'Новая линейка органических продуктов',
      excerpt: 'Представляем новую серию органических молочных продуктов без добавок и консервантов',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      publishedAt: new Date('2025-01-15'),
      author: 'Анна Петрова',
      category: 'Продукция'
    },
    {
      id: '2',
      title: 'Расширение зоны доставки',
      excerpt: 'Теперь доставляем в новые районы Подмосковья с сохранением качества сервиса',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      publishedAt: new Date('2025-01-10'),
      author: 'Михаил Иванов',
      category: 'Доставка'
    },
    {
      id: '3',
      title: 'Программа лояльности для постоянных клиентов',
      excerpt: 'Накапливайте баллы и получайте скидки на любимые продукты',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/6544364/pexels-photo-6544364.jpeg',
      publishedAt: new Date('2025-01-05'),
      author: 'Елена Сидорова',
      category: 'Акции'
    },
    {
      id: '4',
      title: 'Открытие нового производственного цеха',
      excerpt: 'Увеличиваем производственные мощности для лучшего обслуживания клиентов',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      publishedAt: new Date('2024-12-28'),
      author: 'Анна Петрова',
      category: 'Компания'
    },
    {
      id: '5',
      title: 'Сезонные скидки на молочные продукты',
      excerpt: 'Специальные предложения на зимний ассортимент продукции',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      publishedAt: new Date('2024-12-20'),
      author: 'Михаил Иванов',
      category: 'Акции'
    },
    {
      id: '6',
      title: 'Партнерство с местными фермерами',
      excerpt: 'Заключили договоры с новыми фермерскими хозяйствами региона',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/6544364/pexels-photo-6544364.jpeg',
      publishedAt: new Date('2024-12-15'),
      author: 'Елена Сидорова',
      category: 'Партнерство'
    }
  ];

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Продукция': return 'bg-blue-100 text-blue-800';
      case 'Доставка': return 'bg-green-100 text-green-800';
      case 'Акции': return 'bg-red-100 text-red-800';
      case 'Компания': return 'bg-purple-100 text-purple-800';
      case 'Партнерство': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Новости и события</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следите за последними новостями компании, акциями и интересными событиями
          </p>
        </section>

        {/* Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Поиск новостей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <section className="mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={filteredNews[0].image}
                    alt={filteredNews[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(filteredNews[0].category)}`}>
                    {filteredNews[0].category}
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredNews[0].publishedAt.toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{filteredNews[0].author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{filteredNews[0].title}</h2>
                  <p className="text-gray-600 mb-6">{filteredNews[0].excerpt}</p>
                  <Link to={`/news/${filteredNews[0].id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Читать полностью
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
                <Badge className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}>
                  {article.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.publishedAt.toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Link to={`/news/${article.id}`}>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    Читать далее
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Новости не найдены</p>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default News;