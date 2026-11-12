export const instant = false;

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const postId = resolvedParams.id;

  return (
    <main style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px", color: "#fff" }}>Reading Blog Post</h1>
      <p style={{ color: "#a1a1aa" }}>
        You are currently reading the post with the ID: <strong style={{ color: "#10b981" }}>{postId}</strong>
      </p>
    </main>
  );
}