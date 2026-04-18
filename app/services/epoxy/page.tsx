import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'دهانات إيبوكسي الرياض | أرضيات وجدران إيبوكسي احترافية',
  description: 'دهانات إيبوكسي بالرياض للمطابخ والمستودعات والحمامات. مقاوم للرطوبة والكيماويات. معلم دهانات الرياض ☎️ 0598971755',
};

export default function EpoxyServicePage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative bg-dark-primary text-white py-20">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src="/images/uploaded/img47.jpeg"
              alt="دهانات إيبوكسي الرياض"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">دهانات الإيبوكسي بالرياض</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              أرضيات وجدران إيبوكسي شديدة التحمل ومقاومة للرطوبة والكيماويات.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-dark-primary mb-6">الحل الأمثل للأرضيات والمستودعات</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              تعتبر دهانات الإيبوكسي الخيار الأفضل للمواقف، المستودعات، والمطابخ في الرياض نظراً لقوتها ومقاومتها العالية للاحتكاك والزيوت. نوفر تنفيذ الإيبوكسي بألوان متعددة وبجودة تضمن عدم التشقق.
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
