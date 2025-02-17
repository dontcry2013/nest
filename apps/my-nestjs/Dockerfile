FROM node:lts-alpine

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

USER node
WORKDIR /home/node

COPY --chown=node:node dist/apps/my-nestjs my-nestjs

RUN npm ci --prefix my-nestjs --omit=dev --no-audit --no-fund

CMD [ "node", "my-nestjs/main.js" ]
