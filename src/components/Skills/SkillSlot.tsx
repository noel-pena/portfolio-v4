import { Card, CardMedia, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import { theme } from "@/theme/theme";

export interface SkillSlotProps {
	primaryText: string;
	icon: string;
	primaryColor: string;
	altText: string;
}

export default function SkillSlot(props: SkillSlotProps) {
	const { altText, icon, primaryText, primaryColor } = props;
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
				sx={{ width: isMobile ? 75 : 125, height: isMobile ? 75 : 125 }}
				alt={altText}
			/>
			<Typography variant={isMobile ? "subtitle1" : "h6"}>
				{primaryText}
			</Typography>
		</Card>
	);
}
