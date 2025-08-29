import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🥛</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">МолокоМаркет</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Свежие молочные продукты высшего качества с доставкой по всему городу.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@moloko.ru</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-400 hover:text-white">Каталог</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">О нас</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white">Доставка</Link></li>
              <li><Link to="/quality" className="text-gray-400 hover:text-white">Качество</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">Новости</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white">Помощь</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white">Возврат товара</Link></li>
              <li><Link to="/payment" className="text-gray-400 hover:text-white">Оплата</Link></li>
              <li><Link to="/loyalty" className="text-gray-400 hover:text-white">Программа лояльности</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white">Отзывы</Link></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Пн-Пт: 8:00 - 22:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Сб-Вс: 9:00 - 21:00</span>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">г. Москва, ул. Молочная, 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 МолокоМаркет. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;