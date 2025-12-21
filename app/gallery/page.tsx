import SectionHeading from "../../components/SectionHeading";
import GalleryMasonry from "../../components/GalleryMasonry";
import { getGalleryItems } from "../../lib/gallery";
import styles from "../../styles/GalleryPage.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery"
};

export default function GalleryPage() {
  const galleryItems = getGalleryItems();

  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          label="Gallery"
          title="Photography and videography with cinematic restraint"
          description="Monochrome frames, careful lighting, and a documentary sensibility -- crafted under Eulogia Graphix."
        />
      </div>
      <section className={`section-sm parallax-block ${styles.parallaxSection}`}>
        <div className="container">
          <GalleryMasonry items={galleryItems} />
        </div>
      </section>
      <section className={`section-sm ${styles.callout}`}>
        <div className="container">
          <div className={`glass-panel ${styles.calloutCard}`}>
            <h3>Need a visual partner for your next release?</h3>
            <p className="text-muted">
              I build visual narratives for brands, campaigns, and teams that
              value clarity, depth, and modern storytelling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
