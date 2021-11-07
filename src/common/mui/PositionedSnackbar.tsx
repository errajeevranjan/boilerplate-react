import { IconButton, Alert, Snackbar } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import { MdClose } from "react-icons/md";

type TransitionProps = Omit<SlideProps, "direction">;

type SnackbarProps = {
	message: string;
	messageType: "success" | "info" | "warning" | "error";
	open: boolean;
	setOpen: (open: boolean) => void;
};

const TransitionLeft = (props: TransitionProps) => {
	return <Slide {...props} direction='left' />;
};

const PositionedSnackbar = ({
	message,
	messageType,
	open,
	setOpen,
}: SnackbarProps) => {
	const handleClose = () => {
		setOpen(!open);
	};

	return (
		<Snackbar
			open={open}
			key={message}
			onClose={handleClose}
			autoHideDuration={3000}
			TransitionComponent={TransitionLeft}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			action={
				<IconButton
					aria-label='close snackbar'
					color='inherit'
					sx={{ p: 0.5 }}
					onClick={handleClose}>
					<MdClose />
				</IconButton>
			}>
			<Alert
				// variant='filled'
				onClose={handleClose}
				severity={messageType}>
				<strong>{message}</strong>
			</Alert>
		</Snackbar>
	);
};

export default PositionedSnackbar;
