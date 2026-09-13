import { ThemeProvider } from "@mui/material/styles";
import { render as originalRender } from "@testing-library/react";
import type React from "react";
import { ContactFormProvider } from "./components/ContactForm/ContactFormContext";
import { SnackbarProvider } from "./components/ContactForm/SnackbarContext";
import { theme } from "./theme/theme";

export function render(
	children: React.ReactElement,
): ReturnType<typeof originalRender> {
	return originalRender(
		<ThemeProvider theme={theme}>
			<SnackbarProvider>
				<ContactFormProvider>{children}</ContactFormProvider>
			</SnackbarProvider>
		</ThemeProvider>,
	);
}
