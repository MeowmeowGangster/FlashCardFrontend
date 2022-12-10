import type { NextPage } from "next";
import { Grid, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getWithExpiry, setWithExpiry } from "@utils/localstorage";
import { genAccessToken } from "@utils/auth/line";
import loadingBicycle from "@components/lottie/loadingBicycle.json";
import Lottie from "lottie-react";
import AuthService from "@services/auth.services";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

const Callback: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { code, state, action } = router.query;

	const localState = getWithExpiry("line-state");

	useEffect(() => {
		

		const getAcessToken = async () => {
			const accessToken = await genAccessToken(
				code as string,
				action as string,
			);

			if (!accessToken) {
				return;
			}

			const sessionToken = await AuthService.getSessionToken(accessToken);
			// const line_id_token = getWithExpiry("line-id_token");
			console.log("sessionToken", sessionToken);

			// console.log("line_id_token", line_id_token);
			console.log("accessToken", accessToken);
			console.log("decoded", jwt_decode(sessionToken.token));
			const decoded = jwt_decode<any>(sessionToken.token);

			const name = decoded.name as string;

			const picture = decoded.picture as string;

			const role = decoded.role as string;

			const user_id = decoded.sub as string;

			dispatch({
				type: "auth/LOGIN_SUCCESS",
				payload: {
					token: sessionToken.token,
					provider: "line",
					isLoggedIn: true,
					userId: user_id,
					role: role,
					picture: picture,
					name: name,
				},
			});

			router.push("/");
		};
		getAcessToken();
	}, [action, code, dispatch, localState, router, state]);

	return (
		<div className="bg">
			<Container>
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					direction="column"
					style={{ minHeight: "100vh" }}
				>
					<Lottie animationData={loadingBicycle} />
					<h1
						style={{
							fontSize: "2rem",
							fontWeight: "bold",
							color: "#fff",
						}}
					>
						Loading ...
					</h1>
				</Grid>
			</Container>
		</div>
	);
};

export default Callback;
