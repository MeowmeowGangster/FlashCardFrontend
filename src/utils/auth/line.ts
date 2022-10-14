import {
	getProfileBody,
	LineAccessTokenBody,
	lineAccessTokenResponse,
} from "@interfaces/line.interface";
import { auth } from "@utils/firebase";
import { getWithExpiry, setWithExpiry } from "@utils/localstorage";
import axios from "axios";
import { signInWithCustomToken } from "firebase/auth";
import { nanoid } from "nanoid";
import env from "@beam-australia/react-env";

const generateAuthRequest = (action: string) => {
	const response_type = "code";
	const client_id = env("NEXT_PUBLIC_LINE_CHANNEL_ID") as string;
	const redirect_uri =
		env("NEXT_PUBLIC_LINE_REDIRECT_URI") + "?action=" + action;
	const state = nanoid();
	const scope = "profile%20openid%20email";

	setWithExpiry("line-state", state, 60 * 5);

	return `https://access.line.me/oauth2/v2.1/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}`;
};

const genAccessToken = async (code: string, action: string) => {
	const body: LineAccessTokenBody = {
		grant_type: "authorization_code",
		code: code,
		redirect_uri:
			(env("NEXT_PUBLIC_LINE_REDIRECT_URI") as string) + "?action=" + action,
		client_id: env("NEXT_PUBLIC_LINE_CHANNEL_ID") as string,
		client_secret: env("NEXT_PUBLIC_LINE_CHANNEL_SECRET") as string,
		code_verifier: env("NEXT_PUBLIC_LINE_CODE_VERIFIER") as string,
	};

	const param = () => {
		let str = "";
		for (const key in body) {
			str += `${key}=${body[key]}&`;
		}
		return str;
	};

	try {
		const URL = "https://api.line.me/oauth2/v2.1/token";
		const response = await axios.post<lineAccessTokenResponse>(URL, param(), {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		});

		console.log(response.data);
		const backendUrl = env("NEXT_PUBLIC_BACKEND_URL") as string;
		const client_id = env("NEXT_PUBLIC_LINE_CHANNEL_ID") as string;
		const res = await axios.get(
			`${backendUrl}/auth/login?idtoken=${response.data.access_token}&channelid=${client_id}`,
		);
		const ClaimsToken = res.data.token;

		const result = await signInWithCustomToken(auth, ClaimsToken);
		const tokenResult = await result.user.getIdTokenResult(true);
		setWithExpiry("line-id_token", tokenResult.token, 3600);
		return tokenResult.token;
	} catch (error) {
		console.log(error);
		return null;
	}
};
const getProfileInfo = async () => {
	const id_token = getWithExpiry("line-id_token") as string;

	if (!id_token) {
		return null;
	}

	const data: getProfileBody = {
		id_token: id_token,
		client_id: env("NEXT_PUBLIC_LINE_CHANNEL_ID") as string,
	};

	const param = () => {
		let str = "";
		for (const key in data) {
			str += `${key}=${data[key]}&`;
		}
		return str;
	};

	try {
		const response = await axios.post(
			"https://api.line.me/oauth2/v2.1/verify",
			param(),
		);
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export { generateAuthRequest, genAccessToken, getProfileInfo };
