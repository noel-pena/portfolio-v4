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
} from "@mui/material";

function Navbar() {
	const menuItems = ["About", "Projects", "XP"];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Grid container justifyContent="space-between" width="100%">
						<Grid display="flex" direction="row">
							<IconButton edge="start">
								<ArrowBackIosIcon fontSize="small" />
								<ArrowForwardIosIcon fontSize="small" />
							</IconButton>
							{menuItems.map((menuItem) => (
								<MenuItem key={menuItem}>{menuItem}</MenuItem>
							))}
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={1}>
							<IconButton edge="start">
								<GitHubIcon />
							</IconButton>
							<IconButton edge="start">
								<LinkedInIcon />
							</IconButton>
							<Button color="inherit" variant="outlined" size="small">
								Contact
							</Button>
							<Button color="inherit" variant="outlined" size="small">
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
