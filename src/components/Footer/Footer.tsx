import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import { theme } from "@/theme/theme";

export default function Footer() {
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				flexDirection: "column",
				minHeight: isMobile ? "25%" : "30%",
				background: `linear-gradient(135deg, ${theme.developerWindow.gradient.lighterBlue}, ${theme.developerWindow.gradient.lightBlue}, ${theme.developerWindow.gradient.darkBlue})`,
			}}
		>
			Footer to be...
		</Box>
	);
}
