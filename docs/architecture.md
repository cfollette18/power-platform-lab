# Architecture and decisions

## Implemented system

| Layer | Responsibility | Boundary |
|---|---|---|
| Copilot Studio | Collect details, confirm intent, select connected tools, explain results | Prompt instructions are not authorization or transactional enforcement |
| Dataverse tools | Create a Ticket; retrieve a ticket by its HR number | Respect the connector's connection identity and Dataverse permissions |
| Dataverse | Store ticket data, choices, autonumber, and lifecycle fields | Built-in row state and custom Ticket Status are separate |
| Power Automate | Route new tickets and set priority | Added trigger avoids reacting to the flow's own updates |
| Model-driven app | Technician queue and record editing | Assigned Team text does not change record ownership |
| Power BI | Summarize the selected view | Counts reflect filters and the reporting snapshot |

## Routing rules

| Input | Result |
|---|---|
| Category = VPN | Assigned Team = Network |
| Category = Account | Assigned Team = Identity |
| Other categories | Assigned Team = Service Desk |
| Impact = Multiple users | Priority = High |
| Impact = Single user | Priority = Normal |
| Successful routing update | Routed = True |

The screenshots show both configured branches. The captured execution proof is the VPN / Single user path; it is not evidence that every branch was exercised.

## Agent tool contract

Creation collects title, description, category, and impact. A summary and affirmative user confirmation precede the write in the captured conversation. Success is reported using the returned ticket number. The create action is a direct Dataverse connector; it is not a separate validation workflow.

Status lookup uses a connected List rows action against Tickets. A public HR ticket number is the lookup key, not the internal row GUID. Screenshot 21 shows fixed environment and table selection; its optional parameters are collapsed, so it does not establish the final filter expression or selected columns. Screenshot 22 demonstrates a successful lookup of HR-01016.

Tool names evolved during the build: the lookup is shown as HR - Retrieve Ticket in the configuration screen, List rows from selected environment in the trace, and HR - Get Ticket Status in local instructions. Bind to the actual connected tool when reusing these artifacts.

## Why this design

The lab keeps routing in a deterministic flow and uses the agent for conversational intake. Reusing the direct connector avoided a second creation implementation. A production revision could move validation and idempotency into a dedicated service or workflow, but that was not built here.

Skills constrain intended behavior, including avoiding secret collection, unsupported success claims, and blind retries after uncertain writes. They do not establish production security guarantees. Ownership, per-user access, negative-path evaluation, audit history, and deployment remain follow-up work.
