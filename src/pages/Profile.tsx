import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Settings, Heart, Gift, Bell } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    phone: '+7 (999) 123-45-67',
    address: 'г. Москва, ул. Примерная, д. 1, кв. 1',
    birthDate: '1990-01-01'
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    promotions: true
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Профиль обновлен',
      description: 'Ваши данные успешно сохранены',
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: 'Настройки сохранены',
      description: 'Настройки уведомлений обновлены',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Личный кабинет</h1>
          <p className="text-gray-600">Управляйте своим профилем и настройками</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center">
              <Gift className="w-4 h-4 mr-2" />
              Заказы
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              Избранное
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Личная информация</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя и фамилия</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Адрес доставки</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData(prev => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="birthDate">Дата рождения</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={profileData.birthDate}
                      onChange={(e) => setProfileData(prev => ({ ...prev, birthDate: e.target.value }))}
                    />
                  </div>
                  
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Сохранить изменения
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>История заказов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">У вас пока нет заказов</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                    Сделать первый заказ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle>Избранные товары</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Список избранного пуст</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                    Перейти в каталог
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Уведомления
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Email уведомления</h4>
                      <p className="text-sm text-gray-600">Получать уведомления о заказах на email</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.email}
                      onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
                      className="w-4 h-4"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">SMS уведомления</h4>
                      <p className="text-sm text-gray-600">Получать SMS о статусе доставки</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.sms}
                      onChange={(e) => setNotifications(prev => ({ ...prev, sms: e.target.checked }))}
                      className="w-4 h-4"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Акции и предложения</h4>
                      <p className="text-sm text-gray-600">Информация о скидках и новинках</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.promotions}
                      onChange={(e) => setNotifications(prev => ({ ...prev, promotions: e.target.checked }))}
                      className="w-4 h-4"
                    />
                  </div>
                  
                  <Button onClick={handleSaveNotifications} className="bg-blue-600 hover:bg-blue-700">
                    Сохранить настройки
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Изменить пароль
                  </Button>
                  <Button variant="outline" className="w-full">
                    Настройки конфиденциальности
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Удалить аккаунт
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;