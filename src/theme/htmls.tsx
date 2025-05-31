import { borderProps } from 'utils';

export const html = () => ({});

export const body = () => ({});

export const main = () => ({
	position: 'relative',
	display: 'block',
	width: 'w-full',
});

export const aside = () => ({
	display: 'block',
	width: 'w-full',
	...borderProps,
});

export const div = () => ({
	display: 'block',
	width: 'w-full',
	position: 'relative',
	...borderProps,
});

export const span = () => ({
	display: 'inline',
});

export const ul = () => ({
	display: 'block',
	listStyle: 'list-none',
	...borderProps,
	spacing: 'pl-4',
});

export const li = () => ({
	display: 'list-item',
	listStyle: 'list-none',
	spacing: 'py-1',
	...borderProps,
	fontFamily: 'font-secondary',
	color: 'text-inherit',
});

export const iFrame = () => ({});

export const img = () => ({
	display: 'block',
	maxWidth: 'max-w-full',
});

export const hr = () => ({
	border: 'border-t',
	borderColor: 'border-gray-200 dark:border-gray-700',
	margin: 'my-4',
	borderRadius: 'rounded-md',
	...borderProps,
});

export const article = () => ({});

export const figure = () => ({});

export const caption = () => ({});

export const blockquote = () => ({});

export const pre = () => ({});

export const code = () => ({
	fontFamily: 'font-mono',
	fontSize: 'text-sm',
	bgColor: 'bg-gray-100 dark:bg-gray-800',
	borderRadius: 'rounded-md',
	display: 'inline-block',
	spacing: 'px-2 py-0.5',
});
