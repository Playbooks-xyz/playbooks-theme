import { borderProps } from 'utils';

export const feedback = () => ({
	border: 'border',
	...borderProps,
	borderRadius: 'rounded-md',
	display: 'flex-column',
	spacing: 'p-6',
	space: 'space-y-4',
});

export const feedbackHeader = () => ({
	display: 'flex-start',
	space: 'space-x-4',
});

export const feedbackIcon = () => ({
	flex: 'shrink-0',
	fontSize: 'text-2xl',
});

export const feedbackBody = () => ({
	display: 'flex-column',
	space: 'space-y-2',
});

export const feedbackPretitle = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
});

export const feedbackTitle = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontWeight: 'font-semibold',
	fontSize: 'text-lg',
	tracking: 'tracking-wide',
});

export const feedbackText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
});

export const feedbackActions = () => ({
	display: 'flex-start',
	space: 'space-x-2',
	spacing: 'mt-4',
});
