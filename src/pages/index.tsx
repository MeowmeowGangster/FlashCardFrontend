import PopModal from "@components/modal/modal";
import {
	AppBar,
	Button,
	Slide,
	TextField,
	Typography,
	Container,
	Grid,
	Stack,
	IconButton,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useSelector } from "react-redux";
import { decksData } from "@redux/selectors/decks.selector";
import { getDecks, createDeck } from "@redux/actions/deck";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { CreateDeck } from "@interfaces/decks.interface";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { deleteDeck } from "@redux/actions/deck";

const Home: NextPage = () => {
	const [open, setOpen] = useState(false);
	const [deckname, setDeckName] = useState("");
	const [deckStatus, setDeckStatus] = useState("idle");

	const handleDeleteDeck = async (deckId: string) => {
		console.log("Deck:", deckId);
		setDeckStatus("pending");
		await dispatch(deleteDeck(deckId));
		setDeckStatus("idle");
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setDeckName(event.target.value);
	};
	const dispatch = useDispatch<any>();
	const decks = useSelector(decksData);

	const CreateNewDeck = () => {
		const data: CreateDeck = {
			deckName: deckname,
		};
		try {
			dispatch(createDeck(data));
		} catch (e) {
			console.log(e);
		} finally {
			setDeckStatus("idle");
		}
		setOpen(false);
		setDeckName("");
	};

	useEffect(() => {
		if (deckStatus === "idle") {
			dispatch(getDecks());
		}
	}, [deckStatus, dispatch]);

	console.log(deckStatus);

	return (
		<div className="bg">
			<PopModal isOpen={open} setIsOpen={setOpen}>
				<form onSubmit={CreateNewDeck}>
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
									type="submit"
									onClick={() => {
										setDeckStatus("pending");
									}}
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
				</form>
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
					<AppBar
						component="nav"
						style={{
							backgroundColor: "#3c4757",
							boxShadow: "10px 10px 10px 10px #3c4757",
							paddingLeft: "20px",
							paddingRight: "20px",
						}}
					>
						<Typography variant="h6" component="h2">
							<h1>Choose Your Deck</h1>
						</Typography>
					</AppBar>
					<Grid
						container
						rowSpacing={2}
						style={{
							marginTop: "80px",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							paddingTop: "10px",
						}}
					>
						{decks.length > 0 &&
							decks.map((deck: any, idx: number) => (
								<Slide direction="down" in={deck} timeout={500} key={idx}>
									<Grid item xs={12}>
										<Card
											style={{
												borderRadius: "15px",
												height: "150px",
												width: "100%",
											}}
										>
											<CardHeader
												style={{
													height: "50px",
												}}
												action={
													<IconButton
														aria-label="settings"
														onClick={() => {
															handleDeleteDeck(deck.deckID);
														}}
														style={{
															height: "70%",
														}}
													>
														<CancelIcon />
													</IconButton>
												}
											/>

											<CardContent>
												<Link href={`/deck/${deck.deckID}`} passHref>
													<Typography
														variant="h5"
														component="div"
														style={{
															fontFamily: "Prompt",
															fontSize: "25px",
															color: "#3c4757",
															textAlign: "center",
														}}
													>
														{deck.deckName}
													</Typography>
												</Link>
											</CardContent>
										</Card>
									</Grid>
								</Slide>
							))}
						<Slide direction="down" in={true} timeout={500}>
							<Grid item xs={12}>
								<Button
									style={{
										backgroundColor: "#fb923c",
										borderRadius: "10px",
										color: "#ffffff",
										padding: "32px",
										fontSize: "100px",
										width: "100%",
										height: "150px",
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
						</Slide>
					</Grid>
				</Stack>
			</Container>
		</div>
	);
};

export default Home;
