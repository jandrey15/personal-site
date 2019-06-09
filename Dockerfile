# FROM mhart/alpine-node:10 as base
FROM mhart/alpine-node:10

LABEL maintainer="web@johnserrano.co"

WORKDIR /app

COPY package*.json /app/

ENV NODE_ENV production

RUN yarn install

COPY . /app

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]