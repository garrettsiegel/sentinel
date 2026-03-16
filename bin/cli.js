#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', '.github', 'agents');
const dest = path.join(process.cwd(), '.github', 'agents');

fs.mkdirSync(dest, { recursive: true });

const files = fs.readdirSync(src).filter(f => f.endsWith('.agent.md'));

for (const file of files) {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
  console.log(`  \u2713 ${file}`);
}

console.log(`\n  ${files.length} Sentinel agents installed to .github/agents/`);
console.log('  Use @sentinel in GitHub Copilot to scan agent definitions.\n');
