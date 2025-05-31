import { computeTagImgSize } from 'utils';

export const tagsWrapper = () => ({
	display: 'flex-start',
	flex: 'flex-wrap',
	gap: 'gap-2',
});

export const tag = () => ({
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	border: 'border',
	borderColor: 'border-gray-200 dark:border-gray-700',
	borderRadius: 'rounded-full',
	color: 'text-gray-700 dark:text-gray-200',
	display: 'flex-start',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	space: 'space-x-2',
	spacing: 'px-3 py-1',
});

export const tagImg = ({ size }) => ({
	borderRadius: 'rounded-full',
	height: 'h-4',
	size: computeTagImgSize(size),
	width: 'w-4',
});

export const tagBody = () => ({
	display: 'flex-column',
	space: 'space-y-1',
});

export const tagActions = () => ({
	display: 'flex-start',
	space: 'space-x-1',
});
