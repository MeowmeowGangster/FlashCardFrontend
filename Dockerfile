# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

ENV NODE_ENV=${NODE_ENV}
ENV NEXT_PUBLIC_FIREBASE_APIKEY=${NEXT_PUBLIC_FIREBASE_APIKEY}
ENV NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=${NEXT_PUBLIC_FIREBASE_AUTHDOMAIN}
ENV NEXT_PUBLIC_FIREBASE_PROJECTID=${NEXT_PUBLIC_FIREBASE_PROJECTID}
ENV NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=${NEXT_PUBLIC_FIREBASE_STORAGEBUCKET}
ENV NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=${NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID}
ENV NEXT_PUBLIC_FIREBASE_APPID=${NEXT_PUBLIC_FIREBASE_APPID}
ENV NEXT_PUBLIC_FIREBASE_MEASUREMENTID=${NEXT_PUBLIC_FIREBASE_MEASUREMENTID} 
ENV NEXT_PUBLIC_LINE_CHANNEL_ID=${NEXT_PUBLIC_LINE_CHANNEL_ID}
ENV NEXT_PUBLIC_LINE_CHANNEL_SECRET=${NEXT_PUBLIC_LINE_CHANNEL_SECRET}
ENV NEXT_PUBLIC_LINE_REDIRECT_URI=${NEXT_PUBLIC_LINE_REDIRECT_URI}
ENV NEXT_PUBLIC_LINE_CODE_VERIFIER=${NEXT_PUBLIC_LINE_CODE_VERIFIER}
ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}

RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]