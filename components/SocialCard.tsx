import styles from "../styles/Socials.module.css";
import type { SocialLink } from "../lib/socials";

const icons: Record<string, JSX.Element> = {
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.05A9.38 9.38 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.93-1.33 2.78-1.05 2.78-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.94 8.5H3.75V20h3.19V8.5Zm-1.6-4.5a1.83 1.83 0 1 0 0 3.66 1.83 1.83 0 0 0 0-3.66ZM20.5 13.1c0-2.9-1.55-4.25-3.63-4.25-1.68 0-2.44.93-2.86 1.58V8.5H10.9c.04.92 0 11.5 0 11.5h3.1v-6.41c0-.34.03-.68.13-.93.27-.68.9-1.38 1.95-1.38 1.38 0 1.93 1.05 1.93 2.58V20h3.1v-6.9Z"
        fill="currentColor"
      />
    </svg>
  ),
  "Portfolio Website": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3C6.93 3 2.73 6.64 2.05 11.5h4.02a6.01 6.01 0 0 1 11.86 0h4.02C21.27 6.64 17.07 3 12 3Zm-6 8.5C6 16.2 8.69 20 12 20s6-3.8 6-8.5H6Zm3.5 2.5h5a2.5 2.5 0 0 1-5 0Z"
        fill="currentColor"
      />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.3l8 5 8-5V7H4Zm16 10V10.7l-8 5-8-5V17h16Z"
        fill="currentColor"
      />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.2-.5a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
        fill="currentColor"
      />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C18 6 12 6 12 6s-6 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9C2 9.9 2 12 2 12s0 2.1.4 3.8a2.7 2.7 0 0 0 1.9 1.9C6 18 12 18 12 18s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-3.8.4-3.8s0-2.1-.4-3.8Zm-11 7.1V8.7L16 12l-5.4 3.3Z"
        fill="currentColor"
      />
    </svg>
  )
};

type SocialCardProps = {
  social: SocialLink;
};

export default function SocialCard({ social }: SocialCardProps) {
  return (
    <a
      className={`${styles.card} glass-panel`}
      href={social.href}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.icon}>{icons[social.name]}</div>
      <div>
        <h3 className={styles.title}>{social.name}</h3>
        <p className={styles.handle}>{social.handle}</p>
        <p className={styles.note}>{social.note}</p>
      </div>
    </a>
  );
}
