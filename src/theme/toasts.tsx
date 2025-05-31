import { borderProps } from 'utils';

export const toastWrapper = () => ({
	position: 'fixed',
	top: 'top-4',
	right: 'right-4',
	zIndex: 'z-50',
	display: 'flex-column',
	space: 'space-y-2',
});

export const toast = () => ({
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	boxShadow: 'shadow-lg',
	display: 'flex-start',
	maxWidth: 'max-w-sm',
	spacing: 'p-4',
	space: 'space-x-3',
	animation: 'transition-all ease',
});

export const toastIcon = () => ({
	flex: 'shrink-0',
	fontSize: 'text-xl',
});

export const toastBody = () => ({
	flex: 'flex-1',
	space: 'space-y-1',
});

export const toastTitle = () => ({
	fontWeight: 'font-medium',
	fontSize: 'text-sm',
});

export const toastText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontSize: 'text-sm',
});

export const toastActions = () => ({
	display: 'flex-start',
	space: 'space-x-2',
	spacing: 'mt-2',
});
