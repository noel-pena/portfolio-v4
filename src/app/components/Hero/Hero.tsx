"use client";

import {
	Box,
	Button,
	Grid,
	Link,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import DeveloperWindow from "@/app/components/Hero/DeveloperWindow";

export default function Hero() {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			id="home"
			sx={{
				px: 4,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "calc(100% - 64px)",
			}}
		>
			<Grid
				container
				justifyContent="space-around"
				width="100%"
				maxWidth="lg"
				spacing={4}
			>
				{!isMobile && (
					<Grid
						size={{ xs: 12, md: 6 }}
						minWidth={326}
						maxWidth={400}
						width="100%"
					>
						<DeveloperWindow />
					</Grid>
				)}
				<Grid size={{ xs: 12, md: 6 }}>
					<Stack
						display="flex"
						spacing={isMobile ? 2 : 1}
						sx={{
							alignItems: isMobile ? "center" : "flex-start",
							justifyContent: "space-between",
							px: isMobile ? 3 : 0,
							width: "100%",
						}}
					>
						<Typography
							component="h1"
							variant={isMobile ? "h3" : "h2"}
							textAlign={isMobile ? "center" : "left"}
						>
							Hi, my name is
							<Box
								component="span"
								sx={{
									background: `linear-gradient(135deg, ${theme.developerWindow.gradient.lighterBlue}, ${theme.developerWindow.fullScreenDot}, ${theme.developerWindow.minimizeDot})`,
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									display: "flex",
									justifyContent: isMobile ? "center" : "flex-start",
								}}
							>
								Noel Peña
							</Box>
						</Typography>
						<Typography
							component="p"
							variant="subtitle1"
							textAlign={isMobile ? "center" : "left"}
							color={theme.developerWindow.muted}
							sx={{ fontWeight: 200 }}
						>
							Full stack developer experienced in TypeScript, React, Flutter,
							and Kotlin. Focused on building clean, responsive applications
							across web and mobile platforms.
						</Typography>
						<Stack
							direction={isMobile ? "column" : "row"}
							alignItems="center"
							gap={isMobile ? 3 : 2}
							pt={isMobile ? 1 : 2}
						>
							<Button
								aria-label="Contact button"
								sx={{ minWidth: isMobile ? 225 : 150, p: isMobile ? 2 : 1 }}
								variant="contained"
								onClick={() => setOpen(true)}
							>
								Contact
							</Button>
							<Button
								aria-label="Resume button"
								component={Link}
								href="https://cdn.noel-pena.com/Noel-Pena.pdf"
								target="_blank"
								rel="noopener"
								sx={{ minWidth: isMobile ? 225 : 150, p: isMobile ? 2 : 1 }}
								variant="outlined"
							>
								Resume
							</Button>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			<ContactForm open={open} onClose={() => setOpen(false)} />
		</Box>
	);
}
