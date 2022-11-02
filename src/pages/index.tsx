import { Button, Container, Grid, Stack } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div style={{
			backgroundColor: "#FDE",
			
		}}>
			
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
							color: "#000000",
						}}
					>
						Flashback
					</h1>
					<Stack direction="column" spacing={5}>
						<Button
							variant="contained"
							color="success"
							style={{
								backgroundColor: "#FB923C",
								color: "white",
								fontWeight: "bold",
								fontSize: "1.2rem",
								borderRadius: "2rem",
								padding: "0.5rem 1rem",
								margin: "0.5rem 1rem",
								border: "none",
								boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.4)",
							}}
						>
							<span>Play</span>
						</Button>
						<Button
							variant="contained"
							color="success"
							style={{
								backgroundColor: "#00C300",
								color: "white",
								fontWeight: "bold",
								fontSize: "1.2rem",
								borderRadius: "2rem",
								padding: "0.5rem 1rem",
								margin: "0.5rem 1rem",
								border: "none",
								boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.4)",
							}}
						>
							<span>Set Deck</span>
						</Button>
					</Stack>
				</Grid>
			
		</div>
	);
};

export default Home;
