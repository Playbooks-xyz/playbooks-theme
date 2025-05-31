import { borderProps } from 'utils';

export const slideWrapper = () => ({
	inset: 'inset-0',
	position: 'fixed',
	zIndex: 'z-50',
});

export const slideBackdrop = () => ({
	bgColor: 'bg-black',
	bgOpacity: 'bg-opacity-50',
	inset: 'inset-0',
	position: 'fixed',
	zIndex: 'z-40',
});

export const slide = () => ({
	...borderProps,
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	display: 'flex-column',
	height: 'h-full',
	maxWidth: 'max-w-md',
	position: 'fixed',
	right: 'right-0',
	top: 'top-0',
	width: 'w-full',
	zIndex: 'z-50',
});

export const slideHeader = () => ({
	...borderProps,
	border: 'border-b',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'p-6',
});

export const slideTitle = () => ({
	fontSize: 'text-lg',
	fontWeight: 'font-semibold',
});

export const slideBody = () => ({
	flex: 'flex-1',
	overflow: 'overflow-y-auto',
	spacing: 'p-6',
});

export const slideFooter = () => ({
	...borderProps,
	border: 'border-t',
	display: 'flex-end',
	space: 'space-x-2',
	spacing: 'p-6',
});
