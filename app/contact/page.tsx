import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export const metadata: Metadata = {
  title: 'اتصل بمعلم دهانات الرياض | استشارة مجانية وعرض سعر',
  description: 'تواصل مع معلم دهانات الرياض للحصول على استشارة مجانية وعرض سعر. هاتف وواتساب: 0598971755. نخدم جميع أحياء الرياض.',
};

export default function ContactPage() {
  const areas = [
    'حي النخيل', 'حي السفارات', 'حي الورود', 'حي العليا', 'حي الروضة',
    'حي الملقا', 'حي الربوة', 'حي المرسلات', 'حي الريان', 'حي الرائد',
    'شمال الرياض', 'شرق الرياض', 'غرب الرياض', 'جنوب الرياض'
  ];

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-primary mb-6">اتصل بنا</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              نحن هنا للإجابة على استفساراتكم وتقديم عروض أسعار مجانية. تواصل معنا الآن بأي طريقة تفضلها.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-dark-primary mb-8">معلومات التواصل المباشر</h2>
              <div className="space-y-6">
                <a href="tel:+966598971755" className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gold transition-colors group">
                  <div className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">اتصل بنا مباشرة</p>
                    <p className="text-xl font-bold text-dark-primary" dir="ltr">0598971755</p>
                  </div>
                </a>
                
                <a href="https://wa.me/966598971755" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#25D366] transition-colors group">
                  <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">راسلنا على الواتساب</p>
                    <p className="text-xl font-bold text-dark-primary" dir="ltr">0598971755</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-14 h-14 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">ساعات العمل</p>
                    <p className="text-lg font-bold text-dark-primary">07:00 ص - 09:00 م (السبت - الخميس)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-primary mb-6">أرسل استفسارك</h2>
              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم الكريم</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="أدخل اسمك" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الجوال</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="05xxxxxxxx" required dir="ltr" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">الخدمة المطلوبة</label>
                  <select id="service" name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all">
                    <option value="painting">دهانات داخلية وخارجية</option>
                    <option value="gypsum">جبس بورد</option>
                    <option value="epoxy">إيبوكسي</option>
                    <option value="renovation">ترميم</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">تفاصيل الطلب (اختياري)</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="اكتب تفاصيل طلبك هنا..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gold text-dark-primary font-bold text-lg py-4 rounded-lg hover:bg-yellow-500 transition-colors mt-4">
                  إرسال الطلب
                </button>
              </form>
            </div>
          </div>

          {/* Areas Served */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold text-dark-primary mb-8">نخدم جميع أحياء الرياض</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {areas.map((area, index) => (
                <span key={index} className="bg-gray-50 px-4 py-2 rounded-full text-gray-600 border border-gray-200">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
