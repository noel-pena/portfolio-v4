import { EmailOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import {
	Avatar,
	Box,
	Button,
	Dialog,
	DialogContent,
	type DialogProps,
	DialogTitle,
	IconButton,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { theme } from "@/theme/theme";

export default function ContactForm(props: DialogProps) {
	const { open, onClose } = props;

	return (
		<Dialog
			open={open}
			onClose={onClose}
			slotProps={{
				paper: {
					sx: {
						bgcolor: theme.palette.background.default,
						borderRadius: 2,
					},
				},
			}}
		>
			<DialogTitle>
				<Stack alignItems="center">
					<IconButton
						onClick={(e) => onClose?.(e, "backdropClick")}
						sx={{ alignSelf: "end", p: 0 }}
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
					<Typography
						pt={1}
						variant="body1"
						fontWeight="bold"
						textAlign="center"
					>
						Get in Touch
					</Typography>
					<Typography
						textAlign="center"
						variant="caption"
						color={theme.developerWindow.muted}
						fontWeight={200}
					>
						Send me a message and I will get back to you as soon as possible.
					</Typography>
				</Stack>
			</DialogTitle>
			<DialogContent>
				<Box display="flex" flexDirection="column" gap={2} pb={1}>
					<Stack>
						<Typography variant="body2">Name</Typography>
						<TextField
							slotProps={{
								input: {
									sx: { height: 36 },
								},
							}}
							fullWidth
							placeholder="Your name"
							margin="dense"
						/>
					</Stack>
					<Stack>
						<Typography variant="body2">Email</Typography>
						<TextField
							slotProps={{
								input: {
									sx: { height: 36 },
								},
							}}
							fullWidth
							placeholder="your.email@example.com"
							margin="dense"
						/>
					</Stack>
					<Stack>
						<Typography variant="body2">Message</Typography>
						<TextField
							fullWidth
							margin="dense"
							placeholder="Message me about any work or just say hello."
							multiline
							rows={5}
						/>
					</Stack>
					<Button
						sx={{ mt: 1, "& .MuiButton-endIcon": { mb: 0.25 } }}
						endIcon={<SendIcon sx={{ width: 14, height: 14 }} />}
						variant="contained"
						disableElevation
					>
						Send
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
}
