FROM node:23-alpine
RUN apk add --no-cache libc6-compat

# Install pnpm
RUN npm install -g pnpm

# Configure pnpm global
ENV PNPM_HOME=/app/.pnpm
ENV PATH=$PATH:$PNPM_HOME

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm build

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "start"]
