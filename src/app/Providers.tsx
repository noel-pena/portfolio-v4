"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type React from "react";
import { SnackbarProvider } from "@/app/components/ContactForm/SnackbarContext";
import { theme } from "@/theme/theme";

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SnackbarProvider>{children}</SnackbarProvider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
