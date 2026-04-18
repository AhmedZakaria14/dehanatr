import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import { siteImages } from '@/lib/siteImages';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'تركيب مظلات الرياض | مظلات سيارات وسواتر فيبر جلاس',
  description: 'تركيب مظلات سيارات وسواتر بالرياض من فيبر جلاس عالي الجودة. تحمل الشمس والمطر. ضمان الجودة. ☎️ 0598971755',
};

export default function SheltersServicePage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative bg-dark-primary text-white py-20">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src={siteImages.servicePages.shelters}
              alt="مظلات وسواتر الرياض"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تركيب مظلات وسواتر بالرياض</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              حماية سيارتك ومنزلك من شمس الرياض الحارقة بمظلات متينة وعصرية.
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
