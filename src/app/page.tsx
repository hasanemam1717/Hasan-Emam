import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsBar from "@/components/ProjectsBar";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <ProjectsBar></ProjectsBar>
      <SkillsCard></SkillsCard>
      <CaseStudies></CaseStudies>
      <Contact></Contact>
    </div>
  );
}
