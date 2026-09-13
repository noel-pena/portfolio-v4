import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
	Box,
	Card,
	CircularProgress,
	Grid,
	Link,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import React from "react";
import { GITHUB_URL } from "../../constants";
import ContributionChart from "./ContributionChart";

const GITHUB_USER = "noel-pena";

interface Repo {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	language: string | null;
	stargazers_count: number;
	pushed_at: string;
}

const languageColorKeys: Record<string, string> = {
	TypeScript: "typescript",
	JavaScript: "javascript",
	Python: "python",
	Kotlin: "kotlin",
	Java: "java",
	PHP: "php",
	Dart: "flutter",
	SCSS: "scss",
	CSS: "scss",
};

function languageColor(language: string | null): string {
	const key = language ? languageColorKeys[language] : undefined;
	return key
		? `var(--mui-palette-skillColors-${key})`
		: "var(--mui-palette-glowColors-green)";
}

export default function GitHubActivity() {
	const theme = useTheme();
	const [repos, setRepos] = React.useState<Array<Repo> | null>(null);
	const [failed, setFailed] = React.useState(false);

	React.useEffect(() => {
		const controller = new AbortController();

		fetch(
			`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=6`,
			{ signal: controller.signal },
		)
			.then((response) => {
				if (!response.ok) throw new Error(`GitHub API ${response.status}`);
				return response.json();
			})
			.then((data: Array<Repo>) => setRepos(data))
			.catch((error) => {
				if (!controller.signal.aborted) {
					console.error("Failed to load GitHub activity: ", error);
					setFailed(true);
				}
			});

		return () => controller.abort();
	}, []);

	return (
		<>
			<ContributionChart user={GITHUB_USER} />
			{failed && (
				<Typography
					textAlign="center"
					variant="body2"
					color={theme.vars?.palette.developerWindow.muted}
					sx={{ fontWeight: 200 }}
				>
					Couldn't reach the GitHub API right now —{" "}
					<Link
						href={GITHUB_URL}
						target="_blank"
						rel="noopener"
						color={theme.vars?.palette.glowColors.green}
					>
						visit my GitHub
					</Link>{" "}
					instead.
				</Typography>
			)}
			{!failed && !repos && (
				<Stack alignItems="center" py={4}>
					<CircularProgress size={24} color="inherit" />
				</Stack>
			)}
			{repos && (
				<Grid container spacing={3}>
					{repos.map((repo) => (
						<Grid key={repo.id} size={{ xs: 12, sm: 6, md: 4 }}>
							<Card
								component={Link}
								href={repo.html_url}
								target="_blank"
								rel="noopener"
								aria-label={`${repo.name} repository`}
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									gap: 1,
									height: "100%",
									p: 2,
									borderRadius: 0,
									boxShadow: 3,
									textDecoration: "none",
									backgroundColor: theme.vars?.palette.background.default,
									transition: "box-shadow 0.3s ease-in-out",
									"&:hover": { boxShadow: 10 },
								}}
							>
								<Box>
									<Typography
										variant="body1"
										color={theme.vars?.palette.text.primary}
										sx={{ wordBreak: "break-word" }}
									>
										{repo.name}
									</Typography>
									<Typography
										variant="caption"
										color={theme.vars?.palette.developerWindow.muted}
										sx={{ fontWeight: 200 }}
									>
										{repo.description ?? "No description yet."}
									</Typography>
								</Box>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="space-between"
								>
									<Stack direction="row" alignItems="center" gap={0.75}>
										{repo.language && (
											<>
												<Box
													sx={{
														width: 10,
														height: 10,
														borderRadius: "50%",
														bgcolor: languageColor(repo.language),
														border: `1px solid ${theme.vars?.palette.developerWindow.muted}`,
													}}
												/>
												<Typography
													variant="caption"
													color={theme.vars?.palette.developerWindow.muted}
													sx={{ fontWeight: 200 }}
												>
													{repo.language}
												</Typography>
											</>
										)}
									</Stack>
									<Stack direction="row" alignItems="center" gap={0.5}>
										<StarBorderIcon
											sx={{
												width: 14,
												height: 14,
												color: theme.vars?.palette.developerWindow.muted,
											}}
										/>
										<Typography
											variant="caption"
											color={theme.vars?.palette.developerWindow.muted}
										>
											{repo.stargazers_count}
										</Typography>
									</Stack>
								</Stack>
							</Card>
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
}
