import { borderProps } from 'utils';

export const command = () => ({
	...borderProps,
	border: 'border',
	borderRadius: 'rounded-md',
	fontFamily: 'font-mono',
	fontSize: 'text-sm',
	spacing: 'p-4',
});
