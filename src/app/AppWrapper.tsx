"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import type React from "react";
import Navbar from "@/app/components/Navbar/Navbar";

export default function AppWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<Box
				sx={(theme) => ({
					zIndex: -999,
					position: "absolute",
					width: 225,
					height: 225,
					background: theme.glowColors.purple,
					borderRadius: "50%",
					filter: "blur(150px)",
					bottom: isMobile ? 300 : 350,
					left: isMobile ? 100 : 250,
					transform: "scale(0.75)",
					animation: "pulseMoveGlow 4s ease-in-out infinite",
					"@keyframes pulseMoveGlow": {
						"0%": { transform: "translateX(0) scale(0.75)" },
						"25%": { transform: "translateX(-70px) scale(1)" },
						"50%": { transform: "translateX(0) scale(0.75)" },
						"75%": { transform: "translateX(40px) scale(1)" },
						"100%": { transform: "translateX(0) scale(0.75)" },
					},
				})}
			/>
			<Box
				sx={(theme) => ({
					zIndex: -999,
					position: "absolute",
					width: 75,
					height: 75,
					background: theme.glowColors.green,
					borderRadius: "50%",
					filter: "blur(75px)",
					top: 400,
					right: 0,
					transform: "scale(1)",
					animation: "pulseGlow 5s ease-in-out infinite",
					"@keyframes pulseGlow": {
						"0%": { transform: "scale(1)" },
						"50%": { transform: "scale(3)" },
						"100%": { transform: "scale(1)" },
					},
				})}
			/>
			<Box
				sx={{
					flexGrow: 1,
					overflow: "auto",
					minHeight: 0,
					scrollbarWidth: "none",
					scrollBehavior: "smooth",
				}}
			>
				<Navbar />
				{children}
			</Box>
		</Box>
	);
}
