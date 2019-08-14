# Do the npm install or yarn install in the full image
# FROM mhart/alpine-node:10 AS builder
# WORKDIR /app
# COPY package*.json yarn.lock ./
# RUN yarn install
# COPY . /app
# RUN yarn build && yarn install --production

# # And then copy over node_modules, etc from that stage to the smaller base image
# FROM mhart/alpine-node:base
# LABEL maintainer="web@johnserrano.co"
# WORKDIR /app
# COPY --from=builder /app .
# ENV NODE_ENV production
# EXPOSE 3000
# CMD ["node_modules/.bin/next", "start"]

FROM mhart/alpine-node:10 as base

LABEL maintainer="web@johnserrano.co"
WORKDIR /app

COPY package*.json yarn.lock ./

ENV NODE_ENV production
ENV PORT 3000

RUN yarn install
COPY . /app
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]