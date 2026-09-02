import type { Metadata } from "next";
import { PageShell } from "../_components/PageShell";

export const metadata: Metadata = {
  title: "Markets — Float",
  description:
    "The stocks Float has opened to trade, each one funded, oracle-priced and backed by real shares.",
};

type Market = {
  ticker: string;
  name: string;
  cat: string;
  live?: { price: string; reserve: string };
  fund?: { raised: number; pct: number };
};

const MARKETS: Market[] = [
  {
    ticker: "MOUTAI",
    name: "Moutai",
    cat: "Spirits · CN",
    live: { price: "$193.33", reserve: "100% backed" },
  },
  { ticker: "ARAMCO", name: "Aramco", cat: "Energy · SA", fund: { raised: 4120, pct: 82 } },
  { ticker: "CATL", name: "CATL", cat: "Batteries · CN", fund: { raised: 3050, pct: 61 } },
  { ticker: "LVMH", name: "LVMH", cat: "Luxury · FR", fund: { raised: 2380, pct: 48 } },
  { ticker: "TENCENT", name: "Tencent", cat: "Internet · HK", fund: { raised: 1760, pct: 35 } },
  { ticker: "NESTLE", name: "Nestle", cat: "Consumer · CH", fund: { raised: 1240, pct: 25 } },
  { ticker: "SAMSUNG", name: "Samsung", cat: "Tech · KR", fund: { raised: 980, pct: 20 } },
  { ticker: "HERMES", name: "Hermes", cat: "Luxury · FR", fund: { raised: 540, pct: 11 } },
];

export default function MarketsPage() {
  return (
    <PageShell current="markets">
      <p className="fl-eyebrow">
        <b>02</b> &nbsp;/&nbsp; Markets
      </p>
      <h1 className="fl-h1">Live markets, backed share for share.</h1>
      <p className="fl-lede">
        The stocks Float has opened to trade. Each one quotes against a live
        oracle, funds to $5k to open, and migrates to a freely held spot token
        at $10k.
      </p>

      <div className="fl-board">
        {MARKETS.map((m, i) => (
          <a className="fl-row" key={m.ticker} href={`/market?t=${m.ticker}`}>
            <span className="fl-row__num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="fl-row__main">
              <span className="fl-row__name">{m.name}</span>
              <span className="fl-row__cat">{m.cat}</span>
            </span>
            <span className="fl-row__right">
              {m.live ? (
                <>
                  <span className="fl-badge fl-badge--live">Live</span>
                  <span className="fl-price">{m.live.price}</span>
                  <span className="fl-fund">{m.live.reserve}</span>
                </>
              ) : (
                <>
                  <span className="fl-badge">Funding</span>
                  <span className="fl-bar" aria-hidden="true">
                    <span
                      className="fl-bar__fill"
                      style={{ width: `${m.fund?.pct ?? 0}%` }}
                    />
                  </span>
                  <span className="fl-fund">
                    ${(m.fund?.raised ?? 0).toLocaleString()} / $5,000
                  </span>
                </>
              )}
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
