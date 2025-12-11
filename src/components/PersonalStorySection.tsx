'use client';

import { motion } from 'framer-motion';
import { PaperCard } from '@/components/ui/PaperCard';
import { Sticker } from '@/components/ui/Sticker';
import { TextureOverlay } from '@/components/ui/TextureOverlay';
import { PolaroidCard, ScrapbookFrame, WashiTape, CutoutLetters } from '@/components/scrapbook';

export default function PersonalStorySection(): JSX.Element {
  return (
    <section className="py-24 relative bg-surface overflow-hidden">
      <TextureOverlay opacity={0.5} className="absolute inset-0">
        <div className="absolute -left-10 top-8 w-40 h-10 bg-[url(/textures/washi-yellow.svg)] bg-cover rotate-[-10deg] opacity-80" />
        <div className="absolute right-4 bottom-16 w-44 h-10 bg-[url(/textures/washi-teal.svg)] bg-cover rotate-[8deg] opacity-80" />
        <div className="absolute top-6 left-12 hidden md:block">
          <WashiTape color="mint" pattern="dots" width="md" rotation={-12} />
        </div>
        <div className="absolute bottom-10 right-16 hidden md:block">
          <WashiTape color="coral" pattern="stripe" width="lg" rotation={10} />
        </div>
      </TextureOverlay>
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Sticker tone="teal" variant="badge">
              My Story
            </Sticker>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-4 text-primary">A bit about me</h2>
            <div className="flex justify-center">
              <div className="hidden sm:inline-flex">
                <CutoutLetters text="builder + storyteller" size="md" colorScheme="warm" />
              </div>
              <div className="sm:hidden flex flex-col items-center gap-1">
                <CutoutLetters text="builder" size="md" colorScheme="warm" />
                <CutoutLetters text="+" size="sm" colorScheme="warm" />
                <CutoutLetters text="storyteller" size="md" colorScheme="warm" />
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <ScrapbookFrame rotation="left" tapePosition="corners" tapeColor="pink">
                <PolaroidCard
                  imageSrc="/images/about-me-portrait.png"
                  imageAlt="Kelvin in a Lakers jersey taking a mirror photo"
                  rotation="none"
                  aspect="portrait"
                />
              </ScrapbookFrame>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-3 space-y-4 md:ml-4"
            >
              <PaperCard withTape rotation={-1}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">👨‍💻</span>
                  <h3 className="text-xl font-bold text-primary">The dev journey</h3>
                </div>
                <p className="text-muted">
                  Self-taught since age 14, tinkering with games and early websites before turning that curiosity into
                  a career. I ship with a mix of design empathy and pragmatic engineering.
                </p>
              </PaperCard>

              <PaperCard tone="cream" rotation={1.5}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🛠️</span>
                  <h3 className="text-xl font-bold text-primary">What drives me</h3>
                </div>
                <p className="text-muted">
                  Pairing playful storytelling with reliable, scalable builds. I love helping founders and teams make
                  products people keep returning to.
                </p>
              </PaperCard>

              <PaperCard tone="teal" rotation={-0.5}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏐</span>
                  <h3 className="text-xl font-bold text-primary">Outside the code</h3>
                </div>
                <p className="text-muted">
                  Volleyball player, amateur chef, sci-fi binger. If there’s a new sport, recipe, or gadget, I’m probably
                  testing it with friends.
                </p>
              </PaperCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-8"
          >
            <a href="#contact" className="btn btn-primary">
              Let's connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 