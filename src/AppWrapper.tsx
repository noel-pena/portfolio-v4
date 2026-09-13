import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import type React from "react";
import Navbar from "./components/Navbar/Navbar";

// Opacity-only pulses stay on the GPU compositor; animating scale or blur
// forces continuous re-rasterization, which tanks frame rates on mobile.
const pulseGlowA = keyframes({
	"0%, 100%": { opacity: 0.5 },
	"50%": { opacity: 0.8 },
});

const pulseGlowB = keyframes({
	"0%, 100%": { opacity: 0.8 },
	"50%": { opacity: 0.5 },
});

const GRID_SIZE = "20px";
const GRID_OPACITY = 0.025;

export default function AppWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
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
					willChange: "opacity",
					content: '""',
					position: "absolute",
					width: "85vw",
					height: "110vw",
					zIndex: 0,
					pointerEvents: "none",
					"@media (prefers-reduced-motion: reduce)": {
						animation: "none",
					},
				},
				"&::before": {
					top: "-25%",
					left: "-50%",
					background: (theme) =>
						`radial-gradient(closest-side, ${theme.vars?.palette.glowColors.purple}, transparent)`,
					animation: `${pulseGlowA} 10s ease-in-out infinite`,
				},
				"&::after": {
					bottom: "-25%",
					right: "-50%",
					background: (theme) =>
						`radial-gradient(closest-side, ${theme.vars?.palette.glowColors.green}, transparent)`,
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
