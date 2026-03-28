import Link from "next/link";
import { Topbar } from "@/components/Topbar";

export default function NotFound() {
  return (
    <>
      <Topbar />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 56px)", gap: 16, padding: 24 }}>
        <div style={{ fontSize: 80 }}>📺</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)" }}>Page not found</h1>
        <p style={{ fontSize: 14, color: "var(--dim)", textAlign: "center", maxWidth: 400 }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" style={{ background: "var(--red)", color: "#fff", padding: "10px 24px", borderRadius: 20, fontSize: 14, fontWeight: 600, textDecoration: "none", marginTop: 8 }}>
          Go to Home
        </Link>
      </main>
    </>
  );
}
