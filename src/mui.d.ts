import "@mui/material/styles";

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
