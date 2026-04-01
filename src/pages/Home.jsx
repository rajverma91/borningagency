import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedWork from '../components/home/FeaturedWork';
import TrustSection from '../components/home/TrustSection';
import ServicesSection from '../components/home/ServicesSection';
import PricingSection from '../components/home/PricingSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import BlogPreview from '../components/home/BlogPreview';
import Hero from "../components/home/Hero";
import LogoSlider from "../components/home/LogoSlider";
import StatsSection from "../components/home/StatsSection";

export default function Home() {
  return (
    <div>
        <Hero />
        <LogoSlider />
        <StatsSection />
      {/* <HeroSection /> */}
      <FeaturedWork />
      <TrustSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreview />
    </div>
  );
}