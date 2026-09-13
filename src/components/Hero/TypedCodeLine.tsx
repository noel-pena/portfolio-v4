import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface SessionStep {
	command: string;
	output: string;
}

const SESSION: Array<SessionStep> = [
	{ command: "whoami", output: "noel — full stack developer" },
	{ command: "cat skills.txt", output: "react · typescript · kotlin · java" },
];

interface SessionLine {
	id: string;
	kind: "command" | "output";
	text: string;
}

// Widest line the session will ever show ("$ " prefix on commands), so the
// block can reserve its final width and stay put while text types out.
const maxLineCh = Math.max(
	...SESSION.flatMap((step) => [step.command.length + 2, step.output.length]),
);

const TYPE_DELAY_MS = 80;
const OUTPUT_DELAY_MS = 350;
const NEXT_COMMAND_DELAY_MS = 900;
const RESTART_DELAY_MS = 4500;

function buildFullSession(): Array<SessionLine> {
	return SESSION.flatMap((step, index) => [
		{ id: `command-${index}`, kind: "command" as const, text: step.command },
		{ id: `output-${index}`, kind: "output" as const, text: step.output },
	]);
}

function useTypedSession(enabled: boolean): {
	lines: Array<SessionLine>;
	typing: string | null;
} {
	const [lines, setLines] = React.useState<Array<SessionLine>>(
		enabled ? [] : buildFullSession(),
	);
	const [typing, setTyping] = React.useState<string | null>(
		enabled ? "" : null,
	);

	React.useEffect(() => {
		if (!enabled) return;

		let step = 0;
		let position = 0;
		let timer: number;

		const typeCommand = () => {
			const { command, output } = SESSION[step];
			position++;
			setTyping(command.slice(0, position));

			if (position < command.length) {
				timer = window.setTimeout(typeCommand, TYPE_DELAY_MS);
				return;
			}

			timer = window.setTimeout(() => {
				setTyping(null);
				setLines((previous) => [
					...previous,
					{ id: `command-${step}`, kind: "command", text: command },
					{ id: `output-${step}`, kind: "output", text: output },
				]);

				step++;
				position = 0;
				if (step < SESSION.length) {
					timer = window.setTimeout(() => {
						setTyping("");
						typeCommand();
					}, NEXT_COMMAND_DELAY_MS);
				} else {
					timer = window.setTimeout(() => {
						step = 0;
						setLines([]);
						setTyping("");
						timer = window.setTimeout(typeCommand, NEXT_COMMAND_DELAY_MS);
					}, RESTART_DELAY_MS);
				}
			}, OUTPUT_DELAY_MS);
		};

		timer = window.setTimeout(typeCommand, 600);
		return () => clearTimeout(timer);
	}, [enabled]);

	return { lines, typing };
}

export default function TypedCodeLine() {
	const theme = useTheme();
	const prefersReducedMotion = useMediaQuery(
		"(prefers-reduced-motion: reduce)",
	);
	const { lines, typing } = useTypedSession(!prefersReducedMotion);
	const dw = theme.vars?.palette.codeWindow;

	const lineCount = SESSION.length * 2;

	return (
		<Stack
			aria-hidden="true"
			sx={{
				display: { xs: "flex", md: "none" },
				alignItems: "flex-start",
				alignSelf: "center",
				fontFamily: "monospace",
				fontSize: "0.8rem",
				lineHeight: 1.7,
				minHeight: `${lineCount * 1.7}em`,
				width: `min(${maxLineCh}ch, 100%)`,
				pt: 1,
				textAlign: "left",
			}}
		>
			{lines.map((line) =>
				line.kind === "command" ? (
					<Box key={line.id}>
						<Box component="span" sx={{ color: dw?.variable }}>
							${" "}
						</Box>
						<Box component="span" sx={{ color: dw?.textPrimary }}>
							{line.text}
						</Box>
					</Box>
				) : (
					<Box key={line.id} sx={{ color: dw?.type }}>
						{line.text}
					</Box>
				),
			)}
			{typing !== null && (
				<Box>
					<Box component="span" sx={{ color: dw?.variable }}>
						${" "}
					</Box>
					<Box component="span" sx={{ color: dw?.textPrimary }}>
						{typing}
					</Box>
					<Box
						component="span"
						sx={{
							color: dw?.textPrimary,
							"@keyframes cursorBlink": {
								"0%, 49%": { opacity: 1 },
								"50%, 100%": { opacity: 0 },
							},
							animation: "cursorBlink 1.1s step-end infinite",
						}}
					>
						▌
					</Box>
				</Box>
			)}
		</Stack>
	);
}
