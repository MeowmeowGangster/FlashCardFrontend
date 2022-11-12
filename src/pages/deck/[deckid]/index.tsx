import { Container, Stack, Grid, Button, Box } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDeckById } from "@redux/actions/deck";
import { deckById} from "@redux/selectors/decks.selector";

const Deck: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch<any>();
	const { deckid } = router.query;

;
	const deck = useSelector(deckById);

	useEffect(() => {
		console.log(deckid);
		dispatch(getDeckById(deckid as string));
	}, [deckid, dispatch]);

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
									{deck?.cards?.map((card, index) => (
										<Grid item xs={2} sm={4} md={4} key={index}>
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
												height: "180px",
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
			</Container>
		</div>
	);
};

export default Deck;
