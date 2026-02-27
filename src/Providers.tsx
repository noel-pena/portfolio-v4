import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type React from "react";
import { SnackbarProvider } from "./components/ContactForm/SnackbarContext";
import { theme } from "./theme/theme";

const emotionCache = createCache({ key: "emotion-css-cache", prepend: true });

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SnackbarProvider>{children}</SnackbarProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}
