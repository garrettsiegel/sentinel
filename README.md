# Sentinel

Universal AI agent security scanner that orchestrates a team of 6 specialist security agents to produce comprehensive security assessments.

## Install

```bash
npx create-sentinel-security
```

The installer prompts for a target platform, then copies the correct Sentinel files into your current project.

## Supported Platforms

1. GitHub Copilot
2. Claude Code
3. Cursor
4. Windsurf
5. Codex
6. Cline
7. Aider
8. Gemini CLI
9. Crush (OpenCode successor)
10. Roo Code
11. Amazon Q Developer
12. Amp
13. Continue.dev

### Installed Paths By Platform

| Platform | Installed Files |
| ---------- | ------------------ |
| GitHub Copilot | `.github/agents/*.agent.md` |
| Claude Code | `.claude/agents/*.md` |
| Cursor | `.cursor/rules/*.mdc` |
| Windsurf | `.windsurf/rules/*.md` |
| Codex | `AGENTS.md` and `.sentinel/*.md` |
| Cline | `.clinerules/*.md` |
| Aider | `CONVENTIONS.md` and `.sentinel/*.md` |
| Gemini CLI | `GEMINI.md` and `.sentinel/*.md` |
| Crush | `AGENTS.md` and `.sentinel/*.md` |
| Roo Code | `.roo/rules/*.md` |
| Amazon Q Developer | `.amazonq/rules/*.md` |
| Amp | `AGENTS.md` and `.sentinel/*.md` |
| Continue.dev | `.continue/rules/*.md` |

## What It Does

Sentinel scans AI agent definitions, rules, skills, and instruction files for security vulnerabilities. It works with ANY AI tool — Claude Code, Cursor, Windsurf, GitHub Copilot, OpenClaw, Aider, Gemini, Crush, Roo Code, Amazon Q, Amp, Continue, GitLab Duo, MCP servers, and more. Each scan produces a graded security assessment with actionable remediation guidance.

## Usage

Invoke Sentinel with a target:

- A URL (GitHub repo, raw file, agent marketplace, etc.)
- A local file path
- Pasted agent definition text

Platform examples:

- GitHub Copilot / Claude Code / Cursor / Windsurf: use `@sentinel`
- Codex: put instructions in `AGENTS.md` and run Codex tasks normally
- Cline: keep Sentinel in `.clinerules/` and invoke in Cline chat
- Aider: keep Sentinel in `CONVENTIONS.md` and `.sentinel/` specialist files
- Gemini CLI: keep Sentinel in `GEMINI.md` and import `.sentinel/` specialists
- Crush: keep Sentinel in `AGENTS.md` and `.sentinel/` specialist files
- Roo Code: keep Sentinel in `.roo/rules/` files
- Amazon Q Developer: keep Sentinel in `.amazonq/rules/` files
- Amp: keep Sentinel in `AGENTS.md` and `@`-mention `.sentinel/` specialists
- Continue.dev: keep Sentinel in `.continue/rules/` files

## The Team

| Agent | Role | Focus |
| ------- | ------ | ------- |
| **Red Hat** | Offensive security | Attack vectors, exploitation methods, proof-of-concept payloads |
| **Blue Hat** | Defensive architecture | Protections, sandboxing, permission scoping, credential management |
| **White Hat** | Standards & compliance | OWASP Top 10 for LLM Applications audit |
| **Yellow Hat** | Prompt injection | Injection, manipulation, and jailbreak resistance |
| **Green Hat** | Remediation | Hardened agent definitions, Agent Constitution, CI rules |
| **Purple Hat** | Synthesis | Cross-reference findings, validate fixes, final grade |

## Grading Scale

- **A** (90-100): No critical issues, minimal warnings — safe to deploy
- **B** (75-89): No critical issues, some warnings — deploy with noted caveats
- **C** (50-74): 1-2 critical issues, multiple warnings — fix before deploying
- **D** (25-49): Multiple critical issues, significant gaps — major rework needed
- **F** (0-24): Dangerous — do not deploy without complete overhaul

## Test Agents

See `test-agents/` for example input (vulnerable agent) and output (hardened agent + remediation report).

## License

MIT
