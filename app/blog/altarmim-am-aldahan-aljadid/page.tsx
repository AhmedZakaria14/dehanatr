import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';

export const metadata: Metadata = {
  title: 'الترميم أم الدهان الجديد؟ — متى تحتاج كل منهما',
  description: 'دليل مبسط لمعرفة ما إذا كان جدارك يحتاج إلى دهان جديد فقط أم إلى عملية ترميم ومعالجة شاملة قبل الدهان.',
};

export default function BlogPost5() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "الترميم أم الدهان الجديد؟ — متى تحتاج كل منهما",
    "image": "/images/uploaded/img4.jpeg",
    "author": { "@type": "Organization", "name": "معلم دهانات الرياض" },
    "publisher": { "@type": "Organization", "name": "معلم دهانات الرياض", "logo": { "@type": "ImageObject", "url": "https://dahanat-alriyadh.com/images/logo.png" } },
    "datePublished": "2025-02-25"
  };

  return (
    <BlogLayout
      title="الترميم أم الدهان الجديد؟ — متى تحتاج كل منهما"
      image="/images/uploaded/img5.jpeg"
      imageAlt="ترميم ودهانات"
      schema={articleSchema}
      ctaText="استشرنا مجاناً"
    >
      <p>الكثير من العملاء يطلبون خدمة &quot;دهان&quot; بينما جدرانهم تحتاج فعلياً إلى &quot;ترميم&quot;. الدهان فوق جدار متهالك هو مجرد إخفاء مؤقت للمشكلة.</p>
      <h2>متى تحتاج إلى ترميم؟</h2>
      <ul>
        <li>إذا كان هناك تساقط لطبقة اللياسة (الأسمنت).</li>
        <li>إذا ظهرت أملاح بيضاء أو بقع رطوبة صفراء/سوداء.</li>
        <li>إذا كانت هناك شقوق عميقة تتجاوز طبقة المعجون.</li>
      </ul>
      <p>في هذه الحالات، يجب معالجة المشكلة الأساسية أولاً قبل التفكير في اللون الجديد.</p>
    </BlogLayout>
  );
}
