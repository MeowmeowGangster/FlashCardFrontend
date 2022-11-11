import AuthService from "@services/auth.services";
import { NextRouter } from "next/router";
import { Dispatch } from "redux";
import { LOGOUT } from "./types";

export const logout = () => (dispatch: Dispatch, router: NextRouter) => {
	AuthService.logout();
	dispatch({
		type: LOGOUT,
	});
	router.push("/auth/login");
};
