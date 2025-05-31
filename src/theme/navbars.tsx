import { borderProps } from 'utils';

export const navbar = () => ({
	...borderProps,
	border: 'border-b',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'py-4',
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
