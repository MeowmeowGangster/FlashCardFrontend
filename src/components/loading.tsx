import { Grid, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Lottie from "lottie-react";

interface LottieProps {
	animationData: any;
	loop?: boolean;
	autoplay?: boolean;
	nextPage?: string;
	text?: string;
}
function Loading({
	animationData,
	loop,
	autoplay,
	text,
	nextPage,
}: LottieProps) {
	const router = useRouter();

	useEffect(() => {
		if (nextPage) {
			router.push(nextPage);
		}
	}, [nextPage, router]);

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
					<Lottie animationData={animationData} autoplay />
					<h1
						style={{
							fontSize: "2rem",
							fontWeight: "bold",
							color: "#fff",
						}}
					>
						{text}
					</h1>
				</Grid>
			</Container>
		</div>
	);
}

export default Loading;
