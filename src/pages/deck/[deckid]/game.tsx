import {
	Container,
	Stack,
	AppBar,
	Typography,
	Grid,
	Button,
	Card,
} from "@mui/material";
import type { NextPage } from "next";
import router from "next/router";
import ReactCardFlip from "react-card-flip";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getRandomCards } from "@redux/actions/card";
import { useDispatch, useSelector } from "react-redux";
import { getDeckById } from "@redux/actions/deck";
import { deckById } from "@redux/selectors/decks.selector";
import { randomCard } from "@interfaces/card.interface";
import { randomCards } from "@redux/selectors/card.selector";

const Game: NextPage = () => {
	const dispatch = useDispatch<any>();
	const [isFlipped, setIsFlipped] = useState(false);
	const { deckid } = router.query;
	const [card, setCard] = useState<any>({});
	const [activeCard, setActiveCard] = useState<any>(0);

	useEffect(() => {
		dispatch(getDeckById(deckid as string));
	}, [deckid, dispatch]);

	const deck = useSelector(deckById);
	const cards = useSelector(randomCards);

	console.log("card", cards);

	useEffect(() => {
		if (deck) {
			const data: randomCard = {
				deckID: deckid as string,
				limit: deck.cards.length,
			};
			dispatch(getRandomCards(data));
		}
	}, [deck, deckid, dispatch]);

	useEffect(() => {
		setCard(cards[activeCard]);
	}, [activeCard, cards]);

	return (
		<div className="bg">
			<Container>
				<Stack
					rowGap={5}
					style={{
						padding: "10px",
						height: "100vh",
						overflowY: "scroll",
						justifyContent: "center",
						alignContent: "center",
					}}
				>
					<AppBar
						component="nav"
						style={{
							backgroundColor: "#3c4757",
							padding: "20px",
						}}
					>
						<Stack direction="row" spacing={3} justifyContent="space-between">
							<Typography
								variant="h6"
								component="h2"
								onClick={() => router.back()}
							>
								Back
							</Typography>
						</Stack>
					</AppBar>
					<Container>
						<Stack>
							<Container
								style={{
									marginTop: "20px",
									width: "100%",
									height: "600px",
									overflowY: "scroll",
								}}
							>
								<Stack rowGap={5}>
									<Stack direction="row" spacing={3} justifyContent="center">
										<Typography
											variant="h4"
											component="h2"
											style={{
												color: "white",
												marginTop: "5%",
												marginBottom: "-5%",
											}}
										>
											{card?.cardName}
										</Typography>
									</Stack>

									<ReactCardFlip
										isFlipped={isFlipped}
										flipDirection="horizontal"
									>
										<Card
											style={{
												backgroundColor: "white",
												borderRadius: "15px",
												height: "500px",
											}}
											onClick={() => setIsFlipped(!isFlipped)}
										>
											<Stack
												direction="row"
												spacing={3}
												style={{
													padding: "20px",
												}}
											>
												<Typography
													variant="h6"
													component="h2"
													style={{
														justifyContent: "center",
														alignContent: "center",
													}}
												>
													{/* Full cover imagge here */}
													<Image
														src={
															card?.cardPic
																? card?.cardPic
																: "/images/no-pictures.png"
														}
														alt="test"
														width={500}
														height={500}
														objectFit="cover"
														layout="fill"
														style={{
															borderRadius: "15px",
														}}
													/>
												</Typography>
											</Stack>
										</Card>
										<Card
											style={{
												backgroundColor: "#FDE68A",
												borderRadius: "15px",
												height: "500px",
											}}
											onClick={() => setIsFlipped(!isFlipped)}
										>
											<Stack
												direction="row"
												justifyContent={"center"}
												spacing={2}
												marginTop={"70%"}
											>
												<Typography
													variant="h4"
													component="h2"
													style={{ color: "black" }}
												>
													{card?.cardMemo}
												</Typography>
											</Stack>
										</Card>
									</ReactCardFlip>
								</Stack>
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
								justifyContent: "center",
							}}
						>
							<Grid item md={4}>
								<Button
									onClick={() => {
										if (activeCard < cards.length - 1) {
											setActiveCard(activeCard + 1);
										} else {
											router.push(`/deck/${card.deckID}`);
										}
									}}
									style={{
										backgroundColor: "#fb923c",
										color: "white",
										borderRadius: "50px",
										padding: "10px 20px",
										fontFamily: "Prompt",
										width: "230px",
										fontSize: "20px",
									}}
								>
									Next
								</Button>
							</Grid>
						</Grid>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default Game;
