export type ProjectCase = {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  impact: string;
  image?: {
    src: string;
    alt: string;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
  status: {
    label: string;
    value: number;
  }[];
  href: string;
};

export const projects: ProjectCase[] = [
  {
    title: "Rueda -- South African e-hailing experience",
    subtitle: "Flutter-based rider + driver flows built for local mobility.",
    problem:
      "Local e-hailing teams needed a realistic, end-to-end product demo without relying on live backend services.",
    solution:
      "Delivered a fully offline Flutter experience with rider, driver, wallet, and support journeys powered by mock services.",
    features: [
      "Rider search, fare estimate, and trip timeline flow",
      "Driver mode with availability, earnings, and request handling",
      "Wallet, payment methods, and transaction ledger views",
      "Support center tickets with modal case creation"
    ],
    stack: ["Flutter", "Dart", "Provider", "Material 3", "Mock repositories"],
    impact:
      "Enables full product walkthroughs and UX validation without a backend dependency.",
    image: {
      src: "/gallery/e-hailing.jpg",
      alt: "Rueda e-hailing application interface"
    },
    status: [
      { label: "Discovery", value: 90 },
      { label: "Build", value: 86 },
      { label: "Launch", value: 78 }
    ],
    href: "https://github.com/ishmaelmafole/rueda"
  },
  {
    title: "StaffSync -- Workforce Management System",
    subtitle: "Operations visibility for growing teams and field staff.",
    problem:
      "Disparate attendance logs and shift changes made staffing decisions reactive and error-prone.",
    solution:
      "Built a centralized workforce platform that aligns scheduling, approvals, and reporting across departments.",
    features: [
      "Shift planning with role-based approvals",
      "Attendance tracking with anomaly alerts",
      "Performance dashboards for supervisors",
      "Exportable compliance-ready reports"
    ],
    stack: ["React", "Bootstrap 5", "PHP", "MySQL", "REST APIs"],
    impact:
      "Reduced scheduling conflicts, accelerated payroll readiness, and improved staffing transparency.",
    gallery: [
      {
        src: "/gallery/staff1.png",
        alt: "StaffSync dashboard overview"
      },
      {
        src: "/gallery/staff2.png",
        alt: "StaffSync staffing workflow view"
      },
      {
        src: "/gallery/staff3.png",
        alt: "StaffSync reporting interface"
      }
    ],
    status: [
      { label: "Discovery", value: 92 },
      { label: "Build", value: 88 },
      { label: "Launch", value: 84 }
    ],
    href: "https://github.com/ishmaelmafole/staffsync"
  },
  {
    title: "Travel Risk Monitor",
    subtitle: "Systems-aware risk intelligence for mobility teams.",
    problem:
      "Organizations lacked a unified view of geopolitical, health, and logistics risks for staff travel.",
    solution:
      "Created a monitoring dashboard that aggregates risk alerts, travel advisories, and response playbooks.",
    features: [
      "Risk scoring by region and itinerary",
      "Alert escalation and notification routing",
      "Incident response playbook library",
      "Audit-ready travel risk logs"
    ],
    stack: ["TypeScript", "Node.js", "SQL", "Data pipelines"],
    impact:
      "Enabled proactive decision-making and safer travel approvals for leadership teams.",
    status: [
      { label: "Discovery", value: 90 },
      { label: "Build", value: 82 },
      { label: "Launch", value: 76 }
    ],
    href: "https://github.com/ishmaelmafole/travel-risk-monitor"
  },
  {
    title: "Suncrest High School -- Dynamic & Official Websites",
    subtitle: "Dual web presence for community updates and academic operations.",
    problem:
      "The school needed both a marketing-focused public site and a secure portal for internal updates.",
    solution:
      "Delivered a paired website system with shared branding, role-aware content, and event publishing tools.",
    features: [
      "Content-managed news and events",
      "Admissions and policy resource hub",
      "Mobile-first layouts for parents",
      "Staff-only content streams"
    ],
    stack: ["React", "Bootstrap 5", "PHP", "CMS tooling"],
    impact:
      "Strengthened public engagement and reduced manual communication overhead.",
    status: [
      { label: "Discovery", value: 94 },
      { label: "Build", value: 88 },
      { label: "Launch", value: 90 }
    ],
    href: "https://github.com/ishmaelmafole/suncrest-websites"
  },
  {
    title: "Airline Reservation System",
    subtitle: "End-to-end booking lifecycle with audit controls.",
    problem:
      "Legacy reservation flows lacked visibility, causing seat mismatches and customer delays.",
    solution:
      "Engineered a reservation platform with real-time seat inventory, ticketing, and payment tracking.",
    features: [
      "Seat inventory with concurrency safeguards",
      "Ticket issuance and customer profile history",
      "Admin auditing and override workflow",
      "Revenue and occupancy reporting"
    ],
    stack: ["PHP", "SQL", "Bootstrap 5", "Linux"],
    impact:
      "Increased booking accuracy while giving admins a full operational audit trail.",
    status: [
      { label: "Discovery", value: 88 },
      { label: "Build", value: 84 },
      { label: "Launch", value: 78 }
    ],
    href: "https://github.com/ishmaelmafole/airline-reservation"
  },
  {
    title: "Inventory Control System",
    subtitle: "Stock intelligence for multi-site businesses.",
    problem:
      "Inventory mismatches between branches created financial leakage and slow replenishment.",
    solution:
      "Designed a centralized inventory system with role-based access and predictive restock insights.",
    features: [
      "Stock movement tracking",
      "Low-stock alerts with reorder guidance",
      "Supplier management workflows",
      "Multi-location reporting"
    ],
    stack: ["React", "SQL", "PHP", "Linux"],
    impact:
      "Reduced stockouts and improved procurement decisions across locations.",
    status: [
      { label: "Discovery", value: 84 },
      { label: "Build", value: 80 },
      { label: "Launch", value: 74 }
    ],
    href: "https://github.com/ishmaelmafole/inventory-control"
  },
  {
    title: "Wellness Circle",
    subtitle: "Digital platform for health, counseling, and community care.",
    problem:
      "Wellness programs struggled to maintain confidential, personalized support channels.",
    solution:
      "Built a secure portal that balances anonymity, care workflows, and resource discovery.",
    features: [
      "Confidential session scheduling",
      "Resource library with filters",
      "Community check-in prompts",
      "Care team reporting dashboard"
    ],
    stack: ["Next.js", "PostgreSQL", "Tailored RBAC"],
    impact:
      "Elevated participation and preserved privacy for sensitive wellness journeys.",
    status: [
      { label: "Discovery", value: 90 },
      { label: "Build", value: 83 },
      { label: "Launch", value: 70 }
    ],
    href: "https://github.com/ishmaelmafole/wellness-circle"
  },
  {
    title: "ALX Low-Level Programming",
    subtitle: "Systems programming portfolio: printf and simple_shell.",
    problem:
      "Core systems projects require precise memory management, process control, and I/O performance.",
    solution:
      "Implemented foundational C utilities with disciplined testing and POSIX compliance.",
    features: [
      "Custom printf formatting engine",
      "Shell command parsing and execution",
      "Process management with fork/exec",
      "Memory-safe string utilities"
    ],
    stack: ["C", "Linux", "Shell", "Valgrind"],
    impact:
      "Strengthened low-level engineering intuition and system reliability practices.",
    status: [
      { label: "Discovery", value: 78 },
      { label: "Build", value: 92 },
      { label: "Launch", value: 88 }
    ],
    href: "https://github.com/ishmaelmafole/alx-low-level"
  }
];
