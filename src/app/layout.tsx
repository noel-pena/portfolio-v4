"use client";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { useMediaQuery } from "@mui/system";
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
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
								overflow: "hidden",
							}}
						>
							<Box
								sx={{
									zIndex: -999,
									position: "absolute",
									width: 225,
									height: 225,
									background: theme.glowColors.purple,
									borderRadius: "50%",
									filter: "blur(150px)",
									bottom: isMobile ? 300 : 350,
									left: isMobile ? 100 : 200,
								}}
							/>
							<Box
								sx={{
									zIndex: -999,
									position: "absolute",
									width: 75,
									height: 75,
									background: theme.glowColors.yellow,
									borderRadius: "50%",
									filter: "blur(100px)",
									bottom: 0,
									right: 0,
									transform: "scale(1)",
									animation: "pulseGlow 5s ease-in-out infinite",
									"@keyframes pulseGlow": {
										"0%": { transform: "scale(1)" },
										"50%": { transform: "scale(3)" },
										"100%": { transform: "scale(1)" },
									},
								}}
							/>
							<Navbar />
							<Box px={4} height="100vh">
								{children}
							</Box>
						</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
