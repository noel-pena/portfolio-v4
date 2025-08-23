"use client";

import {
	Box,
	Container,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import SkillSlot from "@/app/components/Skills/SkillSlot";
import { skillsData } from "@/app/components/Skills/skillsData";

export default function Skills() {
	const theme = useTheme();
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
						<Grid
							key={skill.primaryText}
							size={{ xs: 6, sm: 4, md: 3 }}
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
			</Container>
		</Box>
	);
}
