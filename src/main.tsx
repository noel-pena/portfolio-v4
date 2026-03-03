import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SnackbarProvider } from "./components/ContactForm/SnackbarContext";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackbarProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</SnackbarProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
