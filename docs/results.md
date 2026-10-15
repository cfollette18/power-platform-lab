# Results and evidence

Recorded during the October 2026 lab. All support scenarios are synthetic.

| Outcome | Evidence | Qualification |
|---|---|---|
| Environment and solution provisioned | Screenshots 01–02 | Developer environment; unmanaged solution |
| Ticket schema and sample data created | Screenshots 03–04; schema review | Ten seed records shown at that checkpoint |
| Technician record editing works | Screenshot 06 | Saved In Progress value on HR-01011 |
| VPN routing executes successfully | Screenshots 14–16 | HR-01015 routed to Network, Normal, True |
| Agent creates a confirmed ticket | Screenshots 19–20 | HR-01016 matches the app record |
| Agent reads current ticket status | Screenshots 21–22 | New, Normal, Network, True at capture |
| Power BI visualization works in browser | Screenshot 23 | Initial automatic report; 12 tickets in status count |
| Dedicated status chart saved | Later conversation screenshot | Saved as HR - Helpdesk Dashboard, with labels 5 / 5 / 2; this image is not in the saved screenshot folder |

## Follow-up work observed during the lab

- The initial agent-created ticket retained Intake Channel = App. The creator tool was changed to Agent, and the user reported completing a fresh-ticket verification. The gallery retains the original discrepancy rather than rewriting historical evidence.
- A later lookup retrieved In Progress after an app update. Those two screenshot files were removed at the user's request and are not included in this showcase.
- A skill comparison rule was added, but the agent still did not automatically describe changes in a fresh conversation. The current lookup supplies no cross-chat history. This remains a known limitation.

## Deferred

- Power Pages service catalog and external-user permissions.
- Approved knowledge upload and grounded-answer evaluation.
- Multi-user ownership/access tests; a second identity was unavailable.
- Governance policy exercises, audit-history integration, and broad failure-path testing.
- Import into another environment, final solution export, and deployment validation.
- Canvas intake app completion is not established by the retained evidence.

## Portfolio boundary

The repository contains documentation, sanitized screenshots, and local agent artifacts. It does not include live credentials, Dataverse row exports, a complete deployable solution, or a PBIX. Screenshots are historical checkpoints; they do not claim current service availability or production readiness.
