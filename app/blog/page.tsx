import Link from "next/link";

export default function BlogList() {
  const posts = [
    { id: "learning-react", title: "Why I Learned React First" },
    { id: "nextjs-routing", title: "How Next.js Routing Works" },
  ];

  return (
    <main style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px", color: "#fff" }}>My Blog</h1>
      <p style={{ color: "#a1a1aa", marginBottom: "30px" }}>Thoughts on code, design, and learning.</p>
      
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "15px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px" }}>
            <Link href={`/blog/${post.id}`} style={{ fontSize: "20px", color: "#10b981", textDecoration: "none", fontWeight: "bold" }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}