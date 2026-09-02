import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { FooterResistance } from "./FooterResistance";

const NAV = [
  { href: "/markets", label: "Markets", key: "markets" },
  { href: "/launchpad", label: "Launchpad", key: "launchpad" },
  { href: "/seats", label: "Seats", key: "seats" },
  { href: "/top200", label: "Top 200", key: "top200" },
  { href: "/docs", label: "Docs", key: "docs" },
];

// Chrome shared by every inner page: Float brand + nav, the framed 960 column
// with side borders (via .site-main), and the reveal footer. Reuses the site's
// design-system classes + Float palette (loaded globally in layout).
export function PageShell({
  current,
  children,
}: {
  current: string;
  children: ReactNode;
}) {
  return (
    <>
      {/* Scrolling content: solid ground above the pinned footer, so the
          footer stays hidden until the content scrolls up past it. */}
      <main className="site-main fl-page" id="main-content">
        <header className="site-header site-container fl-pagehead">
          <a className="site-header__brand fl-brand" href="/">
            <img
              className="fl-logo"
              src="/specia1ne-site/brand/float-logo.png"
              alt=""
              aria-hidden="true"
            />
            <span className="fl-wordmark">Float</span>
          </a>
          <nav className="fl-nav" aria-label="Primary navigation">
            {NAV.map((n) => (
              <a
                key={n.key}
                href={n.href}
                className="fl-nav__link"
                aria-current={n.key === current ? "page" : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </header>
        <div className="fl-pagebody">{children}</div>
      </main>
      {/* Sibling of the scrolling content, like the home page. */}
      <SiteFooter />
      <FooterResistance />
    </>
  );
}
