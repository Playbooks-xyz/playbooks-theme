import { borderProps } from 'utils';

export const modalWrapper = () => ({
	position: 'fixed',
	inset: 'inset-0',
	overflow: 'overflow-y-auto',
	zIndex: 'z-20',
});

export const modalBackdrop = () => ({
	bgColor: 'bg-black',
	bgOpacity: 'bg-opacity-50',
	display: 'flex-middle',
	position: 'fixed',
	inset: 'inset-0',
	zIndex: 'z-50',
	animation: 'transition-opacity ease',
});

export const modal = () => ({
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-lg',
	boxShadow: 'shadow-xl',
	display: 'flex-column',
	maxWidth: 'max-w-lg',
	width: 'w-full',
	margin: 'mx-4',
	animation: 'transition-all ease',
});

export const modalHeader = () => ({
	border: 'border-b',
	...borderProps,
	display: 'flex-between',
	spacing: 'p-6',
	space: 'space-x-4',
});

export const modalTitle = () => ({
	fontWeight: 'font-semibold',
	fontSize: 'text-lg',
	tracking: 'tracking-wide',
});

export const modalSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-400',
	fontWeight: 'font-normal',
	fontFamily: 'font-secondary',
	space: 'space-x-4',
});

export const modalBody = () => ({
	flex: 'flex-1',
	spacing: 'p-6',
	space: 'space-y-4',
});

export const modalFooter = () => ({
	border: 'border-t',
	...borderProps,
	display: 'flex-end',
	spacing: 'p-6',
	space: 'space-x-2',
});
