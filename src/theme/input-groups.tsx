import { borderProps } from 'utils';

export const inputGroup = () => ({
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	display: 'flex-start',
	overflow: 'overflow-hidden',
	width: 'w-full',
});

export const inputAppend = () => ({
	bgColor: 'bg-gray-50 dark:bg-gray-800',
	border: 'border-l',
	...borderProps,
	display: 'flex-middle',
	spacing: 'px-3',
});

export const inputPrepend = () => ({
	bgColor: 'bg-gray-50 dark:bg-gray-800',
	border: 'border-r',
	...borderProps,
	display: 'flex-middle',
	spacing: 'px-3',
});
