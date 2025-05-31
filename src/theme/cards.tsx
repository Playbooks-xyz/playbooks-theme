import { borderProps } from 'utils';

export const card = () => ({
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	display: 'flex-column',
	overflow: 'overflow-hidden',
	width: 'w-full',
});

export const cardHeader = () => ({
	display: 'flex-between',
	spacing: 'p-4',
	space: 'space-x-4',
});

export const cardIcon = () => ({
	flex: 'shrink-0',
	fontSize: 'text-2xl',
});

export const cardImg = () => ({
	height: 'h-48',
	objectFit: 'object-cover',
});

export const cardBody = () => ({
	display: 'flex-column',
	flex: 'flex-1',
	spacing: 'p-4',
	space: 'space-y-4',
});

export const cardPretitle = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
});

export const cardTitle = () => ({
	fontWeight: 'font-semibold',
	tracking: 'tracking-wide',
});

export const cardSubtitle = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	spacing: 'mt-1',
});

export const cardText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
});

export const cardFooter = () => ({
	border: 'border-t',
	...borderProps,
	display: 'flex-between',
	spacing: 'p-4',
	space: 'space-x-4',
});

export const cardActions = () => ({
	display: 'flex-end',
	space: 'space-x-2',
});
