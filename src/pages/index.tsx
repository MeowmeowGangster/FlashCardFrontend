import { Container, Grid, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<Container className="bg">
				<Stack rowGap={5}>
					<Typography>
						<h1>Choose Your Deck</h1>
					</Typography>
					<Grid>
						<div className="create-btn">
							<Typography>
								<h1>+</h1>
							</Typography>
						</div>
					</Grid>
				</Stack>
			</Container>
		</div>
	);
};

export default Home;
