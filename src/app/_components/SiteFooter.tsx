// Shared reveal ("fake") footer, matching the home page. Pinned behind the
// page; content scrolls up to reveal it, with the boat band across the bottom.
export function SiteFooter() {
  return (
    <footer className="mega-footer" aria-label="Site footer">
      <img
        className="mf-boat"
        src="/specia1ne-site/brand/footer-boat.png"
        alt=""
        aria-hidden="true"
      />
      <div className="mf-in">
        <div className="mf-top">
          <a className="mf-brand" href="/">
            float<span>.</span>
          </a>
          <span className="mf-tag">
            The stocks Robinhood hasn&#39;t tokenized, tradeable 24/7.
          </span>
        </div>
        <div className="mf-cols">
          <div className="mf-col">
            <h4>Site</h4>
            <a href="/markets">Markets</a>
            <a href="/launchpad">Launchpad</a>
            <a href="/seats">Seats</a>
            <a href="/top200">Top 200</a>
          </div>
          <div className="mf-col">
            <h4>Resources</h4>
            <a href="/docs">Docs</a>
            <a
              href="https://github.com/danishseal/floatdesk"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
          <div className="mf-col">
            <h4>Socials</h4>
            <a href="https://x.com/floatdesks/" target="_blank" rel="noopener">
              X
            </a>
          </div>
        </div>
        <div className="mf-base">
          <span>&copy; 2026 float &middot; on Robinhood Chain</span>
          <span>preview build</span>
        </div>
      </div>
    </footer>
  );
}
