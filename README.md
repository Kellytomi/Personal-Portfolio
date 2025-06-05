# Kelvin's Portfolio 🚀

> A modern, high-performance portfolio website showcasing the work of **Etoma-Etoto Kelvin Odi**, founder of Fxsion Digital Solutions Agency.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Test Coverage](https://img.shields.io/badge/Coverage-98%25-brightgreen?style=flat-square)](./coverage)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations and micro-interactions
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop  
- **⚡ Performance Optimized**: Lazy loading, code splitting, and Next.js 14 App Router
- **🧪 Well Tested**: 98% test coverage with Jest and Testing Library
- **🔒 Security First**: Input validation, XSS prevention, and rate limiting
- **♿ Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **🎯 SEO Optimized**: Meta tags, OpenGraph, structured data, and sitemap generation
- **🚀 Coming Soon Mode**: Beautiful launch page with countdown timer and email collection
- **🎭 Interactive Elements**: Custom cursor, command palette, and smooth page transitions

## 🛠️ Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - Component library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Tabler Icons](https://tabler-icons.io/)** - Beautiful SVG icons

### Development & Quality
- **[Jest](https://jestjs.io/)** - Testing framework
- **[Testing Library](https://testing-library.com/)** - Simple and complete testing utilities
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules

### Integrations
- **[EmailJS](https://www.emailjs.com/)** - Client-side email service
- **[DOMPurify](https://github.com/cure53/DOMPurify)** - XSS sanitizer

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kellytomi/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   # Coming Soon Mode (optional)
   NEXT_PUBLIC_COMING_SOON_MODE=false
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   
   # EmailJS Configuration (required for contact form)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── about/                   # About page
│   ├── coming-soon/             # Coming soon page
│   ├── contact/                 # Contact page
│   ├── projects/                # Projects showcase
│   ├── skills/                  # Skills & expertise
│   ├── testimonials/            # Client testimonials
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components
│   ├── __tests__/               # Component tests
│   ├── HeroSection.tsx          # Homepage hero section
│   ├── Navigation.tsx           # Site navigation
│   ├── Footer.tsx               # Site footer
│   ├── CustomCursor.tsx         # Interactive cursor
│   ├── CommandPalette.tsx       # Search & navigation
│   └── ...                     # Other components
├── lib/                         # Utility functions
│   ├── validation.ts            # Input validation & security
│   └── utils.ts                 # General utilities
└── config/                      # Configuration files
    └── site.ts                  # Site-wide configuration
```

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Current test coverage: **98%** across all utilities and components.

## 🎯 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run test suite |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run generate-sitemap` | Generate XML sitemap |

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_COMING_SOON_MODE` | Enable launch page | No | `false` |
| `NEXT_PUBLIC_SITE_URL` | Base URL for SEO | No | `https://etoma.dev` |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes | - |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes | - |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes | - |

### Coming Soon Mode

Toggle between launch page and full site:

- **Enable**: Set `NEXT_PUBLIC_COMING_SOON_MODE=true`
- **Disable**: Set `NEXT_PUBLIC_COMING_SOON_MODE=false` or omit entirely
- **Development**: Press `Shift+D` to toggle mode during development

### Customization

1. **Content**: Update page components and site configuration
2. **Styling**: Modify `tailwind.config.js` for theme customization
3. **Images**: Replace assets in the `public/` directory
4. **Contact**: Update EmailJS configuration for form functionality

## 🚀 Deployment

### Recommended Platforms
- **[Vercel](https://vercel.com/)** (Recommended for Next.js)
- **[Netlify](https://netlify.com/)**
- **[AWS Amplify](https://aws.amazon.com/amplify/)**

### Production Checklist
- [ ] Set environment variables in hosting platform
- [ ] Configure custom domain
- [ ] Set up EmailJS service
- [ ] Enable coming soon mode if needed
- [ ] Test contact form functionality
- [ ] Verify SEO meta tags

### Build & Deploy
```bash
# Production build
npm run build

# Test production build locally
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the coding standards
4. Add tests for new functionality
5. Run tests: `npm test`
6. Format code: `npm run format`
7. Commit changes: `git commit -m 'Add amazing feature'`
8. Push to branch: `git push origin feature/amazing-feature`
9. Submit a Pull Request

### Code Standards
- Follow TypeScript best practices
- Maintain test coverage above 95%
- Use semantic commit messages
- Format code with Prettier
- Lint with ESLint

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting and lazy loading
- **SEO**: Structured data and meta optimization

## 📄 License

This project is licensed under the MIT License. See the repository for details.

## 📞 Contact

**Etoma-Etoto Kelvin Odi**
- 📧 Email: [kelvinetoma95@gmail.com](mailto:kelvinetoma95@gmail.com)
- 🌐 Website: [https://etoma.dev](https://etoma.dev)
- 🏢 Agency: [Fxsion Digital Solutions](https://fxsion.com)

---

**Repository**: [https://github.com/Kellytomi/Personal-Portfolio](https://github.com/Kellytomi/Personal-Portfolio)

> Built with ❤️ by Kelvin | Powered by Next.js & Vercel
