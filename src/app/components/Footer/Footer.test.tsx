import { screen } from "@testing-library/react";
import { describe } from "vitest";
import Footer from "@/app/components/Footer/Footer";
import { render } from "@/app/test-utils";

describe("Nav Bar", () => {
	function setup() {
		render(<Footer />);
	}

	test("renders footer with clickable list items", () => {
		setup();

		expect(screen.getByText("Full Stack Dev")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Crafting digital experiences with passion and precision. Always learning, always building.",
			),
		).toBeInTheDocument();
		expect(screen.getByText("Quick Links")).toBeInTheDocument();
		expect(
			screen.getByText("Powered by React & Material UI"),
		).toBeInTheDocument();

		expect(screen.getByRole("link", { name: "Skills link" })).toHaveAttribute(
			"href",
			"#skills",
		);
		expect(screen.getByRole("link", { name: "Projects link" })).toHaveAttribute(
			"href",
			"#projects",
		);
		expect(screen.getByRole("link", { name: "Resume link" })).toHaveAttribute(
			"href",
			"https://cdn.noel-pena.com/Noel-Pena.pdf",
		);
		expect(
			screen.getByRole("link", { name: "noel.pena@hotmail.com" }),
		).toHaveAttribute("href", "mailto:noel.pena@hotmail.com");
		expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/noel-pena-1138aa167/",
		);
	});
});
