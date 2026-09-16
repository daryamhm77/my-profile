export type Note = {
  id: string;
  title: string;
  description: string;
  readingTime: string;
  date: string;
};

export const notes: Note[] = [
  {
    id: "redis-caching",
    title: "Redis Caching Strategies",
    description:
      "Choosing cache-aside, write-through and TTL patterns for NestJS services under real traffic.",
    readingTime: "6 min",
    date: "2026-03-12",
  },
  {
    id: "grpc-rabbitmq",
    title: "gRPC vs RabbitMQ",
    description:
      "When synchronous contracts beat queues — and when event-driven communication scales better.",
    readingTime: "7 min",
    date: "2026-02-18",
  },
  {
    id: "hexagonal-nestjs",
    title: "Hexagonal Architecture with NestJS",
    description:
      "Keeping domain logic free of frameworks with ports, adapters and clear module boundaries.",
    readingTime: "8 min",
    date: "2026-01-24",
  },
  {
    id: "booking-system",
    title: "Designing a Scalable Booking System",
    description:
      "Search, availability, payments and caching decisions for an accommodation marketplace.",
    readingTime: "9 min",
    date: "2025-12-09",
  },
];

export const aboutCopy = {
  paragraphs: [
    "I'm a Backend-focused Full-Stack Engineer specializing in TypeScript and Node.js ecosystems.",
    "I build production-oriented applications across backend, databases, frontend and infrastructure, with a strong focus on scalable architecture, clean code and real-world system requirements.",
    "My main backend stack is NestJS, while I use Next.js and React to build modern full-stack applications.",
  ],
};
