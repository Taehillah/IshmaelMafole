import SectionHeading from "../../components/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/About.module.css";
import homeStyles from "../../styles/Home.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
};

const highlights = [
  {
    title: "Systems-Aware Builds",
    text: "From OS fundamentals to backend workflows, every interface maps to secure, resilient infrastructure."
  },
  {
    title: "Business-Driven Outcomes",
    text: "Case studies prioritize operational clarity, compliance, and measurable impact for institutions."
  },
  {
    title: "Cinematic Visual Craft",
    text: "Eulogia Graphix delivers photography and video narratives with an engineering eye for detail."
  }
];

const focusAreas = [
  "Secure platforms and access control",
  "Full-stack development with systems rigor",
  "Data-informed design decisions",
  "Brand and visual storytelling"
];

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          label="About"
          title="A systems-aware engineer with a creative calling"
          description="Faith, discipline, and deep systems knowledge guide how I build software and visual experiences."
        />
        <div className={`glass-panel ${styles.bio}`}>
          <p className="color:white">
            I am Ishmael L. Mafole, born in Kroonstad, Free State, South Africa -- a
            servant of God grounded in purpose, humility, and disciplined growth.
            My work sits at the intersection of software engineering and creative
            storytelling, focused on delivering platforms that institutions can
            trust.
          </p>
          <p>
            With a Diploma in Information Technology (NQF Level 6), I developed a
            strong foundation across full-stack web development, operating
            systems, databases, business informatics, and security-aware system
            design. I pair that with ALX Software Engineering training in C,
            Linux, shell scripting, and systems programming, giving me an
            infrastructure-first perspective on every product I deliver.
          </p>
          <p>
            Outside of software, I document stories through photography and
            videography under Eulogia Graphix. Whether I am framing a portrait or
            architecting a web platform, the goal stays the same: solve real
            institutional and business problems with clarity, empathy, and
            craftsmanship.
          </p>
        </div>
        <div className={styles.selfieBlock}>
          <div className={`glass-panel ${styles.selfieCard}`}>
            <div className={styles.selfieHeader}>
              <p className={homeStyles.label}>Self Portraits</p>
              <h3 className={styles.selfieTitle}>
                Personal frames that capture focus and intent.
              </h3>
            </div>
            <div className={styles.selfieGrid}>
              {[
                {
                  src: "/gallery/selfie1a.png",
                  alt: "Self portrait with soft lighting"
                },
                {
                  src: "/gallery/selfie2.jpg",
                  alt: "Self portrait in studio light"
                },
                {
                  src: "/gallery/selfie3.jpg",
                  alt: "Self portrait with natural tones"
                },
                {
                  src: "/gallery/selfie4.jpg",
                  alt: "Self portrait with warm contrast"
                }
              ].map((item) => (
                <div className={styles.selfieItem} key={item.src}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, (max-width: 1200px) 30vw, 220px"
                    className={styles.selfieImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.capabilities}>
          <SectionHeading
            label="Capabilities"
            title="Engineering the platforms that businesses depend on"
            description="I build software that respects operational realities -- resilient backends, thoughtful interfaces, and a commitment to security from the first commit."
          />
          <div className="row g-4">
            {highlights.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <div className={`glass-panel ${homeStyles.highlightCard}`}>
                  <h3>{item.title}</h3>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.focusBlock}>
            <div className={`glass-panel ${homeStyles.focusCard}`}>
              <div>
                <p className={homeStyles.label}>Current Focus</p>
                <h3 className={homeStyles.focusTitle}>
                  Building mission-ready systems with a cinematic sensibility.
                </h3>
              </div>
              <ul className={homeStyles.focusList}>
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className={homeStyles.focusLink} href="/projects">
                Explore the case studies {"->"}
              </Link>
            </div>
          </div>
        </div>
        <hr className="terminal-divider" />
        <div className="row g-4">
          <div className="col-lg-6">
            <div className={`glass-panel ${styles.panel}`}>
              <h3 className={styles.panelTitle}>Education</h3>
              <div className={styles.panelBody}>
                <div>
                  <p className={styles.panelLabel}>Diploma in Information Technology -- UNISA</p>
                  <p className="text-muted">
                    Advanced Internet Programming, Database Design, OS Practice,
                    Software Project Management, GUI Programming.
                  </p>
                </div>
                <div>
                  <p className={styles.panelLabel}>ALX Software Engineering</p>
                  <p className="text-muted">
                    C, Linux, Shell, systems programming, DevOps fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`glass-panel ${styles.panel}`}>
              <h3 className={styles.panelTitle}>Skills</h3>
              <div className={styles.skillsGrid}>
                <div>
                  <p className={styles.panelLabel}>Frontend</p>
                  <p className="text-muted">HTML, CSS, JavaScript, React, Bootstrap</p>
                </div>
                <div>
                  <p className={styles.panelLabel}>Backend</p>
                  <p className="text-muted">PHP, SQL</p>
                </div>
                <div>
                  <p className={styles.panelLabel}>Systems</p>
                  <p className="text-muted">Linux, C, Shell, OS fundamentals</p>
                </div>
                <div>
                  <p className={styles.panelLabel}>Tools</p>
                  <p className="text-muted">Git, VS Code, Vim, Emacs</p>
                </div>
                <div>
                  <p className={styles.panelLabel}>Creative</p>
                  <p className="text-muted">
                    Figma, Photoshop, Lightroom, Premiere Pro, After Effects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
