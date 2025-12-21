import Link from "next/link";
import styles from "../styles/ProjectCase.module.css";
import type { ProjectCase as ProjectCaseType } from "../lib/projects";

type ProjectCaseProps = {
  project: ProjectCaseType;
};

export default function ProjectCase({ project }: ProjectCaseProps) {
  return (
    <article className={`${styles.card} glass-panel`}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>
        <Link
          className={styles.link}
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          GitHub {"->"}
        </Link>
      </div>
      <div className={styles.body}>
        <div>
          <p className={styles.label}>Problem</p>
          <p className={styles.text}>{project.problem}</p>
        </div>
        <div>
          <p className={styles.label}>Solution</p>
          <p className={styles.text}>{project.solution}</p>
        </div>
        <div>
          <p className={styles.label}>Key Features</p>
          <ul className={styles.list}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className={styles.label}>Tech Stack</p>
          <div className={styles.stack}>
            {project.stack.map((item) => (
              <span className={styles.stackItem} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className={styles.label}>Impact</p>
          <p className={styles.text}>{project.impact}</p>
        </div>
      </div>
    </article>
  );
}
