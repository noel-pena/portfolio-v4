"use client";

import { theme } from "@/app/theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	CssBaseline,
	ThemeProvider,
	Toolbar,
} from "@mui/material";
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
						<AppBar position="static">
							<Toolbar>
								<MenuIcon />
							</Toolbar>
						</AppBar>
						<Box height="100vh">{children}</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
				{children}
			</body>
		</html>
	);
}
