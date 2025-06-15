import {
	Box,
	Card,
	CardMedia,
	Grid,
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

function Hero() {
	const theme = useTheme();
	const yearsOfExperience = new Date().getFullYear() - 2023;
	const varWords = ["type", "const"];
	const typeWords = [
		"string",
		"Noel",
		"TypeScript",
		"JavaScript",
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
			content: "   skills: ['TypeScript', 'JavaScript', 'Flutter', 'Kotlin'],",
		},
		{ id: 10, content: `   yearsOfExperience: ${yearsOfExperience},` },
		{ id: 11, content: "}" },
	];

	const CodeLines = ({
		line,
		lineKey,
	}: { line: string; lineKey: string }): React.ReactNode => {
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
					key={`${lineKey}-${Math.random() * 11}`}
					component="span"
					sx={{ color, whiteSpace: "pre" }}
				>
					{token}
				</Typography>
			);
		});
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100%",
			}}
		>
			<Grid
				container
				justifyContent="space-around"
				alignItems="center"
				spacing={4}
				width="100%"
				maxWidth="lg"
			>
				{/* Retained your original Grid structure and props */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Box
						sx={{
							background: `linear-gradient(135deg, ${theme.developerWindow.gradient.lighterBlue}, ${theme.developerWindow.gradient.lightBlue}, ${theme.developerWindow.gradient.darkBlue})`,
							borderRadius: 2,
							pb: 2,
							px: 2,
							boxShadow: 6,
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
								minHeight: 200,
							}}
						>
							<CardMedia sx={{ p: 1 }}>
								<Typography
									variant="subtitle2"
									sx={{ color: theme.developerWindow.textSecondary, py: 1 }}
								>
									portfolio/components/about-me.tsx
								</Typography>
								{codeLines.map((line) => (
									<Box px={1} key={line.id}>
										<Stack display="flex" direction="row">
											<Typography
												sx={{
													color: theme.developerWindow.muted,
													pr: 1,
													minWidth: "28px",
													textAlign: "right",
												}}
											>
												{line.id}
											</Typography>
											{/* Pass a unique prefix to CodeLines for its internal keys */}
											<CodeLines
												lineKey={`${uniqueId}-${line.id}`}
												line={line.content}
											/>
										</Stack>
									</Box>
								))}
							</CardMedia>
						</Card>
					</Box>
				</Grid>
				{/* Retained your original Grid structure and props */}
				<Grid size={{ xs: 12, md: 6 }}>right</Grid>
			</Grid>
		</Box>
	);
}

export default Hero;
