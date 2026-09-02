import type { Metadata } from "next";
import { PageShell } from "../_components/PageShell";

export const metadata: Metadata = {
  title: "Top 200 — Float",
  description:
    "The largest companies in the world that Robinhood will not list, ranked by market cap. Float opens them one at a time.",
};

type Status = "live" | "funding" | "candidate";

type Entry = {
  slug: string;
  name: string;
  cat: string;
  cap: string;
  status: Status;
};

// Roughly market-cap-ordered, largest first. All trade on foreign exchanges,
// so none of them are on Robinhood.
const TOP: Entry[] = [
  { slug: "ARAMCO", name: "Saudi Aramco", cat: "Tadawul · Energy", cap: "$1.9T", status: "candidate" },
  { slug: "TSMC", name: "TSMC", cat: "TWSE · Semis", cap: "$1.0T", status: "candidate" },
  { slug: "TENCENT", name: "Tencent", cat: "HKEX · Internet", cap: "$520B", status: "candidate" },
  { slug: "SAMSUNG", name: "Samsung Electronics", cat: "KRX · Tech", cap: "$380B", status: "candidate" },
  { slug: "NOVO", name: "Novo Nordisk", cat: "Nasdaq CPH · Pharma", cap: "$360B", status: "candidate" },
  { slug: "LVMH", name: "LVMH", cat: "Euronext · Luxury", cap: "$340B", status: "funding" },
  { slug: "ASML", name: "ASML", cat: "Euronext · Semis", cap: "$320B", status: "candidate" },
  { slug: "MOUTAI", name: "Kweichow Moutai", cat: "SSE · Spirits", cap: "$300B", status: "live" },
  { slug: "TOYOTA", name: "Toyota", cat: "TSE · Autos", cap: "$280B", status: "candidate" },
  { slug: "NESTLE", name: "Nestle", cat: "SIX · Consumer", cap: "$260B", status: "candidate" },
  { slug: "HERMES", name: "Hermes", cat: "Euronext · Luxury", cap: "$250B", status: "candidate" },
  { slug: "ICBC", name: "ICBC", cat: "SSE / HKEX · Banking", cap: "$240B", status: "candidate" },
  { slug: "ROCHE", name: "Roche", cat: "SIX · Pharma", cap: "$230B", status: "candidate" },
  { slug: "AZN", name: "AstraZeneca", cat: "LSE · Pharma", cap: "$220B", status: "candidate" },
  { slug: "LOREAL", name: "L'Oreal", cat: "Euronext · Consumer", cap: "$215B", status: "candidate" },
  { slug: "RELIANCE", name: "Reliance", cat: "NSE · Conglomerate", cap: "$210B", status: "candidate" },
  { slug: "SHELL", name: "Shell", cat: "LSE · Energy", cap: "$205B", status: "candidate" },
  { slug: "BABA", name: "Alibaba", cat: "HKEX · Internet", cap: "$200B", status: "candidate" },
  { slug: "SAP", name: "SAP", cat: "XETRA · Software", cap: "$195B", status: "candidate" },
  { slug: "BHP", name: "BHP", cat: "ASX · Mining", cap: "$140B", status: "candidate" },
  { slug: "CATL", name: "CATL", cat: "SZSE · Batteries", cap: "$130B", status: "funding" },
  { slug: "SOFTBANK", name: "SoftBank", cat: "TSE · Tech", cap: "$90B", status: "candidate" },
  { slug: "FERRARI", name: "Ferrari", cat: "Borsa Italiana · Autos", cap: "$80B", status: "candidate" },
  { slug: "NINTENDO", name: "Nintendo", cat: "TSE · Games", cap: "$60B", status: "candidate" },
];

const BADGE: Record<Status, string> = {
  live: "Live",
  funding: "Funding",
  candidate: "Candidate",
};

export default function Top200Page() {
  return (
    <PageShell current="top200">
      <p className="fl-eyebrow">
        <b>05</b> &nbsp;/&nbsp; Top 200
      </p>
      <h1 className="fl-h1">The biggest stocks Robinhood will not list.</h1>
      <p className="fl-lede">
        The largest companies by market cap that you still cannot trade on
        Robinhood. Float opens them one at a time. Fund a name and it goes on
        the desk.
      </p>

      <div className="fl-board">
        {TOP.map((e, i) => {
          const num = (
            <span className="fl-row__num">{String(i + 1).padStart(2, "0")}</span>
          );
          const main = (
            <span className="fl-row__main">
              <span className="fl-row__name">{e.name}</span>
              <span className="fl-row__cat">{e.cat}</span>
            </span>
          );
          const right = (
            <span className="fl-row__right">
              <span
                className={
                  e.status === "live" ? "fl-badge fl-badge--live" : "fl-badge"
                }
              >
                {BADGE[e.status]}
              </span>
              <span className="fl-price">{e.cap}</span>
            </span>
          );

          if (e.status === "candidate") {
            return (
              <div className="fl-row" key={e.slug}>
                {num}
                {main}
                {right}
              </div>
            );
          }

          return (
            <a className="fl-row" key={e.slug} href={`/market?t=${e.slug}`}>
              {num}
              {main}
              {right}
            </a>
          );
        })}
      </div>
    </PageShell>
  );
}
