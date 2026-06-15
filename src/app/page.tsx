import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
// import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectsBar from "@/components/ProjectsBar";
import SkillsCard from "@/components/SkillsCard";
// import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <StatsCounter /> */}
      <ProjectsBar />
      {/* <Experience /> */}
      <SkillsCard />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </div>
  );
}
