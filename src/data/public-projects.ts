export type PublicProject = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  github: string;
};

export const publicProjects: PublicProject[] = [
  {
    id: "chat-app",
    title: "Chat App",
    description:
      "Full-stack realtime chat with NestJS GraphQL, React, and WebSocket subscriptions.",
    stack: ["NestJS", "React", "GraphQL"],
    href: "https://chat-graphql-sigma.vercel.app/",
    github: "https://github.com/daryamhm77/chat-graphql",
  },
  {
    id: "insta",
    title: "Insta",
    description:
      "Full-stack social platform inspired by Instagram, with NestJS APIs and a Next.js client.",
    stack: ["Next.js", "NestJS", "tRPC", "Drizzle ORM"],
    href: "https://insta-full-stack-trpc-web.vercel.app/",
    github: "https://github.com/daryamhm77/insta-full-stack-trpc",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "Property listing, search, favorites and admin CMS built with Next.js and Prisma.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    href: "https://real-state-next-navy.vercel.app/",
    github: "https://github.com/daryamhm77/realState_Next",
  },
  {
    id: "deezer-music",
    title: "Deezer Music",
    description:
      "Music discovery app with Deezer catalog, playlists, favorites and auth.",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    href: "https://deezer-music-next.vercel.app/",
    github: "https://github.com/daryamhm77/deezer-music-next",
  },
  {
    id: "todo",
    title: "Todo",
    description:
      "Dated task manager with auth, calendar and per-day boards — written in JavaScript and Next.js.",
    stack: ["Next.js", "JavaScript", "MongoDB"],
    href: "https://todo-next-momento49.vercel.app/",
    github: "https://github.com/daryamhm77/todo-next",
  },
  {
    id: "imdb-tracker",
    title: "IMDB Tracker",
    description:
      "Movie tracking app with OMDb catalog, Clerk auth, favorites and watchlists.",
    stack: ["Next.js", "Clerk Auth", "MongoDB"],
    href: "https://clerk-next-auth-okln-a96cjgxi1-momento49.vercel.app/",
    github: "https://github.com/daryamhm77/imdb-tracker-next",
  },
  {
    id: "x-app",
    title: "X App",
    description:
      "X (Twitter) clone with Next.js App Router, TanStack Query and MongoDB.",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    href: "https://x-app-next.vercel.app/",
    github: "https://github.com/daryamhm77/x-app-next",
  },
];
