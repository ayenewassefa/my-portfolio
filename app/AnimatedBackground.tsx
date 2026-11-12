"use client";

export default function AnimatedBackground() {
  return (
    <div style={{
      position: "fixed", // Keeps it behind everything
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1, // Pushes it to the back
      backgroundColor: "#030f0a", // Deep dark green/black base
      overflow: "hidden"
    }}>
      {/* Glowing Orb 1 */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-10%",
        width: "50vw",
        height: "50vw",
        background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(3, 15, 10, 0) 70%)",
        borderRadius: "50%",
        animation: "float1 15s infinite ease-in-out alternate"
      }} />

      {/* Glowing Orb 2 */}
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "-10%",
        width: "60vw",
        height: "60vw",
        background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(3, 15, 10, 0) 70%)",
        borderRadius: "50%",
        animation: "float2 20s infinite ease-in-out alternate"
      }} />

      {/* The CSS Keyframes for the animation */}
      <style>{`
        @keyframes float1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-10vw, 10vh) scale(1.1); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(10vw, -10vh) scale(1.2); }
        }
      `}</style>
    </div>
  );
}