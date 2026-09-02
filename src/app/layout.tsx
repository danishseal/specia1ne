import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Specia1ne — Product interfaces and web systems",
  description:
    "Independent digital practice shaping product interfaces, web systems and visual direction from first idea to working form.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
