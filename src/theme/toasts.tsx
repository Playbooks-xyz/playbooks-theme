import { borderProps } from 'utils';

export const toastWrapper = () => ({
	display: 'flex-column',
	position: 'fixed',
	right: 'right-4',
	space: 'space-y-2',
	top: 'top-4',
	zIndex: 'z-50',
});

export const toast = () => ({
	...borderProps,
	animation: 'transition-all ease',
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	borderRadius: 'rounded-md',
	boxShadow: 'shadow-lg',
	display: 'flex-start',
	maxWidth: 'max-w-sm',
	space: 'space-x-3',
	spacing: 'p-4',
});

export const toastHeader = () => ({
	display: 'flex-between',
	spacing: 'p-2',
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
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
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
