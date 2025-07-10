import { Box, Grid, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import ProjectCard from "@/components/Projects/ProjectCard";
import { projectsData } from "@/components/Projects/projectsData";
import { theme } from "@/theme/theme";

export default function Projects() {
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			id="projects"
			sx={{
				flexDirection: "column",
				minHeight: "100%",
				pb: 3,
				pt: isMobile ? 7 : 0,
				px: 4,
			}}
		>
			<Stack>
				<Typography
					variant={isMobile ? "h4" : "h3"}
					textAlign={isMobile ? "left" : "center"}
					sx={{ mb: 1 }}
				>
					Featured Projects
				</Typography>
				<Typography
					variant={isMobile ? "body1" : "subtitle1"}
					textAlign={isMobile ? "left" : "center"}
					color={theme.developerWindow.muted}
					sx={{ fontWeight: 200, mb: isMobile ? 3 : 5 }}
				>
					A Showcase of My Personal Projects as a Full-stack Developer
				</Typography>
			</Stack>
			<Grid container justifyContent="center" alignItems="center" spacing={5}>
				{projectsData.map((project) => (
					<Grid key={project.title} size={{ xs: 12, md: 6, xl: 3 }}>
						<ProjectCard
							title={project.title}
							description={project.description}
							imageUrl={project.imageUrl}
							altText={project.altText}
							codeLink={project.codeLink}
							demoLink={project.demoLink}
							tags={project.tags}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
