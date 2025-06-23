"use client";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Montserrat } from "next/font/google";
import type React from "react";
import Navbar from "@/components/Navbar/Navbar";
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
						<CssBaseline />
						<Box
							sx={{
								position: "fixed",
								width: "100%",
								height: "100%",
								top: 0,
								left: 0,
								zIndex: -999,
								overflow: "hidden",
							}}
						>
							<Box
								sx={{
									zIndex: -999,
									position: "absolute",
									width: 100,
									height: 100,
									background: theme.glowColors.green,
									borderRadius: "50%",
									filter: "blur(150px)",
									bottom: 100,
									left: 100,
									transform: "scale(1)",
									animation: "pulseGlow 4s ease-in-out infinite",
									"@keyframes pulseGlow": {
										"0%": { transform: "scale(1)" },
										"50%": { transform: "scale(1.5)" },
										"100%": { transform: "scale(1)" },
									},
								}}
							/>
							<Box
								sx={{
									zIndex: -999,
									position: "absolute",
									width: 50,
									height: 200,
									background: theme.glowColors.yellow,
									borderRadius: "50%",
									filter: "blur(150px)",
									bottom: 200,
									right: 100,
									transform: "scale(1)",
									animation: "pulseGlow 4s ease-in-out infinite",
									"@keyframes pulseGlow": {
										"0%": { transform: "scale(1)" },
										"50%": { transform: "scale(1.5)" },
										"100%": { transform: "scale(1)" },
									},
								}}
							/>
							<Navbar />
							<Box height="100vh">{children}</Box>
						</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
