import type { NextPage } from "next";
import { Grid, Container } from "@mui/material";

const Callback: NextPage = () => {
	return (
		<div>
			<Container
				maxWidth="xl"
				style={{
					backgroundColor: "#FDE",
				}}
			>
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					direction="column"
					style={{ minHeight: "100vh" }}
				>
					<h1
						style={{
							fontSize: "3rem",
							fontWeight: "bold",
							color: "#111827",
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
