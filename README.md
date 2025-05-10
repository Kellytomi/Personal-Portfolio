# Fxsion Portfolio Website

A modern, professional portfolio website for Etoma-Etoto Kelvin Odi, founder of Fxsion - a digital solutions agency specializing in workflow automation, document solutions, and digital development.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
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
git clone https://github.com/yourusername/fxsion-portfolio.git
cd fxsion-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   └── Navigation.tsx     # Navigation component
└── public/               # Static assets
    ├── projects/         # Project images
    └── testimonials/     # Testimonial images
```

## Customization

1. Update the content in each page component to match your information
2. Replace images in the `public` directory with your own
3. Modify the color scheme in `tailwind.config.js`
4. Update contact information and social media links
5. Add your own projects and testimonials

## Deployment

The site can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Etoma-Etoto Kelvin Odi - [contact@fxsion.com](mailto:contact@fxsion.com)

Project Link: [https://github.com/yourusername/fxsion-portfolio](https://github.com/yourusername/fxsion-portfolio)
