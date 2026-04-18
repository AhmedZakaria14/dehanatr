import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import { siteImages } from '@/lib/siteImages';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'جبس بورد الرياض | أسقف معلقة وديكورات جدارية',
  description: 'أعمال جبس بورد بالرياض: أسقف معلقة، ديكورات جدارية، تقسيمات. تركيب احترافي بضمان الجودة. معلم دهانات الرياض ☎️ 0598971755',
};

export default function GypsumServicePage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative bg-dark-primary text-white py-20">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src={siteImages.servicePages.gypsum}
              alt="جبس بورد الرياض"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">أعمال الجبس بورد بالرياض</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              تصميم وتركيب أسقف معلقة وديكورات جدارية حديثة تناسب جميع الأذواق.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-dark-primary mb-6">ديكورات جبس بورد عصرية</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              نقدم خدمات تركيب الجبس بورد بأحدث التصاميم للأسقف والجدران. سواء كنت تبحث عن إضاءة مخفية، كرانيش، أو تقسيمات للغرف، فريقنا في الرياض جاهز لتنفيذ أفكارك بدقة واحترافية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <Image src={siteImages.servicePages.gypsumCeiling} alt="أسقف جبس بورد" fill className="object-cover"  />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 font-bold">أسقف معلقة وإضاءة مخفية</div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <Image src={siteImages.servicePages.gypsumWall} alt="ديكورات جدارية" fill className="object-cover"  />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 font-bold">ديكورات جدارية وشاشات</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
