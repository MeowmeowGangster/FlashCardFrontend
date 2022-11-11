import PopModal from "@components/modal/modal";
import { Button, TextField, Typography } from "@mui/material";
import { Container, Grid, Stack } from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useSelector } from "react-redux";
import { decksData } from "@redux/selectors/decks.selector";
import { getDecks } from "@redux/actions/deck";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const Home: NextPage = () => {
	const [open, setOpen] = useState(false);
	const [deckname, setDeckName] = useState("");
	const router = useRouter();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDeckName(event.target.value);
	};
	const dispatch = useDispatch<any>();
	const decks = useSelector(decksData);

	useEffect(() => {
		dispatch(getDecks());
	}, [dispatch]);

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
				<Stack
					rowGap={5}
					style={{
						padding: "30px",
						height: "100vh",
						overflowY: "scroll",
					}}
				>
					<Stack></Stack>
					<h1>Choose Your Deck</h1>

					<Grid
						container
						rowSpacing={2}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							paddingTop: "10px",
						}}
					>
						{decks.length > 0 &&
							decks.map((deck: any, idx: number) => (
								<Grid item xs={12} key={idx}>
									<Link href={`/deck/${deck._id}`} passHref>
										<Button
											style={{
												backgroundColor: "#ffffff",
												color: "black",
												borderRadius: "10px",
												padding: "20px 20px",
												fontFamily: "Prompt",
												width: "100%",
												height: "200px",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<Stack rowGap={2}>
												<Typography
													style={{
														borderRadius: "40px",
														padding: "20px 20px",
														fontSize: "16px",
														fontWeight: "bold",
													}}
												>
													{deck.deckName}
												</Typography>

												<p>ID:&nbsp;{deck._id}</p>
											</Stack>
										</Button>
									</Link>
								</Grid>
							))}

						<Grid item xs={12}>
							<Button
								style={{
									backgroundColor: "#fb923c",
									borderRadius: "10px",
									color: "#ffffff",
									padding: "32px",
									fontSize: "100px",
									width: "100%",
									height: "10rem",
									textAlign: "center",
									verticalAlign: "middle",
									textDecoration: "none",
									boxShadow: "#000",
								}}
								onClick={() => setOpen(true)}
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

export default Home;
