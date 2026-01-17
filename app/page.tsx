import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import DeliveryMethods from '@/components/DeliveryMethods';
import Brands from '@/components/Brands';
import WhyChooseUs from '@/components/WhyChooseUs';
import InstagramFeed from '@/components/InstagramFeed';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductGrid
        showFilters={true}
        limit={8}
        title="Nuestra Colección"
        subtitle="Descubre las fragancias más exclusivas de las mejores marcas del mundo"
      />
      <DeliveryMethods />
      <Brands />
      <WhyChooseUs />
      <InstagramFeed />
      <Newsletter />
      <Contact />
    </>
  );
}
