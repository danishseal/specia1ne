import type { Metadata } from "next";
import { PageShell } from "../_components/PageShell";
import styles from "./seats.module.css";

export const metadata: Metadata = {
  title: "Seats — Float",
  description:
    "A Seat is a stake in Float's fee flow. Every trade routes a 0.4% fee to Seat holders, and a Seat lets you boost the markets you want opened sooner.",
};

type Stat = { num: string; label: string };

const STATS: Stat[] = [
  { num: "0.4%", label: "Fee to seats" },
  { num: "24/7", label: "Markets" },
  { num: "1:1", label: "Shares held" },
];

type Perk = { title: string; body: string };

const PERKS: Perk[] = [
  {
    title: "Fee share",
    body: "A cut of the 0.4% taken on every trade, streamed to holders.",
  },
  {
    title: "Boost",
    body: "Direct weight toward the markets you want opened next.",
  },
  {
    title: "Priority",
    body: "Early access to newly funded listings.",
  },
  {
    title: "Governance-light",
    body: "A say in desk parameters, not in which stocks list. Listing is permissionless.",
  },
];

export default function SeatsPage() {
  return (
    <PageShell current="seats">
      <p className="fl-eyebrow">
        <b>04</b> &nbsp;/&nbsp; Seats
      </p>
      <h1 className="fl-h1">Seats earn from every trade.</h1>
      <p className="fl-lede">
        A Seat is a stake in Float&apos;s fee flow. Every trade on the desk
        routes a 0.4% fee to Seat holders, and a Seat lets you boost the markets
        you believe in so they open sooner.
      </p>

      <div className={styles.stats}>
        {STATS.map((s) => (
          <div className={styles.stat} key={s.label}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="fl-board">
        {PERKS.map((p, i) => (
          <div className="fl-row" key={p.title}>
            <span className="fl-row__num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="fl-row__main">
              <span className="fl-row__name">{p.title}</span>
              <span className="fl-row__cat">{p.body}</span>
            </span>
          </div>
        ))}
      </div>

      <div className={styles.close}>
        <p className={styles.closeText}>
          Seats fund the markets. The markets earn the Seats.{" "}
          <a className={styles.closeLink} href="/markets">
            See the live markets
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
