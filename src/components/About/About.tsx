import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { YEARS_OF_EXPERIENCE } from "../../constants";
import Experience from "../Experience/Experience";
import { projectsData } from "../Projects/projectsData";
import { skillsData } from "../Skills/skillsData";
import Section, { SubHeading } from "../shared/Section";

const stats: Array<{ value: string; label: string }> = [
	{ value: `${YEARS_OF_EXPERIENCE}+`, label: "Years of Engineering" },
	{ value: `${projectsData.length}`, label: "Featured Projects" },
	{ value: `${skillsData.length}`, label: "Technologies Used" },
	{ value: "∞", label: "Cups of Coffee" },
];

export default function About() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Section
			id="about"
			title="About"
			accent="Me"
			subtitle="The Person Behind the Keyboard"
		>
			<Typography
				variant="body1"
				textAlign={isMobile ? "left" : "center"}
				color={theme.vars?.palette.developerWindow.muted}
				sx={{ fontWeight: 200, mb: 5, px: { xs: 0, md: 6 } }}
			>
				I'm a full-stack engineer based in Orlando, FL with a background in
				business operations and technical support. I build scalable enterprise
				applications with React, TypeScript, and Kotlin, and I care about
				performance at every layer — from frontend rendering to backend queries.
				Always learning, always building.
			</Typography>
			<Grid container spacing={3}>
				{stats.map((stat) => (
					<Grid key={stat.label} size={{ xs: 6, md: 3 }}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								gap: 1,
								py: 3,
								px: 1,
								backgroundColor: theme.vars?.palette.background.default,
								boxShadow: 3,
								height: "100%",
							}}
						>
							<Typography
								variant="h4"
								component="p"
								color={theme.vars?.palette.glowColors.green}
							>
								{stat.value}
							</Typography>
							<Typography
								variant="caption"
								textAlign="center"
								color={theme.vars?.palette.developerWindow.muted}
								sx={{ fontWeight: 200 }}
							>
								{stat.label}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
			<SubHeading title="Career Timeline" />
			<Experience />
		</Section>
	);
}
