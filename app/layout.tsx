import "./globals.css";
import Navbar from "./Navbar";
import AnimatedBackground from "./AnimatedBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* We set a dark background color here as a fallback */}
      <body style={{ backgroundColor: "#030f0a", color: "#ffffff", margin: 0 }}>
        <AnimatedBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}