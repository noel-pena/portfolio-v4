import {
	Card,
	CardMedia,
	Typography,
	useColorScheme,
	useMediaQuery,
	useTheme,
} from "@mui/material";

export interface SkillSlotProps {
	primaryText: string;
	icon: string;
	primaryColor: string;
	altText: string;
}

export default function SkillSlot(props: SkillSlotProps) {
	const { altText, icon, primaryText, primaryColor } = props;
	const theme = useTheme();
	const { mode } = useColorScheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
				alignItems: "center",
				borderRadius: 0,
				backgroundColor: theme.vars?.palette.background.default,
				boxShadow: 3,
				aspectRatio: "1/1",
				transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
				"&:hover": {
					backgroundColor: primaryColor,
				},
			}}
		>
			<CardMedia
				component="img"
				image={icon}
				loading="lazy"
				sx={{
					width: { xs: 36, md: 44 },
					height: { xs: 36, md: 44 },
					filter: mode === "light" ? "grayscale(100%)" : null,
				}}
				alt={altText}
			/>
			<Typography
				fontWeight={200}
				variant="caption"
				textAlign="center"
				sx={{ px: 0.5, fontSize: isMobile ? "0.6rem" : "0.65rem" }}
			>
				{primaryText}
			</Typography>
		</Card>
	);
}
