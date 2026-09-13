import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Button,
	Drawer,
	Grid,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemButton,
	Stack,
	Toolbar,
	Typography,
	useColorScheme,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import React from "react";
import { useContactForm } from "../../components/ContactForm/ContactFormContext";
import { navMenuItems } from "../../data/navigation";

// iOS-style glass: heavy blur + saturation behind a translucent tint, with
// hairline highlights standing in for light catching the pane's edges.
const glassSx = {
	backgroundColor: (theme) =>
		`rgba(${theme.vars?.palette.background.defaultChannel} / 0.55)`,
	backdropFilter: "blur(14px) saturate(180%)",
	WebkitBackdropFilter: "blur(14px) saturate(180%)",
	borderBottom: (theme) =>
		`1px solid rgba(${theme.vars?.palette.text.primaryChannel} / 0.08)`,
	boxShadow: (theme) =>
		`inset 0 1px 0 rgba(${theme.vars?.palette.text.primaryChannel} / 0.08)`,
} satisfies SxProps<Theme>;

function HomeIcon(): React.ReactElement {
	const theme = useTheme();
	return (
		<IconButton
			aria-label="home icon"
			component={Link}
			href="#home"
			sx={{
				borderRadius: "8px",
				p: 0,
				px: 1,
			}}
		>
			<ChevronLeftIcon
				sx={{
					color: theme.vars?.palette.text.primary,
					height: 32,
					width: 32,
				}}
			/>
			<Typography
				component="span"
				variant="subtitle1"
				sx={{
					ml: 0.5,
					color: theme.vars?.palette.text.primary,
				}}
			>
				Portfolio
			</Typography>
			<ChevronRightIcon
				sx={{
					color: theme.vars?.palette.text.primary,
					height: 32,
					width: 32,
				}}
			/>
		</IconButton>
	);
}

export default function Navbar() {
	const [openDrawer, setOpenDrawer] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

	const { openContactForm } = useContactForm();
	const { mode, setMode } = useColorScheme();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const handleDrawerClose = () => {
		setIsClosing(true);
		setOpenDrawer(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setOpenDrawer(!openDrawer);
		}
	};

	if (isMobile) {
		return (
			<>
				<AppBar
					color="transparent"
					position="fixed"
					elevation={0}
					sx={{
						...glassSx,
						py: 1,
						pr: 1,
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<HomeIcon />
					<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
						<Button
							color="inherit"
							variant="text"
							sx={{ minWidth: 0 }}
							onClick={() => setMode(mode === "light" ? "dark" : "light")}
						>
							{mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
						</Button>
						<Button
							aria-label="open menu icon"
							onClick={handleDrawerToggle}
							sx={{
								color: theme.vars?.palette.text.primary,
							}}
						>
							<MenuIcon
								sx={{
									height: 26,
									width: 26,
								}}
							/>
						</Button>
					</Box>
				</AppBar>
				<Drawer
					variant="temporary"
					anchor="top"
					open={openDrawer}
					onClose={handleDrawerClose}
					onTransitionEnd={() => setIsClosing(false)}
					slotProps={{
						paper: {
							sx: {
								bgcolor: theme.vars?.palette.background.default,
							},
						},
						root: {
							keepMounted: true,
						},
					}}
				>
					<List>
						{navMenuItems.map((menuItem) => (
							<ListItem key={menuItem.item}>
								<ListItemButton
									aria-label={`${menuItem.item} link`}
									component={Link}
									target={menuItem.target || undefined}
									rel={menuItem.rel || undefined}
									href={menuItem.href}
									sx={{
										fontWeight: 200,
										borderRadius: "8px",
										px: 1,
										color: theme.vars?.palette.text.primary,
									}}
								>
									{menuItem.item}
								</ListItemButton>
							</ListItem>
						))}
						<ListItem>
							<ListItemButton
								aria-label="Contact link"
								onClick={() => {
									handleDrawerClose();
									openContactForm();
								}}
								sx={{
									fontWeight: 200,
									borderRadius: "8px",
									px: 1,
									color: theme.vars?.palette.text.primary,
								}}
							>
								Contact
							</ListItemButton>
						</ListItem>
					</List>
				</Drawer>
			</>
		);
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" elevation={0} color="transparent" sx={glassSx}>
				<Toolbar sx={{ py: 1, px: 0 }}>
					<Grid
						container
						justifyContent="space-between"
						alignItems="center"
						width="100%"
					>
						<Grid display="flex" direction="row" gap={1}>
							<HomeIcon />
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={3}>
							{navMenuItems.map((menuItem) => (
								<Button
									aria-label={`${menuItem.item} link`}
									component={Link}
									target={menuItem.target || undefined}
									rel={menuItem.rel || undefined}
									href={menuItem.href}
									sx={{
										fontWeight: 200,
										borderRadius: "8px",
										px: 1,
										color: theme.vars?.palette.text.primary,
									}}
									key={menuItem.item}
								>
									{menuItem.item}
								</Button>
							))}
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={1}>
							<Stack direction="row" alignItems="center" gap={1}>
								<Button
									color="inherit"
									variant="text"
									onClick={() => setMode(mode === "light" ? "dark" : "light")}
								>
									{mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
								</Button>
								<Button
									aria-label="Contact button"
									variant="outlined"
									size="large"
									onClick={openContactForm}
								>
									Contact
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
