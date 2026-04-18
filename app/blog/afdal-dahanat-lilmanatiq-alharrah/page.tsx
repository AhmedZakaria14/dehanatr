import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { siteImages } from '@/lib/siteImages';

export const metadata: Metadata = {
  title: 'أفضل أنواع الدهانات لمناخ الرياض الحار — دليل شامل 2025',
  description: 'تعرف على الدهانات التي تتحمل حرارة الصيف القاسية في الرياض وتحافظ على ألوانها دون بهتان.',
};

export default function BlogPost6() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "أفضل أنواع الدهانات لمناخ الرياض الحار — دليل شامل 2025",
    "image": siteImages.blog.post6,
    "author": { "@type": "Organization", "name": "معلم دهانات الرياض" },
    "publisher": { "@type": "Organization", "name": "معلم دهانات الرياض", "logo": { "@type": "ImageObject", "url": "https://dahanat-alriyadh.com/images/logo.png" } },
    "datePublished": "2025-02-20"
  };

  return (
    <BlogLayout
      title="أفضل أنواع الدهانات لمناخ الرياض الحار — دليل شامل 2025"
      image={siteImages.blog.post6}
      imageAlt="دهانات خارجية للرياض"
      schema={articleSchema}
      ctaText="اطلب دهان واجهة منزلك الآن"
    >
      <p>الواجهات الخارجية في الرياض تتعرض لأشعة شمس قاسية طوال الصيف، مما يؤدي إلى بهتان الألوان وتكسر طبقة الدهان إذا لم يكن من نوعية ممتازة.</p>
      <h2>الدهانات الخارجية الأفضل (البروفايل)</h2>
      <p>دهانات البروفايل (مثل بروفايل الجزيرة أو جوتن جوتاشيلد) هي الخيار الأمثل للواجهات الخارجية. تتميز بـ:</p>
      <ul>
        <li>مقاومة عالية للأشعة فوق البنفسجية (UV).</li>
        <li>مرونة تمنع التشققات الناتجة عن تمدد الجدران بالحرارة.</li>
        <li>مقاومة للغبار والأتربة، مما يسهل تنظيفها.</li>
      </ul>
    </BlogLayout>
  );
}
