import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
	AppBar,
	Box,
	Button,
	Grid,
	IconButton,
	MenuItem,
	Toolbar,
	useTheme,
} from "@mui/material";

function Navbar() {
	const theme = useTheme();
	const menuItems = ["About", "Projects", "XP"];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent" elevation={0}>
				<Toolbar>
					<Grid container justifyContent="space-between" width="100%">
						<Grid display="flex" direction="row">
							<IconButton edge="start">
								<ArrowBackIosIcon
									sx={{
										color: theme.palette.text.primary,
										width: "16px",
										height: "24px",
									}}
								/>
								<ArrowForwardIosIcon
									sx={{
										color: theme.palette.text.primary,
										width: "16px",
										height: "24px",
									}}
								/>
							</IconButton>
							{menuItems.map((menuItem) => (
								<MenuItem sx={{ fontWeight: 200 }} key={menuItem}>
									{menuItem}
								</MenuItem>
							))}
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={1}>
							<IconButton edge="start">
								<GitHubIcon sx={{ color: theme.palette.text.primary }} />
							</IconButton>
							<IconButton edge="start">
								<LinkedInIcon sx={{ color: theme.palette.text.primary }} />
							</IconButton>
							<Button variant="outlined" size="small">
								Contact
							</Button>
							<Button variant="contained" size="small">
								Resume
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
