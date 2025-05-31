import { borderProps } from 'utils';

export const table = () => ({
	...borderProps,
	border: 'border',
	borderRadius: 'rounded-md',
	overflow: 'overflow-hidden',
	width: 'w-full',
});

export const tableHeader = () => ({
	bgColor: 'bg-gray-50 dark:bg-gray-800',
});

export const tableHeaderRow = () => ({});

export const tableHead = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontFamily: 'font-secondary',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	spacing: 'px-6 py-3',
	textAlign: 'text-left',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
});

export const tableBody = () => ({});

export const tableRow = () => ({
	...borderProps,
	border: 'border-b',
	hover: 'h:bg-gray-50 h:dark:bg-gray-800',
});

export const tableData = ({ title }) => ({
	color: title ? 'text-gray-800 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	spacing: 'px-6 py-4',
	whiteSpace: 'whitespace-nowrap',
});
