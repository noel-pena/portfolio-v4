import type { Metadata, Viewport } from "next";
import type React from "react";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
	title: "Portfolio by Noel",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
