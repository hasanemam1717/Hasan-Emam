import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsBar from "@/components/ProjectsBar";
import SkillsCard from "@/components/SkillsCard";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProjectsBar />
      <SkillsCard />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </div>
  );
}
