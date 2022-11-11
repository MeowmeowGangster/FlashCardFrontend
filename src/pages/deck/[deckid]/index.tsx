import { Container, Stack, Grid, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Deck: NextPage = () => {
	const router = useRouter();
	const { deckid } = router.query;
	return (
		<div className="bg">
			<Container>
				<Stack
					rowGap={5}
					style={{
						padding: "30px",
					}}
				>
					<h1>Deck: {deckid}</h1>

					<Grid
						container
						rowSpacing={4}
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "start",
							justifyContent: "start",
							paddingTop: "10px",
							height: "250px",
							width: "250px",
							overflow: "auto",
						}}
					>
						<Grid item xs={12}>
							<Button
								style={{
									backgroundColor: "#fb923c",
									borderRadius: "10px",
									color: "#ffffff",
									padding: "32px",
									fontSize: "100px",
									width: "10rem",
									height: "10rem",
									textAlign: "center",
									verticalAlign: "middle",
									textDecoration: "none",
									boxShadow: "#000",
								}}
							>
								<AddCircleIcon />
							</Button>
						</Grid>
					</Grid>
				</Stack>
			</Container>
		</div>
	);
};

export default Deck;
