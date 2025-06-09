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
			primary: "#EAEAEA",
		},
	},
	developerWindow: {
		background: "#1e1e1e",
		textPrimary: "#d4d4d4",
		textSecondary: "darkgrey",
		closeDot: "#FF5757",
		minimizeDot: "#FFDA65",
		fullScreenDot: "#4CAF50",
		gradient: {
			darkBlue: "#0F2027",
			lightBlue: "#203A43",
			lighterBlue: "#2C5364",
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "contained" },
					style: {
						backgroundColor: "#6A86A0",
						"&:hover": {
							backgroundColor: "#9BAEBF",
						},
					},
				},
				{
					props: { variant: "outlined" },
					style: {
						border: "1px solid #EAEAEA",
						backgroundColor: "transparent",
						color: "#EAEAEA",
					},
				},
			],
			styleOverrides: {
				root: {
					padding: "8px 10px",
					borderRadius: "8px",
					fontSize: "0.75rem",
				},
			},
		},
	},
});
