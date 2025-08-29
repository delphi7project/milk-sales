import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const { state } = useCart();

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-blue-50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+7 (800) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>info@moloko.ru</span>
            </div>
          </div>
          <div className="text-blue-600 font-medium">
            Бесплатная доставка от 1500₽
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🥛</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">МолокоМаркет</h1>
              <p className="text-sm text-gray-600">Свежие молочные продукты</p>
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link to="/catalog/milk" className="block p-3 hover:bg-gray-50 rounded-lg">
                      <div className="font-medium">Молоко</div>
                      <div className="text-sm text-gray-600">Цельное, обезжиренное, топленое</div>
                    </Link>
                    <Link to="/catalog/dairy" className="block p-3 hover:bg-gray-50 rounded-lg">
                      <div className="font-medium">Молочные продукты</div>
                      <div className="text-sm text-gray-600">Творог, сметана, кефир</div>
                    </Link>
                    <Link to="/catalog/cheese" className="block p-3 hover:bg-gray-50 rounded-lg">
                      <div className="font-medium">Сыры</div>
                      <div className="text-sm text-gray-600">Твердые и мягкие сыры</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className="px-4 py-2 hover:text-blue-600">О нас</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/delivery" className="px-4 py-2 hover:text-blue-600">Доставка</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/recipes" className="px-4 py-2 hover:text-blue-600">Рецепты</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contacts" className="px-4 py-2 hover:text-blue-600">Контакты</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon">
                <ShoppingCart className="w-5 h-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;