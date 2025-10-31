import { createTheme } from "@mui/material/styles";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

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

export const theme = createTheme({
	palette: {
		primary: {
			main: "#AF97C5",
		},
		secondary: {
			main: "#B6F1E9",
		},
		background: {
			default: "#171717",
			paper: "#0E1522",
		},
		text: {
			primary: "#cfcfcf",
		},
	},
	typography: {
		fontFamily: silkscreen.style.fontFamily,
		h3: {
			fontSize: "2.5rem",
		},
	},
	developerWindow: {
		background: "#1E1E1E",
		textPrimary: "#D4D4D4",
		textSecondary: "darkgrey",
		closeDot: "#FF5757",
		minimizeDot: "#FFCC33",
		fullScreenDot: "#4CAF50",
		gradient: {
			darkBlue: "#0F2027",
			lightBlue: "#203A43",
			lighterBlue: "#2C5364",
		},
		muted: "#838383",
		variable: "#88ACFF",
		type: "#69D767",
		developerText: "#DB88FF",
	},
	glowColors: {
		yellow: "#FFE627",
		green: "#399E5A",
		purple: "#5F3D75",
		wallpaper: "#272d33",
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "contained" },
					style: {
						backgroundColor: "#203A43",
						color: "#EAEAEA",
						"&:hover": {
							backgroundColor: "#2C5364",
						},
					},
				},
				{
					props: { variant: "outlined" },
					style: {
						border: "1px solid rgba(234, 234, 234, 0.4)",
						backgroundColor: "transparent",
						color: "#EAEAEA",
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
					backgroundColor: "#23282c",
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "#cccccc",
					},
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "#a0a0a0",
					},
				},
				notchedOutline: {
					borderColor: "#838383",
				},
				input: {
					p: 0,
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
						WebkitBoxShadow: "0 0 0 1000px transparent inset",
						WebkitTextFillColor: "#CFCFCF",
						caretColor: "#CFCFCF",
						transition: "background-color 5000s ease-in-out 0s",
					},
				},
			},
		},
	},
});
