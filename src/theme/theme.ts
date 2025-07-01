import { createTheme } from "@mui/material/styles";

type gradientColors = {
	darkBlue: string;
	lightBlue: string;
	lighterBlue: string;
};

declare module "@mui/material/styles" {
	interface Theme {
		developerWindow: {
			background: string;
			textPrimary: string;
			textSecondary: string;
			closeDot: string;
			minimizeDot: string;
			fullScreenDot: string;
			gradient: gradientColors;
			muted: string;
			variable: string;
			type: string;
			developerText: string;
		};
		glowColors: {
			yellow: string;
			green: string;
			purple: string;
		};
	}
	interface ThemeOptions {
		developerWindow: {
			background: string;
			textPrimary: string;
			textSecondary: string;
			closeDot: string;
			minimizeDot: string;
			fullScreenDot: string;
			gradient: gradientColors;
			muted: string;
			variable: string;
			type: string;
			developerText: string;
		};
		glowColors: {
			yellow: string;
			green: string;
			purple: string;
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
			default: "#181C1F",
			paper: "#0E1522",
		},
		text: {
			primary: "#cfcfcf",
		},
	},
	typography: {
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
					borderRadius: "8px",
					fontSize: "0.75rem",
					fontWeight: 200,
				},
			},
		},
	},
});
