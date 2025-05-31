import { borderProps } from 'utils';

export const navbar = () => ({
	border: 'border-b',
	...borderProps,
	display: 'flex-between',
	spacing: 'py-4',
	space: 'space-x-4',
	width: 'w-full',
});

export const navbarBrand = () => ({
	display: 'flex-start',
	space: 'space-x-2',
});

export const navbarList = () => ({
	display: 'flex-start',
	space: 'space-x-4',
});
