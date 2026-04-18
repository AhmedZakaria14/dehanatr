import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "معلم دهانات الرياض",
    "url": "https://dahanat-alriyadh.com",
    "logo": "https://dahanat-alriyadh.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966598971755",
      "contactType": "customer service",
      "areaServed": "SA",
      "availableLanguage": "Arabic"
    }
  };

  return (
    <footer className="bg-dark-primary text-white pt-16 pb-8">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-6">معلم دهانات الرياض</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              نقدم خدمات دهانات احترافية بالرياض بخبرة تزيد عن 10 سنوات. نضمن لك تشطيبات عالية الجودة، معالجة الرطوبة، وضمان 5 سنوات على جميع أعمالنا.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              <li><Link href="/services/painting" className="text-gray-300 hover:text-gold transition-colors">دهانات داخلية وخارجية</Link></li>
              <li><Link href="/services/gypsum" className="text-gray-300 hover:text-gold transition-colors">أعمال الجبس بورد</Link></li>
              <li><Link href="/services/epoxy" className="text-gray-300 hover:text-gold transition-colors">دهانات الإيبوكسي</Link></li>
              <li><Link href="/services/renovation" className="text-gray-300 hover:text-gold transition-colors">أعمال الترميم</Link></li>
              <li><Link href="/services/wallpaper" className="text-gray-300 hover:text-gold transition-colors">ورق الجدران</Link></li>
              <li><Link href="/services/shelters" className="text-gray-300 hover:text-gold transition-colors">مظلات وسواتر</Link></li>
              <li><Link href="/services/tiles" className="text-gray-300 hover:text-gold transition-colors">تركيب قرميد</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold mb-1">الهاتف والواتساب</p>
                  <a href="tel:+966598971755" className="hover:text-gold transition-colors block" dir="ltr">0598971755</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold mb-1">الموقع</p>
                  <p>الرياض، المملكة العربية السعودية<br/>نخدم جميع أحياء الرياض</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold mb-1">ساعات العمل</p>
                  <p>السبت - الخميس: 07:00 صباحاً - 09:00 مساءً</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} معلم دهانات الرياض. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
