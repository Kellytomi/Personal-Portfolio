'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { PaperCard } from '@/components/ui/PaperCard';
import { Sticker } from '@/components/ui/Sticker';
import { TextureOverlay } from '@/components/ui/TextureOverlay';
import { CutoutLetters, PaperBackground, WashiTape } from '@/components/scrapbook';
import { siteConfig } from '@/config/site';

export default function ContactSection(): JSX.Element {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:kelvinetoma95@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after a delay
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <PaperBackground variant="cream" className="absolute inset-0 pointer-events-none" hasTexture />
      <TextureOverlay opacity={0.55} className="absolute inset-0">
        <div className="absolute top-6 left-6 w-36 h-10 bg-[url(/textures/washi-yellow.svg)] bg-cover rotate-[-12deg] opacity-85" />
        <div className="absolute bottom-8 right-10 w-44 h-10 bg-[url(/textures/washi-teal.svg)] bg-cover rotate-[8deg] opacity-85" />
        <Image
          src="/doodles/squiggle.svg"
          alt=""
          width={260}
          height={120}
          className="absolute hidden md:block top-14 right-12 opacity-70"
          priority
        />
      </TextureOverlay>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Sticker tone="coral" variant="badge">
              Get in touch
            </Sticker>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2 mt-4">Let’s build something memorable</h2>
            <div className="flex justify-center mb-3">
              <CutoutLetters text="say hello" size="md" colorScheme="warm" />
            </div>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Collaborations, freelance, or a quick hello—drop a note and I’ll reply fast. The more context you share, the better I can help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <PaperCard withTape rotation={-1} tone="cream" className="relative">
                <div className="absolute -top-6 right-6 hidden sm:block">
                  <WashiTape color="pink" pattern="stripe" width="md" rotation={-12} />
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-primary/10 rounded-xl text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-primary/10 rounded-xl text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-primary/10 rounded-xl text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2
                      ${
                        submitted
                          ? 'bg-green-500 text-white'
                          : 'bg-primary text-white hover:bg-primary/90 hover:shadow-hover'
                      }`}
                  >
                    {submitted ? (
                      <>
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 13L9 17L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Opening email client...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </PaperCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                <PaperCard tone="teal" rotation={1.2}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-soft">
                      <svg
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold">Email</h4>
                      <a
                        href="mailto:kelvinetoma95@gmail.com"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        kelvinetoma95@gmail.com
                      </a>
                    </div>
                  </div>
                  <p className="text-muted text-sm">Drop your context and I’ll reply within 1–2 business days.</p>
                </PaperCard>

                {/* Social Links */}
                <PaperCard rotation={-0.8} withTape>
                  <h4 className="text-primary font-semibold mb-3">Connect with me</h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={siteConfig.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-primary/10 rounded-lg text-primary shadow-soft hover:-translate-y-0.5 transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="text-sm font-medium">Twitter</span>
                    </a>

                    <a
                      href={siteConfig.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-primary/10 rounded-lg text-primary shadow-soft hover:-translate-y-0.5 transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>

                    <a
                      href={siteConfig.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-primary/10 rounded-lg text-primary shadow-soft hover:-translate-y-0.5 transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </PaperCard>

                {/* Availability */}
                <PaperCard rotation={0.6} tone="cream">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold">Currently available</h4>
                      <p className="text-muted text-sm">Open for freelance collabs and product builds.</p>
                    </div>
                  </div>
                </PaperCard>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

