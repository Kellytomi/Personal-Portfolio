# Kelvin's Personal Portfolio Website

A modern, professional portfolio website for Etoma-Etoto Kelvin Odi, founder of Fxsion - a digital solutions agency specializing in workflow automation, document solutions, and digital development.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- Coming soon page with countdown timer
- 6 key pages: Home, About, Skills, Projects, Testimonials, and Contact
- Contact form with email integration
- Project showcase with visual elements
- Skills visualization with progress bars
- Client testimonials and success stories

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kelvin-portfolio.git
cd kelvin-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your configuration:
```env
# Coming Soon Mode (optional)
# Set to 'true' to enable the coming soon page, 'false' or omit to show the main site
NEXT_PUBLIC_COMING_SOON_MODE=false

# Site URL (optional, for SEO and Open Graph)
NEXT_PUBLIC_SITE_URL=https://etoma.dev

# EmailJS credentials (required for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Coming Soon Mode

The portfolio includes a beautiful coming soon page that can be enabled/disabled using an environment variable:

- **Enable**: Set `NEXT_PUBLIC_COMING_SOON_MODE=true` in your `.env.local` file
- **Disable**: Set `NEXT_PUBLIC_COMING_SOON_MODE=false` or omit the variable entirely
- **Development Tools**: Press `Shift+D` while the site is running to toggle development tools and test the coming soon mode

The coming soon page features:
- Animated countdown timer
- Email subscription form
- Social media links
- Beautiful background animations
- Responsive design

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── coming-soon/       # Coming soon page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── LaunchWrapper.tsx  # Coming soon mode wrapper
│   └── Navigation.tsx     # Navigation component
├── config/               # Configuration files
│   └── site.ts           # Site configuration
└── public/               # Static assets
    ├── projects/         # Project images
    └── testimonials/     # Testimonial images
```

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_COMING_SOON_MODE` | Enable/disable coming soon page | No | `false` |
| `NEXT_PUBLIC_SITE_URL` | Base URL for SEO and social sharing | No | `https://etoma.dev` |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID for contact form | Yes | - |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID for contact form | Yes | - |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key for contact form | Yes | - |

## Customization

1. Update the content in each page component to match your information
2. Replace images in the `public` directory with your own
3. Modify the color scheme in `tailwind.config.js`
4. Update contact information and social media links in `src/config/site.ts`
5. Add your own projects and testimonials
6. Customize the launch date in `src/config/site.ts`

## Deployment

The site can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

**For Production Deployment:**
1. Set your environment variables in your hosting platform
2. Enable coming soon mode by setting `NEXT_PUBLIC_COMING_SOON_MODE=true`
3. Deploy your site
4. When ready to launch, change the environment variable to `false` and redeploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Etoma-Etoto Kelvin Odi - [kelvinetoma95@gmail.com](mailto:kelvinetoma95@gmail.com)

Project Link: [https://github.com/yourusername/kelvin-portfolio](https://github.com/yourusername/kelvin-portfolio)
