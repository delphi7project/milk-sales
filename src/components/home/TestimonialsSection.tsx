import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Мария Петрова',
      location: 'Москва',
      rating: 5,
      text: 'Заказываю молочные продукты уже полгода. Качество превосходное, доставка всегда вовремя. Особенно нравится творог - очень свежий и вкусный!',
      avatar: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg'
    },
    {
      id: '2',
      name: 'Алексей Иванов',
      location: 'Подмосковье',
      rating: 5,
      text: 'Отличный сервис! Молоко всегда свежее, упаковка качественная. Радует, что есть доставка в наш район. Рекомендую всем!',
      avatar: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg'
    },
    {
      id: '3',
      name: 'Елена Сидорова',
      location: 'Москва',
      rating: 5,
      text: 'Покупаю здесь продукты для всей семьи. Дети очень любят йогурты и творожки. Цены адекватные, качество на высоте.',
      avatar: 'https://images.pexels.com/photos/6544364/pexels-photo-6544364.jpeg'
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нас наши покупатели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;