import { borderProps, computeSlideAnimation } from 'utils';

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

export const slide = ({ open, placement }) => ({
	...borderProps,
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	delay: open ? 'delay-200' : '',
	display: 'flex-column',
	height: 'h-full',
	inset: placement === 'left' ? 'left-0' : 'right-0',
	maxWidth: 'max-w-md',
	opacity: open ? 'opacity-100' : 'opacity-0',
	position: 'fixed',
	right: 'right-0',
	shadow: placement === 'left' ? 'shadow-r-lg' : 'shadow-l-lg',
	top: 'top-0',
	transform: open ? computeSlideAnimation(placement) : 'translate-x-0',
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
