import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import { siteImages } from '@/lib/siteImages';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'تركيب ورق جدران الرياض | أفضل أنواع الورق بتركيب احترافي',
  description: 'تركيب ورق جدران بالرياض للمنازل والفنادق والمكاتب. جميع الأنواع والتصاميم. معلم دهانات الرياض ☎️ 0598971755',
};

export default function WallpaperServicePage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative bg-dark-primary text-white py-20">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src={siteImages.servicePages.wallpaper}
              alt="ورق جدران الرياض"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تركيب ورق جدران بالرياض</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              لمسة جمالية سريعة وأنيقة لغرفتك مع تركيب احترافي بدون فقاعات.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
