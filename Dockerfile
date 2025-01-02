FROM node:23-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk add --no-cache --update alpine-sdk linux-headers eudev-dev
RUN apk add --no-cache python3 py3-pip libmagic

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
