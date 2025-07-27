"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Montserrat } from "next/font/google";
import type React from "react";
import { SnackbarProvider } from "@/components/ContactForm/SnackbarContext";
import { theme } from "@/theme/theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={montserrat.className}>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<SnackbarProvider>
							<CssBaseline />
							{children}
						</SnackbarProvider>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
