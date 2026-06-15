"use client";

import jsPDF from "jspdf";
import { HiDownload } from "react-icons/hi";
import { projects } from "@/data/projects";
import dp from "@/assets/365949_copy-removebg-preview.png";

// ── Resume Data ──
const resumeData = {
  name: "Hasan Emam",
  title: "Full-Stack Web Developer",
  email: "hasanemam1717@gmail.com",
  phone: "01717680772",
  linkedin: "www.linkedin.com/in/hasanemam",
  github: "https://github.com/hasanemam1717",
  portfolio: "https://my-portfolio-client-cyan.vercel.app/",
  education: [
    {
      degree: "BBA in Marketing",
      institution: "Govt. Azizul Haque College, Bogura",
      period: "2023 - Present",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Ahmed Uddin Shah Shishu Niketan School & College",
      period: "2021 - 2023",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Burail Model School & College",
      period: "2019 - 2021",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Prisma", "Mongoose"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "Vercel", "Netlify"],
    },
  ],
};

// ── Colors ──
const C = {
  primary: [0, 51, 102] as const, // Navy Blue (মূল রঙ)
  primaryDark: [0, 38, 77] as const, // আরও গাঢ় Navy
  textDark: [20, 20, 20] as const, // শিরোনাম টেক্সট
  textBody: [45, 45, 45] as const, // বডি টেক্সট
  textMuted: [90, 90, 90] as const, // হালকা টেক্সট
  textLight: [140, 140, 140] as const, // লাইট টেক্সট
  border: [210, 210, 215] as const, // হালকা বর্ডার
  white: [255, 255, 255] as const, // ব্যাকগ্রাউন্ড
};

