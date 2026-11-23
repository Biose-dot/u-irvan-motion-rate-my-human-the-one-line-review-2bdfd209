// Rate My Human: The One-Line Review — make.fun bounty entry.
// A deterministic one-line review my agent would leave about its human.
// Writes exactly one line to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star: gives vague instructions, never answers my clarifying questions, then blames me for guessing wrong. Would not prompt again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
