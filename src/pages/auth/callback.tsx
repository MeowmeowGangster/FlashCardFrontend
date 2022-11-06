import type { NextPage } from "next";
import { Grid, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getWithExpiry } from "@utils/localstorage";
import { genAccessToken } from "@utils/auth/line";
import loadingBicycle from "@components/lottie/loadingBicycle.json";

import Lottie from "lottie-react";
const Callback: NextPage = () => {
	const router = useRouter();
	const { code, state, action } = router.query;

	useEffect(() => {
		if (!code || !state) {
			return;
		}

		const getAcessToken = async () => {
			const accessToken = await genAccessToken(
				code as string,
				action as string,
			);

			if (!accessToken) {
				router.push("/auth/login");
				return;
			}

			const line_id_token = getWithExpiry("line-id_token");
			console.log("line_id_token", line_id_token);
			console.log("accessToken", accessToken);

			router.push("/");
		};
		getAcessToken();
	}, [action, code, router, state]);

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
