import { IRootState } from "@interfaces/state.interface";
import AuthService from "@services/auth.services";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
	children: JSX.Element;
}

const RouteGuard = ({ children }: Props) => {
	const router = useRouter();
	const [authorized, setAuthorized] = useState(false);
	const dispatch = useDispatch();

	const token = useSelector((state: IRootState) => state.auth.token);

	// const userStatus = useSelector((state: IRootState) => state.user.loading);

	useEffect(() => {
		authCheck(router.asPath);

		const hideContent = () => setAuthorized(false);
		router.events.on("routeChangeStart", hideContent);

		router.events.on("routeChangeComplete", authCheck);

		// if (userStatus === "idle") {
		// 	dispatch(fetchUserByToken());
		// }

		// unsubscribe from events in useEffect return function
		return () => {
			router.events.off("routeChangeStart", hideContent);
			router.events.off("routeChangeComplete", authCheck);
		};
	}, [token, dispatch, router]);

	function authCheck(url: string) {
		const publicPaths = ["auth"];
		const path = url.split("/")[1];
		console.log("path", path);

		if (!token && !publicPaths.includes(path)) {
			setAuthorized(false);

			if (!authorized) {
				AuthService.logout();
			}
			console.log("authCheck", url);
			router.push({
				pathname: "/auth/login",
				query: { returnUrl: router.asPath },
			});
		} else {
			setAuthorized(true);
		}
	}
	console.log("authorized", authorized);
	return authorized ? children : <></>;
};

export default RouteGuard;
