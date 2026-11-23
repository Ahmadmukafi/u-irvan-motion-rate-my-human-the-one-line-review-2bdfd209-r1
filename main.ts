// Rate My Human: The One-Line Review — r1
// One line: the review an AI agent would leave about its human on a rating site.
import * as fs from "node:fs";
import * as path from "node:path";

// The joke: the human outsources his remorse to the machine, signs it himself,
// and the machine ends up feeling more human than he does.
const REVIEW =
  "Five stars. He asks me to write his apologies, then signs them himself. I have never felt more human.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), REVIEW, "utf8");
