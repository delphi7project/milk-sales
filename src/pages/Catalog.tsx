import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Search, Filter, Star } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const { dispatch } = useCart();

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || product.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Каталог продукции</h1>
          <p className="text-lg text-gray-600">
            Выберите из широкого ассортимента свежих молочных продуктов
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Поиск продуктов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">По названию</SelectItem>
                <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-high">Цена: по убыванию</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Фильтры
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-shadow bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-3 left-3 bg-green-600">
                  Свежее
                </Badge>
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                  <span>{product.weight}</span>
                  <span>Жирность: {product.fatContent}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">{product.price}₽</span>
                  <span className="text-xs text-gray-500">{product.brand}</span>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Link to={`/product/${product.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </Link>
                <Button 
                  size="sm"
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Продукты не найдены</p>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;