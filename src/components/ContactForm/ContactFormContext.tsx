import React from "react";
import ContactForm from "./ContactForm";

type ContactFormContextType = {
	openContactForm: () => void;
};

const ContactFormContext = React.createContext<
	ContactFormContextType | undefined
>(undefined);

export const ContactFormProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [open, setOpen] = React.useState(false);
	const value = React.useMemo(
		() => ({ openContactForm: () => setOpen(true) }),
		[],
	);

	return (
		<ContactFormContext.Provider value={value}>
			{children}
			<ContactForm open={open} onClose={() => setOpen(false)} />
		</ContactFormContext.Provider>
	);
};

export const useContactForm = () => {
	const context = React.useContext(ContactFormContext);
	if (!context)
		throw new Error("useContactForm must be used inside ContactFormProvider");
	return context;
};
