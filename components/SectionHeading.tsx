import styles from "../styles/SectionHeading.module.css";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className={styles.wrapper}>
      <span className="badge-outline">{label}</span>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
