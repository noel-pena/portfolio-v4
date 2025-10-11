"use client";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
	Box,
	Card,
	CardMedia,
	IconButton,
	Stack,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React, { useId } from "react";

type CodeLinesProps = {
	id: number;
	content: string;
};

function CodeLines({
	line,
	uniqueId,
}: {
	line: string;
	uniqueId: string;
}): React.ReactNode {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return line.split(/(\s+|[[\]{}:,'])/g).map((token) => {
		let color = theme.developerWindow.textPrimary;

		if (["type", "const"].includes(token)) {
			color = theme.developerWindow.variable;
		} else if (
			[
				"string",
				"Noel",
				"TypeScript",
				"Flutter",
				"Kotlin",
				"number",
				`${new Date().getFullYear() - 2023}`,
			].includes(token)
		) {
			color = theme.developerWindow.type;
		} else if (["Developer"].includes(token)) {
			color = theme.developerWindow.developerText;
		}

		return (
			<Typography
				key={`${uniqueId}-${Math.random() * 10}`}
				component="span"
				sx={{
					color,
					whiteSpace: "pre",
					fontFamily: "inherit",
					fontSize: isMobile ? "0.55rem" : "0.64rem",
					letterSpacing: 0,
				}}
			>
				{token}
			</Typography>
		);
	});
}

export default function DeveloperWindow() {
	const [openToolTip, setOpenToolTip] = React.useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const uniqueId = useId();
	const developerMarkdown = `
		type Developer = {
		  name: string;
		  skills: string[];
		  yearsOfExperience: number;
		}
		
		const developer: Developer = {
		  name: 'Noel',
		  skills: ['TypeScript', 'Flutter', 'Kotlin'],
		  yearsOfExperience: ${new Date().getFullYear() - 2023}
		}
	`;
	const codeLines: Array<CodeLinesProps> = [
		{ id: 1, content: "type Developer = {" },
		{ id: 2, content: "   name: string" },
		{ id: 3, content: "   skills: string[]" },
		{ id: 4, content: "   yearsOfExperience: number" },
		{ id: 5, content: "}" },
		{ id: 6, content: "" },
		{ id: 7, content: "const developer: Developer = {" },
		{ id: 8, content: "   name: 'Noel'," },
		{
			id: 9,
			content: "   skills: ['TypeScript', 'Flutter', 'Kotlin'],",
		},
		{
			id: 10,
			content: `   yearsOfExperience: ${new Date().getFullYear() - 2023},`,
		},
		{ id: 11, content: "}" },
	];

	return (
		<Box
			data-testid="developer-window"
			sx={{
				background: `linear-gradient(135deg, ${theme.developerWindow.gradient.lighterBlue}, ${theme.developerWindow.gradient.lightBlue}, ${theme.developerWindow.gradient.darkBlue})`,
				borderRadius: 2,
				pb: 2,
				px: 2,
				boxShadow: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Stack
					sx={{
						py: 2,
						display: "flex",
						gap: "8px",
						flexDirection: "row",
					}}
				>
					<Box
						sx={{
							width: "12px",
							height: "12px",
							borderRadius: "50%",
							bgcolor: theme.developerWindow.closeDot,
						}}
					/>
					<Box
						sx={{
							width: "12px",
							height: "12px",
							borderRadius: "50%",
							bgcolor: theme.developerWindow.minimizeDot,
						}}
					/>
					<Box
						sx={{
							width: "12px",
							height: "12px",
							borderRadius: "50%",
							bgcolor: theme.developerWindow.fullScreenDot,
						}}
					/>
				</Stack>
				<Typography
					variant="body2"
					sx={{
						display: "flex",
						alignItems: "center",
						color: theme.developerWindow.textPrimary,
					}}
				>
					portfolio/components/portfolio.tsx
				</Typography>
			</Box>
			<Card
				elevation={0}
				sx={{
					bgcolor: theme.developerWindow.background,
					color: theme.developerWindow.textPrimary,
					fontFamily: "monospace",
					p: isMobile ? 0 : 1,
				}}
			>
				<CardMedia sx={{ p: 1 }}>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography
							sx={{
								color: theme.developerWindow.textSecondary,
								fontFamily: "monospace",
								fontSize: isMobile ? "0.55rem" : "0.64rem",
								py: 1,
							}}
						>
							portfolio/components/portfolio.tsx
						</Typography>
						<Tooltip title="Copied!" open={openToolTip}>
							<IconButton
								aria-label="copy button"
								onClick={async () => {
									await navigator.clipboard.writeText(developerMarkdown);
									setOpenToolTip(!openToolTip);
									setTimeout(() => {
										setOpenToolTip(false);
									}, 2000);
								}}
							>
								<ContentCopyIcon
									sx={{
										width: "12px",
										height: "12px",
										color: theme.developerWindow.textSecondary,
									}}
								/>
							</IconButton>
						</Tooltip>
					</Stack>
					{codeLines.map((line) => (
						<Box px={isMobile ? 0 : 1} key={line.id}>
							<Stack
								display="flex"
								direction="row"
								flexWrap="wrap"
								alignItems="center"
							>
								<Typography
									sx={{
										color: theme.developerWindow.textSecondary,
										pr: 1,
										minWidth: "28px",
										textAlign: "right",
										fontFamily: "monospace",
										fontSize: isMobile ? "0.55rem" : "0.64rem",
										py: "2px",
									}}
								>
									{line.id}
								</Typography>
								<CodeLines line={line.content} uniqueId={uniqueId} />
							</Stack>
						</Box>
					))}
				</CardMedia>
			</Card>
		</Box>
	);
}
