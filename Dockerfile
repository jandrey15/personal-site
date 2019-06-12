# Do the npm install or yarn install in the full image
FROM mhart/alpine-node:10 AS builder
WORKDIR /app
COPY package*.json /app
RUN yarn install
COPY . /app
RUN yarn build && yarn --production

# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:base
LABEL maintainer="web@johnserrano.co"
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]