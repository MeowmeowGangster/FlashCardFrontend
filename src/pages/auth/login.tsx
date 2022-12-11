import type { NextPage } from "next";
import { Stack, Button, Grid, Container } from "@mui/material";
import Image from "next/image";
import { generateAuthRequest } from "@utils/auth/line";
import { useRouter } from "next/router";

const Login: NextPage = () => {
	const router = useRouter();
	return (
		<div>
			<Container className="warper">
				<div className="vert first"></div>
				<div className="vert second"></div>
				<div className="vert third"></div>
				<div className="vert fourth">
					<Grid
						container
						justifyContent="center"
						alignItems="center"
						direction="column"
						position={{ xs: "relative", md: "absolute" }}
					>
						<h1
							style={{
								fontSize: "4.5rem",
								fontWeight: "bold",
								color: "#ffffff",
								textAlign: "center",
							}}
						>
							FLASH
							<br></br>BACK
						</h1>
						<Stack direction="column" spacing={5}>
							<Button
								onClick={async () => {
									router.push(await generateAuthRequest("login"));
								}}
								variant="contained"
								color="success"
								style={{
									backgroundColor: "#06C755",
									color: "white",
									fontWeight: "regular",
									fontSize: "1.5rem",
									width: "20rem",
									borderRadius: "1.2rem",
									padding: "0.5rem",
									margin: "0.5rem 1rem",
									border: "none",
									boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
								}}
							>
								<Image
									src="/images/line.webp"
									alt="line"
									width={30}
									height={30}
								/>

								<span
									style={{
										marginRight: "1rem",
										padding: "0.5rem",
									}}
								>
									Login
								</span>
							</Button>
						</Stack>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default Login;
