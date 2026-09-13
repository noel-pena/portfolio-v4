export interface ExperienceItem {
	company: string;
	role: string;
	location: string;
	period: string;
	highlights: Array<string>;
}

export const experienceData: Array<ExperienceItem> = [
	{
		company: "IAAPA",
		role: "Web Application Developer",
		location: "Orlando, FL",
		period: "Feb 2026 — Present",
		highlights: [
			"Develop and maintain enterprise-level web applications using Drupal and PHP.",
			"Integrate and manage workflows within Salesforce to streamline business operations and synchronize data across enterprise systems.",
		],
	},
	{
		company: "Owens Corning",
		role: "Full-Stack Engineer",
		location: "Tampa, FL",
		period: "Jul 2024 — Feb 2026",
		highlights: [
			"Built and maintained scalable web applications with React and TypeScript, integrated with a Kotlin/Java backend.",
			"Managed PostgreSQL schemas and optimized complex SQL queries, improving data integrity and load times.",
			"Drove the SDLC in an Agile environment using Azure DevOps for sprint planning and CI/CD.",
		],
	},
	{
		company: "ServiceNow",
		role: "Technical Support Engineer",
		location: "Orlando, FL",
		period: "May 2024 — Jul 2024",
		highlights: [
			"Diagnosed and resolved complex software bugs in proprietary enterprise products using Java and JavaScript.",
			"Partnered with engineering teams on root-cause analysis and patch fixes, improving system stability for enterprise clients.",
		],
	},
	{
		company: "Freelance",
		role: "Web Developer",
		location: "Orlando, FL",
		period: "Oct 2023 — May 2024",
		highlights: [
			"Deployed full-stack solutions using Node.js and React, leveraging AWS for high-availability hosting.",
			"Designed custom Material UI design systems for 100% mobile responsiveness and accessibility compliance.",
		],
	},
];

export const certifications: Array<string> = [
	"BAS, Business Administration — Polk State College (2016)",
	"Full-Stack Web Development Bootcamp — Udemy (2023)",
	"CS50 Computer Science Certification — Harvard, edX (2024)",
];
