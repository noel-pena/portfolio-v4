"use client";

import CodeIcon from "@mui/icons-material/Code";
import {
	AppBar,
	Box,
	Button,
	Grid,
	IconButton,
	Link,
	Toolbar,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import type { MenuItemProps } from "@/types/MenuItemProps";

export default function Navbar() {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const menuItems: Array<MenuItemProps> = [
		{ item: "Skills", href: "#skills" },
		{ item: "Projects", href: "#projects" },
		{ item: "Resume", href: "" },
		{ item: "GitHub", href: "https://github.com/noel-pena" },
	];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent" elevation={0}>
				<Toolbar sx={{ py: isMobile ? 2 : 1, px: isMobile ? 2 : 0 }}>
					<Grid
						container
						justifyContent="space-between"
						alignItems="center"
						width="100%"
					>
						<Grid display="flex" direction="row" gap={1}>
							<IconButton
								aria-label="home icon"
								component={Link}
								href="#home"
								sx={{ borderRadius: "8px", p: 0, px: 1 }}
							>
								<CodeIcon
									sx={{
										color: theme.palette.text.primary,
										height: 36,
										width: 36,
									}}
								/>
							</IconButton>
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={3}>
							{/*{!isMobile &&*/}
							{menuItems.map((menuItem) => (
								<Button
									aria-label={`${menuItem.item} link`}
									component={Link}
									target="_blank"
									rel="noopener"
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
							{/*))}*/}
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={3}>
							<>
								<Button
									aria-label="Contact button"
									variant="outlined"
									size="large"
									onClick={() => setOpen(true)}
								>
									Contact
								</Button>
							</>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<ContactForm open={open} onClose={() => setOpen(false)} />
		</Box>
	);
}
