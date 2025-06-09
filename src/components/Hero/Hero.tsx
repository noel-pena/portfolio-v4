import {
	Box,
	Card,
	CardMedia,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";

function Hero() {
	const theme = useTheme();

	const codeLines = [
		{ id: 1, content: "type Developer = {" },
		{ id: 2, content: "  name: string" },
		{ id: 3, content: "  skills: Array<string>" },
		{ id: 4, content: "  experience: 'string'" },
		{ id: 5, content: "}" },
		{ id: 6, content: "" },
		{ id: 7, content: "const developer: Developer = {" },
		{ id: 8, content: "  name: 'Noel Pena'" },
		{
			id: 9,
			content: "  skills: ['TypeScript', 'JavaScript', 'Flutter', 'Kotlin']",
		},
		{ id: 10, content: "  experience: 'Full Stack Web Developer'" },
		{ id: 11, content: "}" },
	];

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100%",
			}}
		>
			<Grid
				container
				justifyContent="space-around"
				alignItems="center"
				spacing={4}
			>
				<Grid size={{ xs: 12, md: 6 }} minWidth="450px">
					<Box
						sx={{
							background: `linear-gradient(135deg, ${theme.developerWindow.gradient.lighterBlue}, ${theme.developerWindow.gradient.lightBlue}, ${theme.developerWindow.gradient.darkBlue})`,
							borderRadius: 2,
							pb: 2,
							px: 2,
							boxShadow: 6,
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Stack
								sx={{
									py: 2,
									display: "flex",
									gap: "8px",
									flexDirection: "row",
								}}
							>
								<Box
									sx={{
										width: "12px",
										height: "12px",
										borderRadius: "50%",
										bgcolor: theme.developerWindow.closeDot,
									}}
								/>
								<Box
									sx={{
										width: "12px",
										height: "12px",
										borderRadius: "50%",
										bgcolor: theme.developerWindow.minimizeDot,
									}}
								/>
								<Box
									sx={{
										width: "12px",
										height: "12px",
										borderRadius: "50%",
										bgcolor: theme.developerWindow.fullScreenDot,
									}}
								/>
							</Stack>
							<Typography
								variant="subtitle2"
								sx={{
									display: "flex",
									alignItems: "center",
									color: theme.developerWindow.textPrimary,
								}}
							>
								portfolio/components/about-me.tsx
							</Typography>
						</Box>
						<Card
							sx={{
								bgcolor: theme.developerWindow.background,
								color: theme.developerWindow.textPrimary,
								fontFamily: "monospace",
								p: 1,
								minHeight: 200,
							}}
						>
							<CardMedia sx={{ p: 1 }}>
								<Typography
									variant="subtitle2"
									sx={{ color: theme.developerWindow.textSecondary, py: 1 }}
								>
									portfolio/components/about-me.tsx
								</Typography>
								{codeLines.map((line) => (
									<Box px={1} key={line.id}>
										<Stack display="flex" direction="row">
											<Typography
												sx={{
													color: theme.developerWindow.textSecondary,
													pr: 1,
													minWidth: "28px",
													textAlign: "right",
												}}
											>
												{line.id}
											</Typography>
											<Typography
												sx={{
													color: theme.developerWindow.textPrimary,
													whiteSpace: "pre",
												}}
											>
												{line.content}
											</Typography>
										</Stack>
									</Box>
								))}
							</CardMedia>
						</Card>
					</Box>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>right</Grid>
			</Grid>
		</Box>
	);
}

export default Hero;
