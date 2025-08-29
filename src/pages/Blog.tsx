import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: '10 фактов о пользе молока, которые вас удивят',
      excerpt: 'Молоко — это не просто напиток, это источник множества полезных веществ...',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      author: 'Анна Петрова',
      publishedAt: new Date('2025-01-15'),
      category: 'Здоровье',
      readTime: '5 мин'
    },
    {
      id: '2',
      title: 'Как выбрать качественный творог: гид покупателя',
      excerpt: 'Рассказываем, на что обратить внимание при выборе творога в магазине...',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
      author: 'Михаил Иванов',
      publishedAt: new Date('2025-01-12'),
      category: 'Советы',
      readTime: '7 мин'
    },
    {
      id: '3',
      title: 'История молочного производства в России',
      excerpt: 'Увлекательный рассказ о развитии молочной индустрии от древних времен до наших дней...',
      image: 'https://images.pexels.com/photos/6544364/pexels-photo-6544364.jpeg',
      author: 'Елена Сидорова',
      publishedAt: new Date('2025-01-08'),
      category: 'История',
      readTime: '10 мин'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Здоровье': return 'bg-green-100 text-green-800';
      case 'Советы': return 'bg-blue-100 text-blue-800';
      case 'История': return 'bg-purple-100 text-purple-800';
      case 'Рецепты': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полезные статьи о молочных продуктах, здоровом питании и кулинарных секретах
          </p>
        </section>

        {/* Featured Article */}
        {blogPosts.length > 0 && (
          <section className="mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(blogPosts[0].category)}`}>
                    {blogPosts[0].category}
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].publishedAt.toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <Link to={`/blog/${blogPosts[0].id}`}>
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
                <Badge className={`absolute top-3 left-3 ${getCategoryColor(post.category)}`}>
                  {post.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishedAt.toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Читать
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Категории статей</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Здоровье', 'Советы', 'История', 'Рецепты'].map((category) => (
              <Card key={category} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{category}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {Math.floor(Math.random() * 10) + 1} статей
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;