import type { NextPage } from "next";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Login: NextPage = () => {
	return (
		<div>
			<h1>Login</h1>
			<Stack direction="row" spacing={2}>
				<Button color="secondary">Secondary</Button>
				<Button variant="contained" color="success">
					Success
				</Button>
				<Button variant="outlined" color="error">
					Error
				</Button>
			</Stack>
		</div>
	);
};

export default Login;
