FROM node:16-alpine as builder

WORKDIR /app

COPY package.json package-lock.json /app/
COPY prisma ./prisma/
RUN  npm ci

COPY . /app
RUN npm run build --prod

FROM gcr.io/distroless/nodejs16-debian11


WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

CMD ["build/index.js"]