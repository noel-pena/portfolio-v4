import { CONTACT_API_URL } from "../../constants";
import type { ContactFormData } from "./contactSchema";

export async function sendContactMessage(
	data: ContactFormData,
): Promise<boolean> {
	const response = await fetch(CONTACT_API_URL, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(data),
	});
	return response.ok;
}
