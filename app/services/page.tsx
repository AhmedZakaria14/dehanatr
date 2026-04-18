import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'خدمات دهانات الرياض | دهانات داخلية خارجية جبس بورد إيبوكسي',
  description: 'خدمات دهانات الرياض الشاملة: دهانات داخلية وخارجية، جبس بورد، إيبوكسي، مظلات، ترميم، ورق جدران. معلم دهانات بالرياض ☎️ 0598971755',
};

export default function ServicesPage() {
  const services = [
    { title: 'دهانات داخلية وخارجية', desc: 'دهانات جوتن والجزيرة بضمان 5 سنوات', link: '/services/painting', img: '/images/uploaded/img20.jpeg' },
    { title: 'أعمال الجبس بورد', desc: 'أسقف معلقة وديكورات جدارية حديثة', link: '/services/gypsum', img: '/images/uploaded/img21.jpeg' },
    { title: 'دهانات الإيبوكسي', desc: 'أرضيات إيبوكسي مقاومة للرطوبة والخدوش', link: '/services/epoxy', img: '/images/uploaded/img22.jpeg' },
    { title: 'أعمال الترميم', desc: 'معالجة الرطوبة والشقوق قبل الدهان', link: '/services/renovation', img: '/images/uploaded/img23.jpeg' },
    { title: 'ورق الجدران', desc: 'تركيب ورق جدران احترافي لجميع الغرف', link: '/services/wallpaper', img: '/images/uploaded/img24.jpeg' },
    { title: 'مظلات وسواتر', desc: 'تركيب مظلات سيارات وسواتر بجودة عالية', link: '/services/shelters', img: '/images/uploaded/img25.jpeg' },
    { title: 'تركيب قرميد', desc: 'قرميد واجهات وأسقف بألوان متعددة', link: '/services/tiles', img: '/images/uploaded/img26.jpeg' },
    { title: 'ديكورات دهان', desc: 'تعتيق، ترخيم، وروعة، وإبداع', link: '/services/painting', img: '/images/uploaded/img27.jpeg' },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://dahanat-alriyadh.com${service.link}`,
      "name": service.title
    }))
  };

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 pb-20">

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-primary mb-6">خدمات معلم دهانات الرياض</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              نقدم مجموعة متكاملة من خدمات التشطيبات والديكورات بأعلى معايير الجودة في جميع أحياء الرياض. نستخدم أفضل المواد مثل دهانات جوتن 5000 والجزيرة لضمان نتائج تدوم طويلاً.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={service.link} key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-gray-100">
                <div className="relative h-56">
                  <Image 
                    src={service.img}
                    alt={`${service.title} بالرياض`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-dark-primary mb-3 group-hover:text-gold transition-colors">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <span className="text-gold font-bold flex items-center gap-1">
                    المزيد من التفاصيل <ChevronLeft size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
