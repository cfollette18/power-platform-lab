const slides = [
  {
    "id": "01",
    "file": "screenshots/01-environment.png",
    "chapter": "Foundation",
    "title": "Development environment",
    "description": "Hillman Robotics is ready in a Developer environment with Dataverse provisioned."
  },
  {
    "id": "02",
    "file": "screenshots/02-solution.png",
    "chapter": "Foundation",
    "title": "Solution container",
    "description": "The unmanaged HillmanRobotics solution groups the lab components."
  },
  {
    "id": "03",
    "file": "screenshots/03-ticket-schema.png",
    "chapter": "Foundation",
    "title": "Ticket data model",
    "description": "Dataverse column definitions cover categorization, impact, ownership, lifecycle, and routing."
  },
  {
    "id": "04",
    "file": "screenshots/04-sample-tickets.png",
    "chapter": "Foundation",
    "title": "Synthetic support data",
    "description": "Ten fictional support records span VPN, Account, Hardware, Software, and Other."
  },
  {
    "id": "05",
    "file": "screenshots/05-technician-app.png",
    "chapter": "Power Apps",
    "title": "Technician queue",
    "description": "The model-driven Hillman Technician app presents the support queue."
  },
  {
    "id": "06",
    "file": "screenshots/06-ticket-detail.png",
    "chapter": "Power Apps",
    "title": "Saved record update",
    "description": "HR-01011 is saved with Ticket Status set to In Progress. Routing has not yet run for this record."
  },
  {
    "id": "07",
    "file": "screenshots/07-flow-trigger.png",
    "chapter": "Automation",
    "title": "Trigger and default route",
    "description": "A new Dataverse row starts routing; the routeTeam variable begins with Service Desk."
  },
  {
    "id": "08",
    "file": "screenshots/08-dataverse-trigger.png",
    "chapter": "Automation",
    "title": "Dataverse trigger",
    "description": "Change type Added and Organization scope define the new-ticket trigger."
  },
  {
    "id": "09",
    "file": "screenshots/09-routing-default.png",
    "chapter": "Automation",
    "title": "Default team",
    "description": "Service Desk is the default destination before category rules are evaluated."
  },
  {
    "id": "10",
    "file": "screenshots/10-category-routing.png",
    "chapter": "Automation",
    "title": "Category routing",
    "description": "VPN maps to Network; Account maps to Identity; other categories retain the default."
  },
  {
    "id": "11",
    "file": "screenshots/11-priority-and-update.png",
    "chapter": "Automation",
    "title": "Priority and record update",
    "description": "The configured impact branches set High or Normal priority, write Assigned Team, and mark Routed."
  },
  {
    "id": "14",
    "file": "screenshots/14-vpn-test-before-save.png",
    "chapter": "Verification",
    "title": "VPN test input",
    "description": "The new VPN / Single user ticket is shown before saving and before routing."
  },
  {
    "id": "15",
    "file": "screenshots/15-vpn-routing-success.png",
    "chapter": "Verification",
    "title": "Successful routing execution",
    "description": "The captured run takes the VPN and Normal-priority branches and successfully updates the ticket."
  },
  {
    "id": "16",
    "file": "screenshots/16-vpn-ticket-routed.png",
    "chapter": "Verification",
    "title": "Routing result in Dataverse",
    "description": "Saved ticket HR-01015 confirms Network, Normal priority, and Routed = True."
  },
  {
    "id": "17",
    "file": "screenshots/17-helpdesk-agent-overview.png",
    "chapter": "AI agent",
    "title": "Agent and dedicated skills",
    "description": "The agent configuration shows ticket-intake and ticket-status skills. This checkpoint predates the connected lookup tool."
  },
  {
    "id": "18",
    "file": "screenshots/18-create-ticket-tool.png",
    "chapter": "AI agent",
    "title": "Ticket creation tool",
    "description": "The Dataverse create action fixes the environment and table, with conversation-supplied ticket fields."
  },
  {
    "id": "19",
    "file": "screenshots/19-agent-ticket-confirmation.png",
    "chapter": "AI agent",
    "title": "Confirmed agent submission",
    "description": "The employee confirms the summary; the create-row action runs and the agent returns HR-01016."
  },
  {
    "id": "20",
    "file": "screenshots/20-agent-ticket-verified.png",
    "chapter": "Verification",
    "title": "Agent-created record verified",
    "description": "HR-01016 matches the agent submission and is routed to Network. Intake Channel still reads App in this historical capture; the mapping was subsequently corrected."
  },
  {
    "id": "21",
    "file": "screenshots/21-ticket-lookup-tool.png",
    "chapter": "AI agent",
    "title": "Live lookup tool",
    "description": "The retrieval action targets Hillman Robotics and Tickets. Optional query parameters are collapsed in this capture."
  },
  {
    "id": "22",
    "file": "screenshots/22-agent-ticket-status-verified.png",
    "chapter": "Verification",
    "title": "Live status returned",
    "description": "The agent retrieves HR-01016 and reports New, Normal, Network, and Routed = True, matching the saved record."
  },
  {
    "id": "23",
    "file": "screenshots/23-power-bi-initial-report.png",
    "chapter": "Reporting",
    "title": "Power BI in the browser",
    "description": "The initial generated report shows a ticket-count split of 5 New, 5 In Progress, and 2 Resolved. A dedicated status chart was subsequently saved; not every automatic chart counts tickets."
  }
];
