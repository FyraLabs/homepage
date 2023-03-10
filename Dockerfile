FROM node:17-alpine as dependencies
WORKDIR /my-project
COPY package.json ./
RUN yarn install

FROM node:17-alpine as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN yarn build

FROM node:17-alpine as runner
WORKDIR /my-project
ENV NODE_ENV production

COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]