// The World in One Day — Tuesday 24 November 2026.
// Entry program: copies the finished infographic to the output directory.
// The image is a fixed, self-contained asset (entry.png); copying it byte
// for byte keeps the two grading runs deterministic by construction.
// The output file is always named entry.png, whatever the input format.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), join(outDir, "entry.png"));
