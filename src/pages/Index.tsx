import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProductCategories from '@/components/home/ProductCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import QualitySection from '@/components/home/QualitySection';
import AboutSection from '@/components/home/AboutSection';
import DeliverySection from '@/components/home/DeliverySection';
import NewsSection from '@/components/home/NewsSection';
import RecipesSection from '@/components/home/RecipesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import SubscriptionSection from '@/components/home/SubscriptionSection';
import PartnersSection from '@/components/home/PartnersSection';
import PromotionsSection from '@/components/home/PromotionsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <FeaturedProducts />
        <QualitySection />
        <AboutSection />
        <DeliverySection />
        <PromotionsSection />
        <NewsSection />
        <RecipesSection />
        <TestimonialsSection />
        <PartnersSection />
        <ContactSection />
        <SubscriptionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;