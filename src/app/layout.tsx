"use client";

import { theme } from "@/app/theme/theme";
import Navbar from "@/components/Navbar/Navbar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Montserrat } from "next/font/google";
import type React from "react";

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
