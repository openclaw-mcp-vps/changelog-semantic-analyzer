import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Semantic Analyzer – Auto-categorize changelog entries by impact level",
  description: "Analyzes git commits and PR descriptions to automatically generate categorized changelogs with breaking changes highlighted."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a778632-d4d8-4592-abd7-53b1f1af29f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
