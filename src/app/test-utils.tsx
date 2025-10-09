import { ThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import type React from "react";
import { SnackbarProvider } from "@/app/components/ContactForm/SnackbarContext";
import { theme } from "@/theme/theme";

export function renderWithTheme(children: React.ReactElement) {
	return render(
		<ThemeProvider theme={theme}>
			<SnackbarProvider>{children}</SnackbarProvider>
		</ThemeProvider>,
	);
}
