import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface Props {
	children: JSX.Element;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 350,
	bgcolor: "#3C4757",

	boxShadow: 20,
	borderRadius: "20px",

	p: 4,
};

export default function PopModal({ children, isOpen, setIsOpen }: Props) {
	return (
		<div>
			<Modal
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				open={isOpen}
				onClose={setIsOpen}
			>
				<Box sx={style}>{children}</Box>
			</Modal>
		</div>
	);
}
