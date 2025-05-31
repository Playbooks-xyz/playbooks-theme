import { borderProps } from 'utils';

export const nav = () => ({
	display: 'flex-column',
	space: 'space-y-1',
	width: 'w-full',
});

export const navHeader = () => ({
	...borderProps,
	spacing: 'p-4',
});

export const navTitle = () => ({
	fontWeight: 'font-bold',
});

export const navBody = () => ({
	spacing: 'p-4',
});

export const navList = () => ({
	display: 'flex-column',
	space: 'space-y-1',
});

export const navItem = () => ({
	display: 'block',
	width: 'w-full',
});

export const navBtn = () => ({
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});

export const navLink = () => ({
	align: 'text-left',
	display: 'flex-start',
	space: 'space-x-4',
	width: 'w-full',
});

export const navGroup = () => ({
	border: 'border-b',
	...borderProps,
	spacing: 'pb-4 mb-4',
});

export const navGroupTitle = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
	spacing: 'mb-2',
});
