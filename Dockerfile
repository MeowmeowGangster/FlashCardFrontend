FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN  yarn build

EXPOSE 8080 443 80

CMD [ "yarn", "start", "--port", "8080" ]