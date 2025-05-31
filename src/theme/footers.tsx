import { borderProps } from 'utils';

export const footer = () => ({
	...borderProps,
	border: 'border-t',
	display: 'flex-column',
	space: 'space-y-8',
	spacing: 'py-8',
});

export const footerBody = () => ({
	display: 'flex-between',
	space: 'space-x-8',
});

export const footerSection = () => ({
	display: 'flex-column',
	space: 'space-y-4',
});

export const footerTitle = () => ({
	fontSize: 'text-sm',
	fontWeight: 'font-semibold',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
});

export const footerText = () => ({});

export const footerList = () => ({
	display: 'flex-column',
	space: 'space-y-2',
});

export const footerItem = () => ({
	display: 'block',
	spacing: 'py-1',
});

export const footerLink = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontSize: 'text-sm',
	hover: 'h:text-gray-800 h:dark:text-gray-100',
});

export const footerFooter = () => ({
	...borderProps,
	border: 'border-t',
	display: 'flex-between',
	spacing: 'pt-8',
});

export const footerCopyright = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-sm',
});

export const footerSocial = () => ({
	display: 'flex-start',
	space: 'space-x-4',
});
