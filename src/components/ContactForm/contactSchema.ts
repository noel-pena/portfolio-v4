import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.email("Invalid email address"),
	message: z
		.string()
		.min(5, "Minimum 5 characters")
		.max(200, "Maximum 200 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
