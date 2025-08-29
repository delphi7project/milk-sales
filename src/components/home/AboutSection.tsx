import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              О нашей компании
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              МолокоМаркет — это семейная компания с 25-летней историей. Мы специализируемся 
              на производстве и доставке свежих молочных продуктов высшего качества.
            </p>
            <p className="text-gray-600 mb-8">
              Наша миссия — обеспечить каждую семью натуральными, полезными и вкусными 
              молочными продуктами. Мы работаем напрямую с фермерскими хозяйствами, 
              что позволяет контролировать качество на всех этапах производства.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50k+</div>
                <div className="text-sm text-gray-600">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">видов продукции</div>
              </div>
            </div>

            <Link to="/about">
              <Button variant="outline" size="lg">
                Подробнее о компании
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg"
              alt="Молочная ферма"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600">Эко</div>
              <div className="text-sm text-gray-600">продукция</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;