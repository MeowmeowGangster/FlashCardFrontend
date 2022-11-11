import { Response } from "@interfaces/base.interface";
import { default as axios, default as request } from "axios";

const getSessionToken = async (token: string) => {
	const backendUrl = (await process.env.NEXT_PUBLIC_BACKEND_URL) as string;
	try {
		const responseSession = await axios.get(
			`${backendUrl}/auth/session?idtoken=${token}`,
		);
		console.log(responseSession);

		return responseSession.data;
	} catch (error) {
		if (request.isAxiosError(error) && error.response) {
			console.log((error.response?.data as Response).message);
		}
		return null;
	}
};

const logout = () => {
	try {
		typeof window !== "undefined" && localStorage.clear();
	} catch (error) {
		console.log(error);
	}
};

const AuthService = {
	getSessionToken,
	logout,
};

export default AuthService;
