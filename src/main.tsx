import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContactFormProvider } from "./components/ContactForm/ContactFormContext";
import { SnackbarProvider } from "./components/ContactForm/SnackbarContext";
import { theme } from "./theme/theme";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root not found");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackbarProvider>
				<ContactFormProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ContactFormProvider>
			</SnackbarProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
