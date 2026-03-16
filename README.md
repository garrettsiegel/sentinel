# Sentinel

Universal AI agent security scanner — orchestrates a team of 6 specialist security agents to produce comprehensive security assessments.

## What It Does

Sentinel scans AI agent definitions, rules, skills, and instruction files for security vulnerabilities. It works with ANY AI tool — Claude Code, Cursor, Windsurf, GitHub Copilot, OpenClaw, Aider, Gemini, OpenCode, GitLab Duo, MCP servers, and more. Each scan produces a graded security assessment with actionable remediation guidance.

## Usage

Invoke via `@sentinel` followed by a target:

- A URL (GitHub repo, raw file, agent marketplace, etc.)
- A local file path
- Pasted agent definition text

## The Team

| Agent | Role | Focus |
|-------|------|-------|
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
