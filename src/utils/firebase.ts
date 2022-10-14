// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import env from "@beam-australia/react-env";

const firebaseConfig = {
	apiKey: "AIzaSyDZXyf-Kv0g-QmpMwZxN1xBgz4kv1Re9Mk",
	authDomain: "standupcodelab.firebaseapp.com",
	projectId: "standupcodelab",
	storageBucket: "standupcodelab.appspot.com",
	messagingSenderId: "1060518172328",
	appId: "1:1060518172328:web:69467ca42ba906d822549d",
	measurementId: "G-123CC5LZFW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = () => {
	if (env("NODE_ENV") === "production") {
		if (typeof window !== "undefined") {
			return getAnalytics(app);
		}
	}
};

const auth = getAuth();

export { app, analytics, auth };
