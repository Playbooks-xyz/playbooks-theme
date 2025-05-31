import { borderProps } from 'utils';

export const btnGroup = () => ({
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	display: 'flex-start',
	overflow: 'overflow-hidden',
	divide: 'divide-x',
	divideColor: 'divide-gray-400',
	divideOpacity: 'divide-opacity-25',
	flex: 'shrink-0',
	space: 'space-x-0',
	width: 'width-inherit',
});
