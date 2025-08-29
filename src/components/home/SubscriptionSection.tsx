import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Gift, Bell } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Подписка оформлена!',
        description: 'Спасибо за подписку на наши новости и акции.',
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на наши новости</h2>
          <p className="text-xl text-blue-100 mb-8">
            Получайте информацию о новых продуктах, акциях и специальных предложениях
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Еженедельная рассылка</h3>
                <p className="text-sm text-blue-100">Новости и акции каждую неделю</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Gift className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Эксклюзивные скидки</h3>
                <p className="text-sm text-blue-100">Специальные предложения для подписчиков</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Bell className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Первыми узнавайте</h3>
                <p className="text-sm text-blue-100">О новых продуктах и акциях</p>
              </CardContent>
            </Card>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/90 border-white/30 text-gray-900"
                required
              />
              <Button type="submit" variant="secondary" size="lg">
                Подписаться
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;