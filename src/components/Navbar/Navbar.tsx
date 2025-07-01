import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
	AppBar,
	Box,
	Button,
	Grid,
	IconButton,
	Link,
	MenuItem,
	Toolbar,
} from "@mui/material";
import { useMediaQuery } from "@mui/system";
import { theme } from "@/theme/theme";

export default function Navbar() {
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const menuItems = ["Skills", "Projects"];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent" elevation={0}>
				<Toolbar sx={{ p: 0, py: 1 }}>
					<Grid
						container
						justifyContent="space-between"
						alignItems="center"
						width="100%"
					>
						<Grid display="flex" direction="row">
							<IconButton
								component={Link}
								href="/"
								sx={{ borderRadius: "8px", p: 0, pr: 1 }}
							>
								<CodeIcon
									sx={{
										color: theme.palette.text.primary,
										height: 38,
										width: 38,
									}}
								/>
							</IconButton>
							{!isMobile &&
								menuItems.map((menuItem) => (
									<MenuItem
										sx={{ fontWeight: 200, borderRadius: "8px" }}
										key={menuItem}
									>
										{menuItem}
									</MenuItem>
								))}
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={3}>
							{!isMobile && (
								<>
									<Button variant="contained" size="large">
										Contact
									</Button>
									<Button
										variant="outlined"
										size="large"
										component={Link}
										href="https://cdn.noel-pena.com/Noel-Pena.pdf"
										target="_blank"
										rel="noopener"
									>
										Resume
									</Button>
								</>
							)}
							<IconButton
								sx={{ p: 0 }}
								component={Link}
								href="https://github.com/noel-pena"
								target="_blank"
								rel="noopener"
							>
								<GitHubIcon
									sx={{
										color: theme.palette.text.primary,
										width: 34,
										height: 34,
									}}
								/>
							</IconButton>
							<IconButton
								sx={{ p: 0 }}
								component={Link}
								href="https://linkedin.com/in/noel-pena-1138aa167/"
								target="_blank"
								rel="noopener"
							>
								<LinkedInIcon
									sx={{
										color: theme.palette.text.primary,
										width: 34,
										height: 34,
									}}
								/>
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
