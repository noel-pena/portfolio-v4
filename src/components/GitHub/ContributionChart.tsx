import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const CELL_PX = 10;
const CELL_GAP_PX = 3;

interface ContributionDay {
	date: string;
	count: number;
	level: number;
}

interface ContributionsResponse {
	contributions: Array<ContributionDay>;
}

const levelNames = ["level0", "level1", "level2", "level3", "level4"] as const;

export default function ContributionChart({ user }: { user: string }) {
	const theme = useTheme();
	const [days, setDays] = React.useState<Array<ContributionDay> | null>(null);
	const scrollRef = React.useRef<HTMLDivElement>(null);

	const palette = theme.vars?.palette.contributions;
	const muted = theme.vars?.palette.developerWindow.muted;

	React.useEffect(() => {
		const controller = new AbortController();

		fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`, {
			signal: controller.signal,
		})
			.then((response) => {
				if (!response.ok)
					throw new Error(`Contributions API ${response.status}`);
				return response.json();
			})
			.then((data: ContributionsResponse) => setDays(data.contributions))
			.catch((error) => {
				if (!controller.signal.aborted) {
					console.error("Failed to load contribution chart: ", error);
				}
			});

		return () => controller.abort();
	}, [user]);

	// Land on the most recent weeks, like GitHub's own chart.
	React.useEffect(() => {
		if (days && scrollRef.current) {
			scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
		}
	}, [days]);

	if (!days || days.length === 0) {
		return null;
	}

	const total = days.reduce((sum, day) => sum + day.count, 0);
	const firstWeekdayRow = new Date(`${days[0].date}T00:00:00`).getDay() + 1;
	const levelColor = (level: number) =>
		palette?.[levelNames[level] ?? "level0"];

	return (
		<Stack alignItems="center" gap={1.5} mb={5}>
			<Box ref={scrollRef} sx={{ maxWidth: "100%", overflowX: "auto", pb: 1 }}>
				<Box
					role="img"
					aria-label={`GitHub contribution chart: ${total} contributions in the last year`}
					sx={{
						display: "grid",
						gridAutoFlow: "column",
						gridTemplateRows: `repeat(7, ${CELL_PX}px)`,
						gridAutoColumns: `${CELL_PX}px`,
						gap: `${CELL_GAP_PX}px`,
						width: "max-content",
					}}
				>
					{days.map((day, index) => (
						<Box
							key={day.date}
							title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
							sx={{
								width: CELL_PX,
								height: CELL_PX,
								bgcolor: levelColor(day.level),
								...(index === 0 && { gridRowStart: firstWeekdayRow }),
							}}
						/>
					))}
				</Box>
			</Box>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="center"
				flexWrap="wrap"
				columnGap={3}
				rowGap={1}
			>
				<Typography variant="caption" color={muted} sx={{ fontWeight: 200 }}>
					{total.toLocaleString()} contributions in the last year
				</Typography>
				<Stack direction="row" alignItems="center" gap={0.5}>
					<Typography variant="caption" color={muted} sx={{ fontWeight: 200 }}>
						Less
					</Typography>
					{levelNames.map((name) => (
						<Box
							key={name}
							sx={{
								width: CELL_PX,
								height: CELL_PX,
								bgcolor: palette?.[name],
							}}
						/>
					))}
					<Typography variant="caption" color={muted} sx={{ fontWeight: 200 }}>
						More
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}
