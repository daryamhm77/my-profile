export type ExperienceItem = {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "mitabase",
    period: "April 2026 — June 2026",
    company: "Mitabase",
    role: "Backend Engineer",
    location: "Frankfurt, Germany (Remote)",
    summary: "Enterprise-grade real-time driver and vehicle tracking system.",
    highlights: [
      "Designed and implemented a real-time live monitoring platform and bidirectional WebSocket gateways using Socket.IO",
      "Implemented high-performance live driver tracking using Redis GEO location services (GEOADD, GEOSEARCH, GEORADIUS)",
      "Built a Direct Chat service supporting one-to-one messaging with real-time event delivery and Redis Pub/Sub distribution",
      "Designed scalable backend services following Hexagonal Architecture and integrated MinIO for media uploads",
    ],
    technologies: [
      "NestJS",
      "Socket.IO",
      "WebSockets",
      "Redis GEO",
      "Redis Pub/Sub",
      "Hexagonal Architecture",
      "MinIO",
    ],
  },
  {
    id: "etm-passport",
    period: "May 2025 — Present",
    company: "ETM Passport",
    role: "Backend Engineer",
    location: "Frankfurt, Germany (Remote)",
    summary: "Enterprise Digital Product Passport platform on microservices.",
    highlights: [
      "Developed core services for a distributed NestJS microservices architecture (15+ services) utilizing RabbitMQ for async communication",
      "Implemented secure authentication/authorization leveraging JWT, session management, RBAC, and ABAC",
      "Built high-performance REST APIs via API Gateway and orchestrated Docker-based microservices deployments",
      "Designed automated CI/CD pipelines, integrating Redis for caching/rate-limiting and MinIO for secure S3 storage",
    ],
    technologies: [
      "NestJS",
      "Microservices",
      "RabbitMQ",
      "JWT",
      "RBAC",
      "ABAC",
      "REST",
      "API Gateway",
      "Redis",
      "MinIO",
      "Docker",
      "CI/CD",
    ],
  },
  {
    id: "pantohealth",
    period: "Sep 2025 — May 2026",
    company: "PANTOhealth",
    role: "Backend Engineer",
    location: "Berlin, Germany (Remote)",
    summary:
      "Enterprise IoT railway monitoring and predictive maintenance platform.",
    highlights: [
      "Developed backend services for railway monitoring systems and built optimized MongoDB queries for processing high-volume IoT sensor data",
      "Implemented advanced Redis caching strategies to improve application performance and throughput",
      "Integrated AWS S3 for scalable cloud object storage and designed RabbitMQ-based asynchronous workflows",
      "Built and maintained CI/CD pipelines for automated testing and managed Dockerized production environments",
    ],
    technologies: [
      "NestJS",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "AWS S3",
      "Docker",
      "CI/CD",
    ],
  },
  {
    id: "selltory",
    period: "Oct 2025 — Jan 2026",
    company: "Selltory",
    role: "Backend Engineer",
    location: "Boston, USA (Remote)",
    summary: "E-commerce / sales infrastructure platform.",
    highlights: [
      "Developed backend services using NestJS and Apollo GraphQL Server for order management, product catalog, and customer operations",
      "Designed efficient GraphQL schemas and resolvers, and improved API response times under high traffic",
      "Collaborated with cross-functional teams to build scalable, maintainable, production-ready backend services following microservices best practices",
      "Optimized database performance and introduced caching for high-traffic commerce flows",
    ],
    technologies: [
      "NestJS",
      "Apollo GraphQL",
      "GraphQL",
      "Microservices",
      "Caching",
    ],
  },
];
