import type { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		developerWindow: {
			background: string;
			textPrimary: string;
			textSecondary: string;
			closeDot: string;
			minimizeDot: string;
			fullScreenDot: string;
			gradient: {
				darkBlue: string;
				lightBlue: string;
				lighterBlue: string;
			};
			muted: string;
			variable: string;
			type: string;
			developerText: string;
		};
		glowColors: {
			yellow: string;
			green: string;
			purple: string;
			wallpaper: string;
		};
	}

	interface ThemeOptions {
		developerWindow?: {
			background?: string;
			textPrimary?: string;
			textSecondary?: string;
			closeDot?: string;
			minimizeDot?: string;
			fullScreenDot?: string;
			gradient?: {
				darkBlue?: string;
				lightBlue?: string;
				lighterBlue?: string;
			};
			muted?: string;
			variable?: string;
			type?: string;
			developerText?: string;
		};
		glowColors?: {
			yellow?: string;
			green?: string;
			purple?: string;
			wallpaper?: string;
		};
	}
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
	const isDark = mode === "dark";

	return {
		palette: {
			mode,
			primary: {
				main: isDark ? "#AF97C5" : "#6A4F82",
			},
			secondary: {
				main: isDark ? "#B6F1E9" : "#00796B",
			},
			background: {
				default: isDark ? "#171717" : "#F3F4F6",
				paper: isDark ? "#0E1522" : "#FFFFFF",
			},
			text: {
				primary: isDark ? "#cfcfcf" : "#1F2937",
				secondary: isDark ? "#838383" : "#6B7280",
			},
		},
		typography: {
			fontFamily: '"Silkscreen", "Courier New", monospace',
			h3: {
				fontSize: "2.5rem",
			},
		},
		developerWindow: {
			background: isDark ? "#1E1E1E" : "#E5E7EB",
			textPrimary: isDark ? "#D4D4D4" : "#111827",
			textSecondary: isDark ? "darkgrey" : "#6B7280",
			closeDot: "#FF5757",
			minimizeDot: "#FFCC33",
			fullScreenDot: "#4CAF50",
			gradient: {
				darkBlue: isDark ? "#0F2027" : "#D1FAE5",
				lightBlue: isDark ? "#203A43" : "#A7F3D0",
				lighterBlue: isDark ? "#2C5364" : "#6EE7B7",
			},
			muted: isDark ? "#838383" : "#9CA3AF",
			variable: isDark ? "#88ACFF" : "#2563EB",
			type: isDark ? "#69D767" : "#059669",
			developerText: isDark ? "#DB88FF" : "#9333EA",
		},
		glowColors: {
			yellow: "#FFE627",
			green: "#399E5A",
			purple: "#5F3D75",
			wallpaper: isDark ? "#272d33" : "#E2E8F0",
		},
		components: {
			MuiButton: {
				variants: [
					{
						props: { variant: "contained" },
						style: {
							backgroundColor: isDark ? "#203A43" : "#374151",
							color: isDark ? "#EAEAEA" : "#FFFFFF",
							"&:hover": {
								backgroundColor: isDark ? "#2C5364" : "#4B5563",
							},
						},
					},
					{
						props: { variant: "outlined" },
						style: {
							border: isDark
								? "1px solid rgba(234, 234, 234, 0.4)"
								: "1px solid rgba(0, 0, 0, 0.2)",
							backgroundColor: "transparent",
							color: isDark ? "#EAEAEA" : "#1F2937",
						},
					},
				],
				styleOverrides: {
					root: {
						borderRadius: 0,
						fontSize: "0.75rem",
						fontWeight: 200,
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						backgroundColor: isDark ? "#23282c" : "#FFFFFF",
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: isDark ? "#cccccc" : "#4B5563",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: isDark ? "#a0a0a0" : "#000000",
						},
					},
					notchedOutline: {
						borderColor: isDark ? "#838383" : "#D1D5DB",
					},
					input: {
						// p: 0
						"::placeholder": {
							fontSize: "0.875rem",
							fontWeight: 400,
						},
					},
				},
			},
			MuiIconButton: {
				styleOverrides: {
					root: {
						"&:hover": {
							backgroundColor: "transparent",
						},
					},
				},
			},
			MuiButtonBase: {
				defaultProps: {
					disableRipple: false,
				},
				styleOverrides: {
					root: {
						"&:hover": {
							backgroundColor: "rgba(44,83,100,0.08)",
							borderRadius: 0,
						},
					},
				},
			},
			MuiListItemButton: {
				styleOverrides: {
					root: {
						"&:hover": {
							backgroundColor: "rgba(44,83,100,0.08)",
						},
					},
				},
			},
			MuiMenuItem: {
				styleOverrides: {
					root: {
						"&:hover": {
							backgroundColor: "rgba(44,83,100,0.08)",
						},
					},
				},
			},
			MuiInputBase: {
				styleOverrides: {
					input: {
						"&:-webkit-autofill": {
							WebkitBoxShadow: isDark
								? "0 0 0 1000px transparent inset"
								: "0 0 0 1000px #FFFFFF inset",
							WebkitTextFillColor: isDark ? "#CFCFCF" : "#000000",
							caretColor: isDark ? "#CFCFCF" : "#000000",
							transition: "background-color 5000s ease-in-out 0s",
						},
					},
				},
			},
		},
	};
};
