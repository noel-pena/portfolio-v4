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
					<Card>
						<CardMedia>left</CardMedia>
					</Card>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>right</Grid>
			</Grid>
		</Box>
	);
}

export default Hero;
