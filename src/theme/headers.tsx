import { borderProps } from 'utils';

export const header = () => ({
	border: 'border-b',
	...borderProps,
	display: 'flex-between',
	spacing: 'py-4',
	space: 'space-x-4',
});

export const headerBrand = () => ({
	display: 'flex-start',
	space: 'space-x-2',
});

export const headerTitle = () => ({
	fontWeight: 'font-semibold',
	fontSize: 'text-lg',
	tracking: 'tracking-wide',
});

export const headerSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
	fontWeight: 'font-normal',
	tracking: 'tracking-normal',
});

export const headerText = () => ({
	color: 'text-gray-700 dark:text-gray-100',
	fontWeight: 'font-light',
	fontFamily: 'font-secondary',
	tracking: 'tracking-normal',
});

export const headerActions = () => ({
	display: 'flex-end',
	space: 'space-x-2',
});
