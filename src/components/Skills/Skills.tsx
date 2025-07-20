import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import SkillSlot from "@/components/Skills/SkillSlot";
import { skillsData } from "@/components/Skills/skillsData";
import { theme } from "@/theme/theme";

export default function Skills() {
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			id="skills"
			sx={{
				px: 4,
				flexDirection: "column",
				minHeight: "100%",
			}}
		>
			<Stack>
				<Typography
					variant={isMobile ? "h4" : "h3"}
					textAlign={isMobile ? "left" : "center"}
					mb={1}
				>
					Tech{" "}
					<Box
						component="span"
						fontFamily="Helvetica Neue"
						fontWeight={100}
						letterSpacing={3}
						color={theme.glowColors.green}
					>
						Stack
					</Box>
				</Typography>
				<Typography
					variant={isMobile ? "body1" : "subtitle1"}
					textAlign={isMobile ? "left" : "center"}
					color={theme.developerWindow.muted}
					sx={{ fontWeight: 200, mb: isMobile ? 3 : 5 }}
				>
					Key Technologies in My Development Arsenal
				</Typography>
			</Stack>
			<Container maxWidth="md" disableGutters>
				<Grid container spacing={4}>
					{skillsData.map((skill) => (
						<Grid key={skill.primaryText} size={{ xs: 6, md: 3 }}>
							<SkillSlot
								altText={skill.altText}
								icon={skill.icon}
								primaryColor={skill.primaryColor}
								primaryText={skill.primaryText}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
