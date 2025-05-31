import { borderProps } from 'utils';

export const avatar = () => ({
	border: 'border-2',
	...borderProps,
	borderRadius: 'rounded-full',
	display: 'flex-middle',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	height: 'h-10',
	overflow: 'overflow-hidden',
	width: 'w-10',
});

export const avatarBadge = () => ({
	borderRadius: 'rounded-full',
	display: 'flex-middle',
	position: 'relative',
});

export const avatarImg = () => ({
	height: 'h-full',
	objectFit: 'object-cover',
	width: 'w-full',
});

export const avatarBody = () => ({
	display: 'flex-column',
	space: 'space-y-1',
	width: 'w-full',
});

export const avatarTitle = () => ({
	fontWeight: 'font-semibold',
	tracking: 'tracking-wide',
});

export const avatarText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
	fontSize: 'text-xs',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
});

export const avatarActions = () => ({
	display: 'flex-end',
	space: 'space-x-2',
	spacing: 'mt-4',
});

export const avatarIcon = () => ({
	fontSize: 'text-lg',
});

export const avatarGroup = () => ({
	display: 'flex',
	space: '-space-x-2',
});
