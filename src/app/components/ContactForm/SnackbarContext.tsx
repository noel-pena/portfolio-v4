"use client";

import { Snackbar, SnackbarContent } from "@mui/material";
import React from "react";

type SnackbarContextType = {
	showMessage: (msg: string, type?: "success" | "error") => void;
};

const SnackbarContext = React.createContext<SnackbarContextType | undefined>(
	undefined,
);

export const SnackbarProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [message, setMessage] = React.useState("");
	const [open, setOpen] = React.useState(false);
	const [severity, setSeverity] = React.useState<"success" | "error">(
		"success",
	);

	const showMessage = (msg: string, type: "success" | "error" = "success") => {
		setMessage(msg);
		setSeverity(type);
		setOpen(true);
	};

	return (
		<SnackbarContext.Provider value={{ showMessage }}>
			{children}
			<Snackbar
				aria-live="polite"
				open={open}
				autoHideDuration={3000}
				onClose={() => setOpen(false)}
			>
				<SnackbarContent
					sx={(theme) => ({
						bgcolor:
							severity === "success"
								? theme.vars?.palette.success.main
								: theme.vars?.palette.error.main,
						color: theme.vars?.palette.text.primary,
						maxWidth: "fit-content",
					})}
					message={message}
				/>
			</Snackbar>
		</SnackbarContext.Provider>
	);
};

export const useSnackbar = () => {
	const context = React.useContext(SnackbarContext);
	if (!context)
		throw new Error("useSnackbar must be used inside SnackbarProvider");
	return context;
};
