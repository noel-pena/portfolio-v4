import {
	Box,
	Container,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import type React from "react";

export function SubHeading({ title }: { title: string }) {
	const theme = useTheme();
	const rule = (
		<Box
			sx={{
				flexGrow: 1,
				height: "1px",
				bgcolor: "divider",
				opacity: 0.6,
			}}
		/>
	);

	return (
		<Stack direction="row" alignItems="center" gap={2} sx={{ my: 5 }}>
			{rule}
			<Typography
				variant="overline"
				sx={{
					letterSpacing: 3,
					fontWeight: 200,
					color: theme.vars?.palette.developerWindow.muted,
				}}
			>
				{title}
			</Typography>
			{rule}
		</Stack>
	);
}

export interface SectionProps {
	id: string;
	title: string;
	accent: string;
	subtitle: string;
	maxWidth?: "md" | "lg";
	children: React.ReactNode;
}

export default function Section({
	id,
	title,
	accent,
	subtitle,
	maxWidth = "md",
	children,
}: SectionProps) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			id={id}
			component="section"
			sx={{
				px: { xs: 3, sm: 4 },
				py: { xs: 5, md: 7 },
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Stack>
				<Typography
					variant={isMobile ? "h4" : "h3"}
					textAlign={isMobile ? "left" : "center"}
					mb={1}
				>
					{title}{" "}
					<Box
						component="span"
						fontWeight={100}
						letterSpacing={3}
						color={theme.vars?.palette.glowColors.green}
					>
						{accent}
					</Box>
				</Typography>
				<Typography
					variant={isMobile ? "body1" : "subtitle1"}
					textAlign={isMobile ? "left" : "center"}
					color={theme.vars?.palette.developerWindow.muted}
					sx={{ fontWeight: 200, mb: isMobile ? 3 : 5 }}
				>
					{subtitle}
				</Typography>
			</Stack>
			<Container maxWidth={maxWidth} disableGutters>
				{children}
			</Container>
		</Box>
	);
}
