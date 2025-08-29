import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ShoppingCart, Scale } from 'lucide-react';

const Compare = () => {
  const compareItems = [
    {
      id: '1',
      name: 'Молоко цельное 3.2%',
      price: 89,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      weight: '1л',
      fatContent: '3.2%',
      protein: '3.2г',
      calories: 64,
      brand: 'Молочная ферма'
    },
    {
      id: '2',
      name: 'Молоко обезжиренное',
      price: 79,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      weight: '1л',
      fatContent: '0.5%',
      protein: '3.3г',
      calories: 35,
      brand: 'Молочная ферма'
    }
  ];

  const comparisonRows = [
    { label: 'Цена', key: 'price', suffix: '₽' },
    { label: 'Объем', key: 'weight' },
    { label: 'Жирность', key: 'fatContent' },
    { label: 'Белок (на 100г)', key: 'protein' },
    { label: 'Калории (на 100г)', key: 'calories', suffix: ' ккал' },
    { label: 'Бренд', key: 'brand' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Сравнение товаров</h1>
          <p className="text-gray-600">Сравните характеристики продуктов для выбора лучшего варианта</p>
        </div>

        {compareItems.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Scale className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Список сравнения пуст</h2>
              <p className="text-gray-600 mb-6">Добавьте товары для сравнения их характеристик</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Перейти в каталог
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compareItems.map((item) => (
                <Card key={item.id} className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{item.price}₽</div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comparison Table */}
            <Card>
              <CardHeader>
                <CardTitle>Сравнение характеристик</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Характеристика</th>
                        {compareItems.map((item) => (
                          <th key={item.id} className="text-center py-3 px-4 font-semibold">
                            {item.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.key} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{row.label}</td>
                          {compareItems.map((item) => (
                            <td key={item.id} className="py-3 px-4 text-center">
                              {(item as any)[row.key]}{row.suffix || ''}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Наша рекомендация</h3>
                <p className="text-gray-700">
                  Для ежедневного употребления рекомендуем молоко цельное 3.2% — 
                  оптимальное соотношение вкуса, пользы и питательной ценности.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Compare;