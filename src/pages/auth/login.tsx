import type { NextPage } from "next";
import { Stack, Button, Grid, Container } from "@mui/material";
import Image from "next/image";
import { generateAuthRequest } from "@utils/auth/Line";
import { useRouter } from "next/router";

const Login: NextPage = () => {
	const router = useRouter();
	return (
		<div>
			<Container
				maxWidth="xl"
				style={{
					backgroundColor: "#FDE",
				}}
			>
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
							onClick={() => {
								router.push(generateAuthRequest("login"));
							}}
							variant="contained"
							color="success"
							style={{
								backgroundColor: "#00C300",
								color: "white",
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

							<span style={{ marginLeft: "1rem" }}>Login with Line</span>
						</Button>
					</Stack>
				</Grid>
			</Container>
		</div>
	);
};

export default Login;
