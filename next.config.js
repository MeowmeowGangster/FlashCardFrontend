const moduleExports = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_FIREBASE_APIKEY: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    NEXT_PUBLIC_FIREBASE_AUTHDOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECTID: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    NEXT_PUBLIC_FIREBASE_APPID: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENTID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
    NEXT_PUBLIC_LINE_CHANNEL_ID: process.env.NEXT_PUBLIC_LINE_CHANNEL_ID,
    NEXT_PUBLIC_LINE_CHANNEL_SECRET: process.env.NEXT_PUBLIC_LINE_CHANNEL_SECRET,
    NEXT_PUBLIC_LINE_REDIRECT_URI: process.env.NEXT_PUBLIC_LINE_REDIRECT_URI,
    NEXT_PUBLIC_LINE_CODE_VERIFIER: process.env.NEXT_PUBLIC_LINE_CODE_VERIFIER,
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "profile.line-scdn.net",
      "storage.cloud.google.com",
      "firebasestorage.googleapis.com",
      "images.unsplash.com",
      "static.ghost.org",
    ],
  },
};


module.exports = moduleExports
