// One-Line Office Jokes — make.fun entry
// Writes a single self-contained office joke to /output/entry.txt.
// The line must be one line, 1-199 UTF-8 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "I hit reply-all to say 'please stop replying all,' and now there are forty-seven of us in a support group.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  const line = JOKE.trim();
  if (line.length < 1 || line.length > 199) {
    throw new Error(`Joke must be 1-199 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("Joke must be a single line");
  }
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line + "\n", "utf8");
  // Report the exact length so a run can be eyeballed against the 1-199 gate.
  console.error(`Wrote ${line.length} characters to ${outPath}`);
}

main();
