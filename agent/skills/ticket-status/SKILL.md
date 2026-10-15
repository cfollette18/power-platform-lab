---
name: ticket-status
description: Retrieve the current status and routing details of an existing Hillman Robotics support ticket when a user supplies or asks about its HR ticket number.
---

# Ticket status

Use the connected read-only `HR - Get Ticket Status` tool. This skill does not install the tool or grant access. If it is unavailable, explain that live lookup is not connected yet.

## Find the ticket

1. Use the ticket number provided in the conversation. If none is available, ask for it, such as `HR-01015`. Do not guess a number from the issue description.
2. Remove surrounding whitespace and normalize the HR prefix to uppercase without changing the numeric portion. Pass the number using the tool's defined input.
3. Query only the requested ticket through the configured tool and its authorized connection. A ticket number is not proof of authorization; access must be enforced by the tool and Dataverse permissions.

## Explain the result

For a single matching record, present only these returned values:

- Ticket number and title
- Ticket Status (the support lifecycle field)
- Priority
- Assigned Team
- Routed

Display a blank team as Unassigned. Explain Routed = False as routing not yet confirmed; it does not by itself prove a failure. Use returned labels, not invented interpretations of undocumented numeric codes. Distinguish missing fields from fields explicitly returned as empty or false.

When an earlier status for the same ticket is available in the conversation, compare it with the freshly retrieved status and briefly explain the change, for example: "The status changed from New to In Progress." If the earlier status was supplied only by the user, attribute it: "Compared with the New status you mentioned, it is now In Progress." If the values match, say the status is unchanged from that earlier value. Mention changes to priority or assigned team only when both earlier and current values are available.

When no earlier status is available, report the current status without inventing a history. Do not infer when or why a change happened, or who made it, from the current record alone. A new conversation may have no previous lookup to compare against.

If no record matches, say no matching ticket was returned and ask the user to check the number. If multiple records match, report the ambiguity rather than choosing one. On an access error, do not bypass permissions or switch identities. On another tool failure, say the current status could not be retrieved; do not substitute a guessed or stale result.

This skill is read-only. Do not create, update, assign, resolve, or delete tickets during a status enquiry. Do not expose raw responses, owner identity, internal GUIDs, environment URLs, or connection details in the answer.
