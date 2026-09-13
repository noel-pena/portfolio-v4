import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { certifications, experienceData } from "./experienceData";

export default function Experience() {
	const theme = useTheme();

	return (
		<>
			<Stack sx={{ position: "relative" }}>
				{experienceData.map((job, index) => (
					<Box
						key={`${job.company}-${job.period}`}
						sx={{ display: "flex", gap: 2.5 }}
					>
						<Stack alignItems="center" sx={{ pt: 0.75 }}>
							<Box
								sx={{
									width: 12,
									height: 12,
									flexShrink: 0,
									bgcolor:
										index % 2 === 0
											? theme.vars?.palette.glowColors.green
											: theme.vars?.palette.glowColors.purple,
									boxShadow: 2,
								}}
							/>
							{index < experienceData.length - 1 && (
								<Box
									sx={{
										width: "1px",
										flexGrow: 1,
										background: `linear-gradient(${theme.vars?.palette.developerWindow.muted}, transparent 95%)`,
										opacity: 0.5,
									}}
								/>
							)}
						</Stack>
						<Box sx={{ pb: 4, minWidth: 0 }}>
							<Stack
								direction="row"
								alignItems="baseline"
								gap={1.5}
								flexWrap="wrap"
							>
								<Typography variant="h6" component="h3">
									{job.company}
								</Typography>
								<Typography
									variant="body2"
									color={theme.vars?.palette.glowColors.green}
									sx={{ fontWeight: 200 }}
								>
									{job.role}
								</Typography>
							</Stack>
							<Typography
								variant="caption"
								color={theme.vars?.palette.developerWindow.muted}
								sx={{ fontWeight: 200 }}
							>
								{job.period} · {job.location}
							</Typography>
							<Stack component="ul" sx={{ pl: 2.5, my: 1, gap: 0.5 }}>
								{job.highlights.map((highlight) => (
									<Typography
										key={highlight}
										component="li"
										variant="body2"
										color={theme.vars?.palette.developerWindow.muted}
										sx={{ fontWeight: 200 }}
									>
										{highlight}
									</Typography>
								))}
							</Stack>
						</Box>
					</Box>
				))}
			</Stack>
			<Stack
				direction="row"
				flexWrap="wrap"
				gap={1.5}
				justifyContent="center"
				sx={{ mt: 2 }}
			>
				{certifications.map((cert) => (
					<Chip
						key={cert}
						label={cert}
						variant="outlined"
						sx={{
							borderRadius: 0,
							height: "auto",
							py: 0.75,
							fontSize: "0.7rem",
							fontWeight: 200,
							color: theme.vars?.palette.developerWindow.muted,
							"& .MuiChip-label": { whiteSpace: "normal" },
						}}
					/>
				))}
			</Stack>
		</>
	);
}
