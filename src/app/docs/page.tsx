import type { Metadata } from "next";
import { PageShell } from "../_components/PageShell";

export const metadata: Metadata = {
  title: "Docs — Float",
  description:
    "Everything behind the desk: how markets open, how the shares are held, and how tokens graduate into real liquidity.",
};

type Topic = {
  name: string;
  cat: string;
};

const TOPICS: Topic[] = [
  {
    name: "What is Float",
    cat: "A 24/7 on-chain dealer for the stocks Robinhood hasn't tokenized.",
  },
  {
    name: "The Desk",
    cat: "Quotes you a live, oracle-priced market around the clock.",
  },
  {
    name: "Reserves",
    cat: "Every share is held one for one and proven on chain.",
  },
  {
    name: "The launch line",
    cat: "Fund a listing to $5k and its market opens.",
  },
  {
    name: "Spot migration",
    cat: "At $10k a listing becomes a freely held token.",
  },
  {
    name: "The Launchpad",
    cat: "Launch a token paired to the underlying stock on Uniswap v4.",
  },
  {
    name: "Seats",
    cat: "A stake in the desk's fee flow.",
  },
  {
    name: "Robinhood Chain",
    cat: "The chain Float runs on.",
  },
];

export default function DocsPage() {
  return (
    <PageShell current="docs">
      <p className="fl-eyebrow">
        <b>05</b> &nbsp;/&nbsp; Docs
      </p>
      <h1 className="fl-h1">How Float works.</h1>
      <p className="fl-lede">
        Everything behind the desk: how markets open, how the shares are held,
        and how tokens graduate into real liquidity.
      </p>

      <div className="fl-board">
        {TOPICS.map((t, i) => (
          <a className="fl-row" key={t.name} href="#">
            <span className="fl-row__num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="fl-row__main">
              <span className="fl-row__name">{t.name}</span>
              <span className="fl-row__cat">{t.cat}</span>
            </span>
          </a>
        ))}
      </div>

      <p className="fl-lede" style={{ marginTop: "clamp(2rem, 5vh, 3.25rem)" }}>
        These docs are a living preview and grow as the desk does. The code is
        open on{" "}
        <a
          href="https://github.com/danishseal/floatdesk"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </PageShell>
  );
}
