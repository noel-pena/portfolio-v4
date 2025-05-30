import { Box, Card, CardMedia, Grid } from "@mui/material";

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
				<Grid size={{ xs: 12, md: 6 }}>
					<Box
						sx={{
							background: "linear-gradient(135deg, #2c5364, #203a43, #0f2027)",
							borderRadius: 3,
							padding: 2,
							boxShadow: 6,
						}}
					>
						<Card
							sx={{
								backgroundColor: "#1e1e1e",
								color: "#d4d4d4",
								fontFamily: "monospace",
								padding: 2,
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
