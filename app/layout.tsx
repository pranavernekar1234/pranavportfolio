import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Vernekar | Cloud & DevOps Engineer | Generative AI Enthusiast",
  description:
    "Pranav Vernekar's portfolio showcasing Cloud, DevOps, AWS, Azure, Infrastructure as Code, automation, Generative AI projects and hands-on technical labs.",
  openGraph: {
    title: "Pranav Vernekar | Cloud & DevOps Engineer",
    description:
      "Cloud & DevOps engineer with hands-on experience in AWS, Azure, Terraform, Kubernetes, Docker, and Generative AI.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
