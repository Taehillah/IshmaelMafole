import SectionHeading from "../../components/SectionHeading";
import ContactForm from "../../components/ContactForm";
import type { Metadata } from "next";
import styles from "../../styles/ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          label="Contact"
          title="Let's build something disciplined and unforgettable"
          description="Whether you need a systems partner, a product engineer, or a cinematic storyteller, I respond with clarity and structure."
        />
        <div className="row g-4">
          <div className="col-lg-5">
            <div className={`glass-panel ${styles.infoCard}`}>
              <h3 className={styles.infoTitle}>Direct Channels</h3>
              <p className="text-muted">
                I prioritize thoughtful collaboration and clear timelines. Share
                the scope, goals, and constraints, and I will respond with a
                structured plan.
              </p>
              <div className={styles.infoList}>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <p className="text-muted">hello@ishmaelmafole.dev</p>
                </div>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className="text-muted">Kroonstad, Free State, South Africa</p>
                </div>
                <div>
                  <p className={styles.infoLabel}>Availability</p>
                  <p className="text-muted">Open to remote and on-site engagements</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
