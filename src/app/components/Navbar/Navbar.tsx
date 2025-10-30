"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
	Toolbar,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import type { MenuItemProps } from "@/types/MenuItemProps";

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
					color: theme.palette.text.primary,
					height: 32,
					width: 32,
				}}
			/>
			<Typography
				component="span"
				variant="subtitle1"
				sx={{
					ml: 0.5,
					color: theme.palette.text.primary,
				}}
			>
				Portfolio
			</Typography>
			<ChevronRightIcon
				sx={{
					color: theme.palette.text.primary,
					height: 32,
					width: 32,
				}}
			/>
		</IconButton>
	);
}

export default function Navbar() {
	const [openContactForm, setOpenContactForm] = React.useState(false);
	const [openDrawer, setOpenDrawer] = React.useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const menuItems: Array<MenuItemProps> = [
		{
			item: "Skills",
			href: "#skills",
		},
		{
			item: "Projects",
			href: "#projects",
		},
		{
			item: "Resume",
			href: "https://cdn.noel-pena.com/Noel-Pena.pdf",
			rel: "noopener",
			target: "_blank",
		},
		{
			item: "GitHub",
			href: "https://github.com/noel-pena",
			rel: "noopener",
			target: "_blank",
		},
	];

	const glassStyles = {
		borderBottom: `1px solid ${theme.palette.divider}`,
		backdropFilter: "blur(10px)",
		backgroundColor: "transparent",
	};

	if (isMobile) {
		return (
			<>
				<AppBar
					position="fixed"
					elevation={0}
					sx={{
						py: 1,
						pr: 1,
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						...glassStyles,
					}}
				>
					<HomeIcon />
					<Tooltip title="Expand menu icon">
						<IconButton
							aria-label="open menu icon"
							onClick={() => {
								setOpenDrawer(true);
							}}
						>
							<MenuIcon
								sx={{
									color: theme.palette.text.primary,
									height: 26,
									width: 26,
								}}
							/>
						</IconButton>
					</Tooltip>
				</AppBar>
				<Drawer
					anchor="top"
					open={openDrawer}
					onClose={() => setOpenDrawer(false)}
					slotProps={{
						paper: {
							sx: {
								bgcolor: theme.palette.background.default,
							},
						},
					}}
				>
					<List>
						{menuItems.map((menuItem) => (
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
										color: theme.palette.text.primary,
									}}
								>
									{menuItem.item}
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>
			</>
		);
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" elevation={0} sx={glassStyles}>
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
							{menuItems.map((menuItem) => (
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
										color: theme.palette.text.primary,
									}}
									key={menuItem.item}
								>
									{menuItem.item}
								</Button>
							))}
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={3}>
							<>
								<Button
									aria-label="Contact button"
									variant="outlined"
									size="large"
									onClick={() => setOpenContactForm(true)}
								>
									Contact
								</Button>
							</>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<ContactForm
				open={openContactForm}
				onClose={() => setOpenContactForm(false)}
			/>
		</Box>
	);
}
