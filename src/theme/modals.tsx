import { borderProps } from 'utils';

export const modalWrapper = () => ({
	inset: 'inset-0',
	overflow: 'overflow-y-auto',
	position: 'fixed',
	zIndex: 'z-20',
});

export const modalBackdrop = () => ({
	animation: 'transition-opacity ease',
	bgColor: 'bg-black',
	bgOpacity: 'bg-opacity-50',
	display: 'flex-middle',
	inset: 'inset-0',
	position: 'fixed',
	zIndex: 'z-50',
});

export const modal = () => ({
	...borderProps,
	animation: 'transition-all ease',
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	borderRadius: 'rounded-lg',
	boxShadow: 'shadow-xl',
	display: 'flex-column',
	margin: 'mx-4',
	maxWidth: 'max-w-lg',
	width: 'w-full',
});

export const modalHeader = () => ({
	...borderProps,
	border: 'border-b',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'p-6',
});

export const modalTitle = () => ({
	fontSize: 'text-lg',
	fontWeight: 'font-semibold',
	tracking: 'tracking-wide',
});

export const modalSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontWeight: 'font-normal',
	space: 'space-x-4',
});

export const modalBody = () => ({
	flex: 'flex-1',
	space: 'space-y-4',
	spacing: 'p-6',
});

export const modalFooter = () => ({
	...borderProps,
	border: 'border-t',
	display: 'flex-end',
	space: 'space-x-2',
	spacing: 'p-6',
});
