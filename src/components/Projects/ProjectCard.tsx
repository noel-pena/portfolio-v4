import GitHubIcon from "@mui/icons-material/GitHub";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Stack,
	Typography,
} from "@mui/material";
import { theme } from "@/theme/theme";

export interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	altText: string;
	tags?: Array<string>;
	codeLink?: string;
	demoLink?: string;
}

export default function ProjectCard({
	title,
	description,
	imageUrl,
	altText,
	tags = [],
	codeLink,
	demoLink,
}: ProjectCardProps) {
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				borderRadius: 3,
				backgroundColor: theme.palette.background.default,
				color: theme.palette.text.primary,
				boxShadow: 3,
				height: "100%",
				transition: "box-shadow 0.3s ease-in-out",
				"&:hover": {
					boxShadow: 10,
				},
				"&:hover .media": {
					transform: "scale(1.05)",
					filter: "blur(0)",
				},
			}}
		>
			<Box sx={{ overflow: "hidden" }}>
				<CardMedia
					className="media"
					component="img"
					image={imageUrl}
					alt={altText}
					sx={{
						height: 300,
						objectFit: "cover",
						transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
						filter: "blur(3px)",
					}}
				/>
			</Box>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant="h6" component="div">
					{title}
				</Typography>
				<Typography
					variant="body2"
					color={theme.developerWindow.muted}
					fontWeight={200}
				>
					{description}
				</Typography>
				{tags.length > 0 && (
					<Stack direction="row" gap={1} mt={2} flexWrap="wrap">
						{tags.map((tag) => (
							<Chip
								key={tag}
								label={tag}
								variant="filled"
								sx={{
									bgcolor: theme.developerWindow.gradient.lightBlue,
									color: theme.developerWindow.textPrimary,
									fontSize: "0.65rem",
									height: 24,
									borderRadius: 1,
								}}
							/>
						))}
					</Stack>
				)}
			</CardContent>
			<CardActions sx={{ px: 2, pb: 2 }}>
				{codeLink && (
					<Button
						size="small"
						sx={{ color: theme.developerWindow.textPrimary }}
						href={codeLink}
						target="_blank"
						rel="noopener"
						startIcon={<GitHubIcon />}
						variant="contained"
					>
						Code
					</Button>
				)}
				{demoLink && (
					<Button
						size="small"
						sx={{ color: theme.developerWindow.textPrimary }}
						href={demoLink}
						variant="outlined"
						target="_blank"
						rel="noopener"
					>
						Demo
					</Button>
				)}
			</CardActions>
		</Card>
	);
}
