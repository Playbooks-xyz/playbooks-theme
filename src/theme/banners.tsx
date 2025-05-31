import { borderProps } from 'utils';

export const banner = () => ({
	...borderProps,
	border: 'border',
	borderRadius: 'rounded-md',
	display: 'flex-start',
	space: 'space-x-4',
	spacing: 'mb-4 p-4',
	width: 'w-full',
});

export const bannerIcon = () => ({
	flex: 'shrink-0',
	fontSize: 'text-2xl',
});

export const bannerBody = () => ({
	display: 'flex-between',
	width: 'w-full',
});

export const bannerTitle = () => ({
	fontWeight: 'font-semibold',
	tracking: 'tracking-wide',
});

export const bannerText = () => ({
	fontFamily: 'font-secondary',
	spacing: 'mt-2',
});

export const bannerActions = () => ({
	display: 'flex-end',
	flex: 'shrink-0',
	space: 'space-x-2',
});
