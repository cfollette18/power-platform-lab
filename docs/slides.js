const slides = [
  {
    "id": "01",
    "file": "screenshots/01-environment.png",
    "chapter": "Foundation",
    "title": "Environment",
    "description": "Created a Developer environment with Dataverse for the lab."
  },
  {
    "id": "02",
    "file": "screenshots/02-solution.png",
    "chapter": "Foundation",
    "title": "Solution",
    "description": "Created the HillmanRobotics solution to organize the app, table, and automation."
  },
  {
    "id": "03",
    "file": "screenshots/03-ticket-schema.png",
    "chapter": "Foundation",
    "title": "Ticket table",
    "description": "Added fields for category, impact, priority, status, and routing."
  },
  {
    "id": "04",
    "file": "screenshots/04-sample-tickets.png",
    "chapter": "Foundation",
    "title": "Sample tickets",
    "description": "Added ten fictional tickets across five support categories."
  },
  {
    "id": "05",
    "file": "screenshots/05-technician-app.png",
    "chapter": "Power Apps",
    "title": "Technician app",
    "description": "Built a model-driven app where technicians can view and manage tickets."
  },
  {
    "id": "06",
    "file": "screenshots/06-ticket-detail.png",
    "chapter": "Power Apps",
    "title": "Status update",
    "description": "Changed HR-01011 to In Progress and saved the record."
  },
  {
    "id": "07",
    "file": "screenshots/07-flow-trigger.png",
    "chapter": "Automation",
    "title": "Routing flow",
    "description": "Started the flow when a ticket is created and set Service Desk as the default team."
  },
  {
    "id": "08",
    "file": "screenshots/08-dataverse-trigger.png",
    "chapter": "Automation",
    "title": "New-ticket trigger",
    "description": "Configured the Dataverse trigger for added rows in the Tickets table."
  },
  {
    "id": "09",
    "file": "screenshots/09-routing-default.png",
    "chapter": "Automation",
    "title": "Default team",
    "description": "Set the routeTeam variable to Service Desk before checking the category."
  },
  {
    "id": "10",
    "file": "screenshots/10-category-routing.png",
    "chapter": "Automation",
    "title": "Category rules",
    "description": "Routed VPN issues to Network and account issues to Identity. Other categories use Service Desk."
  },
  {
    "id": "11",
    "file": "screenshots/11-priority-and-update.png",
    "chapter": "Automation",
    "title": "Priority rules",
    "description": "Set High priority for multiple users and Normal for one user. Both branches save the team and routing flag."
  },
  {
    "id": "14",
    "file": "screenshots/14-vpn-test-before-save.png",
    "chapter": "Verification",
    "title": "Test ticket",
    "description": "Entered a VPN issue affecting one user to test the routing flow."
  },
  {
    "id": "15",
    "file": "screenshots/15-vpn-routing-success.png",
    "chapter": "Verification",
    "title": "Flow run",
    "description": "The VPN test followed the Network and Normal-priority branches. The record update succeeded."
  },
  {
    "id": "16",
    "file": "screenshots/16-vpn-ticket-routed.png",
    "chapter": "Verification",
    "title": "Routing result",
    "description": "Opened HR-01015 and confirmed Network, Normal priority, and Routed = True."
  },
  {
    "id": "17",
    "file": "screenshots/17-helpdesk-agent-overview.png",
    "chapter": "AI agent",
    "title": "Help desk agent",
    "description": "Added intake and status skills to the agent. The lookup tool was connected later."
  },
  {
    "id": "18",
    "file": "screenshots/18-create-ticket-tool.png",
    "chapter": "AI agent",
    "title": "Create-ticket tool",
    "description": "Connected the Dataverse create action. The agent supplies the title, description, category, and impact."
  },
  {
    "id": "19",
    "file": "screenshots/19-agent-ticket-confirmation.png",
    "chapter": "AI agent",
    "title": "Ticket submission",
    "description": "Confirmed the request in chat. The agent created ticket HR-01016."
  },
  {
    "id": "20",
    "file": "screenshots/20-agent-ticket-verified.png",
    "chapter": "Verification",
    "title": "Ticket verification",
    "description": "Found HR-01016 in the technician app with the same request details and Network routing. Intake Channel still showed App here; I corrected the tool mapping afterward."
  },
  {
    "id": "21",
    "file": "screenshots/21-ticket-lookup-tool.png",
    "chapter": "AI agent",
    "title": "Status lookup tool",
    "description": "Connected a Dataverse List rows action to retrieve tickets from the lab environment."
  },
  {
    "id": "22",
    "file": "screenshots/22-agent-ticket-status-verified.png",
    "chapter": "Verification",
    "title": "Status lookup",
    "description": "Asked the agent about HR-01016. It returned New status, Normal priority, and the Network team."
  },
  {
    "id": "23",
    "file": "screenshots/23-power-bi-initial-report.png",
    "chapter": "Reporting",
    "title": "Power BI report",
    "description": "Opened the ticket data in Power BI on Linux. This first report shows 5 New, 5 In Progress, and 2 Resolved tickets. I then built and saved a separate status chart."
  }
];
