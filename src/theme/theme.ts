import { extendTheme } from "@mui/material/styles";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

declare module "@mui/material/styles" {
	interface Palette {
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
		skillColors: {
			react: string;
			typescript: string;
			javascript: string;
			kotlin: string;
			java: string;
			flutter: string;
			springBoot: string;
			node: string;
			aws: string;
			azure: string;
			postgresql: string;
			python: string;
		};
	}

	interface PaletteOptions {
		developerWindow?: Palette["developerWindow"];
		glowColors?: Palette["glowColors"];
		skillColors?: Palette["skillColors"];
	}
}

export const theme = extendTheme({
	colorSchemeSelector: "class",
	defaultColorScheme: "dark",
	typography: {
		fontFamily: silkscreen.style.fontFamily,
		h3: {
			fontSize: "2.5rem",
		},
	},
	colorSchemes: {
		light: {
			palette: {
				primary: { main: "#000000" },
				secondary: { main: "#333333" },
				background: {
					default: "#FFFFFF",
					paper: "#F8F8F8",
				},
				text: {
					primary: "#000000",
					secondary: "#555555",
				},
				developerWindow: {
					background: "#FFFFFF",
					textPrimary: "#000000",
					textSecondary: "#444444",
					closeDot: "#000000",
					minimizeDot: "#666666",
					fullScreenDot: "#AAAAAA",
					gradient: {
						darkBlue: "#FFFFFF",
						lightBlue: "#c8c8c8",
						lighterBlue: "#757575",
					},
					muted: "#888888",
					variable: "#000000",
					type: "#333333",
					developerText: "#111111",
				},
				glowColors: {
					yellow: "#D1D1D1",
					green: "#A3A3A3",
					purple: "#757575",
					wallpaper: "#F0F0F0",
				},
				skillColors: {
					react: "#E0E0E0",
					typescript: "#D6D6D6",
					javascript: "#EBEBEB",
					kotlin: "#CCCCCC",
					java: "#B3B3B3",
					flutter: "#C4C4C4",
					springBoot: "#D1D1D1",
					node: "#C9C9C9",
					aws: "#DBDBDB",
					azure: "#CFCFCF",
					postgresql: "#C7C7C7",
					python: "#BFBFBF",
				},
			},
		},
		dark: {
			palette: {
				primary: { main: "#AF97C5" },
				secondary: { main: "#B6F1E9" },
				background: {
					default: "#171717",
					paper: "#23282c",
				},
				text: {
					primary: "#cfcfcf",
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
						lighterBlue: "#335c6e",
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
				skillColors: {
					react: "#293960",
					typescript: "#1c3c64",
					javascript: "#858221",
					kotlin: "#311c40",
					java: "#b07219",
					flutter: "#0d1b2a",
					springBoot: "#204529",
					node: "#2f5a2b",
					aws: "#935902",
					azure: "#023f6c",
					postgresql: "#1b263b",
					python: "#2b2d42",
				},
			},
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "contained" },
					style: ({ theme }) => ({
						backgroundColor:
							theme.vars.palette.developerWindow.gradient.lightBlue,
						color: theme.vars.palette.developerWindow.textPrimary,
						"&:hover": {
							backgroundColor:
								theme.vars.palette.developerWindow.gradient.lighterBlue,
						},
					}),
				},
				{
					props: { variant: "outlined" },
					style: ({ theme }) => ({
						border: `1px solid ${theme.vars.palette.divider}`,
						backgroundColor: "transparent",
						color: theme.vars.palette.text.primary,
						backdropFilter: "blur(10px)",
					}),
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
				root: ({ theme }) => ({
					backgroundColor: theme.vars.palette.background.paper,
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: theme.vars.palette.text.primary,
					},
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: theme.vars.palette.primary.main,
					},
				}),
				input: {
					padding: 0,
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
				root: ({ theme }) => ({
					"&:hover": {
						backgroundColor: `rgba(${theme.vars.palette.action.activeChannel} / 0.08)`,
						borderRadius: 0,
					},
				}),
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					"&:hover": {
						backgroundColor: `rgba(${theme.vars.palette.action.activeChannel} / 0.08)`,
					},
				}),
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: ({ theme }) => ({
					"&:hover": {
						backgroundColor: `rgba(${theme.vars.palette.action.activeChannel} / 0.08)`,
					},
				}),
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: ({ theme }) => ({
					"::placeholder": {
						fontSize: "0.875rem",
						fontWeight: 400,
					},
					"&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":
						{
							WebkitBoxShadow: `0 0 0 1000px ${theme.vars.palette.background.paper} inset !important`,
							WebkitTextFillColor: `${theme.vars.palette.text.primary}`,
							caretColor: `${theme.vars.palette.text.primary}`,
						},
				}),
			},
		},
	},
});
