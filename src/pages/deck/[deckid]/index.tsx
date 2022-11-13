import {
	Container,
	Stack,
	Grid,
	Button,
	Box,
	Typography,
	AppBar,
	Grow,
	Slide,
} from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDeckById } from "@redux/actions/deck";
import { deckById } from "@redux/selectors/decks.selector";
import Link from "next/link";

const Deck: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch<any>();
	const { deckid } = router.query;
	const [deck, setDeck] = useState<any>(null);
	const [deckStatus, setDeckStatus] = useState("idle");

	useEffect(() => {
		if (deckStatus === "idle") {
			dispatch(getDeckById(deckid as string));
		}
	}, [deckStatus, deckid, dispatch]);

	const deckState = useSelector(deckById);

	useEffect(() => {
		setDeck(deckState);
	}, [deckState]);
	return (
		<div className="bg">
			<Container>
				<Stack
					rowGap={5}
					style={{
						padding: "30px",
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
						<Typography variant="h6" component="h2">
							{deck?.deckName}
						</Typography>
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
								<Grid
									container
									spacing={{ xs: 1, md: 3 }}
									columns={{ xs: 4, sm: 8, md: 12 }}
									rowGap={2}
								>
									{deck?.cards?.map((card: any, index: number) => (
										<Grow
											in={card}
											key={index}
											style={{
												transformOrigin: "0 0 0",
											}}
											{...(card
												? { timeout: 1000, transitionDelay: "500ms" }
												: {})}
										>
											<Grid item xs={2} sm={4} md={4}>
												<Button
													style={{
														backgroundColor: "white",
														borderRadius: "10px",
														color: "black",
														padding: "20px",
														fontSize: "12px",
														width: "120px",
														height: "180px",
														textAlign: "center",
														verticalAlign: "middle",
														textDecoration: "none",
														boxShadow: "#000",
													}}
												>
													<Box>
														<h2>{card?.cardName}</h2>
														<p>{card?.cardMemo}</p>
													</Box>
												</Button>
											</Grid>
										</Grow>
									))}
									<Grow
										in={true}
										style={{
											transformOrigin: "0 0 0",
										}}
										{...(true
											? { timeout: 1000, transitionDelay: "1000ms" }
											: {})}
									>
										<Grid item xs={2} sm={4} md={4}>
											<Link href="/card/create">
												<Button
													style={{
														backgroundColor: "#fb923c",
														borderRadius: "10px",
														color: "#ffffff",
														padding: "32px",
														fontSize: "100px",
														width: "120px",
														height: "180px",
														textAlign: "center",
														verticalAlign: "middle",
														textDecoration: "none",
														boxShadow: "#000",
													}}
												>
													<AddCircleIcon />
												</Button>
											</Link>
										</Grid>
									</Grow>
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
			</Container>
		</div>
	);
};

export default Deck;
