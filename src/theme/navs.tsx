import { borderProps, computeSectionSize } from 'utils';

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

export const navBody = ({ size }) => ({
	size: computeSectionSize(size),
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
	...borderProps,
	border: 'border-b',
	spacing: 'pb-4 mb-4',
});

export const navGroupTitle = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	spacing: 'mb-2',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
});
