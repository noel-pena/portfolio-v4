import { GITHUB_URL, RESUME_URL } from "../constants";
import type { MenuItemProps } from "../types/MenuItemProps";

export const navMenuItems: Array<MenuItemProps> = [
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
		href: RESUME_URL,
		rel: "noopener",
		target: "_blank",
	},
	{
		item: "GitHub",
		href: GITHUB_URL,
		rel: "noopener",
		target: "_blank",
	},
];

export const footerMenuItems: Array<MenuItemProps> = navMenuItems.filter(
	(menuItem) => menuItem.item !== "GitHub",
);
