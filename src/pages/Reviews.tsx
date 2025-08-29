import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star, ThumbsUp, MessageSquare, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    text: ''
  });

  const reviews = [
    {
      id: '1',
      name: 'Мария Петрова',
      rating: 5,
      title: 'Отличное качество!',
      text: 'Заказываю молочные продукты уже полгода. Качество превосходное, доставка всегда вовремя.',
      date: '15 января 2025',
      helpful: 12,
      verified: true
    },
    {
      id: '2',
      name: 'Алексей Иванов',
      rating: 5,
      title: 'Рекомендую всем!',
      text: 'Молоко всегда свежее, упаковка качественная. Радует, что есть доставка в наш район.',
      date: '12 января 2025',
      helpful: 8,
      verified: true
    },
    {
      id: '3',
      name: 'Елена Сидорова',
      rating: 4,
      title: 'Хорошие продукты',
      text: 'Покупаю здесь продукты для всей семьи. Дети очень любят йогурты и творожки.',
      date: '10 января 2025',
      helpful: 5,
      verified: false
    }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Отзыв отправлен!',
      description: 'Спасибо за ваш отзыв. Он будет опубликован после модерации.',
    });
    setNewReview({ name: '', email: '', rating: 5, title: '', text: '' });
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Отзывы покупателей</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, что говорят о нас наши клиенты, и поделитесь своим мнением
          </p>
        </section>

        {/* Rating Summary */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">Средняя оценка</p>
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => {
                  const count = reviews.filter(r => r.rating === rating).length;
                  const percentage = (count / reviews.length) * 100;
                  return (
                    <div key={rating} className="flex items-center space-x-3">
                      <span className="text-sm w-8">{rating} ★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">{count}</span>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{reviews.length}</div>
                <p className="text-gray-600">Всего отзывов</p>
                <div className="text-sm text-green-600 mt-2">
                  98% рекомендуют нас
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">{review.name}</span>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs">
                              Проверенная покупка
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">{review.title}</h4>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Полезно ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Ответить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Write Review */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Написать отзыв</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <Label htmlFor="reviewName">Имя *</Label>
                    <Input
                      id="reviewName"
                      value={newReview.name}
                      onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="reviewEmail">Email *</Label>
                    <Input
                      id="reviewEmail"
                      type="email"
                      value={newReview.email}
                      onChange={(e) => setNewReview(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label>Оценка *</Label>
                    <div className="flex space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setNewReview(prev => ({ ...prev, rating }))}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`w-6 h-6 ${rating <= newReview.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="reviewTitle">Заголовок отзыва *</Label>
                    <Input
                      id="reviewTitle"
                      value={newReview.title}
                      onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Краткое описание"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="reviewText">Текст отзыва *</Label>
                    <Textarea
                      id="reviewText"
                      value={newReview.text}
                      onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                      placeholder="Поделитесь своим мнением..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reviews;