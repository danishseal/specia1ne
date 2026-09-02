import type { Metadata } from "next";
import { PageShell } from "../_components/PageShell";
import styles from "./launchpad.module.css";

export const metadata: Metadata = {
  title: "Launchpad — Float",
  description:
    "Launch a token on Float, paired to a real stock. At graduation it seeds a live Uniswap v4 pool against the underlying fSHARE.",
};

type Step = {
  name: string;
  body: string;
};

const STEPS: Step[] = [
  {
    name: "Launch",
    body: "Name, ticker, image, socials and the underlying stock, all recorded on chain.",
  },
  {
    name: "Bond",
    body: "Buyers move along the bonding curve as the token fills.",
  },
  {
    name: "Graduate",
    body: "At target, the LP seeds a TOKEN/fSHARE Uniswap v4 pool and locks it. No withdraw, no rug.",
  },
  {
    name: "Trade",
    body: "The token now trades against the stock's real liquidity.",
  },
];

type Launch = {
  name: string;
  paired: string;
  bonding?: { pct: number; raised: number };
  graduated?: { price: string };
};

const LAUNCHES: Launch[] = [
  { name: "BAIJIU", paired: "MOUTAI", graduated: { price: "$0.0412" } },
  { name: "DERRICK", paired: "ARAMCO", bonding: { pct: 74, raised: 3700 } },
  { name: "MONOGRAM", paired: "LVMH", graduated: { price: "$0.0188" } },
  { name: "REDPACKET", paired: "TENCENT", bonding: { pct: 52, raised: 2600 } },
  { name: "AMPERE", paired: "CATL", bonding: { pct: 29, raised: 1450 } },
];

export default function LaunchpadPage() {
  return (
    <PageShell current="launchpad">
      <p className="fl-eyebrow">
        <b>03</b> &nbsp;/&nbsp; Launchpad
      </p>
      <h1 className="fl-h1">Launch a token, paired to a real stock.</h1>
      <p className="fl-lede">
        Anyone can launch a token on Float. At graduation it seeds a live
        Uniswap v4 pool against the underlying fSHARE, so buying the token
        deepens the stock&apos;s own liquidity. Permissionless: there is no vote
        to launch.
      </p>

      <p className={styles.stepsHead}>How it works</p>
      <ol className={styles.steps}>
        {STEPS.map((s) => (
          <li className={styles.step} key={s.name}>
            <span className={styles.stepName}>{s.name}</span>
            <span className={styles.stepBody}>{s.body}</span>
          </li>
        ))}
      </ol>

      <div className="fl-board">
        {LAUNCHES.map((l, i) => (
          <a className="fl-row" key={l.name} href={`/token?t=${l.name}`}>
            <span className="fl-row__num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="fl-row__main">
              <span className="fl-row__name">{l.name}</span>
              <span className="fl-row__cat">paired to {l.paired}</span>
            </span>
            <span className="fl-row__right">
              {l.graduated ? (
                <>
                  <span className="fl-badge fl-badge--live">Graduated</span>
                  <span className="fl-price">{l.graduated.price}</span>
                  <span className="fl-fund">{l.paired}/fSHARE pool</span>
                </>
              ) : (
                <>
                  <span className="fl-badge">Bonding</span>
                  <span className="fl-bar" aria-hidden="true">
                    <span
                      className="fl-bar__fill"
                      style={{ width: `${l.bonding?.pct ?? 0}%` }}
                    />
                  </span>
                  <span className="fl-fund">{l.bonding?.pct ?? 0}% bonded</span>
                </>
              )}
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
