import type { Metadata } from 'next';
import Image from 'next/image';
import { Star, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'من نحن | معلم دهانات الرياض – خبرة 10 سنوات في الدهانات',
  description: 'تعرف على معلم دهانات الرياض — خبرة 10 سنوات، ضمان 5 سنوات على التشطيبات، معالجة الرطوبة قبل الدهان. نخدم جميع أحياء الرياض.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="relative bg-dark-primary text-white py-24">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src="/images/uploaded/img1.jpeg"
              alt="معلم دهانات الرياض"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن – لماذا نختلف عن باقي معلمي الدهانات؟</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              نحن لسنا مجرد عمال دهان، نحن حرفيون نهتم بأدق التفاصيل لنضمن لك منزلاً جميلاً يدوم طويلاً.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-dark-primary mb-6">قصتنا مع الدهانات</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              بدأت رحلتنا في الرياض قبل أكثر من 10 سنوات. لاحظنا أن الكثير من المنازل تعاني من تقشر الدهان بعد أشهر قليلة من تنفيذه، والسبب لم يكن دائماً في جودة الدهان، بل في سوء التأسيس وتجاهل معالجة الرطوبة.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              من هنا قررنا أن نغير المفهوم. أسسنا فريق &quot;معلم دهانات الرياض&quot; ليكون التركيز الأول على <strong>التأسيس الصحيح</strong>. نحن نأخذ وقتنا في كشط الجدران، معالجة الشقوق، وعزل الرطوبة قبل أن نفتح علبة الدهان. هذا هو سر ضماننا الذي يمتد لـ 5 سنوات.
            </p>

            <h3 className="text-2xl font-bold text-dark-primary mb-8">مسيرتنا المهنية</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {[
                { year: '2013', title: 'البداية', desc: 'بدأنا كفريق صغير مكون من 3 فنيين في شمال الرياض.' },
                { year: '2016', title: 'التوسع', desc: 'توسيع خدماتنا لتشمل الجبس بورد والإيبوكسي لتلبية طلبات العملاء.' },
                { year: '2020', title: 'الاحترافية', desc: 'اعتمادنا كمقاولين معتمدين لاستخدام دهانات جوتن والجزيرة.' },
                { year: 'الآن', title: 'الريادة', desc: 'أكثر من 500 مشروع منجز بنجاح في كافة أحياء الرياض.' },
              ].map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gold text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                    {item.year === 'الآن' ? <Star size={16} /> : <span className="text-xs">{item.year}</span>}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-dark-primary text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">قيمنا الأساسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { title: 'الأمانة', desc: 'نستخدم المواد المتفق عليها دون غش أو تلاعب.' },
                { title: 'الجودة', desc: 'لا نتنازل عن الجودة حتى لو تطلب العمل وقتاً أطول.' },
                { title: 'الالتزام', desc: 'نحترم وقت العميل ونسلم المشروع في الموعد المحدد.' },
                { title: 'النظافة', desc: 'نترك المكان أنظف مما كان عليه قبل بدء العمل.' },
              ].map((value, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle2 className="text-gold mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-xl mb-2 text-dark-primary">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gold text-dark-primary text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">انضم إلى قائمة عملائنا الراضين</h2>
            <p className="text-xl mb-8">نحن هنا لتحويل رؤيتك إلى واقع ملموس.</p>
            <a
              href="tel:+966598971755"
              className="inline-block bg-dark-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-secondary transition-colors"
            >
              تواصل معنا الآن
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
