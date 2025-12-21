import SectionHeading from "../../components/SectionHeading";
import ProjectCase from "../../components/ProjectCase";
import { projects } from "../../lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          label="Case Studies"
          title="Systems-focused projects with measurable impact"
          description="Each case study is framed around the problem, the engineering approach, and the operational results."
        />
        {projects.map((project) => (
          <ProjectCase project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
