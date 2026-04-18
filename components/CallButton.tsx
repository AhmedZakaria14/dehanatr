'use client';

import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:+966598971755"
      className="md:hidden fixed bottom-6 left-6 z-50 bg-dark-primary text-white p-4 rounded-full shadow-lg hover:bg-dark-secondary hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="اتصل بنا الآن"
    >
      <Phone size={32} />
    </a>
  );
}
