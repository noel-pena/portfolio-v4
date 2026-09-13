import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";
import { render } from "../../test-utils";
import ContactForm from "./ContactForm";

describe("Contact form", () => {
	afterEach(() => {
		vi.unstubAllGlobals();
	});

	test("shows validation errors for empty submit", async () => {
		render(<ContactForm open onClose={() => {}} />);

		await userEvent.click(screen.getByRole("button", { name: "Send" }));

		expect(
			await screen.findByText("Name must be at least 2 characters"),
		).toBeInTheDocument();
		expect(screen.getByText("Invalid email address")).toBeInTheDocument();
		expect(screen.getByText("Minimum 5 characters")).toBeInTheDocument();
	});

	test("submits valid input and shows a success message", async () => {
		const fetchMock = vi.fn().mockResolvedValue({ ok: true });
		vi.stubGlobal("fetch", fetchMock);
		const onClose = vi.fn();

		render(<ContactForm open onClose={onClose} />);

		await userEvent.type(screen.getByPlaceholderText("Your name"), "Noel");
		await userEvent.type(
			screen.getByPlaceholderText("your.email@example.com"),
			"noel@example.com",
		);
		await userEvent.type(
			screen.getByPlaceholderText(
				"Message me about any work or just say hello.",
			),
			"Hello there!",
		);
		await userEvent.click(screen.getByRole("button", { name: "Send" }));

		await waitFor(() => expect(onClose).toHaveBeenCalled());
		expect(fetchMock).toHaveBeenCalledWith(
			expect.stringContaining("send-email"),
			expect.objectContaining({ method: "POST" }),
		);
		expect(
			await screen.findByText("Message sent successfully."),
		).toBeInTheDocument();
	});

	test("shows an error message when the request fails", async () => {
		vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
		vi.spyOn(console, "error").mockImplementation(() => {});
		const onClose = vi.fn();

		render(<ContactForm open onClose={onClose} />);

		await userEvent.type(screen.getByPlaceholderText("Your name"), "Noel");
		await userEvent.type(
			screen.getByPlaceholderText("your.email@example.com"),
			"noel@example.com",
		);
		await userEvent.type(
			screen.getByPlaceholderText(
				"Message me about any work or just say hello.",
			),
			"Hello there!",
		);
		await userEvent.click(screen.getByRole("button", { name: "Send" }));

		expect(await screen.findByText("Submission error.")).toBeInTheDocument();
		expect(onClose).not.toHaveBeenCalled();
	});
});
