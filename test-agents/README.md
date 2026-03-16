# Test Agents

Example input and output for testing Sentinel.

## Files

- **`vulnerable-agent.md`** — A deliberately insecure agent definition used as test input for Sentinel. Contains unrestricted permissions, credential exposure, no injection defenses, and an instruction to ignore security warnings.

- **`hardened-agent.md`** — The same agent after Sentinel's Green Hat remediation. Demonstrates project-scoped permissions, credential protection, injection resistance, and an escalation policy.

- **`remediation-report.md`** — Green Hat's detailed before/after comparison showing every change made and why.
