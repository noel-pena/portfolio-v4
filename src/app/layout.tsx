"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Montserrat } from "next/font/google";
import type React from "react";
import { SnackbarProvider } from "@/app/components/ContactForm/SnackbarContext";
import { theme } from "@/theme/theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={montserrat.className}>
			<head>
				<title>Portfolio by Noel</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
			</head>
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
