import { screen } from "@testing-library/react";
import { describe } from "vitest";
import Navbar from "@/app/components/Navbar/Navbar";
import { render } from "@/app/test-utils";

describe("Nav Bar", () => {
	function setup() {
		render(<Navbar />);
	}

	test("renders nav bar with menu items", () => {
		setup();

		expect(screen.getByText("Portfolio")).toBeInTheDocument();
		expect(screen.getByText("Skills")).toBeInTheDocument();
		expect(screen.getByText("Projects")).toBeInTheDocument();
		expect(screen.getByText("Resume")).toBeInTheDocument();
		expect(screen.getByText("GitHub")).toBeInTheDocument();
		expect(screen.getByText("Contact")).toBeInTheDocument();
	});
});
