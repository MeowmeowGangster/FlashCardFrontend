import { Response } from "@interfaces/base.interface";
import { auth } from "@utils/firebase";
import { AxiosResponse, default as axios, default as request } from "axios";

const getSessionToken = async (token: string) => {
	try {
		const responseSession = await axios.get(
			`/auth/session?idtoken=${token}`,
		);

		return responseSession.data.token;
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
