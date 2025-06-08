import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

function Hero() {
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
							background: "linear-gradient(135deg, #2c5364, #203a43, #0f2027)",
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
										bgcolor: "#FF5757",
									}}
								/>
								<Box
									sx={{
										width: "12px",
										height: "12px",
										borderRadius: "50%",
										bgcolor: "#FFDA65",
									}}
								/>
								<Box
									sx={{
										width: "12px",
										height: "12px",
										borderRadius: "50%",
										bgcolor: "#4CAF50",
									}}
								/>
							</Stack>
							<Typography
								variant="subtitle2"
								sx={{ display: "flex", alignItems: "center", color: "gray" }}
							>
								portfolio/components/about-me.tsx
							</Typography>
						</Box>
						<Card
							sx={{
								bgcolor: "#1e1e1e",
								color: "#d4d4d4",
								fontFamily: "monospace",
								p: 1,
								minHeight: 200,
							}}
						>
							<CardMedia sx={{ p: 1 }}>
								<Typography
									variant="subtitle2"
									sx={{ color: "darkgrey", py: 1 }}
								>
									portfolio/components/about-me.tsx
								</Typography>
								{codeLines.map((line) => (
									<Box px={1} key={line.id}>
										<Stack display="flex" direction="row">
											<Typography
												sx={{
													color: "gray",
													pr: 1,
													minWidth: "28px",
													textAlign: "right",
												}}
											>
												{line.id}
											</Typography>
											<Typography sx={{ color: "gray", whiteSpace: "pre" }}>
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
