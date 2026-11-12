import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "80px 20px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Ayenew Assefa</h1>
      <h2 style={{ color: "#10b981", fontSize: "24px", marginBottom: "30px" }}>
        Backend & QA Engineer | Java, Spring Boot, Next.js
      </h2>
      
      <p style={{ lineHeight: "1.8", color: "#a1a1aa", fontSize: "18px", marginBottom: "40px" }}>
        Information Science graduate with hands-on experience building enterprise-grade 
        microservices using Java, Spring Boot, and cloud-native technologies. Currently 
        testing the Unicash payment platform at Atlas Computer Technology. Passionate about 
        clean code, system design, and solving real-world problems.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link href="/projects" style={{ 
          padding: "12px 24px", 
          backgroundColor: "#10b981", 
          color: "#000", 
          textDecoration: "none", 
          borderRadius: "8px",
          fontWeight: "bold"
        }}>
          View My Projects
        </Link>
        <a href="https://github.com/ayenewassefa/" target="_blank" rel="noopener noreferrer" style={{ 
          padding: "12px 24px", 
          border: "1px solid #10b981", 
          color: "#10b981", 
          textDecoration: "none", 
          borderRadius: "8px",
          fontWeight: "bold"
        }}>
          GitHub Profile
        </a>
      </div>
    </main>
  );
}