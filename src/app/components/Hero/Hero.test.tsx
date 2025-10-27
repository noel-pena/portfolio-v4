import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Hero from "@/app/components/Hero/Hero";
import { render } from "@/app/test-utils";

describe("Hero section", () => {
	function setup() {
		render(<Hero />);
	}

	test("renders title section", () => {
		setup();

		expect(screen.getByText("Hi, my name is")).toBeInTheDocument();
		expect(screen.getByText("Noel Peña")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Full stack developer experienced in TypeScript, React, Flutter, and Kotlin. Focused on building clean, responsive applications across web and mobile platforms.",
			),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Resume button" })).toHaveAttribute(
			"href",
			"https://cdn.noel-pena.com/Noel-Pena.pdf",
		);
		expect(
			screen.getByRole("button", { name: "Contact button" }),
		).toBeInTheDocument();
	});

	// test("renders the developer window", () => {
	// 	setup();
	//
	// 	expect(screen.getByText("type: Developer")).toBeVisible();
	// 	expect(screen.getByText("name: string")).toBeVisible();
	// 	expect(screen.getByText("skills: string[]")).toBeInTheDocument();
	// 	expect(screen.getByText("yearsOfExerience: number")).toBeInTheDocument();
	//
	// 	expect(screen.getByText("const developer: Developer")).toBeVisible();
	// 	expect(screen.getAllByText("portfolio/components/portfolio.tsx")).toHaveLength(2);
	// 	expect(screen.getByText("name: 'Noel',")).toBeInTheDocument();
	// 	expect(screen.getByText("skills: ['TypeScript', 'Flutter', 'Kotlin'],")).toBeInTheDocument();
	// 	expect(screen.getByText(`yearsOfExperience: ${new Date().getFullYear() - 2023},`)).toBeInTheDocument();
	// })

	test("contact button opens the contact form", async () => {
		setup();

		expect(screen.queryByText("Get in Touch")).not.toBeInTheDocument();

		const contactBtn = screen.getByRole("button", { name: "Contact button" });

		fireEvent.click(contactBtn);

		expect(screen.getByText("Get in Touch")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Send me a message and I will get back to you as soon as possible.",
			),
		).toBeInTheDocument();

		const nameInput = screen.getByPlaceholderText("Your name");
		const emailInput = screen.getByPlaceholderText("your.email@example.com");
		const messageInput = screen.getByPlaceholderText(
			"Message me about any work or just say hello.",
		);

		await userEvent.type(nameInput, "Noel Peña");
		await userEvent.type(emailInput, "noel@example.com");
		await userEvent.type(messageInput, "Hello!");

		expect(nameInput).toHaveValue("Noel Peña");
		expect(emailInput).toHaveValue("noel@example.com");
		expect(messageInput).toHaveValue("Hello!");
	});
});
