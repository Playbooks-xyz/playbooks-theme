import { borderProps } from 'utils';

export const radioWrapper = () => ({
	...borderProps,
	animation: 'transition-all ease',
	border: 'border',
	borderRadius: 'rounded-md',
	cursor: 'cursor-pointer',
	display: 'flex-start',
	hover: 'h:bg-gray-50 h:dark:bg-gray-800',
	space: 'space-x-3',
	spacing: 'p-3',
});

export const radio = () => ({
	flex: 'shrink-0',
});

export const radioInput = () => ({
	animation: 'transition-all ease',
	appearance: 'appearance-none',
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border-2',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderRadius: 'rounded-full',
	checked: 'checked:bg-blue-500 checked:border-blue-500',
	cursor: 'cursor-pointer',
	focus: 'focus:ring-2 focus:ring-blue-500',
	height: 'h-4',
	width: 'w-4',
});

export const radioTitle = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
});

export const radioText = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-sm',
	spacing: 'mt-1',
});
