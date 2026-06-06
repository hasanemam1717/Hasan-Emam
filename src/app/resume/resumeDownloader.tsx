"use client";

import jsPDF from "jspdf";
import { HiDownload } from "react-icons/hi";

export default function ResumeDownloader() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    // ── Helper functions ──
    const addSectionTitle = (title: string) => {
      y += 5;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(0, 90, 200);
      doc.text(title, margin, y);
      y += 2;
      doc.setDrawColor(0, 90, 200);
      doc.setLineWidth(0.7);
      doc.line(margin, y, pageWidth - margin, y);
      y += 6;
    };

    const addBoldLabel = (label: string, value: string) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(40, 40, 40);
      const labelW = doc.getTextWidth(label);
      doc.text(label, margin, y);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      doc.text(value, margin + labelW + 1, y);
      y += 5.5;
    };

    const addBullet = (text: string, fontSize = 10) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(fontSize);
      doc.setTextColor(60, 60, 60);
      const lines = doc.splitTextToSize(text, contentWidth - 8);
      lines.forEach((line: string, i: number) => {
        if (i === 0) {
          doc.text("• " + line, margin + 3, y);
        } else {
          doc.text("  " + line, margin + 3, y);
        }
        y += fontSize * 0.5;
      });
      y += 1;
    };

    const addProjectTitle = (title: string, tech: string) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(30, 30, 30);
      doc.text(title, margin, y);
      y += 5;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9.5);
      doc.setTextColor(100, 100, 100);
      doc.text("Technologies Used: " + tech, margin, y);
      y += 5;
    };

    // ═══════════════════════════════════════════
    // HEADER
    // ═══════════════════════════════════════════
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(20, 20, 20);
    doc.text("HASAN EMAM", margin, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text("Gaibandha, Rangpur, Dhaka, Bangladesh", margin, y);
    y += 6;

    doc.setFontSize(9.5);
    doc.setTextColor(60, 60, 60);
    const contactText =
      "Email: hasanimam0854@gmail.com  |  Phone: 01717680772  |  LinkedIn: www.linkedin.com/in/hasanemam";
    doc.text(contactText, margin, y);
    y += 5;
    doc.text(
      "GitHub: https://github.com/hasanemam1717  |  Portfolio: https://porifolio-eta.vercel.app",
      margin,
      y,
    );
    y += 9;

    // ── Divider ──
    doc.setDrawColor(0, 90, 200);
    doc.setLineWidth(0.8);
    doc.line(margin, y, pageWidth - margin, y);
    y += 7;

    // ═══════════════════════════════════════════
    // TECHNICAL SKILLS
    // ═══════════════════════════════════════════
    addSectionTitle("Technical Skills");
    addBoldLabel(
      "Frontend: ",
      "HTML5, CSS3, JavaScript (ES6+), React.js, Redux, Tailwind CSS, Next.js",
    );
    addBoldLabel("Backend: ", "Node.js, Express.js, MongoDB, Mongoose");
    addBoldLabel("Languages: ", "JavaScript, TypeScript");
    addBoldLabel("Tools & Libraries: ", "Git, GitHub, Postman, npm/yarn, Vite");
    addBoldLabel("Database: ", "MongoDB, Mongoose ODM");
    addBoldLabel(
      "Other: ",
      "RESTful APIs, Responsive Design, Agile Methodology, Debugging",
    );

    // ═══════════════════════════════════════════
    // PROJECTS
    // ═══════════════════════════════════════════
    addSectionTitle("Projects");

    addProjectTitle(
      "1. E-Commerce Web Application",
      "React, Redux, Node.js, Express.js, MongoDB, Tailwind CSS",
    );
    addBullet(
      "Developed a full-stack e-commerce platform with user authentication, product management, and cart functionality.",
    );
    addBullet(
      "Integrated RESTful APIs for seamless communication between frontend and backend.",
    );
    addBullet(
      "Implemented Redux for state management and Tailwind CSS for responsive design.",
    );
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(0, 90, 200);
    doc.text(
      "GitHub: https://github.com/hasanemam1717/next-mart-client",
      margin + 3,
      y,
    );
    y += 6;

    addProjectTitle(
      "2. Blogging Platform",
      "Next.js, TypeScript, MongoDB, Mongoose, Tailwind CSS",
    );
    addBullet(
      "Built a dynamic blogging platform with server-side rendering (SSR) using Next.js.",
    );
    addBullet(
      "Utilized TypeScript for type safety and Mongoose for database schema design.",
    );
    addBullet("Designed a clean and responsive UI using Tailwind CSS.");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(0, 90, 200);
    doc.text(
      "GitHub: https://github.com/hasanemam1717/Blog-backend",
      margin + 3,
      y,
    );
    y += 6;

    // ═══════════════════════════════════════════
    // EDUCATION
    // ═══════════════════════════════════════════
    addSectionTitle("Education");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(40, 40, 40);
    doc.text("BBA Honours 1st Year, Department of Marketing", margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(
      "Bogura Azizul Haque College, Bogura, Bangladesh  |  2023 – 2024",
      margin,
      y,
    );
    y += 5;
    doc.setFontSize(9.5);
    doc.setTextColor(100, 100, 100);
    doc.text(
      "Relevant Coursework: Web Development, Data Structures, Algorithms, Database Management",
      margin,
      y,
    );
    y += 6;

    // ═══════════════════════════════════════════
    // CERTIFICATIONS
    // ═══════════════════════════════════════════
    addSectionTitle("Certifications");
    addBullet(
      "Full-Stack Web Development Certification \u2013 Programming Hero",
      10,
    );
    addBullet("React and Redux Certification \u2013 Programming Hero", 10);
    addBullet("MongoDB for Developers \u2013 Programming Hero", 10);

    // ── Footer ──
    y = doc.internal.pageSize.getHeight() - 15;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(160, 160, 160);
    doc.text("Generated from hasanemam1717.github.io", margin, y);

    // ── Save ──
    doc.save("Hasan_Emam_Resume.pdf");
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all duration-300"
    >
      <HiDownload size={18} />
      Download PDF
    </button>
  );
}
