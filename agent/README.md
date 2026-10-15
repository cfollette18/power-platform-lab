# Agent artifacts

These files are the local artifacts retained from the lab. They are not an export of the published agent, and local changes are not automatically deployed.

- `instructions.txt`: agent role, tool use, confirmation, routing, and data-handling instructions.
- `skills/ticket-intake/SKILL.md`: intake and confirmation behavior.
- `skills/ticket-status/SKILL.md`: read-only lookup and conditional comparison with an earlier status in the conversation.

Before reuse, align tool names and parameters with the actual connected actions. The intake skill retains wording for a planned workflow (`confirmed=true` and workflow defaults); the demonstrated implementation instead uses a direct Dataverse create-row action. Do not invent an unsupported confirmed parameter. The lookup was shown as HR - Retrieve Ticket while the local file names HR - Get Ticket Status.

The status comparison addition did not establish cross-chat history. Knowledge text in the sibling knowledge directory was prepared but its use was deferred. These artifacts document the learning process and need reconciliation before a fresh deployment.
