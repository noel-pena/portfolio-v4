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
import React from "react";
import { YEARS_OF_EXPERIENCE } from "../../constants";

const codeLines = [
	"type Developer = {",
	"   name: string",
	"   skills: string[]",
	"   yearsOfExperience: number",
	"}",
	"",
	"const developer: Developer = {",
	"   name: 'Noel',",
	"   skills: ['TypeScript', 'Flutter', 'Kotlin'],",
	`   yearsOfExperience: ${YEARS_OF_EXPERIENCE},`,
	"}",
];

const developerMarkdown = codeLines.join("\n");

const tokenizedLines = codeLines.map((content, lineIndex) => ({
	lineNumber: lineIndex + 1,
	tokens: content
		.split(/(\s+|[[\]{}:,'])/g)
		.map((token, tokenIndex) => ({ key: `${lineIndex}-${tokenIndex}`, token })),
}));

const keywordTokens = ["type", "const"];
const valueTokens = [
	"string",
	"Noel",
	"TypeScript",
	"Flutter",
	"Kotlin",
	"number",
	`${YEARS_OF_EXPERIENCE}`,
];

const dotColors = ["closeDot", "minimizeDot", "fullScreenDot"] as const;

function CodeLine({
	tokens,
}: {
	tokens: Array<{ key: string; token: string }>;
}): React.ReactNode {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return tokens.map(({ key, token }) => {
		let color = theme.vars?.palette.developerWindow.textPrimary;

		if (keywordTokens.includes(token)) {
			color = theme.vars?.palette.developerWindow.variable;
		} else if (valueTokens.includes(token)) {
			color = theme.vars?.palette.developerWindow.type;
		} else if (token === "Developer") {
			color = theme.vars?.palette.developerWindow.developerText;
		}

		return (
			<Typography
				key={key}
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

	return (
		<Box
			data-testid="developer-window"
			sx={{
				background: `linear-gradient(135deg, ${theme.vars?.palette.developerWindow.gradient.lighterBlue}, ${theme.vars?.palette.developerWindow.gradient.lightBlue}, ${theme.vars?.palette.developerWindow.gradient.darkBlue})`,
				borderRadius: 0,
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
					{dotColors.map((dot) => (
						<Box
							key={dot}
							sx={{
								width: "12px",
								height: "12px",
								borderRadius: "50%",
								bgcolor: theme.vars?.palette.developerWindow[dot],
							}}
						/>
					))}
				</Stack>
				<Typography
					variant="body2"
					fontFamily="monospace"
					sx={{
						display: "flex",
						alignItems: "center",
						color: theme.vars?.palette.developerWindow.textPrimary,
					}}
				>
					portfolio/components/portfolio.tsx
				</Typography>
			</Box>
			<Card
				elevation={0}
				sx={{
					borderRadius: 0,
					bgcolor: theme.vars?.palette.developerWindow.background,
					color: theme.vars?.palette.developerWindow.textPrimary,
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
								color: theme.vars?.palette.developerWindow.textSecondary,
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
									setOpenToolTip(true);
									setTimeout(() => {
										setOpenToolTip(false);
									}, 2000);
								}}
							>
								<ContentCopyIcon
									sx={{
										width: "12px",
										height: "12px",
										color: theme.vars?.palette.developerWindow.textSecondary,
									}}
								/>
							</IconButton>
						</Tooltip>
					</Stack>
					{tokenizedLines.map((line) => (
						<Box px={isMobile ? 0 : 1} key={line.lineNumber}>
							<Stack
								display="flex"
								direction="row"
								flexWrap="wrap"
								alignItems="center"
							>
								<Typography
									sx={{
										color: theme.vars?.palette.developerWindow.textSecondary,
										pr: 1,
										minWidth: "28px",
										textAlign: "right",
										fontFamily: "monospace",
										fontSize: isMobile ? "0.55rem" : "0.64rem",
										py: "2px",
									}}
								>
									{line.lineNumber}
								</Typography>
								<CodeLine tokens={line.tokens} />
							</Stack>
						</Box>
					))}
				</CardMedia>
			</Card>
		</Box>
	);
}
