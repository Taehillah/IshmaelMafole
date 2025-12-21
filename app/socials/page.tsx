import SectionHeading from "../../components/SectionHeading";
import SocialCard from "../../components/SocialCard";
import { socials } from "../../lib/socials";
import styles from "../../styles/Socials.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials"
};

export default function SocialsPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          label="Online Presence"
          title="Channels for engineering, research, and visual work"
          description="Follow along for system builds, creative releases, and professional updates."
        />
        <div className={styles.grid}>
          {socials.map((social) => (
            <SocialCard key={social.name} social={social} />
          ))}
        </div>
      </div>
    </div>
  );
}
