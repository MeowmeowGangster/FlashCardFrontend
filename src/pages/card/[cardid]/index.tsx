import {
	Container,
	Stack,
	Grid,
	Button,
	Typography,
	TextField,
	TextareaAutosize,
} from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDeckById } from "@redux/actions/deck";
import { deckById } from "@redux/selectors/decks.selector";

const EditCard: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch<any>();
	const { cardid } = router.query;
	const [card, setCard] = useState<any>(null);
	const [deckStatus, setDeckStatus] = useState("idle");

	useEffect(() => {
		if (deckStatus === "idle") {
			dispatch(getDeckById(cardid as string));
		}
	}, [deckStatus, cardid, dispatch]);

	const deckState = useSelector(deckById);

	useEffect(() => {
		setCard(deckState);
	}, [deckState]);
	return (
		<div className="bglight">
			<Container>
				<Stack
					rowGap={5}
					style={{
						padding: "10px",
						height: "100vh",
						overflowY: "scroll",
						justifyContent: "center",
						alignContent: "center",
						fontFamily: "Prompt",
					}}
				>
					<Container>
						<Stack>
							<Container
								style={{
									marginTop: "20px",
									width: "100%",
									height: "160px",
									color: "#000000",
									padding: "20px",
									backgroundColor: "#fde68a",
									borderRadius: "20px",
									border: "none",
									boxShadow: "10px 10px 20px -9px rgba(0,0,0,0.29)",
								}}
							>
								<Stack rowGap={5}>
									<Typography variant="h6" component="h2">
										Name Your Card
									</Typography>
									<TextField
										placeholder="Card Name"
										style={{
											width: "100%",
											padding: "15px",
											color: "#000000",
											height: "50px",
											backgroundColor: "#ffffff",
											borderRadius: "50px",
											border: "none",
										}}
									/>
								</Stack>
							</Container>
							<Container
								style={{
									marginTop: "20px",
									width: "100%",
									height: "100px",
									color: "#000000",

									backgroundColor: "#fde68a",
									borderRadius: "20px",
									padding: "20px",

									boxShadow: "10px 10px 20px -9px rgba(0,0,0,0.29)",
								}}
							>
								<Stack>
									<Typography variant="h6" component="h2">
										Picture
									</Typography>

									<input type="file" />
								</Stack>
							</Container>
							<Container
								style={{
									marginTop: "20px",
									width: "100%",
									height: "200px",
									color: "#000000",

									backgroundColor: "#fde68a",
									borderRadius: "20px",
									padding: "20px",
									boxShadow: "10px 10px 20px -9px rgba(0,0,0,0.29)",
								}}
							>
								<Stack>
									<Typography variant="h6" component="h2">
										Memo
									</Typography>
									<TextareaAutosize
										placeholder="memo"
										style={{
											width: "100%",
											padding: "10px",
											color: "#000000",
											height: "100px",
											border: "none",
											backgroundColor: "#ffffff",
											borderRadius: "20px",
										}}
									/>
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
							}}
						>
							<Grid item xs={6}>
								<Button
									onClick={() => {
										router.back();
									}}
									style={{
										backgroundColor: "transparent",
										color: "#000",
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
										backgroundColor: "#fb923c",
										color: "white",
										borderRadius: "50px",
										padding: "10px 20px",
										fontFamily: "Prompt",
										width: "120px",
									}}
								>
									Save
								</Button>
							</Grid>
						</Grid>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default EditCard;
