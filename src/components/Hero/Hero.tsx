import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
	Box,
	Button,
	Grid,
	IconButton,
	Link,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useContactForm } from "../../components/ContactForm/ContactFormContext";
import DeveloperWindow from "../../components/Hero/DeveloperWindow";
import TypedCodeLine from "../../components/Hero/TypedCodeLine";
import { RESUME_URL } from "../../constants";

export default function Hero() {
	const { openContactForm } = useContactForm();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			id="home"
			sx={{
				px: 4,
				pt: { xs: 12, md: 4 },
				pb: { xs: 4, md: 4 },
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: { xs: 4, md: 2 },
				minHeight: "100%",
			}}
		>
			<Grid
				container
				justifyContent="space-around"
				alignItems="center"
				maxWidth="lg"
				spacing={{ xs: 5, md: 4 }}
			>
				<Grid
					size={{ xs: 12, md: 6 }}
					maxWidth={400}
					sx={{ display: { xs: "none", md: "block" } }}
				>
					<DeveloperWindow />
				</Grid>
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
							Hi, I am
							<Box
								component="span"
								sx={{
									background: `linear-gradient(135deg, ${theme.vars?.palette.developerWindow.gradient.lighterBlue}, ${theme.vars?.palette.developerWindow.fullScreenDot}, ${theme.vars?.palette.developerWindow.minimizeDot})`,
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
							color={theme.vars?.palette.developerWindow.muted}
							sx={{ fontWeight: 200 }}
						>
							Full stack developer experienced in TypeScript, React, Flutter,
							Java, and Kotlin.
						</Typography>
						<TypedCodeLine />
						<Stack
							direction={isMobile ? "column" : "row"}
							alignItems="center"
							gap={isMobile ? 2 : 2}
							pt={isMobile ? 1 : 2}
							width={isMobile ? "100%" : "auto"}
						>
							<Button
								aria-label="Contact button"
								sx={{
									minWidth: 150,
									width: isMobile ? "100%" : "auto",
									maxWidth: 320,
									p: isMobile ? 2 : 1,
								}}
								variant="contained"
								onClick={openContactForm}
							>
								Contact
							</Button>
							<Button
								aria-label="Resume button"
								component={Link}
								href={RESUME_URL}
								target="_blank"
								rel="noopener"
								sx={{
									minWidth: 150,
									width: isMobile ? "100%" : "auto",
									maxWidth: 320,
									p: isMobile ? 2 : 1,
								}}
								variant="outlined"
							>
								Resume
							</Button>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			<IconButton
				aria-label="scroll to about section"
				component={Link}
				href="#about"
				sx={{
					color: theme.vars?.palette.developerWindow.muted,
					"@keyframes heroScrollPulse": {
						"0%, 100%": { opacity: 0.25 },
						"50%": { opacity: 1 },
					},
					animation: "heroScrollPulse 2.5s ease-in-out infinite",
					"@media (prefers-reduced-motion: reduce)": {
						animation: "none",
					},
				}}
			>
				<KeyboardArrowDownIcon />
			</IconButton>
		</Box>
	);
}
