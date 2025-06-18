import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import DeveloperWindow from "@/components/Hero/DeveloperWindow";

function Hero() {
	const theme = useTheme();

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
				width="100%"
				maxWidth="lg"
			>
				<Grid
					size={{ xs: 12, md: 6 }}
					minWidth={386}
					maxWidth={400}
					width="100%"
				>
					<DeveloperWindow />
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<Typography variant="h2">
						Hi, my name is
						<Box
							component="span"
							sx={{
								background: `linear-gradient(135deg, ${theme.developerWindow.gradient.lighterBlue}, ${theme.developerWindow.fullScreenDot}, ${theme.developerWindow.minimizeDot})`,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								display: "inline-block",
							}}
						>
							Noel Peña
						</Box>
					</Typography>
					<Typography
						variant="subtitle1"
						color={theme.developerWindow.muted}
						sx={{ fontWeight: 200 }}
					>
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
						consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
						quisque faucibus ex sapien vitae pellentesque.
					</Typography>
					<Stack direction="row" gap={3} pt={2}>
						<Button variant="contained">Contact</Button>
						<Button variant="outlined">Projects</Button>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Hero;
