import { borderProps } from 'utils';

export const breadcrumb = () => ({
	border: 'border-b',
	...borderProps,
	display: 'flex-start',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	spacing: 'mb-4 pb-4',
	space: 'space-x-2',
	width: 'w-full',
});

export const breadcrumbItem = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	hover: 'h:text-gray-700 h:dark:text-gray-200',
});

export const breadcrumbSeparator = () => ({
	color: 'text-gray-400 dark:text-gray-500',
});

export const breadcrumbActive = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontWeight: 'font-medium',
});

export const breadcrumbBtn = (active?) => ({
	cursor: 'cursor-pointer',
	color: 'text-gray-600 dark:text-gray-400',
	fontFamily: 'font-accent',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	fontSize: 'text-sm',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});

export const breadcrumbLink = (active?) => ({
	cursor: 'cursor-pointer',
	color: 'text-gray-600 dark:text-gray-400',
	fontFamily: 'font-accent',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-widest',
	fontSize: 'text-sm',
	...(active && {
		cursor: 'cursor-default',
		...active,
	}),
});
