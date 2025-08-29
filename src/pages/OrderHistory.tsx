import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Clock, CheckCircle, Truck } from 'lucide-react';

const OrderHistory = () => {
  const orders = [
    {
      id: 'ORD-2025-001',
      date: '15 января 2025',
      status: 'delivered',
      total: 1250,
      items: [
        { name: 'Молоко цельное 3.2%', quantity: 2, price: 89 },
        { name: 'Творог домашний', quantity: 1, price: 159 }
      ]
    },
    {
      id: 'ORD-2025-002',
      date: '10 января 2025',
      status: 'delivering',
      total: 890,
      items: [
        { name: 'Кефир 1%', quantity: 3, price: 69 },
        { name: 'Сметана густая', quantity: 2, price: 129 }
      ]
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'delivered':
        return { text: 'Доставлен', color: 'bg-green-100 text-green-800', icon: CheckCircle };
      case 'delivering':
        return { text: 'В пути', color: 'bg-blue-100 text-blue-800', icon: Truck };
      case 'preparing':
        return { text: 'Готовится', color: 'bg-yellow-100 text-yellow-800', icon: Package };
      default:
        return { text: 'Обрабатывается', color: 'bg-gray-100 text-gray-800', icon: Clock };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">История заказов</h1>
          <p className="text-gray-600">Просматривайте информацию о ваших заказах</p>
        </div>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">У вас пока нет заказов</h2>
              <p className="text-gray-600 mb-6">Оформите первый заказ и он появится здесь</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Перейти в каталог
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => {
              const statusInfo = getStatusInfo(order.status);
              const StatusIcon = statusInfo.icon;
              
              return (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-3">
                        <span>Заказ {order.id}</span>
                        <Badge className={statusInfo.color}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {statusInfo.text}
                        </Badge>
                      </CardTitle>
                      <div className="text-right">
                        <div className="font-semibold">{order.total}₽</div>
                        <div className="text-sm text-gray-500">{order.date}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <div>
                            <span className="font-medium">{item.name}</span>
                            <span className="text-gray-600 ml-2">× {item.quantity}</span>
                          </div>
                          <span className="font-semibold">{item.price * item.quantity}₽</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-6 pt-4 border-t">
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          Повторить заказ
                        </Button>
                        <Button variant="outline" size="sm">
                          Скачать чек
                        </Button>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Подробности
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderHistory;