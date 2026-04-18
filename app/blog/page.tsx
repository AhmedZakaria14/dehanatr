import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'مقالات دهانات الرياض | نصائح وحلول لمشاكل الدهانات',
  description: 'مقالات ونصائح من معلم دهانات الرياض: حلول لتقشير الدهان، مقارنة جوتن 5000 و2000، أفضل دهانات للمناخ الحار. ☎️ 0598971755',
};

const blogPosts = [
  {
    slug: 'limatha-yatashakkaq-aldahan',
    title: 'لماذا يتشقق الدهان بعد شهرين؟ (الأسباب الحقيقية والحل)',
    excerpt: 'تعرف على الأسباب الحقيقية وراء تشقق الدهان في منازل الرياض وكيفية معالجة الرطوبة قبل الدهان لضمان نتيجة تدوم طويلاً.',
    img: '/images/uploaded/img12.jpeg',
    date: '15 مارس 2025'
  },
  {
    slug: 'joton-5000-vs-2000',
    title: 'جوتن 5000 مقابل جوتن 2000 — أيهما أفضل لمنزلك في الرياض؟',
    excerpt: 'مقارنة شاملة بين أشهر أنواع دهانات جوتن لمساعدتك في اختيار الأنسب لاحتياجاتك وميزانيتك.',
    img: '/images/uploaded/img13.jpeg',
    date: '10 مارس 2025'
  },
  {
    slug: 'warraq-jidran-almatabikh',
    title: 'هل يمكن تركيب ورق جدران في المطبخ بالرياض؟',
    excerpt: 'كل ما تحتاج معرفته عن تركيب ورق الجدران في المطابخ، الأنواع المقاومة للرطوبة والحرارة، ونصائح للحفاظ عليه.',
    img: '/images/uploaded/img14.jpeg',
    date: '5 مارس 2025'
  },
  {
    slug: 'limatha-tatahallak-almuthalah',
    title: 'لماذا تتهالك المظلة بعد سنة في الرياض؟ — الأسباب والحل',
    excerpt: 'أسباب تلف المظلات السريع في مناخ الرياض الحار، وكيف تختار المواد المناسبة (مثل الفيبر جلاس) لتدوم لسنوات.',
    img: '/images/uploaded/img15.jpeg',
    date: '1 مارس 2025'
  },
  {
    slug: 'altarmim-am-aldahan-aljadid',
    title: 'الترميم أم الدهان الجديد؟ — متى تحتاج كل منهما',
    excerpt: 'دليل مبسط لمعرفة ما إذا كان جدارك يحتاج إلى دهان جديد فقط أم إلى عملية ترميم ومعالجة شاملة قبل الدهان.',
    img: '/images/uploaded/img16.jpeg',
    date: '25 فبراير 2025'
  },
  {
    slug: 'afdal-dahanat-lilmanatiq-alharrah',
    title: 'أفضل أنواع الدهانات لمناخ الرياض الحار — دليل شامل 2025',
    excerpt: 'تعرف على الدهانات التي تتحمل حرارة الصيف القاسية في الرياض وتحافظ على ألوانها دون بهتان.',
    img: '/images/uploaded/img17.jpeg',
    date: '20 فبراير 2025'
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-primary mb-6">مقالات ونصائح في عالم الدهانات</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              نشارك معك خبرتنا التي تزيد عن 10 سنوات في الرياض لنساعدك في اتخاذ القرارات الصحيحة لمنزلك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-gray-100 flex flex-col">
                <div className="relative h-56">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-2">{post.date}</span>
                  <h2 className="text-xl font-bold text-dark-primary mb-3 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <span className="text-gold font-bold mt-auto">اقرأ المزيد ←</span>
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
