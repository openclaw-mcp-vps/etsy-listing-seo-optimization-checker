import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Listing SEO Optimizer",
  description: "Analyze and optimize your Etsy listings for better search ranking. Get actionable SEO recommendations to boost visibility and sales."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a94dd5da-eb88-4b85-9222-cef9d4ab7d6d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
