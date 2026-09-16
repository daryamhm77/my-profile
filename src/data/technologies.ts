export type TechItem = {
  name: string;
  description: string;
};

export type TechCategory = {
  id: string;
  title: string;
  items: TechItem[];
};

export const techCategories: TechCategory[] = [
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "NestJS", description: "Modular TypeScript framework for production APIs and services." },
      { name: "Node.js", description: "Runtime foundation for scalable server-side applications." },
      { name: "TypeScript", description: "Strong typing across domain models, APIs and services." },
      { name: "Express", description: "Lightweight HTTP layer when a thinner stack is the right fit." },
      { name: "REST APIs", description: "Resource-oriented interfaces designed for clarity and evolution." },
      { name: "GraphQL", description: "Schema-first APIs for precise client queries, federation and typed contracts." },
      { name: "WebSockets", description: "Bidirectional channels for live updates, presence and operational events." },
      { name: "Socket.IO", description: "Realtime rooms, acknowledgements and resilient reconnects on top of sockets." },
      { name: "gRPC", description: "High-performance service-to-service communication." },
      { name: "Microservices", description: "Bounded services with clear ownership and contracts." },
      { name: "Authentication", description: "JWT, sessions and provider-based sign-in flows." },
      { name: "Authorization", description: "RBAC and ABAC policies enforced at the edge and service layer." },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      { name: "PostgreSQL", description: "Relational backbone for transactional and structured data." },
      { name: "MongoDB", description: "Document store for flexible and high-volume payloads." },
      { name: "MySQL", description: "Reliable relational option for established product stacks." },
      { name: "Redis", description: "Caching, rate limiting, pub/sub and low-latency operational state." },
      { name: "TypeORM", description: "Typed data access for NestJS and TypeScript services." },
      { name: "Drizzle ORM", description: "Type-safe SQL-first ORM with migrations and explicit query control." },
      { name: "Redis GEO", description: "Geospatial indexes for live location search and radius queries." },
      { name: "Mongoose", description: "Schema modeling and validation for MongoDB." },
      { name: "Sequelize", description: "ORM support across relational databases when needed." },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "Next.js", description: "App Router products with SSR, routing and production UX." },
      { name: "React", description: "Component-driven interfaces for full-stack applications." },
      { name: "TypeScript", description: "End-to-end typing from API contracts to UI state." },
      { name: "JavaScript", description: "Practical frontend delivery across modern browsers." },
      { name: "Tailwind CSS", description: "Utility-first styling for fast, consistent UI systems." },
      { name: "Responsive UI", description: "Layouts that stay clear from mobile to desktop." },
    ],
  },
  {
    id: "distributed",
    title: "Messaging & Distributed Systems",
    items: [
      { name: "RabbitMQ", description: "Reliable queues for asynchronous and decoupled workflows." },
      { name: "Event-driven architecture", description: "Systems that react to domain events instead of tight coupling." },
      { name: "gRPC", description: "Typed RPC contracts between internal services." },
      { name: "GraphQL Federation", description: "Composed schemas across services without leaking internals." },
      { name: "WebSocket fan-out", description: "Realtime delivery backed by Redis pub/sub when scale requires it." },
      { name: "Microservices", description: "Independent deployable units with explicit boundaries." },
      { name: "API Gateway", description: "Central entry for auth, routing and cross-cutting concerns." },
      { name: "Distributed communication", description: "Sync and async patterns chosen per workload." },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    items: [
      { name: "Docker", description: "Reproducible environments from local to production." },
      { name: "Docker Compose", description: "Local multi-service stacks for fast iteration." },
      { name: "Kubernetes", description: "Orchestration for resilient microservice deployments." },
      { name: "CI/CD", description: "Automated test, build and release pipelines." },
      { name: "AWS", description: "Cloud storage and infrastructure for production workloads." },
      { name: "Nginx", description: "Reverse proxying and edge routing." },
      { name: "Linux", description: "Server fundamentals for debugging and operations." },
      { name: "Git / GitHub", description: "Version control, reviews and collaboration workflows." },
    ],
  },
  {
    id: "security",
    title: "Security",
    items: [
      { name: "JWT", description: "Stateless auth tokens with clear expiry and claims." },
      { name: "RBAC / ABAC", description: "Role and attribute-based access control models." },
      { name: "2FA", description: "Additional verification for sensitive account flows." },
      { name: "OAuth", description: "Provider-based login including Google authentication." },
      { name: "Session security", description: "Hardened cookies and session lifecycle handling." },
      { name: "XSS / CSRF", description: "Defenses against common web attack vectors." },
      { name: "Brute-force protection", description: "Rate limits and lockout strategies on auth endpoints." },
      { name: "Secure API design", description: "Least privilege, validation and safe defaults by design." },
    ],
  },
];

export const codePhilosophy = [
  "Strong typing",
  "Clean boundaries",
  "Readable code",
  "Testability",
  "Security",
  "Performance",
  "Maintainability",
  "Production readiness",
];
