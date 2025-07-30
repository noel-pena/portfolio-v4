"use client";

import {
	Card,
	CardMedia,
	Typography,
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
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
				alignItems: "center",
				borderRadius: 3,
				backgroundColor: "transparent",
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
				sx={{ width: 100, height: 100 }}
				alt={altText}
			/>
			<Typography fontWeight={200} variant={isMobile ? "subtitle1" : "h6"}>
				{primaryText}
			</Typography>
		</Card>
	);
}
