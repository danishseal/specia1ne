import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "/specia1ne-site";

export const metadata: Metadata = {
  metadataBase: new URL("https://specia1ne-one.vercel.app"),
  title: "Float",
  description:
    "A 24/7 on-chain dealer for the stocks Robinhood hasn't tokenized. Every listing quotes against a live oracle and is backed by real shares.",
  applicationName: "Float",
  authors: [{ name: "Float" }],
  referrer: "strict-origin-when-cross-origin",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Float. Trade the stocks Robinhood hasn't tokenized.",
    description:
      "A 24/7 on-chain dealer for the stocks Robinhood hasn't tokenized. Every listing quotes against a live oracle and is backed by real shares.",
    url: "/",
    siteName: "Float",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Float. Trade the stocks Robinhood hasn't tokenized.",
    description:
      "A 24/7 on-chain dealer for the stocks Robinhood hasn't tokenized. Every listing quotes against a live oracle and is backed by real shares.",
  },
  icons: {
    icon: [
      { url: `${SITE}/favicons/favicon.svg`, type: "image/svg+xml" },
      { url: `${SITE}/favicon.ico`, sizes: "any" },
      { url: `${SITE}/favicons/favicon-32.png`, type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: `${SITE}/favicons/apple-touch-icon.png`, sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: `${SITE}/favicons/safari-pinned-tab.svg`, color: "#1a1a1a" }],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#eee9dd",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-js="true" data-site-scrollbar-page="true">
      <head>
        <link
          rel="preload"
          href={`${SITE}/fonts/geist/geist-regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${SITE}/fonts/geist/geist-700.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${SITE}/fonts/geist-mono/geist-mono-regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={`${SITE}/_astro/global.yPMqHDAu.css`} />
        <style>{`@media (prefers-reduced-motion: reduce){.site-reveal__band-probe,.site-reveal__layer--reveal{display:none !important;}}`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
