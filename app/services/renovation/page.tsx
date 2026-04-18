import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'ترميم منازل الرياض | معالجة رطوبة وترميم شامل',
  description: 'ترميم منازل وفلل بالرياض: معالجة رطوبة، إصلاح شقوق، تجديد تشطيبات. خبرة 10 سنوات. معلم دهانات الرياض ☎️ 0598971755',
};

export default function RenovationServicePage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative bg-dark-primary text-white py-20">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/uploaded/img23.jpeg"
              alt="ترميم منازل الرياض"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ترميم المنازل والفلل بالرياض</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              إعادة إحياء منزلك بمعالجة الشقوق، الرطوبة، وتجديد التشطيبات بالكامل.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-dark-primary mb-6">لا تدهن قبل أن ترمم!</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              الدهان فوق الجدران المتضررة هو إهدار للمال. نحن متخصصون في معالجة الرطوبة والأملاح من الجذور، وإصلاح التشققات الهيكلية والسطحية قبل البدء بأي أعمال تشطيب، لضمان بقاء منزلك في الرياض بأبهى حلة لسنوات.
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
