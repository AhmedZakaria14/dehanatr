import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import { siteImages } from '@/lib/siteImages';

export const metadata: Metadata = {
  title: 'لماذا تتهالك المظلة بعد سنة في الرياض؟ — الأسباب والحل',
  description: 'أسباب تلف المظلات السريع في مناخ الرياض الحار، وكيف تختار المواد المناسبة لتدوم لسنوات.',
};

export default function BlogPost4() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "لماذا تتهالك المظلة بعد سنة في الرياض؟ — الأسباب والحل",
    "image": siteImages.blog.post4,
    "author": { "@type": "Organization", "name": "معلم دهانات الرياض" },
    "publisher": { "@type": "Organization", "name": "معلم دهانات الرياض", "logo": { "@type": "ImageObject", "url": "https://dahanat-alriyadh.com/images/logo.png" } },
    "datePublished": "2025-03-01"
  };

  return (
    <BlogLayout
      title="لماذا تتهالك المظلة بعد سنة في الرياض؟ — الأسباب والحل"
      image={siteImages.blog.post4}
      imageAlt="مظلات الرياض"
      schema={articleSchema}
      ctaText="اطلب تركيب مظلة بضمان"
    >
      <p>مناخ الرياض قاسٍ جداً في الصيف، والشمس العمودية تدمر المواد غير المخصصة لهذا المناخ. إذا ركبت مظلة وتهالكت بسرعة، فالسبب غالباً هو استخدام قماش رخيص غير معالج ضد الأشعة فوق البنفسجية (UV).</p>
      <h2>الحل: اختيار المواد الصحيحة</h2>
      <p>لضمان بقاء المظلة لسنوات، يجب اختيار مواد مثل الـ PVC الكوري أو الألماني بوزن لا يقل عن 1100 جرام، أو استخدام مظلات الفيبر جلاس والحديد المعالج ضد الصدأ.</p>
    </BlogLayout>
  );
}
