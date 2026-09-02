import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "/specia1ne-site";

export const metadata: Metadata = {
  metadataBase: new URL("https://specia1ne.com"),
  title: "Specia1ne — Product interfaces and web systems",
  description:
    "Independent digital practice shaping product interfaces, web systems and visual direction from first idea to working form.",
  applicationName: "Specia1ne",
  authors: [{ name: "Specia1ne" }],
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
    title: "Specia1ne — Product interfaces and web systems",
    description:
      "Independent digital practice shaping product interfaces, web systems and visual direction from first idea to working form.",
    url: "/",
    siteName: "Specia1ne",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE}/og.png`,
        width: 2400,
        height: 1260,
        alt: "Specia1ne — digital products, interfaces and systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specia1ne — Product interfaces and web systems",
    description:
      "Independent digital practice shaping product interfaces, web systems and visual direction from first idea to working form.",
    images: [`${SITE}/og.png`],
  },
  icons: {
    icon: [
      { url: `${SITE}/favicons/favicon.svg`, type: "image/svg+xml" },
      { url: `${SITE}/favicon.ico`, sizes: "any" },
      { url: `${SITE}/favicons/favicon-32.png`, type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: `${SITE}/favicons/apple-touch-icon.png`, sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: `${SITE}/favicons/safari-pinned-tab.svg`, color: "#1d39f5" }],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f2f1eb",
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
