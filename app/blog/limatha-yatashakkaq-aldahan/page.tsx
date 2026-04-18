import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';

export const metadata: Metadata = {
  title: 'لماذا يتشقق الدهان بعد شهرين؟ (الأسباب الحقيقية والحل) | معلم دهانات الرياض',
  description: 'تعرف على الأسباب الحقيقية وراء تشقق الدهان في منازل الرياض وكيفية معالجة الرطوبة قبل الدهان لضمان نتيجة تدوم طويلاً.',
};

export default function BlogPost1() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "لماذا يتشقق الدهان بعد شهرين؟ (الأسباب الحقيقية والحل)",
    "image": "/images/uploaded/img10.jpeg",
    "author": {
      "@type": "Organization",
      "name": "معلم دهانات الرياض"
    },
    "publisher": {
      "@type": "Organization",
      "name": "معلم دهانات الرياض",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dahanat-alriyadh.com/images/logo.png"
      }
    },
    "datePublished": "2025-03-15"
  };

  return (
    <BlogLayout
      title="لماذا يتشقق الدهان في المنازل بالرياض؟ — الأسباب والحلول"
      image="/images/uploaded/img11.jpeg"
      imageAlt="تشقق الدهان في الجدران"
      schema={articleSchema}
      ctaText="اتصل بنا لمعاينة مجانية"
    >
      <p className="lead text-xl text-gray-600 mb-8">
        من أكثر المشاكل المزعجة التي تواجه أصحاب المنازل في الرياض هي تشقق الدهان وتقشره بعد فترة قصيرة جداً من تنفيذه. قد تظن أن المشكلة في نوع الدهان، لكن الحقيقة غالباً ما تكون مختلفة تماماً.
      </p>

      <h2 className="text-2xl font-bold text-dark-primary mt-10 mb-4">1. الرطوبة: العدو الأول للدهانات</h2>
      <p className="mb-6">
        الرطوبة المتسربة من الأنابيب المخفية أو من الخارج هي السبب رقم واحد لتقشر الدهان. عندما تتجمع المياه خلف طبقة الدهان، فإنها تدفعها للخارج مما يؤدي إلى ظهور فقاعات ثم تشققات. في الرياض، تظهر هذه المشكلة بكثرة في الجدران الملاصقة للحمامات أو المطابخ.
      </p>

      <h2 className="text-2xl font-bold text-dark-primary mt-10 mb-4">2. التأسيس السيء (الاستعجال)</h2>
      <p className="mb-6">
        الدهان ليس مجرد لون نضعه على الجدار. التأسيس هو 80% من نجاح العمل. عدم تنظيف الجدار جيداً من الغبار، أو عدم استخدام طبقة الأساس (البرايمر) المناسبة، يجعل الدهان لا يلتصق بالجدار بشكل صحيح.
      </p>

      <h2 className="text-2xl font-bold text-dark-primary mt-10 mb-4">3. الجبس الضعيف</h2>
      <p className="mb-6">
        استخدام معجون رديء أو عدم تركه ليجف تماماً قبل وضع طبقة الدهان يؤدي حتماً إلى التشققات. يجب إعطاء كل طبقة وقتها الكافي لتجف.
      </p>

      <h2 className="text-2xl font-bold text-dark-primary mt-10 mb-4">الحل الجذري</h2>
      <p className="mb-6">
        الحل ليس في إعادة الدهان فوق المشكلة! الحل يكمن في:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-8 pr-4">
        <li>كشط المنطقة المتضررة بالكامل وصولاً إلى اللياسة.</li>
        <li>معالجة مصدر الرطوبة (إصلاح التسريب إن وجد).</li>
        <li>استخدام مواد عازلة للرطوبة والأملاح.</li>
        <li>إعادة التأسيس بمعجون عالي الجودة وتركه يجف.</li>
        <li>استخدام دهان نهائي عالي الجودة مثل جوتن.</li>
      </ul>
    </BlogLayout>
  );
}
