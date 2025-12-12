import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://etoma.dev';

export default function OpengraphImage(): ImageResponse {
  // Scrapbook palette
  const cream = '#FDF6E9';
  const paper = '#FFFEF9';
  const coral = '#F07A63';
  const mustard = '#F6D447';
  const teal = '#4AA3A2';
  const mint = '#98D8C8';
  const primary = '#1F3B2E';
  const muted = '#5E5A52';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: cream,
          fontFamily: 'system-ui, sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Paper texture dots pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Decorative corner shapes */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            right: 36,
            width: 40,
            height: 40,
            opacity: 0.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: mustard,
              transform: 'rotate(45deg)',
              display: 'flex',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 45,
            left: 45,
            width: 24,
            height: 24,
            borderRadius: 999,
            background: coral,
            opacity: 0.4,
            display: 'flex',
          }}
        />

        {/* Washi tape top left */}
        <div
          style={{
            position: 'absolute',
            top: 45,
            left: 60,
            width: 120,
            height: 28,
            background: `linear-gradient(90deg, ${mustard}cc, ${mustard}aa)`,
            transform: 'rotate(-8deg)',
            display: 'flex',
          }}
        />

        {/* Washi tape bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: 50,
            right: 80,
            width: 100,
            height: 24,
            background: `linear-gradient(90deg, ${mint}cc, ${mint}aa)`,
            transform: 'rotate(12deg)',
            display: 'flex',
          }}
        />

        {/* Main content container */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '60px 70px',
            gap: 50,
          }}
        >
          {/* Left: Polaroid-style photo frame */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            {/* Tape on top of polaroid */}
            <div
              style={{
                width: 80,
                height: 22,
                background: `linear-gradient(90deg, ${coral}bb, ${coral}99)`,
                transform: 'rotate(-3deg)',
                marginBottom: -12,
                display: 'flex',
              }}
            />
            
            {/* Polaroid frame */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: paper,
                padding: '16px 16px 50px 16px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
                transform: 'rotate(-2deg)',
              }}
            >
              {/* Photo area */}
              <div
                style={{
                  width: 260,
                  height: 300,
                  background: `linear-gradient(145deg, ${teal}22, ${coral}15)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${siteUrl}/hero-img.jpg`}
                  alt="Kelvin"
                  width={260}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>
              
              {/* Handwritten caption */}
              <div
                style={{
                  marginTop: 12,
                  fontSize: 22,
                  color: muted,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  fontStyle: 'italic',
                }}
              >
                Builder & storyteller
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              gap: 20,
            }}
          >
            {/* Sticker-style badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: mustard,
                padding: '8px 16px',
                borderRadius: 20,
                fontSize: 16,
                fontWeight: 600,
                color: primary,
                boxShadow: '2px 3px 0 rgba(0,0,0,0.1)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: '#22c55e',
                  display: 'flex',
                }}
              />
              Open to collabs
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: primary,
                display: 'flex',
              }}
            >
              Hey, I'm Etoma-etoto (Kelvin) Odi 👋
            </div>

            {/* Headline */}
            <div
              style={{
                fontSize: 46,
                fontWeight: 800,
                color: primary,
                lineHeight: 1.15,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ display: 'flex' }}>I craft digital experiences</span>
              <span style={{ display: 'flex' }}>
                that feel like{' '}
                <span
                  style={{
                    display: 'flex',
                    background: `linear-gradient(180deg, transparent 60%, ${mustard}66 60%)`,
                    marginLeft: 10,
                  }}
                >
                  keepsakes
                </span>
              </span>
            </div>

            {/* Subtext */}
            <div
              style={{
                fontSize: 20,
                color: muted,
                lineHeight: 1.5,
                maxWidth: 500,
                display: 'flex',
              }}
            >
              Designer-minded developer mixing playful storytelling with reliable builds.
            </div>

            {/* Skills/Tags row */}
            <div
              style={{
                display: 'flex',
                gap: 10,
                marginTop: 8,
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'Fullstack Dev', bg: `${teal}22`, border: teal },
                { label: 'Automation', bg: `${coral}22`, border: coral },
                { label: 'Design Systems', bg: `${mustard}33`, border: mustard },
              ].map((tag) => (
                <div
                  key={tag.label}
                  style={{
                    display: 'flex',
                    padding: '8px 14px',
                    borderRadius: 8,
                    background: tag.bg,
                    border: `2px solid ${tag.border}`,
                    fontSize: 16,
                    fontWeight: 600,
                    color: primary,
                  }}
                >
                  {tag.label}
                </div>
              ))}
            </div>

            {/* URL footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 16,
                padding: '10px 18px',
                background: paper,
                borderRadius: 12,
                border: `2px dashed ${muted}44`,
                fontSize: 18,
                color: primary,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  display: 'flex',
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  background: mustard,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                }}
              >
                ↗
              </span>
              etoma.dev
            </div>
          </div>
        </div>

        {/* Bottom decorative squiggle line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: `linear-gradient(90deg, ${coral}, ${mustard}, ${teal}, ${mint}, ${coral})`,
            display: 'flex',
          }}
        />
      </div>
    ),
    size
  );
}
