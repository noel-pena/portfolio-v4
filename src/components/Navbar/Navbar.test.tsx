import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Navbar from "../../components/Navbar/Navbar";
import { render } from "../../test-utils";

describe("Navigation bar", () => {
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
