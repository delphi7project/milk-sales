import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, BarChart3, PieChart, Download, Calendar } from 'lucide-react';

const Investors = () => {
  const financialHighlights = [
    { metric: 'Выручка 2024', value: '2.5 млрд ₽', growth: '+15%' },
    { metric: 'EBITDA', value: '450 млн ₽', growth: '+22%' },
    { metric: 'Чистая прибыль', value: '280 млн ₽', growth: '+18%' },
    { metric: 'Рентабельность', value: '18.5%', growth: '+2.1%' }
  ];

  const reports = [
    {
      title: 'Годовой отчет 2024',
      type: 'Годовой отчет',
      date: '31 декабря 2024',
      size: '2.5 МБ'
    },
    {
      title: 'Квартальный отчет Q4 2024',
      type: 'Квартальный отчет',
      date: '31 декабря 2024',
      size: '1.8 МБ'
    },
    {
      title: 'Презентация для инвесторов',
      type: 'Презентация',
      date: '15 января 2025',
      size: '5.2 МБ'
    }
  ];

  const keyMetrics = [
    { label: 'Количество клиентов', value: '50 000+', icon: TrendingUp },
    { label: 'Точки продаж', value: '150+', icon: BarChart3 },
    { label: 'Объем производства', value: '1000 т/мес', icon: PieChart },
    { label: 'Доля рынка', value: '12%', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Инвесторам</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Финансовая информация и отчетность для акционеров и потенциальных инвесторов
          </p>
        </section>

        {/* Financial Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ключевые показатели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-sm text-gray-600 mb-2">{item.metric}</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{item.value}</div>
                  <div className="text-sm text-green-600 font-semibold">{item.growth}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Операционные показатели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reports */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Отчеты и документы</h2>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{report.type}</span>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {report.date}
                          </div>
                          <span>{report.size}</span>
                        </div>
                      </div>
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Скачать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Контакты для инвесторов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Отдел по работе с инвесторами</h4>
                    <p className="text-gray-600">Дмитрий Смирнов</p>
                    <p className="text-blue-600">investors@moloko.ru</p>
                    <p className="text-blue-600">+7 (495) 123-45-67 доб. 120</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Календарь событий</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Годовое собрание акционеров</span>
                    <span className="text-sm text-gray-500">15 мая 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Публикация Q1 2025</span>
                    <span className="text-sm text-gray-500">30 апр 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Инвестиционный день</span>
                    <span className="text-sm text-gray-500">20 мар 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Награды и достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-yellow-600">{award.year}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{award.title}</h4>
                        <p className="text-xs text-gray-600">{award.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investors;