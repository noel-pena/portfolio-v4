import { Box, InputBase, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { GITHUB_URL, RESUME_URL, YEARS_OF_EXPERIENCE } from "../../constants";
import { sendContactMessage } from "../ContactForm/contactApi";
import { contactSchema } from "../ContactForm/contactSchema";
import { projectsData } from "../Projects/projectsData";
import { skillsData } from "../Skills/skillsData";
import Section from "../shared/Section";

interface TerminalLine {
	id: number;
	kind: "command" | "output";
	text: string;
	prompt?: string;
}

type ContactStep = "name" | "email" | "message";

const PROMPT = "guest@noel-pena.com:~$";

const CONTACT_PROMPTS: Record<ContactStep, string> = {
	name: "name:",
	email: "email:",
	message: "message:",
};

const NEXT_STEP: Record<ContactStep, ContactStep | null> = {
	name: "email",
	email: "message",
	message: null,
};

const HELP_TEXT = [
	"available commands:",
	"  about      who I am",
	"  skills     tech I work with",
	"  projects   featured projects",
	"  resume     open my resume",
	"  github     open my GitHub",
	"  contact    send me a message right here",
	"  whoami     check who you are",
	"  coffee     brew one",
	"  clear      clear the terminal",
].join("\n");

const WELCOME: Array<TerminalLine> = [
	{
		id: -1,
		kind: "output",
		text: "Welcome to the portfolio terminal. Type 'help' to get started.",
	},
];

export default function Terminal() {
	const theme = useTheme();
	const [lines, setLines] = React.useState<Array<TerminalLine>>(WELCOME);
	const [input, setInput] = React.useState("");
	const [contactStep, setContactStep] = React.useState<ContactStep | null>(
		null,
	);
	const [busy, setBusy] = React.useState(false);
	const draft = React.useRef({ name: "", email: "", message: "" });
	const nextId = React.useRef(0);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const scrollRef = React.useRef<HTMLDivElement>(null);

	const dw = theme.vars?.palette.codeWindow;
	const isNarrow = useMediaQuery(theme.breakpoints.down("sm"));
	const shellPrompt = isNarrow ? "$" : PROMPT;

	React.useEffect(() => {
		scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
	}, [lines]);

	const pushLines = (...newLines: Array<Omit<TerminalLine, "id">>) => {
		const stamped = newLines.map((line) => ({
			...line,
			id: nextId.current++,
		}));
		setLines((previous) => [...previous, ...stamped]);
	};

	const respond = (command: string): string => {
		switch (command) {
			case "help":
				return HELP_TEXT;
			case "about":
				return `Full-stack engineer in Orlando, FL — ${YEARS_OF_EXPERIENCE}+ years of building with React, TypeScript, and Kotlin.`;
			case "skills":
				return skillsData.map((skill) => skill.primaryText).join(", ");
			case "projects":
				return projectsData
					.map((project) => `${project.title} — ${project.description}`)
					.join("\n");
			case "resume":
				window.open(RESUME_URL, "_blank", "noopener");
				return "Opening resume...";
			case "github":
				window.open(GITHUB_URL, "_blank", "noopener");
				return "Opening GitHub...";
			case "whoami":
				return "guest — but you can change that with 'contact'.";
			case "coffee":
				return "☕ brewing... done. Back to building.";
			default:
				return `command not found: ${command} — type 'help'`;
		}
	};

	const submitContact = () => {
		setBusy(true);
		pushLines({ kind: "output", text: "sending..." });
		sendContactMessage(draft.current)
			.then((ok) =>
				pushLines({
					kind: "output",
					text: ok
						? "✓ Message sent — I'll get back to you soon."
						: "✗ Submission failed — try the Contact button up top.",
				}),
			)
			.catch(() =>
				pushLines({
					kind: "output",
					text: "✗ Network error — please try again later.",
				}),
			)
			.finally(() => {
				draft.current = { name: "", email: "", message: "" };
				setContactStep(null);
				setBusy(false);
				inputRef.current?.focus();
			});
	};

	const cancelContact = (step: ContactStep) => {
		pushLines(
			{ kind: "command", prompt: CONTACT_PROMPTS[step], text: "cancel" },
			{ kind: "output", text: "Contact cancelled." },
		);
		draft.current = { name: "", email: "", message: "" };
		setContactStep(null);
	};

	const handleContactEntry = (step: ContactStep, rawValue: string) => {
		const value = rawValue.trim();

		if (value.toLowerCase() === "cancel") {
			cancelContact(step);
			return;
		}

		pushLines({ kind: "command", prompt: CONTACT_PROMPTS[step], text: value });

		const result = contactSchema.shape[step].safeParse(value);
		if (!result.success) {
			pushLines({
				kind: "output",
				text: `${result.error.issues[0].message} — try again, or type 'cancel'.`,
			});
			return;
		}

		draft.current[step] = value;
		const next = NEXT_STEP[step];
		if (next) {
			setContactStep(next);
		} else {
			submitContact();
		}
	};

	const runCommand = (rawValue: string) => {
		const command = rawValue.trim().toLowerCase();
		if (!command) return;

		if (command === "clear") {
			setLines([]);
			return;
		}

		if (command === "contact") {
			pushLines(
				{ kind: "command", text: command },
				{
					kind: "output",
					text: "Send me a message right here. Type 'cancel' anytime to abort.",
				},
			);
			setContactStep("name");
			return;
		}

		pushLines(
			{ kind: "command", text: command },
			{ kind: "output", text: respond(command) },
		);
	};

	const handleEnter = () => {
		if (busy) return;
		const value = input;
		setInput("");
		if (contactStep) {
			handleContactEntry(contactStep, value);
		} else {
			runCommand(value);
		}
	};

	const activePrompt = contactStep ? CONTACT_PROMPTS[contactStep] : shellPrompt;

	return (
		<Section
			id="terminal"
			title="The"
			accent="Terminal"
			subtitle="Prefer the Command Line? Talk to the Site Directly"
		>
			<Box
				onClick={() => inputRef.current?.focus()}
				sx={{
					background: `linear-gradient(180deg, ${dw?.frame.light}, ${dw?.frame.mid} 30%, ${dw?.frame.dark})`,
					border: `1px solid ${dw?.border}`,
					p: 2,
					pt: 1.5,
					boxShadow: 4,
					cursor: "text",
				}}
			>
				<Stack direction="row" gap="8px" pb={1.5}>
					{(["closeDot", "minimizeDot", "fullScreenDot"] as const).map(
						(dot) => (
							<Box
								key={dot}
								sx={{
									width: "12px",
									height: "12px",
									borderRadius: "50%",
									bgcolor: dw?.[dot],
								}}
							/>
						),
					)}
				</Stack>
				<Box
					ref={scrollRef}
					sx={{
						bgcolor: dw?.background,
						border: `1px solid ${dw?.border}`,
						color: dw?.textPrimary,
						fontFamily: "monospace",
						fontSize: "0.75rem",
						p: 2,
						height: 280,
						overflowY: "auto",
						scrollbarWidth: "thin",
					}}
				>
					{lines.map((line) => (
						<Box
							key={line.id}
							sx={{
								whiteSpace: "pre-wrap",
								wordBreak: "break-word",
								mb: 0.5,
								color: line.kind === "output" ? dw?.muted : dw?.textPrimary,
							}}
						>
							{line.kind === "command" ? (
								<>
									<Box
										component="span"
										sx={{
											color: line.prompt ? dw?.type : dw?.variable,
											whiteSpace: "nowrap",
										}}
									>
										{line.prompt ?? shellPrompt}
									</Box>{" "}
									{line.text}
								</>
							) : (
								line.text
							)}
						</Box>
					))}
					<Stack direction="row" alignItems="center" gap={1}>
						<Box
							component="span"
							sx={{
								color: contactStep ? dw?.type : dw?.variable,
								whiteSpace: "nowrap",
								flexShrink: 0,
							}}
						>
							{activePrompt}
						</Box>
						<InputBase
							inputRef={inputRef}
							value={input}
							disabled={busy}
							onChange={(event) => setInput(event.target.value)}
							onKeyDown={(event) => {
								if (event.key === "Enter") handleEnter();
								if (event.key === "Escape" && contactStep && !busy) {
									setInput("");
									cancelContact(contactStep);
								}
							}}
							inputProps={{
								"aria-label": `terminal input (${activePrompt})`,
								autoCapitalize: "none",
								autoCorrect: "off",
								spellCheck: false,
							}}
							sx={{
								flexGrow: 1,
								minWidth: 0,
								color: dw?.textPrimary,
								fontFamily: "monospace",
								fontSize: "0.75rem",
								p: 0,
								"& .MuiInputBase-input": {
									p: 0,
									height: "auto",
									fontFamily: "monospace",
									fontSize: "0.75rem",
									lineHeight: 1.7,
									color: dw?.textPrimary,
								},
							}}
						/>
					</Stack>
				</Box>
			</Box>
		</Section>
	);
}
