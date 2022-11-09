import type { NextPage } from "next";
import { Grid, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getWithExpiry, setWithExpiry } from "@utils/localstorage";
import { genAccessToken } from "@utils/auth/line";
import loadingBicycle from "@components/lottie/loadingBicycle.json";

import Lottie from "lottie-react";
import AuthService from "@services/auth.services";
const Callback: NextPage = () => {
	const router = useRouter();
	const { code, state, action } = router.query;
	const localState = getWithExpiry("line-state");

	useEffect(() => {
		if (!code || !localState || !state) {
			return;
		}

		if (state !== localState) {
			throw new Error("Invalid state");
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
			console.log("line_id_token", line_id_token);
			console.log("accessToken", accessToken);

			setWithExpiry(
				"register",
				{
					idtoken: line_id_token,
				},
				60 * 10,
			);

			router.push("/");
		};
		getAcessToken();
	}, [action, code, localState, router, state]);

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
