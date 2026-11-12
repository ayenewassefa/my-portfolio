export default function ContactPage() {
  return (
    <main style={{ padding: "80px 20px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px", color: "#fff", marginBottom: "20px" }}>Get in Touch</h1>
      
      <p style={{ color: "#a1a1aa", fontSize: "18px", marginBottom: "40px", lineHeight: "1.6" }}>
        I am currently open to new opportunities, backend engineering roles, and QA engineering positions. 
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        {/* Email Button */}
        <a 
          href="mailto:ayenewassefa2012@gmail.com"
          style={{
            width: "100%",
            maxWidth: "300px",
            padding: "15px",
            backgroundColor: "#10b981",
            color: "#000",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
           Email Me
        </a>

        {/* LinkedIn Button */}
        <a 
          href="https://www.linkedin.com/in/ayenew-assefa"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "100%",
            maxWidth: "300px",
            padding: "15px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid #10b981",
            color: "#10b981",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          Connect on LinkedIn
        </a>
      </div>
      
      <p style={{ color: "#a1a1aa", marginTop: "40px", fontSize: "14px" }}>
        Phone: +251 946 340 163 <br />
        Addis Ababa, Ethiopia
      </p>
    </main>
  );
}