<div align="center">
  <br />
  <h1>✨ Emam's Portfolio ✨</h1>
  <p>
    <strong>A modern, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS</strong>
  </p>
  <br/>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer" alt="Framer Motion" />
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Pages & Sections](#-pages--sections)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🌟 Overview

A full-featured portfolio website showcasing my work as a **Full-Stack Web Developer**. Built with performance, accessibility, and aesthetics in mind — featuring smooth animations, a case study section, blog, project showcase, and a fully themed dark/light mode.

### ✨ Highlights

- ⚡ **Blazing fast** — Built on Next.js 15 with App Router
- 🌓 **Dark / Light mode** — Theme toggle with system preference detection
- 🎬 **Smooth animations** — Framer Motion page transitions and scroll effects
- 📱 **Fully responsive** — Mobile-first design that works on all devices
- 📝 **Case Studies** — Deep dive into project challenges and results
- 📰 **Blog** — Share your thoughts and tutorials
- 📄 **Resume page** — Downloadable CV
- 📞 **Schedule a Call** — Interactive date/time booking flow

---

## 🛠 Tech Stack

| Category       | Technology                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| **Framework**  | [Next.js 15](https://nextjs.org/) (App Router)                             |
| **Language**   | [TypeScript](https://www.typescriptlang.org/)                              |
| **Styling**    | [Tailwind CSS 3](https://tailwindcss.com/)                                 |
| **Animation**  | [Framer Motion](https://www.framer.com/motion/)                            |
| **Icons**      | [React Icons](https://react-icons.github.io/react-icons/) (Hi, Fi, Si, Fa) |
| **Fonts**      | Geist (via `next/font`)                                                    |
| **Data Fetch** | SWR                                                                        |
| **PDF**        | react-to-pdf, react-to-print                                               |

---

## 🎯 Features

### 🎨 UI / UX

- **Dark & Light Mode** — Manual toggle with `localStorage` persistence and system preference fallback
- **Glassmorphism Design** — Frosted glass cards with backdrop blur
- **Gradient Accents** — Blue-to-purple gradient themes throughout
- **Staggered Animations** — Scroll-triggered entrance animations
- **Smooth Navigation** — Active link pill indicator with spring animation

### 📄 Content Sections

- **Hero** — Animated introduction with profile image, stats, and CTA buttons
- **Projects** — Project cards with tech stack badges
- **Skills** — Interactive skill cards with hover tooltips and progress indicators
- **Case Studies** — Tab-based deep dives into project challenges, approach, and results
- **Contact** — Two-column layout with benefits and contact form
- **Schedule a Call** — Multi-step booking flow with calendar, time slots, and confirmation
- **Blog** — Blog listing and individual post pages
- **Resume** — Professional resume/CV page
- **Services** — Services offerings page

### ⚙️ Technical

- Next.js 15 App Router (file-based routing)
- Server Components + Client Components architecture
- Responsive mobile-first design
- Accessible navigation with ARIA labels
- SEO metadata via `next/metadata`

---

## 📁 Project Structure

```
my-portfolio-client/
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/              # Admin dashboard page
│   │   ├── blog/               # Blog listing & [blogid] pages
│   │   ├── call/               # Schedule a call page
│   │   ├── contact/            # Contact page
│   │   ├── login/              # Login page
│   │   ├── projects/           # Projects listing & [projectId] pages
│   │   ├── resume/             # Resume page
│   │   ├── services/           # Services page
│   │   ├── globals.css         # Global styles & theme variables
│   │   ├── layout.tsx          # Root layout (Navbar, Footer, ThemeProvider)
│   │   ├── loading.tsx         # Loading UI
│   │   └── page.tsx            # Home page
│   ├── assets/                 # Images and static files
│   ├── components/             # Reusable React components
│   │   ├── About.tsx           # About section with tech chart & skills
│   │   ├── BlogCard.tsx        # Blog post card
│   │   ├── CaseStudies.tsx     # Tab-based project deep dives
│   │   ├── Contact.tsx         # Contact form with benefits
│   │   ├── ContactCard.tsx     # Contact card component
│   │   ├── Dropdown.tsx        # Dropdown menu
│   │   ├── Footer.tsx          # 4-column footer
│   │   ├── Hero.tsx            # Animated hero section
│   │   ├── Navbar.tsx          # Navigation with theme toggle
│   │   ├── ProjectCard.tsx     # Project display card
│   │   ├── ProjectsBar.tsx     # Projects grid section
│   │   ├── ScheduleCall.tsx    # Multi-step booking flow
│   │   ├── SkillsCard.tsx      # Skills grid with progress
│   │   ├── Spinner.tsx         # Loading spinner
│   │   └── ThemeProvider.tsx   # Dark/light mode context
│   ├── data/
│   │   └── projects.ts         # Project data & types
│   └── utils/
│       ├── getCurrentUser.ts
│       └── actions/
│           └── registerUser.ts
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/hasan-emam/my-portfolio-client.git
cd my-portfolio-client

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📜 Available Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## 📄 Pages & Sections

| Route            | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `/`              | Home — Hero, Projects, Skills, Case Studies, Contact |
| `/projects`      | All projects listing                                 |
| `/projects/[id]` | Individual project detail                            |
| `/blog`          | Blog listing                                         |
| `/blog/[blogid]` | Single blog post                                     |
| `/services`      | Services offerings                                   |
| `/resume`        | Resume / CV page                                     |
| `/contact`       | Contact page                                         |
| `/call`          | Schedule a one-to-one call                           |
| `/login`         | Login page                                           |
| `/admin`         | Admin dashboard                                      |

---

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #f8fafc; /* Light bg */
  --foreground: #0f172a; /* Light text */
}

html.dark {
  --background: #000000; /* Dark bg */
  --foreground: #f8fafc; /* Dark text */
}
```

### Content

- **Projects** — Edit `src/data/projects.ts`
- **Case Studies** — Edit `src/components/CaseStudies.tsx`
- **Navbar links** — Edit the `navLinks` array in `src/components/Navbar.tsx`
- **Social links** — Edit `src/components/Footer.tsx`
- **Skills** — Edit `src/components/SkillsCard.tsx`

### Assets

Replace images in `src/assets/` with your own (keep the same filenames or update imports).

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/):

```bash
npm run build
```

Connect your GitHub repository directly on [vercel.com](https://vercel.com/) for automatic deployments.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/hasan-emam">Hasan Emam</a></sub>
  <br />
  <sub>Using Next.js, Tailwind CSS & Framer Motion</sub>
</div>
