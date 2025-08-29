import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: '1',
      title: 'Новая линейка органических продуктов',
      excerpt: 'Представляем новую серию органических молочных продуктов без добавок',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      date: '15 января 2025',
      author: 'Анна Петрова'
    },
    {
      id: '2',
      title: 'Расширение зоны доставки',
      excerpt: 'Теперь доставляем в новые районы Подмосковья',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      date: '10 января 2025',
      author: 'Михаил Иванов'
    },
    {
      id: '3',
      title: 'Программа лояльности для постоянных клиентов',
      excerpt: 'Накапливайте баллы и получайте скидки на любимые продукты',
      image: 'https://images.pexels.com/photos/6544364/pexels-photo-6544364.jpeg',
      date: '5 января 2025',
      author: 'Елена Сидорова'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Новости и события</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Следите за последними новостями и акциями нашей компании
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.author}</span>
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

        <div className="text-center mt-12">
          <Link to="/news">
            <Button size="lg" variant="outline">
              Все новости
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;