export default function ResumeDownloader() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pw = doc.internal.pageSize.getWidth();
    const ph = doc.internal.pageSize.getHeight();
    const m = 18;
    const cw = pw - m * 2;
    let y = m;

    // ── Helper ──
    const addSectionTitle = (title: string) => {
      y += 3;
      doc.setFillColor(...C.primary);
      doc.rect(m, y, 2.5, 10, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...C.primaryDark);
      doc.text(title.toUpperCase(), m + 7, y + 7.5);
      y += 12;
      doc.setDrawColor(...C.border);
      doc.setLineWidth(0.3);
      doc.line(m, y, pw - m, y);
      y += 4;
    };

    // ── Load image and generate PDF ──
    const img = new Image();
    img.src = dp.src;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      // Convert image to base64 via canvas
      const canvas = document.createElement("canvas");
      const size = Math.min(img.width, img.height);
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;

      // Circular clip
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Crop from the image — shift upward to capture more of the face
      const cropY = (img.height - size) * 0.25; // 25% from top instead of center
      ctx.drawImage(img, 0, cropY, size, size, 0, 0, size, size);
      const imgData = canvas.toDataURL("image/png");

      // ═══════════════════════════════════════════
      // HEADER — with photo
      // ═══════════════════════════════════════════
      doc.setFillColor(...C.primary);
      doc.rect(0, 0, pw, 42, "F");

      // Photo — circular on left
      const photoSize = 28;
      const photoX = m + 2;
      const photoY = 7;
      doc.addImage(imgData, "PNG", photoX, photoY, photoSize, photoSize);

      // Name & title — right of photo
      const textStartX = photoX + photoSize + 10;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(...C.white);
      doc.text(resumeData.name.toUpperCase(), textStartX, 18);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(200, 220, 255);
      doc.text(resumeData.title, textStartX, 27);

      // Contact — right side
      doc.setFontSize(7);
      doc.setTextColor(200, 220, 255);
      const contactStr = `${resumeData.email}  |  ${resumeData.phone}`;
      doc.text(contactStr, pw - m - doc.getTextWidth(contactStr), 16);
      doc.text(
        resumeData.linkedin,
        pw - m - doc.getTextWidth(resumeData.linkedin),
        23,
      );
      doc.text(
        resumeData.github,
        pw - m - doc.getTextWidth(resumeData.github),
        30,
      );

      y = 50;

      // ═══════════════════════════════════════════
      // TECH STACK
      // ═══════════════════════════════════════════
      addSectionTitle("Tech Stack");

      const colW = cw / 2 - 6;
      let maxColY = y;

      resumeData.techStack.forEach((group, idx) => {
        const col = idx % 2;
        const colX = m + col * (colW + 10);
        let cy = y;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(...C.primaryDark);
        doc.text(group.category, colX, cy);
        cy += 4.5;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(...C.textBody);
        let lineX = colX;
        const maxX = colX + colW;

        group.items.forEach((skill) => {
          const textW = doc.getTextWidth(skill);
          const tagW = textW + 4;
          if (lineX + tagW > maxX) {
            cy += 4.5;
            lineX = colX;
          }
          doc.setFillColor(240, 244, 255);
          doc.roundedRect(lineX, cy - 2, tagW, 4.5, 1, 1, "F");
          doc.setDrawColor(...C.border);
          doc.roundedRect(lineX, cy - 2, tagW, 4.5, 1, 1, "S");
          doc.text(skill, lineX + 2, cy + 1);
          lineX += tagW + 2.5;
        });

        cy += 6;
        if (col === 1 || idx === resumeData.techStack.length - 1) {
          y = Math.max(cy, maxColY);
        } else {
          maxColY = Math.max(maxColY, cy);
        }
      });

      y += 2;

      // ═══════════════════════════════════════════
      // PROJECTS
      // ═══════════════════════════════════════════
      addSectionTitle("Projects");

      projects.forEach((proj) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(...C.textDark);
        doc.text(proj.title, m, y);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(...C.textLight);
        doc.text(proj.year, pw - m - doc.getTextWidth(proj.year), y);
        y += 4;

        doc.setFont("helvetica", "italic");
        doc.setFontSize(8);
        doc.setTextColor(...C.primary);
        doc.text(proj.category, m, y);
        y += 4.5;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(...C.textBody);
        const descLines = doc.splitTextToSize(proj.description, cw - 8);
        descLines.forEach((line: string) => {
          doc.text("•  " + line, m + 2, y);
          y += 4.2;
        });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7);
        doc.setTextColor(...C.textMuted);
        const techStr = `Stack: ${proj.devStack.slice(0, 4).join(", ")}`;
        doc.text(techStr, m + 6, y);
        y += 4;

        const links: string[] = [];
        if (proj.gitLink && proj.gitLink !== "#")
          links.push(`Code: ${proj.gitLink}`);
        if (proj.link) links.push(`Live: ${proj.link}`);
        if (links.length > 0) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(7);
          doc.setTextColor(...C.primary);
          doc.text(links.join("  |  "), m + 6, y);
          y += 4.5;
        }

        y += 1.5;
      });

      // ═══════════════════════════════════════════
      // EDUCATION
      // ═══════════════════════════════════════════
      addSectionTitle("Education");

      resumeData.education.forEach((edu) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(...C.textDark);
        doc.text(edu.degree, m, y);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(...C.textLight);
        doc.text(edu.period, pw - m - doc.getTextWidth(edu.period), y);
        y += 4.5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(...C.textMuted);
        doc.text(edu.institution, m, y);
        y += 6;
      });

      // ── Footer ──
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(...C.textLight);
      const footerTxt = `GitHub: ${resumeData.github}  |  Portfolio: ${resumeData.portfolio}`;
      doc.text(footerTxt, m, ph - 10);

      // ── Save ──
      doc.save("Hasan_Emam_Resume.pdf");
    };

    // Fallback if image fails to load
    img.onerror = () => {
      generateWithoutPhoto(doc, pw, ph, m, cw);
    };
  };

  // Fallback PDF generation without photo
  const generateWithoutPhoto = (
    doc: jsPDF,
    pw: number,
    ph: number,
    m: number,
    cw: number,
  ) => {
    let y = m;

    const addSectionTitle = (title: string) => {
      y += 3;
      doc.setFillColor(...C.primary);
      doc.rect(m, y, 2.5, 10, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...C.primaryDark);
      doc.text(title.toUpperCase(), m + 7, y + 7.5);
      y += 12;
      doc.setDrawColor(...C.border);
      doc.setLineWidth(0.3);
      doc.line(m, y, pw - m, y);
      y += 4;
    };

    // Header
    doc.setFillColor(...C.primary);
    doc.rect(0, 0, pw, 36, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(...C.white);
    doc.text(resumeData.name.toUpperCase(), m, 16);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(200, 220, 255);
    doc.text(resumeData.title, m, 24);

    doc.setFontSize(7.5);
    doc.setTextColor(200, 220, 255);
    const contactStr = `${resumeData.email}  |  ${resumeData.phone}  |  ${resumeData.linkedin}`;
    doc.text(contactStr, pw - m - doc.getTextWidth(contactStr), 16);
    doc.text(
      resumeData.github,
      pw - m - doc.getTextWidth(resumeData.github),
      24,
    );
    y = 42;

    // Tech Stack
    addSectionTitle("Tech Stack");
    const colW = cw / 2 - 6;
    let maxColY = y;
    resumeData.techStack.forEach((group, idx) => {
      const col = idx % 2;
      const colX = m + col * (colW + 10);
      let cy = y;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...C.primaryDark);
      doc.text(group.category, colX, cy);
      cy += 4.5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(...C.textBody);
      let lineX = colX;
      const maxX = colX + colW;
      group.items.forEach((skill) => {
        const textW = doc.getTextWidth(skill);
        const tagW = textW + 4;
        if (lineX + tagW > maxX) {
          cy += 4.5;
          lineX = colX;
        }
        doc.setFillColor(240, 244, 255);
        doc.roundedRect(lineX, cy - 2, tagW, 4.5, 1, 1, "F");
        doc.setDrawColor(...C.border);
        doc.roundedRect(lineX, cy - 2, tagW, 4.5, 1, 1, "S");
        doc.text(skill, lineX + 2, cy + 1);
        lineX += tagW + 2.5;
      });
      cy += 6;
      if (col === 1 || idx === resumeData.techStack.length - 1) {
        y = Math.max(cy, maxColY);
      } else {
        maxColY = Math.max(maxColY, cy);
      }
    });
    y += 2;

    // Projects
    addSectionTitle("Projects");
    projects.forEach((proj) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(...C.textDark);
      doc.text(proj.title, m, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...C.textLight);
      doc.text(proj.year, pw - m - doc.getTextWidth(proj.year), y);
      y += 4;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(...C.primary);
      doc.text(proj.category, m, y);
      y += 4.5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...C.textBody);
      const descLines = doc.splitTextToSize(proj.description, cw - 8);
      descLines.forEach((line: string) => {
        doc.text("•  " + line, m + 2, y);
        y += 4.2;
      });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(...C.textMuted);
      doc.text(`Stack: ${proj.devStack.slice(0, 4).join(", ")}`, m + 6, y);
      y += 4;
      const links: string[] = [];
      if (proj.gitLink && proj.gitLink !== "#")
        links.push(`Code: ${proj.gitLink}`);
      if (proj.link) links.push(`Live: ${proj.link}`);
      if (links.length > 0) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7);
        doc.setTextColor(...C.primary);
        doc.text(links.join("  |  "), m + 6, y);
        y += 4.5;
      }
      y += 1.5;
    });

    // Education
    addSectionTitle("Education");
    resumeData.education.forEach((edu) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(...C.textDark);
      doc.text(edu.degree, m, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...C.textLight);
      doc.text(edu.period, pw - m - doc.getTextWidth(edu.period), y);
      y += 4.5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...C.textMuted);
      doc.text(edu.institution, m, y);
      y += 6;
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...C.textLight);
    doc.text(
      `GitHub: ${resumeData.github}  |  Portfolio: ${resumeData.portfolio}`,
      m,
      ph - 10,
    );
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
