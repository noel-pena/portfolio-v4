import type { SkillSlotProps } from "@/app/components/Skills/SkillSlot";

const skillVar = (name: string) => `var(--mui-palette-skillColors-${name})`;

export const skillsData: Array<SkillSlotProps> = [
	{
		primaryText: "React",
		primaryColor: skillVar("react"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		altText: "React Logo",
	},
	{
		primaryText: "TypeScript",
		primaryColor: skillVar("typescript"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		altText: "TypeScript Logo",
	},
	{
		primaryText: "JavaScript",
		primaryColor: skillVar("javascript"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		altText: "JavaScript Logo",
	},
	{
		primaryText: "Kotlin",
		primaryColor: skillVar("kotlin"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
		altText: "Kotlin Logo",
	},
	{
		primaryText: "Java",
		primaryColor: skillVar("java"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
		altText: "Java Logo",
	},
	{
		primaryText: "Flutter",
		primaryColor: skillVar("flutter"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
		altText: "Flutter Logo",
	},
	{
		primaryText: "Spring Boot",
		primaryColor: skillVar("springBoot"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
		altText: "Spring Boot Logo",
	},
	{
		primaryText: "Node.js",
		primaryColor: skillVar("node"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		altText: "Node.js Logo",
	},
	{
		primaryText: "AWS",
		primaryColor: skillVar("aws"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
		altText: "AWS Logo",
	},
	{
		primaryText: "Azure DevOps",
		primaryColor: skillVar("azure"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
		altText: "Azure DevOps Logo",
	},
	{
		primaryText: "PostgreSQL",
		primaryColor: skillVar("postgresql"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		altText: "PostgreSQL Logo",
	},
	{
		primaryText: "Python",
		primaryColor: skillVar("python"),
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		altText: "Python Logo",
	},
];
