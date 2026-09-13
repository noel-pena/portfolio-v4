import { zodResolver } from "@hookform/resolvers/zod";
import { EmailOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import {
	Avatar,
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { sendContactMessage } from "./contactApi";
import { type ContactFormData, contactSchema } from "./contactSchema";
import { useSnackbar } from "./SnackbarContext";

type ContactFormProps = {
	open: boolean;
	onClose: () => void;
};

export default function ContactForm({ open, onClose }: ContactFormProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		mode: "onBlur",
	});
	const { showMessage } = useSnackbar();
	const [loading, setLoading] = React.useState(false);

	const theme = useTheme();

	const onSubmit = async (data: ContactFormData) => {
		setLoading(true);
		try {
			if (await sendContactMessage(data)) {
				showMessage("Message sent successfully.");
				reset();
				onClose();
			} else {
				showMessage("Submission error.", "error");
				console.error("Submission error.");
			}
		} catch (error) {
			showMessage("Network error. Please try again.", "error");
			console.error("Network error: ", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Dialog
			open={open}
			onClose={onClose}
			slotProps={{
				paper: {
					sx: {
						backgroundImage: "none",
						bgcolor: theme.vars?.palette.background.default,
						borderRadius: 0,
					},
				},
			}}
		>
			<DialogTitle>
				<Stack alignItems="center">
					<IconButton onClick={onClose} sx={{ alignSelf: "end", p: 0 }}>
						<CloseIcon
							fontSize="small"
							sx={{ color: theme.vars?.palette.developerWindow.muted }}
						/>
					</IconButton>
					<Avatar
						sx={{
							bgcolor: theme.vars?.palette.developerWindow.gradient.lightBlue,
							color: theme.vars?.palette.text.primary,
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
						color={theme.vars?.palette.developerWindow.muted}
						fontWeight={200}
					>
						Send me a message and I will get back to you as soon as possible.
					</Typography>
				</Stack>
			</DialogTitle>
			<DialogContent>
				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					display="flex"
					flexDirection="column"
					gap={2}
					pb={1}
				>
					<Stack>
						<Typography variant="body2">Name</Typography>
						<TextField
							{...register("name")}
							error={!!errors.name}
							helperText={errors.name?.message}
							slotProps={{
								input: {
									sx: { height: 36, borderRadius: 0, pl: 1 },
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
							{...register("email")}
							error={!!errors.email}
							helperText={errors.email?.message}
							slotProps={{
								input: {
									sx: { height: 36, borderRadius: 0, pl: 1 },
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
							{...register("message")}
							error={!!errors.message}
							helperText={errors.message?.message}
							slotProps={{
								input: {
									sx: { borderRadius: 0, p: 1 },
								},
							}}
							fullWidth
							margin="dense"
							placeholder="Message me about any work or just say hello."
							multiline
							rows={5}
						/>
					</Stack>
					<Button
						type="submit"
						sx={{ mt: 1, "& .MuiButton-endIcon": { mb: 0.25 } }}
						endIcon={
							loading ? (
								<CircularProgress size="14px" />
							) : (
								<SendIcon sx={{ width: 14, height: 14 }} />
							)
						}
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
