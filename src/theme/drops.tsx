import { borderProps } from 'utils';

export const drop = () => ({});

export const dropToggle = () => ({
	display: 'flex-middle',
	space: 'space-x-2',
});

export const dropMenu = () => ({
	animation: 'transition-all ease',
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

export const dropHeader = () => ({
	border: 'border-b',
	...borderProps,
	spacing: 'pb-2 mb-2',
});

export const dropTitle = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontWeight: 'font-semibold',
	fontSize: 'text-sm',
	spacing: 'px-2 py-1',
});

export const dropSubtitle = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-xs',
	spacing: 'px-2',
});

export const dropList = () => ({
	display: 'flex-column',
	space: 'space-y-1',
});

export const dropItem = () => ({
	borderRadius: 'rounded',
	width: 'w-full',
});

export const dropBtn = () => ({
	display: 'flex-start',
	spacing: 'px-2 py-1',
	space: 'space-x-2',
	width: 'w-full',
});

export const dropLink = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	display: 'block',
	fontSize: 'text-sm',
	hover: 'h:bg-gray-100 h:dark:bg-gray-700',
	spacing: 'px-2 py-1',
	width: 'w-full',
});
