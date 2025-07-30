import type { ProjectCardProps } from "@/app/components/Projects/ProjectCard";

export const projectsData: Array<ProjectCardProps> = [
	{
		title: "Portfolio",
		description:
			"A clean personal portfolio showcasing featured work, skills, and contact—all responsive and built with modern design principles.",
		imageUrl: "../../snapshots/portfolio.png",
		altText: "picture of the portfolio app",
		codeLink: "https://github.com/noel-pena/portfolio-v4",
		tags: ["TypeScript", "React", "Material UI", "Next.js"],
	},
	{
		title: "Interviewer AI",
		description:
			"An AI-powered web tool designed to simulate job interviews and generate questions using OpenAI for mock interview practice.",
		imageUrl: "../../snapshots/interviewerai.png",
		altText: "picture of the interviewer ai app",
		codeLink: "https://github.com/noel-pena/InterviewerAI",
		demoLink: "https://interviewerai.onrender.com",
		tags: ["JavaScript", "React", "Python", "OpenAI API"],
	},
	{
		title: "Wallpaper App",
		description:
			"A mobile app offering curated high-quality wallpapers with tagging, downloads, and favorites, built with Flutter and Kotlin.",
		imageUrl: "../../snapshots/wallpaperapp.png",
		altText: "picture of the wallpaper app",
		codeLink: "https://github.com/noel-pena/wallpaper-mobile-app",
		tags: ["Flutter", "Kotlin", "Spring Boot"],
	},
	{
		title: "Code-Assisting Discord Bot",
		description:
			"A smart Discord bot for code help, using OpenAI to debug, explain, and generate code directly inside your development servers.",
		imageUrl: "../../snapshots/discordbot.png",
		altText: "picture of the discord bot",
		codeLink: "https://github.com/noel-pena/Code-Assisting-Discord-Bot",
		tags: ["Python", "Discord API", "OpenAI API"],
	},
];
