"use client";

import { EmailOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
	Box,
	Divider,
	Grid,
	Link,
	List,
	ListItemButton,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import type { MenuItemProps } from "@/types/MenuItemProps";

export default function Footer() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const menuItems: Array<MenuItemProps> = [
		{
			item: "Skills",
			anchorRef: "#skills",
		},
		{
			item: "Projects",
			anchorRef: "#projects",
		},
		{
			item: "Resume",
			href: "https://cdn.noel-pena.com/Noel-Pena.pdf",
			rel: "noopener",
			target: "_blank",
		},
	];

	return (
		<Box
			sx={{
				zIndex: 2,
				position: "relative",
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "column",
				minHeight: isMobile ? "75%" : "25%",
				background: `linear-gradient(135deg, ${theme.vars?.palette.background.default}, ${theme.vars?.palette.glowColors.wallpaper}, ${theme.vars?.palette.background.default})`,
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
					border: `1px solid ${theme.vars?.palette.glowColors.purple}`,
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
					border: `1px solid ${theme.vars?.palette.glowColors.green}`,
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
					border: `1px solid ${theme.vars?.palette.glowColors.purple}`,
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
					border: `1px solid ${theme.vars?.palette.glowColors.green}`,
					borderRadius: "50%",
					opacity: "40%",
				}}
			/>
			<Grid container p={4} spacing={isMobile ? 7 : 3}>
				<Grid size={{ xs: 12, md: 6 }} sx={{ zIndex: 2 }}>
					<Stack direction="row" alignItems="center" gap={0.5}>
						<CodeIcon sx={{ width: 30, height: 30, pb: "2px" }} />
						<Typography variant="h6" fontWeight="bold">
							Full Stack Dev
						</Typography>
					</Stack>

					<Typography
						variant="subtitle2"
						color={theme.vars?.palette.developerWindow.muted}
						fontWeight={200}
						pl={1}
					>
						Crafting digital experiences with passion and precision. Always
						learning, always building.
					</Typography>
				</Grid>
				<Grid size={{ xs: 12, md: 3 }}>
					<Stack>
						<Typography variant="body1" fontWeight="bold">
							Quick Links
						</Typography>
						<Stack>
							<List disablePadding>
								{menuItems.map((menuItem) => (
									<ListItemButton
										aria-label={`${menuItem.item} link`}
										key={menuItem.item}
										component={Link}
										href={menuItem.href || menuItem.anchorRef}
										rel={menuItem.rel || undefined}
										target={menuItem.target || undefined}
										sx={{
											p: 0,
											py: 0.5,
											pl: 0.5,
											minHeight: 32,
											borderRadius: 1,
										}}
									>
										<Typography
											variant="subtitle2"
											color={theme.vars?.palette.developerWindow.muted}
										>
											{menuItem.item}
										</Typography>
									</ListItemButton>
								))}
							</List>
						</Stack>
					</Stack>
				</Grid>
				<Grid size={{ xs: 12, md: 3 }}>
					<Stack>
						<Typography variant="body1" fontWeight="bold">
							Contact
						</Typography>
						<ListItemButton
							aria-label="Send email to noel.pena@hotmail.com button"
							disableGutters
							sx={{ p: 0, pl: 0.5, py: 0.5, minHeight: 32, borderRadius: 1 }}
						>
							<EmailOutlined
								sx={{
									color: theme.vars?.palette.developerWindow.muted,
									width: 16,
									height: 16,
								}}
							/>
							<Typography
								component={Link}
								href="mailto:noel.pena@hotmail.com"
								variant="subtitle2"
								color={theme.vars?.palette.developerWindow.muted}
								sx={{ textDecoration: "none", pl: 1 }}
							>
								noel.pena@hotmail.com
							</Typography>
						</ListItemButton>
						<ListItemButton
							aria-label="Link to LinkedIn button"
							disableGutters
							sx={{ p: 0, pl: 0.5, py: 0.5, minHeight: 32, borderRadius: 1 }}
						>
							<LinkedInIcon
								sx={{
									color: theme.vars?.palette.developerWindow.muted,
									width: 16,
									height: 16,
								}}
							/>
							<Typography
								component={Link}
								href="https://www.linkedin.com/in/noel-pena-1138aa167/"
								rel="noopener"
								target="_blank"
								variant="subtitle2"
								color={theme.vars?.palette.developerWindow.muted}
								sx={{ textDecoration: "none", pl: 1 }}
							>
								LinkedIn
							</Typography>
						</ListItemButton>
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
						background: `linear-gradient(135deg, ${theme.vars?.palette.developerWindow.gradient.darkBlue}, ${theme.vars?.palette.glowColors.green}, ${theme.vars?.palette.developerWindow.gradient.darkBlue})`,
					}}
				/>
				<Grid size={{ xs: 12 }} p={4}>
					<Stack
						justifyContent="space-between"
						alignItems="center"
						direction={isMobile ? "column" : "row"}
					>
						<Typography
							fontSize={12}
							color={theme.vars?.palette.developerWindow.muted}
							fontWeight={200}
						>
							© {new Date().getFullYear()} Built with
							<FavoriteBorderOutlined
								sx={{
									width: 16,
									height: 16,
									verticalAlign: "middle",
									mx: 0.5,
									color: "red",
									animation: "pulseGlow 2s ease-in-out infinite",
									"@keyframes pulseGlow": {
										"0%": { opacity: 0.25 },
										"50%": { opacity: 1 },
										"100%": { opacity: 0.25 },
									},
								}}
							/>
							and lots of coffee.
						</Typography>
						<Typography
							fontSize={12}
							color={theme.vars?.palette.developerWindow.muted}
							fontWeight={200}
						>
							Powered by React & Material UI
						</Typography>
					</Stack>
				</Grid>
			</Box>
		</Box>
	);
}
