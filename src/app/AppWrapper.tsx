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

const GRID_SIZE = "20px";
const GRID_OPACITY = 0.025;

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
				height: "100svh",
				minHeight: "-webkit-fill-available",
				boxSizing: "border-box",
				overflow: "hidden",
				position: "relative",
				backgroundColor: (theme) => theme.vars?.palette.background.default,
				paddingTop: "env(safe-area-inset-top)",
				paddingBottom: "env(safe-area-inset-bottom)",
				"&::before, &::after": {
					willChange: "transform, opacity",
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
					background: (theme) => theme.vars?.palette.glowColors.purple,
					animation: `${pulseGlowA} 10s ease-in-out infinite`,
				},
				"&::after": {
					bottom: "-10%",
					right: "-40%",
					background: (theme) => theme.vars?.palette.glowColors.green,
					animation: `${pulseGlowB} 10s ease-in-out infinite`,
				},
			}}
		>
			<Box
				sx={{
					position: "absolute",
					inset: 0,
					zIndex: 0,
					pointerEvents: "none",
					opacity: GRID_OPACITY,
					backgroundSize: `${GRID_SIZE} ${GRID_SIZE}`,
					backgroundImage: (theme) => `
                    linear-gradient(to right, ${theme.vars?.palette.text.primary} 1px, transparent 1px),
                    linear-gradient(to bottom, ${theme.vars?.palette.text.primary} 1px, transparent 1px)
                `,
					maskImage:
						"radial-gradient(circle at center, black 60%, transparent 100%)",
					WebkitMaskImage:
						"radial-gradient(circle at center, black 30%, transparent 100%)",
				}}
			/>

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
