import Link from "next/link";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import { getGalleryItems } from "../lib/gallery";
import styles from "../styles/Home.module.css";

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

export default function HomePage() {
  const galleryItems = getGalleryItems();
  const portraitMatcher = /(portrait|self|headshot|ishmael|mafole)/i;
  const portraitItem =
    galleryItems.find((item) => portraitMatcher.test(item.title) || portraitMatcher.test(item.src)) ??
    galleryItems[0];
  const featuredItems = portraitItem
    ? [portraitItem, ...galleryItems.filter((item) => item !== portraitItem).slice(0, 2)]
    : galleryItems.slice(0, 3);
  const heroImages = featuredItems.map((item, index) => ({
    ...item,
    tag: index === 0 ? "Portrait" : "Photography"
  }));

  return (
    <>
      <Hero featuredImages={heroImages} />
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Capabilities"
            title="Engineering the platforms that businesses depend on"
            description="I build software that respects operational realities -- resilient backends, thoughtful interfaces, and a commitment to security from the first commit."
          />
          <div className="row g-4">
            {highlights.map((item) => (
              <div className="col-lg-4" key={item.title}>
                <div className={`glass-panel ${styles.highlightCard}`}>
                  <h3>{item.title}</h3>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`section-sm ${styles.focusSection}`}>
        <div className="container">
          <div className={`glass-panel ${styles.focusCard}`}>
            <div>
              <p className={styles.label}>Current Focus</p>
              <h3 className={styles.focusTitle}>
                Building mission-ready systems with a cinematic sensibility.
              </h3>
            </div>
            <ul className={styles.focusList}>
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className={styles.focusLink} href="/projects">
              Explore the case studies {"->"}
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Highlights"
            title="Flagship projects that blend systems depth and human experience"
            description="Explore workforce platforms, operational dashboards, and media experiences built for scale and accountability."
          />
          <div className={styles.projectGrid}>
            <div className={`glass-panel ${styles.projectCard}`}>
              <p className={styles.projectLabel}>StaffSync</p>
              <h3>Workforce Management System</h3>
              <p className="text-muted">
                Consolidated staffing workflows for supervisors and frontline teams.
              </p>
            </div>
            <div className={`glass-panel ${styles.projectCard}`}>
              <p className={styles.projectLabel}>Travel Risk Monitor</p>
              <h3>Risk Intelligence Dashboard</h3>
              <p className="text-muted">
                Real-time situational awareness for leadership and travel teams.
              </p>
            </div>
            <div className={`glass-panel ${styles.projectCard}`}>
              <p className={styles.projectLabel}>Eulogia Graphix</p>
              <h3>Photography &amp; Videography</h3>
              <p className="text-muted">
                Visual narratives crafted for brands, teams, and communities.
              </p>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <Link className={styles.primaryButton} href="/projects">
              See all case studies
            </Link>
            <Link className={styles.secondaryButton} href="/gallery">
              Enter the gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
