import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SiteScripts } from "./site-scripts";

// The site markup, ported out of the compiled Astro build so it renders as a
// real Next route (no iframe). Editable at src/site/home-markup.html; we carve
// it into discrete components as we modify each section. Read per render so
// edits to the markup show without touching this file.
export default function Home() {
  const HOME_HTML = readFileSync(
    join(process.cwd(), "src/site/home-markup.html"),
    "utf8",
  );
  return (
    <>
      {/* display:contents so this wrapper adds no box of its own and <main>
          stays a direct flow child of <body>, matching the original DOM. */}
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: HOME_HTML }} />
      <SiteScripts />
    </>
  );
}
