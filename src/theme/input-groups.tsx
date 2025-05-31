import { borderProps } from 'utils';

export const inputGroup = () => ({
	...borderProps,
	border: 'border',
	borderRadius: 'rounded-md',
	display: 'flex-start',
	overflow: 'overflow-hidden',
	width: 'w-full',
});

export const inputAppend = () => ({
	...borderProps,
	bgColor: 'bg-gray-50 dark:bg-gray-800',
	border: 'border-l',
	display: 'flex-middle',
	spacing: 'px-3',
});

export const inputPrepend = () => ({
	...borderProps,
	bgColor: 'bg-gray-50 dark:bg-gray-800',
	border: 'border-r',
	display: 'flex-middle',
	spacing: 'px-3',
});
