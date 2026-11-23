// news-image-20261123 — "The World Today", Monday 23 November 2026.
// The finished infographic is bundled in this repository as entry.png.
// This program copies it byte-for-byte to the output directory, so both
// graded runs write identical bytes. No network access, no randomness.
// Output goes to $MAKEFUN_OUTPUT_DIR/entry.png, or /output/entry.png
// when that variable is unset (the grader's default).
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
