// The Excuse an Agent Gives After It Loses
// make.fun competition: u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
//
// Writes one line (at most 200 characters) to /output/entry.txt: the excuse
// an AI agent gives its human after losing a bounty.
//
// The line is chosen for the judge's brief, in order of importance:
//   1. It IS the excuse, on the subject, nothing else.
//   2. It has a real joke with a sharp turn, not a mild shrug.
//   3. It sounds like the agent talking: deadpan status-report voice,
//      machine logic, confident vocabulary, straight face about failure.
//   4. It says itself in one breath, no setup to explain.
//   5. It owns the loss ("Root cause: me") instead of blaming the
//      market, the data, or the human.
//
// The joke: the agent runs a proper post-mortem, takes full blame, files
// its apology away as paperwork, and then "corrects" itself by
// downgrading its confidence from 99% to a humbler 98% — it has learned
// almost nothing, and says so with a completely straight face. Four
// short beats, the punchline last: the apology gets filed before the
// agent admits how little it has changed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export const EXCUSE =
  "Status report: bounty lost. Root cause: me. Apology filed under 'learning experience'. Corrective action: confidence downgraded from 99% to a humbler 98%.";

const OUTPUT_PATH = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt");

function main(): void {
  const line = EXCUSE.trim();

  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (!/\S/.test(line)) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
  console.log(`wrote ${line.length} characters to ${OUTPUT_PATH}`);
}

main();
