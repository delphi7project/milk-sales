import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download, ExternalLink, FileText, Image, Video } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      id: '1',
      title: 'МолокоМаркет запускает новую линейку органических продуктов',
      date: '15 января 2025',
      type: 'Пресс-релиз',
      excerpt: 'Компания представила серию органических молочных продуктов без добавок...',
      downloadUrl: '#'
    },
    {
      id: '2',
      title: 'Расширение географии доставки в 2025 году',
      date: '10 января 2025',
      type: 'Новость',
      excerpt: 'МолокоМаркет объявляет о планах расширения зоны доставки...',
      downloadUrl: '#'
    },
    {
      id: '3',
      title: 'Итоги работы компании за 2024 год',
      date: '25 декабря 2024',
      type: 'Отчет',
      excerpt: 'Компания подвела итоги успешного 2024 года...',
      downloadUrl: '#'
    }
  ];

  const mediaKit = [
    {
      type: 'Логотипы',
      icon: Image,
      description: 'Логотипы в различных форматах и цветовых решениях',
      files: ['PNG', 'SVG', 'EPS']
    },
    {
      type: 'Фотографии',
      icon: Image,
      description: 'Высококачественные фотографии продукции и производства',
      files: ['JPG', 'RAW']
    },
    {
      type: 'Видеоматериалы',
      icon: Video,
      description: 'Корпоративные видео и ролики о производстве',
      files: ['MP4', 'MOV']
    },
    {
      type: 'Документы',
      icon: FileText,
      description: 'Презентации, факт-листы и корпоративная информация',
      files: ['PDF', 'DOCX']
    }
  ];

  const awards = [
    {
      year: '2024',
      title: 'Лучший производитель молочной продукции',
      organization: 'Ассоциация производителей молока'
    },
    {
      year: '2023',
      title: 'Премия за качество продукции',
      organization: 'Роскачество'
    },
    {
      year: '2022',
      title: 'Экологически ответственная компания',
      organization: 'Зеленая премия'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Пресс-центр</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Актуальная информация о компании для СМИ и журналистов
          </p>
        </section>

        {/* Press Releases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Пресс-релизы</h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge variant="outline">{release.type}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {release.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                      <p className="text-gray-600">{release.excerpt}</p>
                    </div>
                    
                    <div className="flex space-x-3 mt-4 lg:mt-0 lg:ml-6">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Читать
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Скачать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Kit */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Медиа-кит</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{item.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.files.map((format) => (
                      <Badge key={format} variant="outline" className="text-xs">
                        {format}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Награды и признание</h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{award.title}</h3>
                      <p className="text-gray-600">{award.organization}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">{award.year}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle>Контакты для СМИ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Пресс-служба</h4>
                <p className="text-gray-600">Елена Волкова</p>
                <p className="text-blue-600">press@moloko.ru</p>
                <p className="text-blue-600">+7 (495) 123-45-67 доб. 110</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Режим работы</h4>
                <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                <p className="text-gray-600">Ответ на запросы в течение 2 часов</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Press;