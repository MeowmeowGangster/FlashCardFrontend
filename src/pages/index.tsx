import PopModal from "@components/modal/modal";
import { Button, TextField, Typography } from "@mui/material";
import { Container, Grid, Stack } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Home: NextPage = () => {
	const [open, setOpen] = useState(false);
	const [deckname, setDeckName] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDeckName(event.target.value);
	};

	const mockDecks = [
		{
			name: "Deck 1",
		},
		{
			name: "Deck 2",
		},
		{
			name: "Deck 3",
		},
		{
			name: "Deck 4",
		},
		{
			name: "Deck 5",
		},
		{
			name: "Deck 5",
		},
		{
			name: "Deck 6",
		},
		{
			name: "Deck 7",
		},
		{
			name: "Deck 8",
		},
		{
			name: "Deck 9",
		},
		{
			name: "Deck 10",
		},
		{
			name: "Deck 11",
		},
		{
			name: "Deck 12",
		},
		{
			name: "Deck 13",
		},
		{
			name: "Deck 14",
		},
		{
			name: "Deck 15",
		},
		{
			name: "Deck 16",
		},
		{
			name: "Deck 17",
		},
		{
			name: "Deck 18",
		},
		{
			name: "Deck 19",
		},
		{
			name: "Deck 20",
		},
	];
	return (
		<div className="bg">
			<PopModal isOpen={open} setIsOpen={setOpen}>
				<Stack rowGap={4}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Your Deck Name
					</Typography>

					<TextField
						value={deckname}
						variant="outlined"
						onChange={handleChange}
						placeholder="Deck Name"
						style={{
							backgroundColor: "white",
							borderRadius: "50px",
							height: "50px",
						}}
					/>
					<Grid container spacing={12}>
						<Grid item xs={6}>
							<Button
								onClick={() => setOpen(false)}
								style={{
									backgroundColor: "#8A9098",
									color: "white",
									borderRadius: "50px",
									padding: "10px 20px",
									fontFamily: "Prompt",
									width: "100px",
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
									width: "100px",
								}}
							>
								Go
							</Button>
						</Grid>
					</Grid>
				</Stack>
			</PopModal>
			<Container>
				<Stack rowGap={5}>
					<h1>Choose Your Deck</h1>

					<Grid
						container
						rowSpacing={4}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							paddingTop: "10px",
							height: "100vh",
							overflow: "auto",
							paddingBottom: "120px",
						}}
					>
						{mockDecks.length > 0 &&
							mockDecks.map((deck, idx) => (
								<Grid item xs={12} key={idx}>
									<Button
										style={{
											backgroundColor: "#ffffff",
											color: "black",
											borderRadius: "10px",
											padding: "10px 20px",
											fontFamily: "Prompt",
											width: "100%",
											height: "10rem",
										}}
									>
										<Typography variant="h3">{deck.name}</Typography>
									</Button>
								</Grid>
							))}

						<Grid item xs={12}>
							<Button className="create-btn" onClick={() => setOpen(true)}>
								<AddCircleIcon />
							</Button>
						</Grid>
					</Grid>
				</Stack>
			</Container>
		</div>
	);
};

export default Home;
