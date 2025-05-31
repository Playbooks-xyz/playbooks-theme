import { borderProps } from 'utils';

export const alert = () => ({
	...borderProps,
	border: 'border',
	borderRadius: 'rounded-md',
	display: 'flex-start',
	space: 'space-x-4',
	spacing: 'mb-4 p-4',
	width: 'w-full',
});

export const alertIcon = () => ({
	flex: 'shrink-0',
	fontSize: 'text-2xl',
});

export const alertBody = () => ({
	display: 'flex-between',
	width: 'w-full',
});

export const alertTitle = () => ({
	fontWeight: 'font-semibold',
	tracking: 'tracking-wide',
});

export const alertText = () => ({
	fontFamily: 'font-secondary',
	spacing: 'mt-2',
});

export const alertActions = () => ({
	display: 'flex-end',
	flex: 'shrink-0',
	space: 'space-x-2',
});
