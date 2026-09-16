export type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  category: string;
  architecture: string;
  technologies: string[];
  focus: string[];
  private: boolean;
  href?: string;
};

export const projects: Project[] = [
  {
    id: "mitabase",
    title: "Mitabase",
    description:
      "Enterprise-grade real-time driver and vehicle tracking platform with live monitoring and chat.",
    role: "Backend Engineer",
    category: "Real-Time Systems",
    architecture: "Hexagonal · WebSocket gateways · Redis Pub/Sub",
    technologies: [
      "NestJS",
      "Socket.IO",
      "WebSockets",
      "Redis GEO",
      "Redis Pub/Sub",
      "MinIO",
      "Hexagonal Architecture",
    ],
    focus: [
      "Live monitoring",
      "Driver tracking",
      "GEO queries",
      "Direct chat",
      "Realtime events",
      "Media uploads",
    ],
    private: true,
  },
  {
    id: "etm",
    title: "ETM Passport",
    description:
      "Enterprise Digital Product Passport platform built as a distributed NestJS microservices system.",
    role: "Backend Engineer",
    category: "Backend / Distributed Systems",
    architecture: "Microservices · API Gateway · Event-driven",
    technologies: [
      "NestJS",
      "TypeScript",
      "RabbitMQ",
      "Redis",
      "JWT",
      "RBAC",
      "ABAC",
      "REST",
      "Docker",
      "MinIO",
      "CI/CD",
    ],
    focus: [
      "15+ microservices",
      "API Gateway",
      "Authentication",
      "Authorization",
      "Async messaging",
      "Caching",
      "Rate limiting",
      "Object storage",
    ],
    private: true,
  },
  {
    id: "panto",
    title: "PANTOhealth",
    description:
      "Enterprise IoT railway monitoring and predictive-maintenance platform.",
    role: "Backend Engineer",
    category: "Enterprise / IoT",
    architecture: "Event-driven · Message queues · Cloud storage",
    technologies: [
      "NestJS",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "AWS S3",
      "Docker",
      "CI/CD",
    ],
    focus: [
      "High-volume sensor data",
      "MongoDB query optimization",
      "Redis caching",
      "Async workflows",
      "Cloud storage",
      "CI/CD",
    ],
    private: true,
  },
  {
    id: "selltory",
    title: "Selltory",
    description:
      "E-commerce / sales infrastructure platform for orders, catalog and customer operations.",
    role: "Backend Engineer",
    category: "Backend / Commerce",
    architecture: "Microservices · Apollo GraphQL",
    technologies: [
      "NestJS",
      "Apollo GraphQL",
      "GraphQL",
      "TypeScript",
      "Caching",
    ],
    focus: [
      "Order management",
      "Product catalog",
      "Customer operations",
      "GraphQL schemas",
      "API performance",
      "Microservices",
    ],
    private: true,
  },
];
