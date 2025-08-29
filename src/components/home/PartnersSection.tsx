import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'Ферма "Зеленые луга"', logo: '🌱' },
    { name: 'Молочный завод "Традиция"', logo: '🏭' },
    { name: 'Эко-ферма "Чистое поле"', logo: '🌾' },
    { name: 'Семейная ферма "Домашнее"', logo: '🏡' },
    { name: 'Органик-продукты', logo: '🍃' },
    { name: 'Молочная долина', logo: '🏔️' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши партнеры</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы работаем с лучшими фермерскими хозяйствами и производителями
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-3xl">{partner.logo}</span>
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;