import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle2, Star, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import { siteImages } from '@/lib/siteImages';

export default function Home() {
  const services = [
    { title: 'دهانات داخلية وخارجية', desc: 'دهانات جوتن والجزيرة بضمان 5 سنوات', link: '/services/painting', img: siteImages.services.painting },
    { title: 'أعمال الجبس بورد', desc: 'أسقف معلقة وديكورات جدارية حديثة', link: '/services/gypsum', img: siteImages.services.gypsum },
    { title: 'دهانات الإيبوكسي', desc: 'أرضيات إيبوكسي مقاومة للرطوبة والخدوش', link: '/services/epoxy', img: siteImages.services.epoxy },
    { title: 'أعمال الترميم', desc: 'معالجة الرطوبة والشقوق قبل الدهان', link: '/services/renovation', img: siteImages.services.renovation },
    { title: 'ورق الجدران', desc: 'تركيب ورق جدران احترافي لجميع الغرف', link: '/services/wallpaper', img: siteImages.services.wallpaper },
    { title: 'مظلات وسواتر', desc: 'تركيب مظلات سيارات وسواتر بجودة عالية', link: '/services/shelters', img: siteImages.services.shelters },
    { title: 'تركيب قرميد', desc: 'قرميد واجهات وأسقف بألوان متعددة', link: '/services/tiles', img: siteImages.services.tiles },
    { title: 'ديكورات دهان', desc: 'تعتيق، ترخيم، وروعة، وإبداع', link: '/services/painting', img: siteImages.services.decorative },
  ];

  const areas = [
    'حي النخيل', 'حي السفارات', 'حي الورود', 'حي العليا', 'حي الروضة',
    'حي الملقا', 'حي الربوة', 'حي المرسلات', 'حي الريان', 'حي الرائد',
    'حي الياسمين', 'حي الصحافة', 'حي العقيق', 'حي حطين', 'حي الغدير',
    'شمال الرياض', 'شرق الرياض', 'غرب الرياض', 'جنوب الرياض', 'وسط الرياض'
  ];

  const faqs = [
    { q: 'هل تقدمون ضمان على أعمال الدهانات؟', a: 'نعم، نقدم ضماناً لمدة 5 سنوات على جميع أعمال الدهانات الداخلية والخارجية ضد التقشير وتغير اللون، بشرط عدم وجود تسربات مياه.' },
    { q: 'ما هي أنواع الدهانات التي تستخدمونها؟', a: 'نستخدم أفضل أنواع الدهانات في السوق السعودي مثل جوتن (Jotun 5000 و 2000) ودهانات الجزيرة لضمان أعلى جودة.' },
    { q: 'هل تقومون بمعالجة الرطوبة قبل الدهان؟', a: 'بالتأكيد، معالجة الرطوبة والشقوق هي الخطوة الأهم قبل البدء بالدهان لضمان عدم تقشر الدهان لاحقاً.' },
    { q: 'كم تبلغ الدفعة المقدمة للبدء بالعمل؟', a: 'نطلب دفعة مقدمة 30% فقط للبدء في العمل وشراء المواد الأساسية، والباقي يتم دفعه على دفعات حسب الإنجاز.' },
    { q: 'هل تخدمون جميع أحياء الرياض؟', a: 'نعم، فريقنا يغطي كافة أحياء الرياض (شمال، جنوب، شرق، وغرب الرياض).' },
    { q: 'كم يستغرق دهان شقة مكونة من 4 غرف؟', a: 'في المتوسط، يستغرق دهان شقة 4 غرف من 3 إلى 5 أيام عمل، حسب حالة الجدران والحاجة للترميم.' },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative bg-dark-primary text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image 
              src={siteImages.hero}
              alt="معلم دهانات الرياض يعمل على دهان حائط"
              fill
              className="object-cover"
              priority
              
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                معلم دهانات الرياض | تشطيبات تدوم <span className="text-gold">5 سنوات</span> دون تقشير
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                خدمات دهانات احترافية بالرياض (داخلية وخارجية). نستخدم دهانات جوتن 5000 والجزيرة. معالجة جذرية للرطوبة قبل البدء.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+966598971755"
                  className="bg-gold text-dark-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={24} />
                  اتصل الآن لعرض سعر مجاني
                </a>
                <a
                  href="https://wa.me/966598971755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
                >
                  تواصل عبر الواتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-white py-8 border-b border-gray-100 shadow-sm relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-xl">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-gold" size={32} />
                <span className="font-bold text-dark-primary">معالجة الرطوبة أولاً</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-gold" size={32} />
                <span className="font-bold text-dark-primary">ضمان 5 سنوات</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-gold" size={32} />
                <span className="font-bold text-dark-primary">دفعة مقدمة 30% فقط</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-gold" size={32} />
                <span className="font-bold text-dark-primary">تنظيف يومي للموقع</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-4">خدمات معلم دهانات الرياض</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">نقدم مجموعة متكاملة من خدمات التشطيبات والديكورات بأعلى معايير الجودة في جميع أحياء الرياض.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link href={service.link} key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                  <div className="relative h-48">
                    <Image 
                      src={service.img}
                      alt={`${service.title} بالرياض`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-primary mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <span className="text-gold font-bold flex items-center gap-1">
                      المزيد من التفاصيل <ChevronLeft size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>



        {/* About & Stats Section */}
        <section className="py-20 bg-dark-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">خبرة 10 سنوات في عالم الدهانات</h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  بدأنا مسيرتنا في الرياض كفريق صغير، واليوم نفخر بكوننا من أفضل مقاولي الدهانات في المنطقة. سر نجاحنا يكمن في اهتمامنا بالتفاصيل، استخدامنا لأفضل المواد (جوتن والجزيرة)، والتزامنا بالمواعيد.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  نحن لا نقوم بالدهان فقط، بل نعالج الجدران من الرطوبة والشقوق لضمان نتيجة تدوم لسنوات دون الحاجة للصيانة المستمرة.
                </p>
                <Link href="/about" className="inline-block border-2 border-gold text-gold px-8 py-3 rounded-lg font-bold hover:bg-gold hover:text-dark-primary transition-colors">
                  اقرأ قصتنا كاملة
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-dark-secondary p-8 rounded-xl text-center border border-gray-800">
                  <span className="block text-4xl font-bold text-gold mb-2">+500</span>
                  <span className="text-gray-300">مشروع منجز</span>
                </div>
                <div className="bg-dark-secondary p-8 rounded-xl text-center border border-gray-800">
                  <span className="block text-4xl font-bold text-gold mb-2">+10</span>
                  <span className="text-gray-300">سنوات خبرة</span>
                </div>
                <div className="bg-dark-secondary p-8 rounded-xl text-center border border-gray-800">
                  <span className="block text-4xl font-bold text-gold mb-2">5</span>
                  <span className="text-gray-300">سنوات ضمان</span>
                </div>
                <div className="bg-dark-secondary p-8 rounded-xl text-center border border-gray-800">
                  <span className="block text-4xl font-bold text-gold mb-2">80%</span>
                  <span className="text-gray-300">عملاء متكررون</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-primary text-center mb-16">ماذا يقول عملاؤنا في الرياض؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'أبو محمد', area: 'حي النخيل', text: 'شغل نظيف ومرتب، والأهم إنهم عالجوا الرطوبة اللي كانت متعبتني في المجلس قبل ما يدهنون. أنصح بالتعامل معهم.' },
                { name: 'عبدالله العتيبي', area: 'حي الملقا', text: 'التزام بالمواعيد ودقة في العمل. استخدموا دهانات جوتن الأصلية والنتيجة طلعت أفضل من اللي توقعته.' },
                { name: 'أم خالد', area: 'حي الروضة', text: 'سوو لي ديكورات جبس بورد مع دهانات داخلية للفيلا كاملة. العمال محترمين وينظفون المكان كل يوم قبل ما يمشون.' },
              ].map((review, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                  <div className="flex text-gold mb-4">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&quot;{review.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-dark-primary font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-primary">{review.name}</h4>
                      <span className="text-sm text-gray-500">{review.area}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-4">نخدم جميع أحياء الرياض</h2>
              <p className="text-gray-600 text-lg">فريقنا مستعد لتلبية طلباتكم في أي مكان داخل مدينة الرياض.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="bg-gray-50 py-3 px-4 rounded-lg text-center text-dark-secondary font-medium border border-gray-100 hover:border-gold hover:text-gold transition-colors cursor-default">
                  دهانات {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-primary text-center mb-12">الأسئلة الشائعة</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-dark-primary mb-3 flex items-start gap-3">
                    <span className="text-gold">؟</span> {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pr-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gold text-dark-primary text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">هل تعبت من دهان يتشقق؟</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">
              تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر لدهان منزلك بأفضل المواد وبضمان 5 سنوات.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+966598971755"
                className="bg-dark-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-secondary transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={24} />
                اتصل: 0598971755
              </a>
              <a
                href="https://wa.me/966598971755"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
              >
                راسلنا على الواتساب
              </a>
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
