import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import { siteImages } from '@/lib/siteImages';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'تركيب قرميد الرياض | قرميد واجهات وأسقف احترافي',
  description: 'تركيب قرميد بالرياض للواجهات والأسقف. جودة عالية وتركيب احترافي. فحص الجبس قبل التركيب. معلم دهانات الرياض ☎️ 0598971755',
};

export default function TilesServicePage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative bg-dark-primary text-white py-20">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src={siteImages.servicePages.tiles}
              alt="تركيب قرميد الرياض"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تركيب قرميد بالرياض</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              أضف الفخامة لواجهة منزلك مع تركيب قرميد احترافي ومقاوم للعوامل الجوية.
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
