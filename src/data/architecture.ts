export type ArchitectureZone = {
  id: string;
  label: string;
  description: string;
  nodes: string[];
};

export type ArchitectureProtocol = {
  id: string;
  name: string;
  useWhen: string;
};

export type ArchitecturePrinciple = {
  id: string;
  title: string;
  description: string;
};

export const architectureZones: ArchitectureZone[] = [
  {
    id: "presentation",
    label: "Presentation",
    description: "Product UI and client delivery",
    nodes: ["Next.js", "React", "SSR / CSR"],
  },
  {
    id: "edge",
    label: "API Edge",
    description: "Entry, auth and protocol routing",
    nodes: ["API Gateway", "REST", "GraphQL", "WebSocket"],
  },
  {
    id: "application",
    label: "Application",
    description: "Domain services and use cases",
    nodes: ["NestJS", "Auth / ABAC", "Domain services", "Use cases"],
  },
  {
    id: "data",
    label: "Data & State",
    description: "Persistence, cache and queries",
    nodes: ["TypeORM", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    id: "async",
    label: "Async & Integration",
    description: "Events and service contracts",
    nodes: ["RabbitMQ", "gRPC", "Socket fan-out", "Object Storage"],
  },
  {
    id: "platform",
    label: "Platform",
    description: "Runtime, delivery and operations",
    nodes: ["Docker", "Kubernetes", "CI/CD", "AWS / Nginx"],
  },
];

export const architectureProtocols: ArchitectureProtocol[] = [
  {
    id: "rest",
    name: "REST",
    useWhen: "Stable resource APIs, public integrations and simple CRUD flows",
  },
  {
    id: "graphql",
    name: "GraphQL",
    useWhen: "Client-driven queries, aggregated views and evolving product UIs",
  },
  {
    id: "websocket",
    name: "WebSocket",
    useWhen: "Realtime updates, presence, notifications and live dashboards",
  },
  {
    id: "grpc",
    name: "gRPC",
    useWhen: "Low-latency internal service contracts with strong typing",
  },
  {
    id: "events",
    name: "Events",
    useWhen: "Decoupled workflows, retries and cross-service side effects",
  },
];

export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    id: "boundaries",
    title: "Clear boundaries",
    description:
      "Domain logic stays isolated from transport, persistence and infrastructure adapters.",
  },
  {
    id: "contracts",
    title: "Explicit contracts",
    description:
      "REST, GraphQL, WebSocket and gRPC interfaces are intentional — not accidental.",
  },
  {
    id: "data",
    title: "Right persistence",
    description:
      "SQL with TypeORM for transactional integrity; documents and Redis when the workload demands it.",
  },
  {
    id: "ops",
    title: "Production readiness",
    description:
      "Caching, observability, authz and deployability are designed in from the start.",
  },
];

export const architecturePrinciple =
  "I design systems with clear boundaries between business logic, infrastructure and external services — choosing REST, GraphQL, WebSockets, gRPC or events based on the workload, not habit.";
