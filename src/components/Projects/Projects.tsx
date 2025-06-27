import { Box, Grid, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import ProjectCard from "@/components/Projects/ProjectCard";
import { theme } from "@/theme/theme";

export default function Projects() {
	const projects = [
		{
			title: "1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			imageUrl: "",
			altText: "",
		},
		{
			title: "2",
			description:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			imageUrl: "",
			altText: "",
		},
		{
			title: "3",
			description:
				"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			imageUrl: "",
			altText: "",
		},
		{
			title: "4",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			imageUrl: "",
			altText: "",
		},
	];
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				pl: isMobile ? 0 : theme.spacing(3),
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				paddingY: theme.spacing(8),
				minHeight: isMobile ? "100%" : "75%",
			}}
		>
			<Typography
				variant="h2"
				component="h2"
				gutterBottom
				sx={{
					textAlign: "center",
					marginBottom: theme.spacing(4),
				}}
			>
				Services
			</Typography>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				spacing={5}
				sx={{ p: 2, maxWidth: isMobile ? "90%" : "70%" }}
			>
				{projects.map((project) => (
					<Grid key={project.title} size={{ xs: 12, md: 6, xl: 3 }}>
						<ProjectCard
							title={project.title}
							description={project.description}
							imageUrl={project.imageUrl}
							altText={project.altText}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
