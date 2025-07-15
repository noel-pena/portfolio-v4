import {
	Dialog,
	DialogContent,
	type DialogProps,
	DialogTitle,
} from "@mui/material";

interface ContactFormProps extends DialogProps {
	isMobile?: boolean;
}

export default function ContactForm(props: ContactFormProps) {
	const { open, onClose } = props;

	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Get in Touch</DialogTitle>
			<DialogContent>..forms</DialogContent>
		</Dialog>
	);
}
