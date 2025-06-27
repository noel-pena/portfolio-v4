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
import { useMediaQuery } from "@mui/system";
import { theme } from "@/theme/theme";

function Navbar() {
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const menuItems = ["About", "Projects"];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent" elevation={0}>
				<Toolbar>
					<Grid
						container
						justifyContent="space-between"
						alignItems="center"
						width="100%"
					>
						<Grid display="flex" direction="row">
							<IconButton edge="start" sx={{ borderRadius: "8px" }}>
								<ArrowBackIosIcon
									sx={{
										color: theme.palette.text.primary,
										width: 24,
										height: 24,
									}}
								/>
								<ArrowForwardIosIcon
									sx={{
										color: theme.palette.text.primary,
										width: 24,
										height: 24,
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
						<Grid
							display="flex"
							direction="row"
							alignItems="center"
							gap={isMobile ? 3 : 2}
						>
							<IconButton edge="start">
								<GitHubIcon
									sx={{
										color: theme.palette.text.primary,
										width: 30,
										height: 30,
									}}
								/>
							</IconButton>
							<IconButton edge="start">
								<LinkedInIcon
									sx={{
										color: theme.palette.text.primary,
										width: 30,
										height: 30,
									}}
								/>
							</IconButton>
							{!isMobile && (
								<>
									<Button variant="contained" size="large">
										Contact
									</Button>
									<Button variant="outlined" size="large">
										Resume
									</Button>
								</>
							)}
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
