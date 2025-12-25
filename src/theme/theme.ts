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
	typography: {
		fontFamily: silkscreen.style.fontFamily,
		h3: {
			fontSize: "2.5rem",
		},
	},
	colorSchemes: {
		light: {
			palette: {
				primary: { main: "#673AB7" },
				secondary: { main: "#009688" },
				background: {
					default: "#F3F4F6",
					paper: "#FFFFFF",
				},
				text: {
					primary: "#1F2937",
					secondary: "#4B5563",
				},
				developerWindow: {
					background: "#f6f6f6",
					textPrimary: "#333333",
					textSecondary: "#666666",
					closeDot: "#FF5F56",
					minimizeDot: "#FFBD2E",
					fullScreenDot: "#27C93F",
					gradient: {
						darkBlue: "#e6fce0",
						lightBlue: "#d1f3cf",
						lighterBlue: "#ab9ad6",
					},
					muted: "#6a6b71",
					variable: "#005CC5",
					type: "#22863A",
					developerText: "#6F42C1",
				},
				glowColors: {
					yellow: "#F59E0B",
					green: "#10B981",
					purple: "#8B5CF6",
					wallpaper: "#E5E7EB",
				},
				skillColors: {
					react: "#a2ebfd",
					typescript: "#3178C6",
					javascript: "#ede8c2",
					kotlin: "#9169ff",
					java: "#5382A1",
					flutter: "#72a4cd",
					springBoot: "#bbe3aa",
					node: "#7fc87f",
					aws: "#ffcd78",
					azure: "#0078D7",
					postgresql: "#336791",
					python: "#3776AB",
				},
			},
		},
		dark: {
			palette: {
				primary: { main: "#AF97C5" },
				secondary: { main: "#B6F1E9" },
				background: {
					default: "#171717",
					paper: "#0E1522",
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
				notchedOutline: ({ theme }) => ({
					borderColor: theme.vars.palette.developerWindow.muted,
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
					"&:-webkit-autofill": {
						WebkitBoxShadow: `0 0 0 1000px ${theme.vars.palette.background.paper} inset`,
						WebkitTextFillColor: theme.vars.palette.text.primary,
						caretColor: theme.vars.palette.text.primary,
						transition: "background-color 5000s ease-in-out 0s",
					},
				}),
			},
		},
	},
});
