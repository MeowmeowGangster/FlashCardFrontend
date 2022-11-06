import { Container, Grid, Stack } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="bg">
			<Container>
				<Stack rowGap={5}>
					<h1>Choose Your Deck</h1>

					<Grid>
						<div className="create-btn">
							<h1>+</h1>
						</div>
					</Grid>
				</Stack>
			</Container>
		</div>
	);
};

export default Home;
