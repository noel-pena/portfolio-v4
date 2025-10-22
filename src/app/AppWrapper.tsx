"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";
import type React from "react";
import Navbar from "@/app/components/Navbar/Navbar";

const pulseGlowA = keyframes({
	"0%, 100%": { transform: "scale(1)", opacity: 0.5 },
	"50%": { transform: "scale(1.1)", opacity: 0.7 },
});

const pulseGlowB = keyframes({
	"0%, 100%": { transform: "scale(1.1)", opacity: 0.7 },
	"50%": { transform: "scale(1)", opacity: 0.5 },
});

export default function AppWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100vh",
				overflow: "hidden",
				position: "relative",
				backgroundColor: (theme) => theme.palette.background.default,
				"&::before, &::after": {
					content: '""',
					position: "absolute",
					width: "50vw",
					height: "70vw",
					borderRadius: "50%",
					filter: isMobile ? "blur(120px)" : "blur(250px)",
					opacity: 0.9,
					zIndex: 0,
				},
				"&::before": {
					top: "-10%",
					left: "-40%",
					background: (theme) => theme.glowColors.purple,
					animation: `${pulseGlowA} 10s ease-in-out infinite`,
				},
				"&::after": {
					bottom: "-10%",
					right: "-40%",
					background: (theme) => theme.glowColors.green,
					animation: `${pulseGlowB} 10s ease-in-out infinite`,
				},
			}}
		>
			<Box
				sx={{
					flexGrow: 1,
					overflow: "auto",
					minHeight: 0,
					scrollbarWidth: "none",
					scrollBehavior: "smooth",
					zIndex: 1,
				}}
			>
				<Navbar />
				{children}
			</Box>
		</Box>
	);
}
