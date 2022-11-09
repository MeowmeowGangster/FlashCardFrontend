import PopModal from "@components/modal/modal";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Container, Grid, Stack } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const Home: NextPage = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="bg">
			<PopModal isOpen={open} setIsOpen={setOpen}>
				<Stack rowGap={4}>
					<Stack rowGap={1}>
						<IconButton
							onClick={() => setOpen(false)}
							style={{
								position: "relative",
								left: "50%",
							}}
						>
							<CloseIcon
								style={{
									backgroundColor: "red",
									borderRadius: "50%",
									color: "white",
								}}
							/>
						</IconButton>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Your Deck Name
						</Typography>
					</Stack>

					<TextField
						variant="outlined"
						placeholder="Deck Name"
						style={{
							backgroundColor: "white",
							borderRadius: "50px",
							height: "50px",
						}}
					/>
					<Grid container spacing={12}>
						<Grid item md={6}>
							<Button
								style={{
									backgroundColor: "#8A9098",
									color: "white",
									borderRadius: "50px",
									padding: "10px 20px",
									fontFamily: "Prompt",
									width: "100%",
								}}
							>
								Cancel
							</Button>
						</Grid>
						<Grid item md={6}>
							<Button
								style={{
									backgroundColor: "#FDE68A",
									color: "black",
									borderRadius: "50px",
									padding: "10px 20px",
									fontFamily: "Prompt",
									width: "100%",
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

					<Grid>
						<button className="create-btn" onClick={() => setOpen(true)}>
							<h1>+</h1>
						</button>
					</Grid>
				</Stack>
			</Container>
		</div>
	);
};

export default Home;
