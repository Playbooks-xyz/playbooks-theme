import { borderProps } from 'utils';

export const header = () => ({
	...borderProps,
	border: 'border-b',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'py-4',
});

export const headerBrand = () => ({
	display: 'flex-start',
	space: 'space-x-2',
});

export const headerTitle = () => ({
	fontSize: 'text-lg',
	fontWeight: 'font-semibold',
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
	fontFamily: 'font-secondary',
	fontWeight: 'font-light',
	tracking: 'tracking-normal',
});

export const headerActions = () => ({
	display: 'flex-end',
	space: 'space-x-2',
});
