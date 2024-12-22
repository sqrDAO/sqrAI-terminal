FROM node:23-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm build

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "start"]