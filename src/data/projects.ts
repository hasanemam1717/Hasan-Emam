import carProject from "../assets/searchbar.png";
import carProject2 from "../assets/Screenshot from 2026-06-08 11-15-03.png";
import portfolio from "../assets/Pasted image.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  src: StaticImageData;
  link: string;
  gitLink: string;
  devStack: string[];
  features: string[];
  category: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-digital-products",
    title: "E-commerce Digital Products",
    description:
      "A robust e-commerce platform for selling digital products with secure payments and instant delivery.",
    longDescription:
      "Built a full-featured digital marketplace with user authentication, product management, shopping cart, Stripe payment integration, and automated digital delivery. Features include admin dashboard, order tracking, and responsive design.",
    src: carProject,
    link: "https://car-shop-client-pi.vercel.app/",
    gitLink: "https://github.com/hasanemam1717/car-shop-client",
    devStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Next.js",
      "Stripe",
    ],
    features: [
      "User authentication & authorization",
      "Product management dashboard",
      "Shopping cart & checkout flow",
      "Stripe payment integration",
      "Automated digital delivery",
      "Order tracking & history",
    ],
    category: "Full-Stack",
    year: "2025",
  },
  {
    id: "elearning-platform",
    title: "E-learning Platform",
    description:
      "An interactive platform for online education with course management and student tracking.",
    longDescription:
      "Developed a comprehensive learning management system featuring video courses, progress tracking, quizzes, and certification. Instructors can create and manage content while students enjoy a seamless learning experience.",
    src: carProject2,
    link: "https://car-store-client-seven.vercel.app",
    gitLink: "#",
    devStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Next.js",
      "Cloudinary",
    ],
    features: [
      "Course creation & management",
      "Video streaming & progress tracking",
      "Interactive quizzes & assessments",
      "Student & instructor dashboards",
      "Certificate generation",
      "Discussion forums",
    ],
    category: "Full-Stack",
    year: "2024",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio showcase built with Next.js and Tailwind CSS.",
    longDescription:
      "Designed and developed a personal portfolio website with smooth animations, dark/light mode, contact form, and blog integration. Built with performance and SEO best practices in mind.",
    src: portfolio,
    link: "https://my-portfolio-client-cyan.vercel.app/",
    gitLink: "https://github.com/hasanemam1717/my-portfolio-client",
    devStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB",
    ],
    features: [
      "Responsive design (mobile-first)",
      "Dark/light mode toggle",
      "Smooth page transitions",
      "Blog with CMS integration",
      "Contact form with email",
      "SEO optimized",
    ],
    category: "Frontend",
    year: "2024",
  },
];
