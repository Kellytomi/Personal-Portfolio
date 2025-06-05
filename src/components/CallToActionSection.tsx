'use client';

import Link from 'next/link';

export default function CallToActionSection(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden dark-section">
      <div className="absolute inset-0 opacity-10 pattern-dots" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's create something awesome together!
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Got a cool project idea? Want to chat about tech? Or just want to say hi? I'd love to
            hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
