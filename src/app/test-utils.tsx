import { ThemeProvider } from "@mui/material/styles";
import { render as originalRender } from "@testing-library/react";
import type React from "react";
import { SnackbarProvider } from "@/app/components/ContactForm/SnackbarContext";
import { theme } from "@/theme/theme";

export function render(children: React.ReactElement) {
	return originalRender(
		<ThemeProvider theme={theme}>
			<SnackbarProvider>{children}</SnackbarProvider>
		</ThemeProvider>,
	);
}
