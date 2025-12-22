import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProjectCase.module.css";
import type { ProjectCase as ProjectCaseType } from "../lib/projects";

type ProjectCaseProps = {
  project: ProjectCaseType;
};

export default function ProjectCase({ project }: ProjectCaseProps) {
  return (
    <article className={`${styles.card} glass-panel`}>
      {project.image ? (
        <div className={styles.media}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            className={styles.mediaImage}
          />
        </div>
      ) : null}
      {project.gallery && project.gallery.length > 0 ? (
        <div className={styles.mediaGrid}>
          {project.gallery.map((item) => (
            <div className={styles.mediaThumb} key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 45vw, (max-width: 1200px) 30vw, 220px"
                className={styles.mediaThumbImage}
              />
            </div>
          ))}
        </div>
      ) : null}
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
        <div>
          <p className={styles.label}>Project Status</p>
          <div className={styles.statusGrid}>
            {project.status.map((item) => (
              <div className={styles.statusItem} key={item.label}>
                <div className={styles.statusHeader}>
                  <span>{item.label}</span>
                  <span className={styles.statusValue}>{item.value}%</span>
                </div>
                <div className={styles.statusTrack} aria-hidden="true">
                  <span
                    className={styles.statusFill}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
