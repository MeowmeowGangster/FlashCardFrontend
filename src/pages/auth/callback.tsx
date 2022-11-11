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

const Callback: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { code, state, action } = router.query;

	const localState = getWithExpiry("line-state");

	useEffect(() => {
		if (!code || !localState) {
			return;
		}

		const getAcessToken = async () => {
			const accessToken = await genAccessToken(
				code as string,
				action as string,
			);

			if (!accessToken) {
				return;
			}

			const sessionToken = await AuthService.getSessionToken(accessToken);
			const line_id_token = getWithExpiry("line-id_token");
			console.log("sessionToken", sessionToken);

			// console.log("line_id_token", line_id_token);
			// console.log("accessToken", accessToken);

			setWithExpiry(
				"register",
				{
					idtoken: line_id_token,
				},
				60 * 10,
			);
			setWithExpiry("provider", "line", 60 * 10);

			dispatch({
				type: "auth/LOGIN_SUCCESS",
				payload: {
					token: sessionToken,
					provider: "line",
				},
			});

			router.push("/");
		};;
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
