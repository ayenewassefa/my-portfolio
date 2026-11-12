import Link from "next/link";

export default function ProjectsPage() {
  const myProjects = [
    {
      id: 1,
      title: "E-Commerce Microservices Platform",
      tech: "Java, Spring Boot, Kafka, Docker, MongoDB",
      description: "Built a complete production-ready platform with 6 microservices. Implemented Keycloak for JWT auth, Eureka for service discovery, and Kafka for asynchronous event-driven communication (Order -> Inventory).",
      link: "https://github.com/ayenewassefa/microservices-ecommerce-platform"
    },
    {
      id: 2,
      title: "Support Hub Microservice System",
      tech: "Java, Spring Boot",
      description: "Designed a support ticket management system to demonstrate enterprise communication patterns and backend architecture.",
      link: "https://github.com/ayenewassefa/Assist-hub"
    },
    {
      id: 3,
      title: "Ella API — QA & DevOps Assessment",
      tech: "Postman, Jest, GitHub Actions, CI/CD",
      description: "Performed exploratory testing of a NestJS + PostgreSQL API. Wrote manual test cases, bug reports, Jest unit tests, and built a GitHub Actions CI pipeline to block merges on test failure.",
      link: "https://github.com/ayenewassefa/" // Replace with the specific repo if public
    }
  ];

  return (
    <main style={{ padding: "50px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px", color: "#fff" }}>Engineering Projects</h1>
      <p style={{ color: "#a1a1aa", marginBottom: "40px" }}>
        Enterprise-grade microservices, backend systems, and QA automation.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            style={{ 
              border: "1px solid rgba(16, 185, 129, 0.3)",
              backgroundColor: "rgba(255, 255, 255, 0.03)", 
              backdropFilter: "blur(10px)",
              borderRadius: "12px", 
              padding: "25px",
            }}
          >
            <h2 style={{ margin: "0 0 10px 0", color: "#fff", fontSize: "24px" }}>{project.title}</h2>
            <p style={{ margin: "0 0 15px 0", color: "#a1a1aa", lineHeight: "1.6" }}>{project.description}</p>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <span style={{ 
                backgroundColor: "rgba(16, 185, 129, 0.2)", 
                color: "#10b981", 
                padding: "5px 12px", 
                borderRadius: "20px", 
                fontSize: "14px",
                fontWeight: "bold"
              }}>
                {project.tech}
              </span>

              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                color: "#fff",
                textDecoration: "underline",
                fontWeight: "bold"
              }}>
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}