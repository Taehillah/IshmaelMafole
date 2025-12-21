import SectionHeading from "../../components/SectionHeading";
import ProjectCase from "../../components/ProjectCase";
import { projects } from "../../lib/projects";
import Link from "next/link";
import homeStyles from "../../styles/Home.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects"
};

const projectHighlights = [
  {
    label: "StaffSync",
    title: "Workforce Management System",
    description: "Consolidated staffing workflows for supervisors and frontline teams."
  },
  {
    label: "Travel Risk Monitor",
    title: "Risk Intelligence Dashboard",
    description: "Real-time situational awareness for leadership and travel teams."
  },
  {
    label: "Eulogia Graphix",
    title: "Photography & Videography",
    description: "Visual narratives crafted for brands, teams, and communities."
  }
];

export default function ProjectsPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          label="Highlights"
          title="Flagship projects that blend systems depth and human experience"
          description="Explore workforce platforms, operational dashboards, and media experiences built for scale and accountability."
        />
        <div className={homeStyles.projectGrid}>
          {projectHighlights.map((item) => (
            <div className={`glass-panel ${homeStyles.projectCard}`} key={item.label}>
              <p className={homeStyles.projectLabel}>{item.label}</p>
              <h3>{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
        <div className={homeStyles.ctaRow}>
          <Link className={homeStyles.primaryButton} href="#case-studies">
            See all case studies
          </Link>
          <Link className={homeStyles.secondaryButton} href="/gallery">
            Enter the gallery
          </Link>
        </div>
        <div id="case-studies">
          <SectionHeading
            label="Case Studies"
            title="Systems-focused projects with measurable impact"
            description="Each case study is framed around the problem, the engineering approach, and the operational results."
          />
        </div>
        {projects.map((project) => (
          <ProjectCase project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
