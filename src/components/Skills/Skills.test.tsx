import { screen } from "@testing-library/react";
import { describe } from "vitest";
import Skills from "@/components/Skills/Skills";
import { render } from "@/test-utils";

describe("Skills section", () => {
	function setup() {
		render(<Skills />);
	}

	test("renders footer with clickable list items", () => {
		setup();

		expect(
			screen.getByText("Key Technologies in My Development Arsenal"),
		).toBeInTheDocument();
	});
});
