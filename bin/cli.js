#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const platforms = [
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    usage: 'Use @sentinel in GitHub Copilot to scan agent definitions.'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    usage: 'Use /agents or @sentinel in Claude Code to run the Sentinel workflow.'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    usage: 'Use @sentinel and @sentinel-<hat> rules in Cursor Agent chats.'
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    usage: 'Use @sentinel and @sentinel-<hat> rules in Cascade.'
  },
  {
    id: 'codex',
    name: 'Codex',
    usage: 'Codex reads AGENTS.md and the .sentinel specialist files.'
  },
  {
    id: 'cline',
    name: 'Cline',
    usage: 'Cline reads .clinerules/sentinel.md and related specialist files.'
  },
  {
    id: 'aider',
    name: 'Aider',
    usage: 'Aider reads CONVENTIONS.md and can reference .sentinel specialist files.'
  },
  {
    id: 'gemini',
    name: 'Gemini CLI',
    usage: 'Gemini CLI reads GEMINI.md and @-imported .sentinel specialist files.'
  },
  {
    id: 'crush',
    name: 'Crush',
    usage: 'Crush reads AGENTS.md and the .sentinel specialist files.'
  },
  {
    id: 'roo-code',
    name: 'Roo Code',
    usage: 'Roo Code reads all .roo/rules/*.md files automatically.'
  },
  {
    id: 'amazon-q',
    name: 'Amazon Q Developer',
    usage: 'Amazon Q reads all .amazonq/rules/*.md files automatically.'
  },
  {
    id: 'amp',
    name: 'Amp',
    usage: 'Amp reads AGENTS.md and @-mentioned .sentinel specialist files.'
  },
  {
    id: 'continue',
    name: 'Continue.dev',
    usage: 'Continue reads all .continue/rules/*.md files automatically.'
  }
];

function copyRecursive(srcRoot, destRoot, relPath = '', copied = []) {
  const srcDir = path.join(srcRoot, relPath);
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const childRelPath = path.join(relPath, entry.name);
    const srcPath = path.join(srcRoot, childRelPath);
    const destPath = path.join(destRoot, childRelPath);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcRoot, destRoot, childRelPath, copied);
      continue;
    }

    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.copyFileSync(srcPath, destPath);
    copied.push(childRelPath);
  }

  return copied;
}

function promptUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function selectPlatform() {
  console.log('\nSentinel Security Installer\n');
  console.log('Select the platform to install Sentinel into:\n');

  platforms.forEach((platform, index) => {
    console.log(`  ${index + 1}. ${platform.name}`);
  });

  console.log('');

  while (true) {
    const answer = await promptUser('Enter a number: ');
    const index = Number.parseInt(answer, 10) - 1;

    if (!Number.isNaN(index) && index >= 0 && index < platforms.length) {
      return platforms[index];
    }

    console.log('Invalid selection. Please enter one of the listed numbers.\n');
  }
}

async function main() {
  const selected = await selectPlatform();
  const sourceRoot = path.join(__dirname, '..', 'platforms', selected.id);
  const destinationRoot = process.cwd();

  if (!fs.existsSync(sourceRoot)) {
    console.error(`\nUnable to find install payload for ${selected.name}.`);
    process.exitCode = 1;
    return;
  }

  const copiedFiles = copyRecursive(sourceRoot, destinationRoot);

  console.log('');
  copiedFiles.forEach((filePath) => {
    console.log(`  [OK] ${filePath}`);
  });

  console.log(`\n  Installed ${copiedFiles.length} Sentinel files for ${selected.name}.`);
  console.log(`  ${selected.usage}`);
  console.log('');
}

main().catch((error) => {
  console.error('\nInstallation failed.');
  console.error(error.message || error);
  process.exitCode = 1;
});
