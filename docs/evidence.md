# Screenshot gallery

All 21 images from the saved lab screenshot folder, in their original order. Numbering gaps are intentional. Captions distinguish configuration from execution evidence.

[Open the interactive slideshow](https://cfollette18.github.io/power-platform-lab/) · [Return to project](../README.md)

## 01 · Development environment

Hillman Robotics is ready in a Developer environment with Dataverse provisioned.

![01 — Development environment](screenshots/01-environment.png)

## 02 · Solution container

The unmanaged HillmanRobotics solution groups the lab components.

![02 — Solution container](screenshots/02-solution.png)

## 03 · Ticket data model

Dataverse column definitions cover categorization, impact, ownership, lifecycle, and routing.

![03 — Ticket data model](screenshots/03-ticket-schema.png)

## 04 · Synthetic support data

Ten fictional support records span VPN, Account, Hardware, Software, and Other.

![04 — Synthetic support data](screenshots/04-sample-tickets.png)

## 05 · Technician queue

The model-driven Hillman Technician app presents the support queue.

![05 — Technician queue](screenshots/05-technician-app.png)

## 06 · Saved record update

HR-01011 is saved with Ticket Status set to In Progress. Routing has not yet run for this record.

![06 — Saved record update](screenshots/06-ticket-detail.png)

## 07 · Trigger and default route

A new Dataverse row starts routing; the routeTeam variable begins with Service Desk.

![07 — Trigger and default route](screenshots/07-flow-trigger.png)

## 08 · Dataverse trigger

Change type Added and Organization scope define the new-ticket trigger.

![08 — Dataverse trigger](screenshots/08-dataverse-trigger.png)

## 09 · Default team

Service Desk is the default destination before category rules are evaluated.

![09 — Default team](screenshots/09-routing-default.png)

## 10 · Category routing

VPN maps to Network; Account maps to Identity; other categories retain the default.

![10 — Category routing](screenshots/10-category-routing.png)

## 11 · Priority and record update

The configured impact branches set High or Normal priority, write Assigned Team, and mark Routed.

![11 — Priority and record update](screenshots/11-priority-and-update.png)

## 14 · VPN test input

The new VPN / Single user ticket is shown before saving and before routing.

![14 — VPN test input](screenshots/14-vpn-test-before-save.png)

## 15 · Successful routing execution

The captured run takes the VPN and Normal-priority branches and successfully updates the ticket.

![15 — Successful routing execution](screenshots/15-vpn-routing-success.png)

## 16 · Routing result in Dataverse

Saved ticket HR-01015 confirms Network, Normal priority, and Routed = True.

![16 — Routing result in Dataverse](screenshots/16-vpn-ticket-routed.png)

## 17 · Agent and dedicated skills

The agent configuration shows ticket-intake and ticket-status skills. This checkpoint predates the connected lookup tool.

![17 — Agent and dedicated skills](screenshots/17-helpdesk-agent-overview.png)

## 18 · Ticket creation tool

The Dataverse create action fixes the environment and table, with conversation-supplied ticket fields.

![18 — Ticket creation tool](screenshots/18-create-ticket-tool.png)

## 19 · Confirmed agent submission

The employee confirms the summary; the create-row action runs and the agent returns HR-01016.

![19 — Confirmed agent submission](screenshots/19-agent-ticket-confirmation.png)

## 20 · Agent-created record verified

HR-01016 matches the agent submission and is routed to Network. Intake Channel still reads App in this historical capture; the mapping was subsequently corrected.

![20 — Agent-created record verified](screenshots/20-agent-ticket-verified.png)

## 21 · Live lookup tool

The retrieval action targets Hillman Robotics and Tickets. Optional query parameters are collapsed in this capture.

![21 — Live lookup tool](screenshots/21-ticket-lookup-tool.png)

## 22 · Live status returned

The agent retrieves HR-01016 and reports New, Normal, Network, and Routed = True, matching the saved record.

![22 — Live status returned](screenshots/22-agent-ticket-status-verified.png)

## 23 · Power BI in the browser

The initial generated report shows a ticket-count split of 5 New, 5 In Progress, and 2 Resolved. A dedicated status chart was subsequently saved; not every automatic chart counts tickets.

![23 — Power BI in the browser](screenshots/23-power-bi-initial-report.png)
