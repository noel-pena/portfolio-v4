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
import React from "react";
import ContactForm from "@/components/ContactForm/ContactForm";
import { theme } from "@/theme/theme";
import type { MenuItemProps } from "@/types/MenuItemProps";

export default function Navbar() {
	const [open, setOpen] = React.useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const menuItems: Array<MenuItemProps> = [
		{ item: "Skills", href: "#skills" },
		{ item: "Projects", href: "#projects" },
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
							{!isMobile &&
								menuItems.map((menuItem) => (
									<MenuItem
										component={Link}
										href={menuItem.href}
										sx={{ fontWeight: 200, borderRadius: "8px", px: 1 }}
										key={menuItem.item}
										disableGutters
									>
										{menuItem.item}
									</MenuItem>
								))}
						</Grid>
						<Grid display="flex" direction="row" alignItems="center" gap={3}>
							{!isMobile && (
								<>
									<Button
										variant="contained"
										size="large"
										onClick={() => setOpen(true)}
									>
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
			<ContactForm open={open} onClose={() => setOpen(false)} />
		</Box>
	);
}
