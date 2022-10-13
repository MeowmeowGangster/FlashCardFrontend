FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN  yarn build

EXPOSE 8080 443 3000

CMD [ "yarn", "start" ]