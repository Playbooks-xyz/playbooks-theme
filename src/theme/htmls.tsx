import { borderProps } from 'utils';

export const html = () => ({});

export const body = () => ({});

export const main = () => ({
	display: 'block',
	position: 'relative',
	width: 'w-full',
});

export const aside = () => ({
	...borderProps,
	display: 'block',
	width: 'w-full',
});

export const div = () => ({
	...borderProps,
	display: 'block',
	position: 'relative',
	width: 'w-full',
});

export const span = () => ({
	display: 'inline',
});

export const ul = () => ({
	...borderProps,
	display: 'block',
	listStyle: 'list-none',
	spacing: 'pl-4',
});

export const li = () => ({
	...borderProps,
	color: 'text-inherit',
	display: 'list-item',
	fontFamily: 'font-secondary',
	listStyle: 'list-none',
	spacing: 'py-1',
});

export const iFrame = () => ({});

export const img = () => ({
	display: 'block',
	maxWidth: 'max-w-full',
});

export const hr = () => ({
	...borderProps,
	border: 'border-t',
	borderRadius: 'rounded-md',
	margin: 'my-4',
});

export const article = () => ({});

export const figure = () => ({});

export const caption = () => ({});

export const blockquote = () => ({});

export const pre = () => ({});

export const code = () => ({
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	borderRadius: 'rounded-md',
	display: 'inline-block',
	fontFamily: 'font-mono',
	fontSize: 'text-sm',
	spacing: 'px-2 py-0.5',
});
