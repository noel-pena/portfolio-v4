"use client";

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
	type DialogProps,
	DialogTitle,
	IconButton,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { theme } from "@/theme/theme";
import { useSnackbar } from "./SnackbarContext";

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.email("Invalid email address"),
	message: z
		.string()
		.min(5, "Minimum 5 characters")
		.max(200, "Maximum 200 characters"),
});

type FormData = z.infer<typeof formSchema>;

type ContactFormProps = DialogProps & {
	onResult?: (msg: string) => void;
};

export default function ContactForm(props: ContactFormProps) {
	const { open, onClose } = props;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		mode: "onBlur",
	});
	const { showMessage } = useSnackbar();
	const [loading, setLoading] = React.useState(false);

	const onSubmit = async (data: FormData) => {
		setLoading(true);
		try {
			const response = await fetch("https://formspree.io/f/xkgzrvyv", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				showMessage("Message sent successfully.");
				onClose?.({}, "backdropClick");
			} else {
				showMessage("Submission error.");
				console.error("Submission error.");
			}
		} catch (error) {
			showMessage("Network error. Please try again.");
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
							{...register("name")}
							error={!!errors.name}
							helperText={errors.name?.message}
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
							{...register("email")}
							error={!!errors.email}
							helperText={errors.email?.message}
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
							{...register("message")}
							error={!!errors.message}
							helperText={errors.message?.message}
							fullWidth
							margin="dense"
							placeholder="Message me about any work or just say hello."
							multiline
							rows={5}
						/>
					</Stack>
					<Button
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
						onClick={handleSubmit(onSubmit)}
					>
						Send
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
}
