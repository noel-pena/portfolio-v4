import DeveloperWindow from "@/components/Hero/DeveloperWindow";
import { Box, Grid } from "@mui/material";
import type React from "react";

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
				width="100%"
				maxWidth="lg"
			>
				<Grid size={{ xs: 12, md: 6 }}>
					<DeveloperWindow />
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>right</Grid>
			</Grid>
		</Box>
	);
}

export default Hero;
