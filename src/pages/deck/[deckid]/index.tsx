import { Container, Stack, Grid, Button, Box } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Image from "next/image";

const Deck: NextPage = () => {
	const router = useRouter();
	const { deckid } = router.query;

	const mockData = [
		{
			name: "Card 1",
			description: "This is the first card",
			picture: "https://source.unsplash.com/random/200x200?sig=3",
		},
		{
			name: "Card 2",
			description: "This is the second card",
			picture: "https://source.unsplash.com/random/200x200?sig=3",
		},
		{
			name: "Card 3",
			description: "This is the third card",
			picture: "https://source.unsplash.com/random/200x200?sig=3",
		},
		{
			name: "Card 4",
			description: "This is the fourth card",
			picture: "https://source.unsplash.com/random/200x200?sig=3",
		},

		{
			name: "Card 5",
			description: "This is the fifth card",
			picture: "https://source.unsplash.com/random/200x200?sig=3",
		},
		{
			name: "Card 6",
			description: "This is the sixth card",
			picture: "https://source.unsplash.com/random/200x200?sig=3",
		},
		{
			name: "Card 7",
			description: "This is the seventh card",
			picture: "https://source.unsplash.com/random/200x200?sig=3",
		},
		{
			name: "Card 8",
			description: "This is the eighth card",
			picture: "https://source.unsplash.com/random/200x200?sig=3",
		},
	];
	return (
		<div className="bg">
			<Stack
				rowGap={5}
				style={{
					padding: "30px",
				}}
			>
				<Container>
					<Stack>
						<Grid
							container
							style={{
								alignItems: "start",
							}}
						>
							<Grid item md={2}>
								<p>{deckid}</p>
							</Grid>
							<Grid item md={2}>
								<p>0</p>
							</Grid>
						</Grid>
						<Container
							style={{
								width: "100%",
								height: "650px",
								overflowY: "scroll",
							}}
						>
							<Grid
								container
								spacing={{ xs: 2, md: 3 }}
								columns={{ xs: 4, sm: 8, md: 12 }}
								rowGap={2}
							>
								{mockData.map((card, index) => (
									<Grid item xs={2} sm={4} md={4} key={index}>
										<Button
											style={{
												backgroundColor: "white",
												borderRadius: "10px",
												color: "black",
												padding: "20px",
												fontSize: "12px",
												width: "120px",
												height: "120px",
												textAlign: "center",
												verticalAlign: "middle",
												textDecoration: "none",
												boxShadow: "#000",
											}}
										>
											<Box>
												<h2>{card.name}</h2>
												<p>{card.description}</p>
											</Box>
										</Button>
									</Grid>
								))}
								<Grid item xs={2} sm={4} md={4}>
									<Button
										style={{
											backgroundColor: "#fb923c",
											borderRadius: "10px",
											color: "#ffffff",
											padding: "32px",
											fontSize: "100px",
											width: "120px",
											height: "120px",
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
						</Container>
					</Stack>
				</Container>
				<Stack>
					<Grid
						container
						spacing={12}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Grid item xs={6}>
							<Button
								onClick={() => {
									router.back();
								}}
								style={{
									backgroundColor: "#8A9098",
									color: "white",
									borderRadius: "50px",
									padding: "10px 20px",
									fontFamily: "Prompt",
									width: "120px",
								}}
							>
								Cancel
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								style={{
									backgroundColor: "#FDE68A",
									color: "black",
									borderRadius: "50px",
									padding: "10px 20px",
									fontFamily: "Prompt",
									width: "120px",
								}}
							>
								Play
							</Button>
						</Grid>
					</Grid>
				</Stack>
			</Stack>
		</div>
	);
};

export default Deck;
