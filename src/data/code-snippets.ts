export type CodeSnippet = {
  id: string;
  title: string;
  language: string;
  filename: string;
  code: string;
};

export const codeSnippets: CodeSnippet[] = [
  {
    id: "auth-guard",
    title: "Authentication Guard",
    language: "typescript",
    filename: "jwt-auth.guard.ts",
    code: `@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = this.extractBearer(request.headers.authorization);

    if (!token) {
      throw new UnauthorizedException("Missing credentials");
    }

    request.user = this.jwt.verify(token);
    return true;
  }
}`,
  },
  {
    id: "redis-cache",
    title: "Redis Caching",
    language: "typescript",
    filename: "property.service.ts",
    code: `async findBySlug(slug: string): Promise<Property> {
  const cacheKey = \`property:\${slug}\`;
  const cached = await this.redis.get(cacheKey);

  if (cached) {
    return JSON.parse(cached) as Property;
  }

  const property = await this.properties.findBySlug(slug);
  await this.redis.set(cacheKey, JSON.stringify(property), "EX", 300);
  return property;
}`,
  },
  {
    id: "typeorm-query",
    title: "TypeORM Query",
    language: "typescript",
    filename: "order.repository.ts",
    code: `async listOpenOrders(customerId: string): Promise<Order[]> {
  return this.orders.find({
    where: {
      customerId,
      status: Not(In(["cancelled", "fulfilled"])),
    },
    order: { createdAt: "DESC" },
    relations: { items: true },
  });
}`,
  },
];
