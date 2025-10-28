import { screen } from "@testing-library/react";
import { describe } from "vitest";
import Projects from "@/app/components/Projects/Projects";
import { render } from "@/app/test-utils";

describe("Projects section", () => {
	function setup() {
		render(<Projects />);
	}

	test("renders footer with clickable list items", () => {
		setup();

		expect(screen.getByText("Featured")).toBeInTheDocument();
		expect(screen.getByText("Projects")).toBeInTheDocument();

		expect(
			screen.getByText(
				"A Showcase of My Personal Projects as a Full-stack Developer",
			),
		).toBeInTheDocument();

		expect(screen.getByText("Portfolio")).toBeInTheDocument();
		expect(
			screen.getByText(
				"A clean personal portfolio showcasing featured work, skills, and contact—all responsive and built with modern design principles.",
			),
		).toBeInTheDocument();

		expect(screen.getByText("Interviewer AI")).toBeInTheDocument();
		expect(
			screen.getByText(
				"An AI-powered web tool designed to simulate job interviews and generate questions using OpenAI for mock interview practice.",
			),
		).toBeInTheDocument();

		expect(screen.getByText("Wallpaper App")).toBeInTheDocument();
		expect(
			screen.getByText(
				"A mobile app offering curated high-quality wallpapers with tagging, downloads, and favorites, built with Flutter and Kotlin.",
			),
		).toBeInTheDocument();

		expect(screen.getByText("Code-Assisting Discord Bot")).toBeInTheDocument();
		expect(
			screen.getByText(
				"A smart Discord bot for code help, using OpenAI to debug, explain, and generate code directly inside your development servers.",
			),
		).toBeInTheDocument();
	});
});
