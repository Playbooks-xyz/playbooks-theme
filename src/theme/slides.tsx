import { borderProps } from 'utils';

export const slideWrapper = () => ({
	position: 'fixed',
	inset: 'inset-0',
	zIndex: 'z-50',
});

export const slideBackdrop = () => ({
	bgColor: 'bg-black',
	bgOpacity: 'bg-opacity-50',
	position: 'fixed',
	inset: 'inset-0',
	zIndex: 'z-40',
});

export const slide = () => ({
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	...borderProps,
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
	border: 'border-b',
	...borderProps,
	display: 'flex-between',
	spacing: 'p-6',
	space: 'space-x-4',
});

export const slideTitle = () => ({
	fontWeight: 'font-semibold',
	fontSize: 'text-lg',
});

export const slideBody = () => ({
	flex: 'flex-1',
	overflow: 'overflow-y-auto',
	spacing: 'p-6',
});

export const slideFooter = () => ({
	border: 'border-t',
	...borderProps,
	display: 'flex-end',
	spacing: 'p-6',
	space: 'space-x-2',
});
