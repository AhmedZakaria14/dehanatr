'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
        <h3 className="text-xl font-bold mb-2">تم الاستلام بنجاح!</h3>
        <p>شكراً لتواصلك معنا، سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-green-700 underline hover:text-green-900"
        >
          إرسال رسالة أخرى
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
  );
}
