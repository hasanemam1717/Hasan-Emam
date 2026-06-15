<div align="center">
  <br />
  <h1>✨ Emam's Portfolio ✨</h1>
  <p>
    <strong>A modern, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS</strong>
  </p>
  <br/>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Nodemailer-9.0-22BCBA?style=flat-square&logo=nodemailer" alt="Nodemailer" />
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Pages & Sections](#-pages--sections)
- [API Routes](#-api-routes)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)

---

## 🌟 Overview

A full-featured portfolio website showcasing my work as a **Full-Stack Web Developer**. Built with performance, accessibility, and aesthetics in mind — featuring smooth animations, a project showcase, blog, contact form with real email delivery, scheduling system, and a downloadable PDF resume.

### ✨ Highlights

- ⚡ **Blazing fast** — Built on Next.js 16 with App Router
- 🌓 **Dark mode** — Sleek dark theme with glassmorphism design
- 🎬 **Smooth animations** — Framer Motion scroll effects and transitions
- 📱 **Fully responsive** — Mobile-first design
- 📧 **Live contact form** — Sends emails via Nodemailer (SMTP)
- 📅 **Schedule a call** — Interactive calendar booking with email notifications
- 📄 **PDF Resume** — Downloadable, professionally formatted resume with photo
- 💬 **Telegram widget** — Quick chat with quick replies

---

## 🛠 Tech Stack

| Category      | Technology                                                |
| ------------- | --------------------------------------------------------- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router)            |
| **Language**  | [TypeScript](https://www.typescriptlang.org/)             |
| **Styling**   | [Tailwind CSS 3](https://tailwindcss.com/)                |
| **Animation** | [Framer Motion](https://www.framer.com/motion/)           |
| **Icons**     | [React Icons](https://react-icons.github.io/react-icons/) |
| **Email**     | [Nodemailer](https://nodemailer.com/) (SMTP)              |
| **PDF**       | [jsPDF](https://github.com/parallax/jsPDF)                |
| **Toast**     | [react-hot-toast](https://react-hot-toast.com/)           |

---

## 🎯 Features

### 🎨 UI / UX

- **Dark Theme** — Gradient backgrounds with glassmorphism cards
- **Frosted Glass Cards** — Backdrop blur effects throughout
- **Gradient Accents** — Blue-to-purple gradient themes
- **Staggered Animations** — Scroll-triggered entrance animations
- **Floating Actions** — WhatsApp & Telegram quick-access buttons
- **Scroll to Top** — Floating scroll-to-top button
- **Copy to Clipboard** — One-click copy for email/phone

### 📄 Content Sections

- **Hero** — Animated intro with profile image, social links, and stats
- **Projects** — Grid of project cards with tech badges, links, and detail pages
- **Skills** — Interactive skill cards (in SkillsCard component)
- **Experience** — Timeline-based professional experience
- **Testimonials** — Client/peer testimonials carousel
- **Contact** — Two-column form with benefits + Nodemailer email delivery
- **Schedule a Call** — Multi-step booking with calendar, time slots, and confirmation
- **Blog** — Blog listing and individual post pages
- **Resume** — Professional resume page with PDF download (includes photo, tech stack, projects, education)
- **Services** — Services offerings page
- **Case Studies** — Deep-dive project analysis

### ⚙️ Technical

- Next.js 16 App Router (file-based routing)
- Server Components + Client Components architecture
- Responsive mobile-first design
- REST API routes for contact & scheduling
- SMTP email integration via Nodemailer
- Toast notifications for form feedback
- Dynamic PDF resume generation with jsPDF

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hasanemam1717/my-portfolio-client.git
cd my-portfolio-client

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your SMTP credentials

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# SMTP Configuration (Gmail, Outlook, SendGrid, etc.)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Where to receive contact form & schedule notifications
CONTACT_EMAIL=your-email@gmail.com
```

> **For Gmail:** Enable 2FA, then generate an [App Password](https://support.google.com/accounts/answer/185833).

---

## 📜 Available Scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start development server on :3000 |
| `npm run build` | Build for production              |
| `npm start`     | Start production server           |
| `npm run lint`  | Run ESLint                        |

---

## 🗺 Pages & Sections

| Route            | Description                       |
| ---------------- | --------------------------------- |
| `/`              | Home page (Hero, Projects, etc.)  |
| `/projects`      | All projects grid                 |
| `/projects/[id]` | Individual project detail         |
| `/blog`          | Blog listing                      |
| `/blog/[id]`     | Individual blog post              |
| `/resume`        | Professional resume with download |
| `/contact`       | Contact form page                 |
| `/services`      | Services offerings                |
| `/call`          | Schedule a one-to-one call        |
| `/admin`         | Admin panel                       |
| `/login`         | Login page                        |

---

## 🌐 API Routes

| Route           | Method | Description                     |
| --------------- | ------ | ------------------------------- |
| `/api/contact`  | POST   | Sends contact form email        |
| `/api/schedule` | POST   | Sends call booking notification |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts     # Contact form email API
│   │   └── schedule/route.ts    # Call schedule email API
│   ├── admin/page.tsx
│   ├── blog/
│   ├── call/page.tsx
│   ├── contact/page.tsx
│   ├── login/page.tsx
│   ├── projects/
│   ├── resume/
│   │   ├── page.tsx             # Resume page
│   │   └── resumeDownloader.tsx # PDF generator
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx               # Root layout with Toaster
│   ├── loading.tsx
│   └── page.tsx                 # Home page
├── assets/                      # Images & static assets
├── components/
│   ├── BlogCard.tsx
│   ├── CaseStudies.tsx
│   ├── Contact.tsx
│   ├── ContactCard.tsx
│   ├── Dropdown.tsx
│   ├── Experience.tsx
│   ├── FloatingActions.tsx      # WhatsApp/Telegram/Scroll-to-top
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectsBar.tsx
│   ├── ScheduleCall.tsx
│   ├── ScrollToTop.tsx
│   ├── SkillsCard.tsx
│   ├── Spinner.tsx
│   ├── StatsCounter.tsx
│   ├── TelegramWidget.tsx       # Telegram quick-chat widget
│   ├── Testimonials.tsx
│   └── ThemeProvider.tsx
├── data/
│   └── projects.ts              # Project data
└── utils/
    ├── getCurrentUser.ts
    └── actions/registerUser.ts
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
```

Or connect your GitHub repo directly via [vercel.com/new](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hasanemam1717/my-portfolio-client)

### Manual Build

```bash
npm run build
npm start
```

---

<div align="center">
  <p>Built with ❤️ by <strong>Hasan Emam</strong></p>
</div>

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
