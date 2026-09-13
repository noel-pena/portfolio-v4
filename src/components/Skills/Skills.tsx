import { Grid } from "@mui/material";
import SkillSlot from "../../components/Skills/SkillSlot";
import { skillsData } from "../../components/Skills/skillsData";
import Section from "../shared/Section";

export default function Skills() {
	return (
		<Section
			id="skills"
			title="Tech"
			accent="Stack"
			subtitle="Key Technologies in My Development Arsenal"
		>
			<Grid container spacing={2}>
				{skillsData.map((skill) => (
					<Grid
						key={skill.primaryText}
						size={{ xs: 4, sm: 3, md: 1.5 }}
						aria-label={skill.primaryText}
					>
						<SkillSlot
							altText={skill.altText}
							icon={skill.icon}
							primaryColor={skill.primaryColor}
							primaryText={skill.primaryText}
						/>
					</Grid>
				))}
			</Grid>
		</Section>
	);
}
