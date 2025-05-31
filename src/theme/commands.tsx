import { borderProps } from 'utils';

export const command = () => ({
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	fontFamily: 'font-mono',
	fontSize: 'text-sm',
	spacing: 'p-4',
});
