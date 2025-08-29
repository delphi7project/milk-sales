import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Leaf, Heart, Shield, Truck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Забота о клиентах',
      description: 'Мы ценим каждого клиента и стремимся превзойти ожидания'
    },
    {
      icon: Shield,
      title: 'Качество превыше всего',
      description: 'Строгий контроль качества на всех этапах производства'
    },
    {
      icon: Leaf,
      title: 'Экологичность',
      description: 'Бережное отношение к природе и экологически чистое производство'
    },
    {
      icon: Users,
      title: 'Семейные традиции',
      description: 'Сохраняем традиции и передаем их следующим поколениям'
    }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      experience: '15 лет в молочной индустрии',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg'
    },
    {
      name: 'Михаил Иванов',
      position: 'Технолог производства',
      experience: '12 лет опыта',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg'
    },
    {
      name: 'Елена Сидорова',
      position: 'Менеджер по качеству',
      experience: '10 лет в контроле качества',
      image: 'https://images.pexels.com/photos/6544364/pexels-photo-6544364.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">О компании МолокоМаркет</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Уже 25 лет мы производим и доставляем свежие молочные продукты высшего качества, 
              сохраняя семейные традиции и заботясь о здоровье наших клиентов.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    МолокоМаркет был основан в 2000 году семьей Петровых как небольшое фермерское хозяйство. 
                    Начав с производства молока для местного рынка, мы постепенно расширили ассортимент 
                    и географию поставок.
                  </p>
                  <p>
                    Сегодня мы — одна из ведущих компаний в сфере производства и доставки молочных продуктов 
                    в Москве и Московской области. Наша продукция производится на современном оборудовании 
                    с соблюдением всех стандартов качества и безопасности.
                  </p>
                  <p>
                    Мы гордимся тем, что сохранили семейный подход к бизнесу: каждый продукт проходит 
                    тщательный контроль качества, а наши клиенты получают персональное внимание и заботу.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg"
                  alt="История компании"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Профессионалы, которые делают нашу продукцию особенной
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50k+</div>
                <div className="text-blue-100">довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">видов продукции</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <div className="text-blue-100">положительных отзывов</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;