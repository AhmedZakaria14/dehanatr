import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

interface BlogLayoutProps {
  title: string;
  image: string;
  imageAlt: string;
  schema: any;
  ctaText?: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  image,
  imageAlt,
  schema,
  ctaText = 'اطلب الخدمة الآن',
  children,
}: BlogLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 pb-20 bg-gray-50/50">

        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-500 mb-8 gap-2 items-center">
            <Link href="/" className="hover:text-gold transition-colors">
              الرئيسية
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">
              المقالات
            </Link>
          </nav>

          {/* Header Section */}
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-dark-primary mb-6 leading-tight">
              {title}
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
          </header>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 prose-headings:text-dark-primary prose-a:text-gold hover:prose-a:text-yellow-500 prose-img:rounded-xl">
              {children}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-dark-primary p-8 md:p-10 rounded-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  هل تحتاج إلى استشارة أو تنفيذ عمل مشابه؟
                </h3>
                <a
                  href="tel:+966598971755"
                  className="inline-block bg-gold text-dark-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
                >
                  {ctaText}
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}
