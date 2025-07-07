import type { ProjectCardProps } from "@/components/Projects/ProjectCard";

export const projectsData: Array<ProjectCardProps> = [
	{
		title: "Portfolio",
		description:
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		imageUrl: "../../snapshots/portfolio.png",
		altText: "picture of the portfolio app",
		codeLink: "https://github.com/noel-pena/portfolio-v4",
		tags: ["TypeScript", "React", "Material UI", "Next.js"],
	},
	{
		title: "Interviewer AI",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
		imageUrl: "../../snapshots/interviewerai.png",
		altText: "picture of the interviewer ai app",
		codeLink: "https://github.com/noel-pena/InterviewerAI",
		demoLink: "https://interviewerai.onrender.com",
		tags: ["JavaScript", "React", "Python", "Flask", "OpenAI API"],
	},
	{
		title: "Wallpaper App",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imageUrl: "../../snapshots/wallpaperapp.png",
		altText: "picture of the wallpaper app",
		codeLink: "https://github.com/noel-pena/wallpaper-mobile-app",
		tags: ["Flutter", "Kotlin", "Spring Boot"],
	},
	{
		title: "Code-Assisting Discord Bot",
		description:
			"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		imageUrl: "../../snapshots/discordbot.png",
		altText: "picture of the discord bot",
		codeLink: "https://github.com/noel-pena/Code-Assisting-Discord-Bot",
		tags: ["Python", "Discord API", "OpenAI API"],
	},
];
