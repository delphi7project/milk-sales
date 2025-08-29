import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Свежие молочные продукты
              <span className="text-blue-600"> прямо к вашему столу</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Натуральное молоко и молочные продукты высшего качества от проверенных фермерских хозяйств. 
              Доставка в день заказа по всей Москве.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/catalog">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Перейти в каталог
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Узнать больше
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium">Быстрая доставка</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium">100% качество</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-sm font-medium">Лучшие цены</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg"
              alt="Свежее молоко"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Натуральные продукты</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;