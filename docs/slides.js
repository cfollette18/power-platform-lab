const slides = [
  {
    "id": "01",
    "file": "screenshots/01-environment.png",
    "chapter": "Foundation",
    "title": "Environment",
    "description": "Created the lab environment and Dataverse database.",
    "crop": [
      28,
      132,
      1423,
      894
    ],
    "size": [
      1479,
      1088
    ]
  },
  {
    "id": "02",
    "file": "screenshots/02-solution.png",
    "chapter": "Foundation",
    "title": "Solution",
    "description": "Organized the app, table, and flow in the HillmanRobotics solution.",
    "crop": [
      28,
      132,
      1696,
      402
    ],
    "size": [
      1752,
      596
    ]
  },
  {
    "id": "03",
    "file": "screenshots/03-ticket-schema.png",
    "chapter": "Foundation",
    "title": "Ticket table",
    "description": "Defined the ticket fields, data types, and required values.",
    "crop": [
      28,
      132,
      1495,
      982
    ],
    "size": [
      1551,
      1176
    ]
  },
  {
    "id": "04",
    "file": "screenshots/04-sample-tickets.png",
    "chapter": "Foundation",
    "title": "Sample tickets",
    "description": "Added ten fictional tickets across five support categories.",
    "crop": [
      28,
      132,
      764,
      474
    ],
    "size": [
      820,
      668
    ]
  },
  {
    "id": "05",
    "file": "screenshots/05-technician-app.png",
    "chapter": "Power Apps",
    "title": "Technician app",
    "description": "Built the technician app to view and update tickets.",
    "crop": [
      28,
      134,
      1378,
      918
    ],
    "size": [
      1434,
      1115
    ]
  },
  {
    "id": "06",
    "file": "screenshots/06-ticket-detail.png",
    "chapter": "Power Apps",
    "title": "Status update",
    "description": "Updated a ticket to In Progress and saved the change.",
    "crop": [
      28,
      134,
      1378,
      879
    ],
    "size": [
      1434,
      1074
    ]
  },
  {
    "id": "07",
    "file": "screenshots/07-flow-trigger.png",
    "chapter": "Automation",
    "title": "Routing flow",
    "description": "Started routing when a new ticket is added.",
    "crop": [
      28,
      132,
      639,
      601
    ],
    "size": [
      695,
      795
    ]
  },
  {
    "id": "08",
    "file": "screenshots/08-dataverse-trigger.png",
    "chapter": "Automation",
    "title": "New-ticket trigger",
    "description": "Set the trigger to new rows in the Tickets table.",
    "crop": [
      28,
      132,
      633,
      381
    ],
    "size": [
      689,
      575
    ]
  },
  {
    "id": "09",
    "file": "screenshots/09-routing-default.png",
    "chapter": "Automation",
    "title": "Default team",
    "description": "Used Service Desk as the default routing team.",
    "crop": [
      28,
      132,
      632,
      198
    ],
    "size": [
      688,
      392
    ]
  },
  {
    "id": "10",
    "file": "screenshots/10-category-routing.png",
    "chapter": "Automation",
    "title": "Category rules",
    "description": "Routed VPN issues to Network and account issues to Identity.",
    "crop": [
      28,
      132,
      1760,
      811
    ],
    "size": [
      1816,
      1005
    ]
  },
  {
    "id": "11",
    "file": "screenshots/11-priority-and-update.png",
    "chapter": "Automation",
    "title": "Priority rules",
    "description": "Assigned priority by impact, then saved the team and routing flag.",
    "crop": [
      28,
      132,
      1046,
      965
    ],
    "size": [
      1102,
      1159
    ]
  },
  {
    "id": "14",
    "file": "screenshots/14-vpn-test-before-save.png",
    "chapter": "Verification",
    "title": "Test ticket",
    "description": "Created a VPN test ticket affecting one user.",
    "crop": [
      28,
      132,
      1322,
      779
    ],
    "size": [
      1378,
      973
    ]
  },
  {
    "id": "15",
    "file": "screenshots/15-vpn-routing-success.png",
    "chapter": "Verification",
    "title": "Flow run",
    "description": "Ran the flow and checked the successful record update.",
    "crop": [
      36,
      180,
      1153,
      1753
    ],
    "size": [
      1940,
      1990
    ]
  },
  {
    "id": "16",
    "file": "screenshots/16-vpn-ticket-routed.png",
    "chapter": "Verification",
    "title": "Routing result",
    "description": "Confirmed Network routing and Normal priority on the saved ticket.",
    "crop": [
      28,
      132,
      1280,
      755
    ],
    "size": [
      1336,
      949
    ]
  },
  {
    "id": "17",
    "file": "screenshots/17-helpdesk-agent-overview.png",
    "chapter": "AI agent",
    "title": "Help desk agent",
    "description": "Configured the agent with ticket-intake and ticket-status skills.",
    "crop": [
      28,
      188,
      1607,
      880
    ],
    "size": [
      1663,
      1170
    ]
  },
  {
    "id": "18",
    "file": "screenshots/18-create-ticket-tool.png",
    "chapter": "AI agent",
    "title": "Create-ticket tool",
    "description": "Connected the agent to the Dataverse create-ticket action.",
    "crop": [
      28,
      132,
      1013,
      816
    ],
    "size": [
      1069,
      1009
    ]
  },
  {
    "id": "19",
    "file": "screenshots/19-agent-ticket-confirmation.png",
    "chapter": "AI agent",
    "title": "Ticket submission",
    "description": "Confirmed the request in chat and received ticket HR-01016.",
    "crop": [
      28,
      132,
      1000,
      780
    ],
    "size": [
      1056,
      978
    ]
  },
  {
    "id": "20",
    "file": "screenshots/20-agent-ticket-verified.png",
    "chapter": "Verification",
    "title": "Ticket verification",
    "description": "Verified the agent-created ticket in the technician app.",
    "crop": [
      28,
      132,
      1156,
      772
    ],
    "size": [
      1212,
      1000
    ]
  },
  {
    "id": "21",
    "file": "screenshots/21-ticket-lookup-tool.png",
    "chapter": "AI agent",
    "title": "Status lookup tool",
    "description": "Connected a Dataverse action to look up existing tickets.",
    "crop": [
      28,
      132,
      1028,
      700
    ],
    "size": [
      1084,
      887
    ]
  },
  {
    "id": "22",
    "file": "screenshots/22-agent-ticket-status-verified.png",
    "chapter": "Verification",
    "title": "Status lookup",
    "description": "Retrieved the ticket status, priority, and assigned team through the agent.",
    "crop": [
      28,
      132,
      1000,
      750
    ],
    "size": [
      1056,
      937
    ]
  },
  {
    "id": "23",
    "file": "screenshots/23-power-bi-initial-report.png",
    "chapter": "Reporting",
    "title": "Power BI report",
    "description": "Opened the ticket data in Power BI and reviewed counts by status.",
    "crop": [
      28,
      132,
      1500,
      950
    ],
    "size": [
      1556,
      1137
    ]
  }
];
