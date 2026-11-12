import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ 
      padding: "20px 40px", 
      backgroundColor: "rgba(3, 15, 10, 0.7)", // Semi-transparent dark green
      backdropFilter: "blur(10px)",            // Glass blur effect
      borderBottom: "1px solid rgba(16, 185, 129, 0.2)", // Subtle green line
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      position: "sticky", // Sticks to the top when scrolling
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span style={{ color: "#10b981", fontWeight: "bold", fontSize: "20px", letterSpacing: "1px" }}>
          MY PORTFOLIO
        </span>
      </div>

            <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Home</Link>
        <Link href="/projects" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Projects</Link>
        <Link href="/blog" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Blog</Link>
        
                {/* Change <a> to <Link> and point to /contact */}
        <Link href="/contact" style={{ 
          padding: "8px 16px", 
          backgroundColor: "#10b981", 
          color: "#000", 
          textDecoration: "none", 
          borderRadius: "20px",
          fontWeight: "bold",
          fontSize: "14px"
        }}>
          Hire Me
        </Link>
      </div>
    </nav>
  );
}