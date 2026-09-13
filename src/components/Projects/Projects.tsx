import { Container, Grid } from "@mui/material";
import GitHubActivity from "../../components/GitHub/GitHubActivity";
import ProjectCard from "../../components/Projects/ProjectCard";
import { projectsData } from "../../components/Projects/projectsData";
import Section, { SubHeading } from "../shared/Section";

export default function Projects() {
	return (
		<Section
			id="projects"
			title="Featured"
			accent="Projects"
			subtitle="A Showcase of My Personal Projects as a Full-stack Developer"
			maxWidth="lg"
		>
			<Grid container justifyContent="center" spacing={5}>
				{projectsData.map((project) => (
					<Grid
						key={project.title}
						size={{ xs: 12, sm: 6 }}
						aria-label={project.title}
					>
						<ProjectCard {...project} />
					</Grid>
				))}
			</Grid>
			<SubHeading title="GitHub Activity" />
			<Container maxWidth="md" disableGutters>
				<GitHubActivity />
			</Container>
		</Section>
	);
}
