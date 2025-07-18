import { EmailOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
	Avatar,
	Dialog,
	DialogContent,
	type DialogProps,
	DialogTitle,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { theme } from "@/theme/theme";

interface ContactFormProps extends DialogProps {
	isMobile?: boolean;
}

export default function ContactForm(props: ContactFormProps) {
	const { open, onClose } = props;

	return (
		<Dialog
			open={open}
			onClose={onClose}
			slotProps={{
				paper: {
					sx: {
						bgcolor: theme.palette.background.default,
					},
				},
			}}
		>
			<DialogTitle>
				<Stack alignItems="center">
					<IconButton
						onClick={(e) => onClose?.(e, "backdropClick")}
						sx={{ alignSelf: "end" }}
					>
						<CloseIcon
							fontSize="small"
							sx={{ color: theme.developerWindow.muted }}
						/>
					</IconButton>
					<Avatar
						sx={{
							bgcolor: theme.developerWindow.gradient.lightBlue,
							color: theme.palette.text.primary,
						}}
					>
						<EmailOutlined />
					</Avatar>
					<Typography pt={1} variant="body1" fontWeight="bold">
						Get in Touch
					</Typography>
					<Typography
						variant="caption"
						color={theme.developerWindow.muted}
						fontWeight={200}
					>
						Send me a message and I will get back to you as soon as possible.
					</Typography>
				</Stack>
			</DialogTitle>
			<DialogContent>..forms</DialogContent>
		</Dialog>
	);
}
