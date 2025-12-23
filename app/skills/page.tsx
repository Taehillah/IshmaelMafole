import SectionHeading from "../../components/SectionHeading";
import styles from "../../styles/Skills.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills"
};

const skillGroups = [
  {
    title: "Creative Suite",
    description: "Post-production, design, and visual storytelling tools.",
    skills: [
      { name: "Photoshop", level: "Great", value: 92 },
      { name: "Lightroom", level: "Great", value: 92 },
      { name: "Premiere", level: "Great", value: 90 },
      { name: "After Effects", level: "Good", value: 78 },
      { name: "Da Vinci", level: "Good", value: 76 },
      { name: "Corel Draw", level: "Great", value: 88 },
      { name: "Dreamweaver", level: "Good", value: 72 }
    ]
  },
  {
    title: "Developer Tools",
    description: "Daily build environments and code workflows.",
    skills: [
      { name: "Visual Studio", level: "Good", value: 74 },
      { name: "VSCode", level: "Good", value: 78 },
      { name: "Xcode", level: "Fair", value: 60 },
      { name: "Vim", level: "Good", value: 76 },
      { name: "Emacs", level: "Fair", value: 58 },
      { name: "Android Studio", level: "Good", value: 72 }
    ]
  },
  {
    title: "Business Tools",
    description: "Data analysis and structured reporting.",
    skills: [
      { name: "Excel", level: "Good", value: 76 },
      { name: "PowerPoint", level: "Great", value: 88 },
      { name: "Word", level: "Great", value: 88 }
    ]
  },
  {
    title: "Operating Systems",
    description: "Everyday work environments and systems fluency.",
    skills: [
      { name: "Linux", level: "Great", value: 92 },
      { name: "macOS", level: "Great", value: 88 },
      { name: "Windows", level: "Good", value: 78 }
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Software stack, creative suite, and operating systems"
          description="Focused tooling for engineering, production, and visual delivery."
        />
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <section className={`glass-panel ${styles.card}`} key={group.title}>
              <div className={styles.cardHeader}>
                <h3>{group.title}</h3>
                <p className="text-muted">{group.description}</p>
              </div>
              <div className={styles.skills}>
                {group.skills.map((skill) => (
                  <div className={styles.skill} key={skill.name}>
                    <div className={styles.skillHeader}>
                      <span>{skill.name}</span>
                      <span className={styles.level}>{skill.level}</span>
                    </div>
                    <div className={styles.track} aria-hidden="true">
                      <span
                        className={styles.fill}
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
