import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';

export const metadata: Metadata = {
  title: 'هل يمكن تركيب ورق جدران في المطبخ بالرياض؟ | مقالات دهانات الرياض',
  description: 'كل ما تحتاج معرفته عن تركيب ورق الجدران في المطابخ، الأنواع المقاومة للرطوبة والحرارة، ونصائح للحفاظ عليه.',
};

export default function BlogPost3() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "هل يمكن تركيب ورق جدران في المطبخ بالرياض؟",
    "image": "/images/uploaded/img18.jpeg",
    "author": { "@type": "Organization", "name": "معلم دهانات الرياض" },
    "publisher": { "@type": "Organization", "name": "معلم دهانات الرياض", "logo": { "@type": "ImageObject", "url": "https://dahanat-alriyadh.com/images/logo.png" } },
    "datePublished": "2025-03-05"
  };

  return (
    <BlogLayout
      title="هل يمكن تركيب ورق جدران في المطبخ بالرياض؟"
      image="/images/uploaded/img19.jpeg"
      imageAlt="ورق جدران المطبخ"
      schema={articleSchema}
      ctaText="اتصل بنا الآن"
    >
      <p className="lead text-xl text-gray-600 mb-8">
        المطبخ هو قلب المنزل، وتجديده يعطي طاقة إيجابية للمكان. يتساءل الكثيرون: هل يمكن استخدام ورق الجدران في المطبخ بدلاً من السيراميك أو الدهان؟ الإجابة المختصرة هي: نعم، ولكن بشروط!
      </p>

      <h2 className="text-2xl font-bold text-dark-primary mt-10 mb-4">الأنواع المناسبة للمطابخ</h2>
      <p className="mb-4">لا يمكنك استخدام الورق العادي في المطبخ بسبب الرطوبة والحرارة. الأنواع المناسبة هي:</p>
      <ul className="list-disc list-inside space-y-2 mb-8 pr-4">
        <li><strong>ورق الفينيل (Vinyl):</strong> هو الخيار الأفضل. مقاوم للماء، سهل التنظيف، ويتحمل الحرارة المعتدلة.</li>
        <li><strong>الورق القابل للغسيل:</strong> يأتي بطبقة حماية بلاستيكية تمنع امتصاص الدهون.</li>
      </ul>

      <h2 className="text-2xl font-bold text-dark-primary mt-10 mb-4">أين يجب ألا تضع ورق الجدران؟</h2>
      <p className="mb-6">
        تجنب وضع ورق الجدران خلف الموقد (الفرن) مباشرة، أو خلف حوض الغسيل (المجلى) إذا لم يكن هناك حاجز زجاجي أو سيراميك صغير لحمايته من تناثر الماء والزيت الساخن.
      </p>
    </BlogLayout>
  );
}
