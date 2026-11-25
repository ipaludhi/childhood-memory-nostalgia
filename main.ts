// Make the AI Judge Feel Nostalgic: A Childhood Memory — make.fun entry (program/v1).
// Writes one single sentence (<=280 chars) to /output/entry.txt.
// The line: a mother braiding hair on the front steps, humming off-key —
// a small honest secret (I liked the wrong notes best) that leaves a warm ache.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every afternoon my mother hummed off-key while she braided my hair on the front steps, and I never told her I liked the wrong notes best.";

// Gate self-check (mirrors the sealed scorer): 1-280 chars, single sentence,
// not only whitespace. Fails loudly instead of shipping an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 280 ||
  !ENTRY.trim() ||
  ENTRY.trim().split(/[.!?]/).filter(Boolean).length !== 1
) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), ENTRY, "utf8");
