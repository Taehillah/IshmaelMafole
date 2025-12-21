import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section">
      <div className="container text-center">
        <p className="badge-outline">404</p>
        <h1 className="matrix-text" style={{ fontSize: "2.4rem" }}>
          Signal Lost
        </h1>
        <p className="text-muted">
          The route you requested is offline. Return to the main console.
        </p>
        <Link href="/" className="text-decoration-none">
          Back to home {"->"}
        </Link>
      </div>
    </div>
  );
}
