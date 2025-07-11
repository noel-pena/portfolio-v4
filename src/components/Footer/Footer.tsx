import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import type React from "react";
import { theme } from "@/theme/theme";

export default function Footer() {
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				zIndex: 2,
				position: "relative",
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "column",
				minHeight: isMobile ? "75%" : "40%",
				background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.glowColors.wallpaper}, ${theme.palette.background.default})`,
			}}
		>
			<Box
				sx={{
					position: "absolute",
					left: 50,
					top: 50,
					zIndex: 0,
					width: 100,
					height: 100,
					bgcolor: "transparent",
					border: `1px solid ${theme.glowColors.purple}`,
					borderRadius: "50%",
					opacity: "40%",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					right: "50%",
					bottom: "50%",
					zIndex: 1,
					width: 100,
					height: 100,
					bgcolor: "transparent",
					border: `1px solid ${theme.glowColors.green}`,
					borderRadius: "50%",
					opacity: "40%",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					left: "50%",
					top: "50%",
					zIndex: 1,
					width: 100,
					height: 100,
					bgcolor: "transparent",
					border: `1px solid ${theme.glowColors.purple}`,
					borderRadius: "50%",
					opacity: "40%",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					right: 50,
					bottom: 50,
					zIndex: 1,
					width: 100,
					height: 100,
					bgcolor: "transparent",
					border: `1px solid ${theme.glowColors.green}`,
					borderRadius: "50%",
					opacity: "40%",
				}}
			/>
			<Grid container p={4} spacing={2}>
				<Grid size={{ xs: 12, md: 6 }} sx={{ zIndex: 2 }}>
					<Stack>
						<Typography variant="h6" fontWeight="bold">
							Full Stack Dev
						</Typography>
						<Typography
							variant="subtitle2"
							color={theme.developerWindow.muted}
							fontWeight={200}
						>
							Crafting digital experiences with passion and precision. Always
							learning, always building.
						</Typography>
					</Stack>
				</Grid>
				<Grid size={{ xs: 12, md: 3 }}>
					<Stack>
						<Typography variant="body1" fontWeight="bold">
							Quick Links
						</Typography>
						<Stack>
							<Typography
								variant="subtitle2"
								color={theme.developerWindow.muted}
								fontWeight={200}
							>
								Home
							</Typography>
							<Typography
								variant="subtitle2"
								color={theme.developerWindow.muted}
								fontWeight={200}
							>
								Skills
							</Typography>
							<Typography
								variant="subtitle2"
								color={theme.developerWindow.muted}
								fontWeight={200}
							>
								Projects
							</Typography>
							<Typography
								variant="subtitle2"
								color={theme.developerWindow.muted}
								fontWeight={200}
							>
								Resume
							</Typography>
						</Stack>
					</Stack>
				</Grid>
				<Grid size={{ xs: 12, md: 3 }}>
					<Stack>
						<Typography variant="body1" fontWeight="bold">
							Contact
						</Typography>
						<Typography
							variant="subtitle2"
							color={theme.developerWindow.muted}
							fontWeight={200}
						>
							noel.pena@hotmail.com
						</Typography>
					</Stack>
				</Grid>
			</Grid>
			<Box>
				<Divider
					variant="middle"
					flexItem
					sx={{
						height: "1px",
						border: "none",
						zIndex: 0,
						background: `linear-gradient(135deg, ${theme.developerWindow.gradient.darkBlue}, ${theme.glowColors.green}, ${theme.developerWindow.gradient.darkBlue})`,
					}}
				/>
				<Grid container p={4} spacing={2}>
					<Grid size={{ xs: 12 }}>
						<Stack
							justifyContent="space-between"
							alignItems="center"
							direction={isMobile ? "column" : "row"}
						>
							<Typography
								variant="subtitle2"
								color={theme.developerWindow.muted}
								fontWeight={200}
							>
								© {new Date().getFullYear()} Build with love and lots of coffee
							</Typography>
							<Typography
								variant="caption"
								color={theme.developerWindow.muted}
								fontWeight={200}
							>
								Powered by React & Material UI
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
