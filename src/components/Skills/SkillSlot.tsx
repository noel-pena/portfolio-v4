import { Card, CardMedia, Typography } from "@mui/material";

export interface SkillSlotProps {
	primaryText: string;
	icon: string;
	primaryColor: string;
	altText: string;
}

export default function SkillSlot(props: SkillSlotProps) {
	const { altText, icon, primaryText, primaryColor } = props;

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
				sx={{ width: 125, height: 125 }}
				alt={altText}
			/>
			<Typography variant="h6">{primaryText}</Typography>
		</Card>
	);
}
