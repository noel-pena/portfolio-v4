import {
	Box,
	Card,
	CardMedia,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import type React from "react";
import { useId } from "react";

type CodeLinesProp = {
	id: number;
	content: string;
};

function DeveloperWindow() {
	const theme = useTheme();
	const yearsOfExperience = new Date().getFullYear() - 2023;
	const varWords = ["type", "const"];
	const typeWords = [
		"string",
		"Noel",
		"TypeScript",
		"Flutter",
		"Kotlin",
		"number",
		`${yearsOfExperience.toString()}`,
	];
	const developerText = ["Developer"];
	const uniqueId = useId();

	const codeLines: Array<CodeLinesProp> = [
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
		{ id: 10, content: `   yearsOfExperience: ${yearsOfExperience},` },
		{ id: 11, content: "}" },
	];

	const CodeLines = ({ line }: { line: string }): React.ReactNode => {
		return line.split(/(\s+|[\[\]\{\}\:\,\'])/g).map((token) => {
			let color = theme.developerWindow.textPrimary;

			if (varWords.includes(token)) {
				color = theme.developerWindow.variable;
			} else if (typeWords.includes(token)) {
				color = theme.developerWindow.type;
			} else if (developerText.includes(token)) {
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
						fontSize: "0.64rem",
						letterSpacing: 0,
					}}
				>
					{token}
				</Typography>
			);
		});
	};

	return (
		<Box
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
					variant="subtitle2"
					sx={{
						display: "flex",
						alignItems: "center",
						color: theme.developerWindow.textPrimary,
					}}
				>
					portfolio/components/about-me.tsx
				</Typography>
			</Box>
			<Card
				elevation={0}
				sx={{
					bgcolor: theme.developerWindow.background,
					color: theme.developerWindow.textPrimary,
					fontFamily: "monospace",
					p: 1,
				}}
			>
				<CardMedia sx={{ p: 1 }}>
					<Typography
						sx={{
							color: theme.developerWindow.textSecondary,
							fontFamily: "monospace",
							fontSize: "0.64rem",
							py: 1,
						}}
					>
						portfolio/components/about-me.tsx
					</Typography>
					{codeLines.map((line) => (
						<Box px={1} key={line.id}>
							<Stack
								display="flex"
								direction="row"
								flexWrap="wrap"
								alignItems="center"
							>
								<Typography
									sx={{
										color: theme.developerWindow.muted,
										pr: 1,
										minWidth: "28px",
										textAlign: "right",
										fontFamily: "monospace",
										fontSize: "0.64rem",
										py: "2px",
									}}
								>
									{line.id}
								</Typography>
								<CodeLines line={line.content} />
							</Stack>
						</Box>
					))}
				</CardMedia>
			</Card>
		</Box>
	);
}

export default DeveloperWindow;
