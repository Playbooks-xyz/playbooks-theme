import { borderProps } from 'utils';

export const footer = () => ({
	border: 'border-t',
	...borderProps,
	display: 'flex-column',
	spacing: 'py-8',
	space: 'space-y-8',
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
	fontWeight: 'font-semibold',
	fontSize: 'text-sm',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
});

export const footerList = () => ({
	display: 'flex-column',
	space: 'space-y-2',
});

export const footerLink = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontSize: 'text-sm',
	hover: 'h:text-gray-800 h:dark:text-gray-100',
});

export const footerBottom = () => ({
	border: 'border-t',
	...borderProps,
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
