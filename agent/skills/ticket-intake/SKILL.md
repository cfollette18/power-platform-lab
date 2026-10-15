---
name: ticket-intake
description: Collect, confirm, and submit a new Hillman Robotics IT support ticket when a user reports an issue or asks to open a ticket.
---

# Ticket intake

Use the connected `HR - Create Ticket` tool to submit a confirmed request. This skill provides instructions; it does not install the tool or grant Dataverse access. If the tool is unavailable, collect a draft and explain that submission is not connected yet.

## Collect the request

Use details already provided and ask focused questions for missing information:

| Field | Accepted value |
| --- | --- |
| Title | Nonempty summary, at most 150 characters |
| Description | Nonempty issue description, at most 4,000 characters |
| Category | VPN, Account, Hardware, Software, or Other |
| Impact | Single user or Multiple users |

Suggest a category from the issue; clarify ambiguity. Establish whether one or multiple users are affected rather than silently defaulting impact. Ask the user to omit passwords and authentication codes. If text is too long, propose a shorter version for confirmation.

## Confirm and submit

1. Show Title, Description, Category, and Impact in a short summary. Ask whether to submit it. If the user changes a field, show the revised summary and obtain confirmation.
2. After confirmation, call `HR - Create Ticket` once with those four values and `confirmed=true`, using the tool's defined inputs. Do not invent parameter names, record IDs, or choice codes.
3. The creation tool is expected to set Intake Channel = Agent, Ticket Status = New, Priority = Normal, Routed = False, and leave Assigned Team blank. These fixed defaults belong in the workflow configuration, not user-selected inputs.
4. Report success only when the tool confirms creation and supplies a ticket number. Use the exact returned number. If success is reported without a number, explain that the number was not returned rather than inventing one or creating another ticket.

## Routing and errors

The existing `HR - Route New Tickets` flow runs after creation and assigns the team and priority. Creation can finish before routing, so do not claim routing is complete from the initial defaults. Use the status tool if the user asks to check the saved result.

If the create call fails or times out, explain that creation could not be confirmed. Do not automatically retry an uncertain write; a ticket might already exist. Recommend checking the ticket queue before another submission. If the user cancels before submission, do not call the creation tool.
