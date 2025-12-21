import SectionHeading from "../../components/SectionHeading";
import styles from "../../styles/About.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
};

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
          <p>
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
