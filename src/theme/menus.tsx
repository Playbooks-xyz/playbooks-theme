import { borderProps } from 'utils';

export const menu = () => ({
	display: 'flex-column',
	space: 'space-y-1',
});

export const menuBackdrop = () => ({
	bgColor: 'bg-black',
	bgOpacity: 'bg-opacity-50',
	position: 'fixed',
	inset: 'inset-0',
	zIndex: 'z-40',
	animation: 'transition-opacity ease',
	opacity: 'opacity-0',
	pointerEvents: 'pointer-events-none',
});

export const menuToggle = () => ({
	display: 'flex-middle',
	space: 'space-x-2',
});

export const menuMenu = () => ({
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	boxShadow: 'shadow-lg',
	display: 'flex-column',
	minWidth: 'min-w-48',
	position: 'absolute',
	space: 'space-y-1',
	spacing: 'p-2',
	zIndex: 'z-50',
});

export const menuMenuWrapper = () => ({
	position: 'relative',
	display: 'inline-block',
});

export const menuBlock = () => ({
	spacing: 'p-4',
});

export const menuTitle = () => ({
	fontWeight: 'font-bold',
	spacing: 'px-3 mb-4',
	textTransform: 'capitalize',
	tracking: 'tracking-wide',
});

export const menuSubtitle = () => ({
	color: 'text-gray-500 dark:text-gray-300',
	whitespace: 'whitespace-nowrap',
	fontWeight: 'font-normal',
	fontSize: 'text-sm',
});

export const menuList = () => ({
	display: 'flex-column',
	space: 'space-y-2',
	spacing: 'py-4',
});

export const menuItem = () => ({
	display: 'flex',
	spacing: '',
	width: 'w-inherit',
});

export const menuBtn = () => ({
	align: 'text-left',
	display: 'flex-start',
});

export const menuLink = () => ({
	align: 'text-left',
	display: 'flex-start',
	width: 'w-full',
});
