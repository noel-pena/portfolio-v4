"use client";

import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Montserrat } from "next/font/google";
import type React from "react";
import { SnackbarProvider } from "@/components/ContactForm/SnackbarContext";

// import { theme } from "@/theme/theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const theme = useTheme();
	return (
		<html lang="en" className={montserrat.className}>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<SnackbarProvider>{children}</SnackbarProvider>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
