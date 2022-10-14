FROM node:18-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
RUN npm ci --only=production

ENV NEXT_TELEMETRY_DISABLED=1


RUN npm run build

EXPOSE 8080 443 80

CMD [ "yarn", "start", "--port", "8080" ]