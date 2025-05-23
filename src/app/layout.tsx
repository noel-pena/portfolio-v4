"use client";

import { theme } from "@/app/theme/theme";
import Navbar from "@/components/Navbar/Navbar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type React from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Navbar />
						<Box height="100vh">{children}</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
				{children}
			</body>
		</html>
	);
}
