import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Shield, Droplets, PaintRoller } from 'lucide-react';
import Header from '@/components/Header';
import { siteImages } from '@/lib/siteImages';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'دهانات داخلية وخارجية بالرياض | جوتن 5000 بضمان 5 سنوات',
  description: 'دهانات داخلية وخارجية بالرياض بجوتن 5000 ودهانات الجزيرة. معالجة رطوبة قبل الدهان. ضمان 5 سنوات. تشطيب منازل وفلل في جميع أحياء الرياض ☎️ 0598971755',
};

export default function PaintingServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي أفضل أنواع الدهانات الداخلية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعتمد بشكل أساسي على دهانات جوتن (مثل جوتن 5000) ودهانات الجزيرة، لكونها الأفضل في مقاومة البقع وسهولة التنظيف وثبات الألوان."
        }
      },
      {
        "@type": "Question",
        "name": "هل تعالجون الرطوبة قبل الدهان؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، معالجة الرطوبة هي خطوة أساسية لا نتنازل عنها. نقوم بكشط الدهان القديم، معالجة مصدر الرطوبة، ووضع مواد عازلة قبل البدء بالدهان الجديد."
        }
      },
      {
        "@type": "Question",
        "name": "كم مدة الضمان على الدهانات؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نقدم ضماناً لمدة 5 سنوات على جميع أعمال الدهانات الداخلية والخارجية ضد التقشير وتغير اللون."
        }
      },
      {
        "@type": "Question",
        "name": "هل تقومون بتنظيف المكان بعد الانتهاء؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بالتأكيد، نحرص على تغطية الأثاث والأرضيات قبل البدء، ونقوم بتنظيف شامل للمكان بعد الانتهاء من العمل مباشرة."
        }
      },
      {
        "@type": "Question",
        "name": "هل تخدمون جميع أحياء الرياض؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نخدم كافة أحياء الرياض (شمال، جنوب، شرق، وغرب الرياض)."
        }
      },
      {
        "@type": "Question",
        "name": "كيف يمكنني الحصول على عرض سعر؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "يمكنك التواصل معنا عبر الواتساب أو الاتصال المباشر على الرقم 0598971755، وسنقوم بزيارة الموقع لمعاينته وتقديم عرض سعر مجاني."
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-20">

        
        {/* Hero */}
        <section className="relative bg-dark-primary text-white py-20">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src={siteImages.servicePages.painting}
              alt="دهانات داخلية وخارجية بالرياض"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">دهانات داخلية وخارجية بالرياض</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              تشطيبات احترافية باستخدام دهانات جوتن 5000 والجزيرة، مع معالجة جذرية للرطوبة وضمان 5 سنوات.
            </p>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-primary mb-6">لماذا يتشقق الدهان؟</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  يعاني الكثير من أهالي الرياض من مشكلة تشقق الدهان وتقشره بعد فترة قصيرة من تنفيذه. السبب الرئيسي ليس دائماً نوع الدهان، بل <strong>سوء التأسيس وعدم معالجة الرطوبة</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  نحن في &quot;معلم دهانات الرياض&quot; لا نقوم بالدهان فوق المشاكل. نقوم بفحص الجدران، كشط الأجزاء المتضررة، معالجة الرطوبة بمواد عازلة متخصصة، ثم التأسيس الصحيح قبل وضع اللمسة النهائية.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={siteImages.problemSolution}
                  alt="معالجة تشققات الجدران بالرياض"
                  fill
                  className="object-cover"
                  
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">مميزاتنا في أعمال الدهانات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                <Shield className="text-gold mx-auto mb-4" size={40} />
                <h3 className="font-bold text-xl mb-2">ضمان 5 سنوات</h3>
                <p className="text-gray-600">ضمان حقيقي على جودة العمل وعدم تقشر الدهان.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                <Droplets className="text-gold mx-auto mb-4" size={40} />
                <h3 className="font-bold text-xl mb-2">معالجة الرطوبة</h3>
                <p className="text-gray-600">حلول جذرية لمشاكل الرطوبة والأملاح قبل الدهان.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                <PaintRoller className="text-gold mx-auto mb-4" size={40} />
                <h3 className="font-bold text-xl mb-2">مواد أصلية</h3>
                <p className="text-gray-600">استخدام دهانات جوتن والجزيرة الأصلية 100%.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                <CheckCircle2 className="text-gold mx-auto mb-4" size={40} />
                <h3 className="font-bold text-xl mb-2">نظافة الموقع</h3>
                <p className="text-gray-600">تغطية الأثاث والتنظيف الشامل بعد الانتهاء.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Steps */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">خطوات العمل</h2>
            <div className="space-y-8">
              {[
                { step: 1, title: 'المعاينة والفحص', desc: 'زيارة الموقع لفحص الجدران وتحديد أماكن الرطوبة والشقوق.' },
                { step: 2, title: 'التجهيز والمعالجة', desc: 'تغطية الأثاث، كشط الدهان القديم، ومعالجة الرطوبة بالمواد العازلة.' },
                { step: 3, title: 'التأسيس والمعجون', desc: 'وضع طبقات الأساس (البرايمر) وسحب المعجون لضمان استواء الجدران.' },
                { step: 4, title: 'الدهان النهائي', desc: 'تطبيق طبقات الدهان النهائي (جوتن أو الجزيرة) باللون المختار.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 bg-gold text-dark-primary font-bold text-xl rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Paints */}
        <section className="py-16 bg-dark-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">أنواع الدهانات التي نوفرها</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {['جوتن 5000', 'دهانات الجزيرة', 'إيبوكسي', 'بروفايل خارجي', 'ورق جدران'].map((type, i) => (
                <div key={i} className="bg-dark-secondary p-4 rounded-lg border border-gray-700 font-bold text-lg">
                  {type}
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">الأسئلة الشائعة</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-dark-primary mb-2">{faq.name}</h3>
                  <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gold text-dark-primary text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لتجديد منزلك؟</h2>
            <p className="text-xl mb-8">احصل على استشارة مجانية وعرض سعر لدهان منزلك في الرياض.</p>
            <a
              href="tel:+966598971755"
              className="inline-block bg-dark-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-secondary transition-colors"
            >
              اتصل الآن: 0598971755
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
