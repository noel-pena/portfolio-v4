import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

function Hero() {
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
				<Grid size={{ xs: 12, md: 6 }} minWidth="350px">
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
							<CardMedia>left</CardMedia>
						</Card>
					</Box>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>right</Grid>
			</Grid>
		</Box>
	);
}

export default Hero;
