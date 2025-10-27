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
	});
});
