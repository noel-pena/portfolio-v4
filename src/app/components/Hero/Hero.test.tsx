import { screen } from "@testing-library/react";
import Hero from "@/app/components/Hero/Hero";
import { renderWithTheme as render } from "@/app/test-utils";

test("renders main title", () => {
	render(<Hero />);

	expect(screen.getByText("Noel")).toBeInTheDocument();
});
