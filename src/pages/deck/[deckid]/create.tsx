import {
	Container,
	Stack,
	Grid,
	Button,
	Typography,
	TextareaAutosize,
} from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef, useState } from "react";
import { deckById } from "@redux/selectors/decks.selector";
import { createCard } from "@interfaces/card.interface";
import { CreateCard } from "@redux/actions/card";
import Loading from "@components/loading";
import Success from "@components/lottie/success.json";

const CreateCardPage: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch<any>();
	const { deckid } = router.query;

	const [cardState, setCard] = useState<createCard>({
		cardMemo: "",
		cardName: "",
		deckID: deckid as string,
		file: undefined,
	});

	const deckState = useSelector(deckById);

	const [isUploading, setIsUploading] = useState(false);
	const [imageFile, setImageFile] = useState<File>();

	const cardimageRef = useRef<HTMLInputElement>(null);
	const onImageChange = () => {
		const files = cardimageRef.current?.files;
		if (files) {
			setImageFile(files[0]);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setCard({
			...cardState,
			[event.target.name]: event.target.value,
			deckID: deckid as string,
			file: imageFile,
		});
	};

	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsUploading(true);
		await dispatch(CreateCard(cardState));
		router.push(`/deck/${deckid}`);
		setIsUploading(false);
	};

	console.log(deckState);
	console.log(cardState);
	return (
		<div className="bglight">
			{isUploading ? (
				<Loading animationData={Success} />
			) : (
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
						<form onSubmit={onSubmit}>
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
											<TextareaAutosize
												name="cardName"
												onChange={(e: any) => handleChange(e)}
												value={cardState.cardName}
												placeholder="Card Name"
												style={{
													width: "100%",
													padding: "10px",
													color: "#000000",
													height: "50px",
													backgroundColor: "#ffffff",
													borderRadius: "50px",
													border: "none",
													fontFamily: "Prompt",
													verticalAlign: "center",
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
											fontFamily: "Prompt",
											fontSize: "1rem",
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

											<input
												type="file"
												ref={cardimageRef}
												onInput={onImageChange}
											/>
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
												name="cardMemo"
												value={cardState.cardMemo}
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
												onChange={(e: any) => handleChange(e)}
											/>
										</Stack>
									</Container>
								</Stack>
							</Container>
							<Stack
								style={{
									marginTop: "40px",
								}}
							>
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
											type="submit"
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
						</form>
					</Stack>
				</Container>
			)}
		</div>
	);
};

export default CreateCardPage;
