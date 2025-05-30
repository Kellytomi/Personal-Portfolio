import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "The workflow automation solution implemented by Kelvin has transformed our operations. We have seen a 40% increase in efficiency and significant time savings across departments.",
      name: "Sarah Johnson",
      designation: "Operations Director at TechFlow Solutions",
      src: "/testimonials/sarah.jpg",
    },
    {
      quote: "The yacht website project exceeded our expectations. The real-time data integration and elegant design have significantly improved our customer engagement.",
      name: "Michael Chen",
      designation: "CEO at Marine Ventures",
      src: "/testimonials/michael.jpg",
    },
    {
      quote: "The marketing asset automation system has streamlined our content creation process. We can now generate and distribute materials in a fraction of the time.",
      name: "Emily Rodriguez",
      designation: "Marketing Manager at Growth Dynamics",
      src: "/testimonials/emily.jpg",
    },
    {
      quote: "Kelvin's expertise in Flutter development helped us create a robust subscription tracking app that our users love. The attention to detail and user experience is outstanding.",
      name: "David Thompson",
      designation: "Founder at SubTrackr",
      src: "/testimonials/david.jpg",
    },
    {
      quote: "The PandaDoc CRM integration has revolutionized our sales process. We can now generate and track proposals automatically, saving countless hours of manual work.",
      name: "Lisa Anderson",
      designation: "Sales Director at Global Solutions Inc.",
      src: "/testimonials/lisa.jpg",
    },
  ];
  
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
} 