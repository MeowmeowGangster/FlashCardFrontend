import type { NextPage } from "next";
import { Stack, Button, Grid, Container, Paper } from "@mui/material";
import Image from "next/image";
import { generateAuthRequest } from "@utils/auth/line";
import { useRouter } from "next/router";


const styles = {
	paperContainer: {
		backgroundImage: `url(${"/image/bgForLogin.svg"})`

	}
};
const Login: NextPage = () => {
	const router = useRouter();
	return (
		<div>
			<Container>
				<Paper style={styles.paperContainer}>


					<Grid

						container
						justifyContent="center"
						alignItems="center"
						direction="column"
						style={{ minHeight: "100vh" }}
					>
						<h1
							style={{
								fontSize: "3rem",
								fontWeight: "bold",
								color: "#111827",
							}}
						>
							Login with Line
						</h1>
						<Stack direction="row" spacing={2}>
							<Button
								// onClick={async () => {
								// 	router.push(await generateAuthRequest("login"));
								// }} //NOmoreLogin
								variant="contained"
								color="success"
								style={{
									backgroundColor: "#FFFFFF",
									color: "black",
									fontWeight: "bold",
									fontSize: "1.2rem",
									borderRadius: "2rem",
									padding: "0.5rem 1rem",
									margin: "0.5rem 1rem",
									border: "none",
									boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
								}}
							>

								<Image src="/line.webp" alt="line" width={30} height={30} />

								<span
									style={{
										marginRight: "1rem",
										padding: "0.5rem"
									}}
								>
									Login with LINE
								</span>

							</Button>
						</Stack>
					</Grid>
				</Paper>
			</Container>
		</div>
	);
};

export default Login;
