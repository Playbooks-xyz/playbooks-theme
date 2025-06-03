import { computeBtnSize } from 'utils';

// Shared
export const link = active => ({
	align: 'text-center',
	animation: 'transition-all',
	display: 'flex-middle-inline',
	fade: 'ease',
	flex: 'shrink-0',
	focus: 'focus:outline-none focus-visible:outline-none',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-normal',
	outline: 'outline-none',
	position: 'relative',
	space: 'space-x-4',
	tracking: 'tracking-normal',
	whiteSpace: 'whitespace-nowrap',
	...active,
});

export const primaryLink = ({ active, size }) => ({
	bgColor: 'bg-gradient-to-r from-cyan-500 to-indigo-500',
	bgPosition: 'bg-center',
	bgSize: 'bg-size-[100%] hover:bg-size-[200%]',
	borderRadius: 'rounded-md',
	color: 'white',
	size: computeBtnSize(size),
	stroke: 'stroke-white dark:stroke-white',
	...link(active),
});

export const accentLink = ({ active, size }) => ({
	bgColor: 'bg-transparent dark:bg-transparent',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-300',
	hover: 'hover:bg-gray-200 hover:dark:bg-gray-700',
	size: computeBtnSize(size),
	stroke: 'stroke-gray-500 dark:stroke-gray-300',
	...link(
		active && {
			bgColor: 'bg-gray-200 dark:bg-gray-700',
			...active,
		},
	),
});

export const borderLink = ({ active, size }) => ({
	bgColor: 'bg-transparent',
	border: 'border',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-300',
	hover: 'hover:border-gray-300 hover:dark:border-gray-600',
	size: computeBtnSize(size),
	stroke: 'stroke-gray-600 dark:stroke-gray-300',
	...link(
		active && {
			borderColor: 'border-cyan-500 dark:border-cyan-500',
			color: 'text-cyan-500',
			stroke: 'stroke-cyan-500',
			...active,
		},
	),
});

export const tabLink = ({ active, size }) => ({
	bgColor: 'bg-transparent',
	border: 'border-b-2',
	borderColor: 'border-b-transparent hover:border-b-gray-300',
	borderRadius: '',
	color: 'text-gray-500 dark:text-gray-300',
	hover: 'border-b-blue-500 dark:hover:border-b-cyan-500',
	size: computeBtnSize(size),
	stroke: 'stroke-gray-500 dark:stroke-gray-300',
	...link(
		active && {
			borderColor: 'border-b-blue-500 dark:border-b-cyan-500',
			color: 'text-gray-600 dark:text-gray-200',
			...active,
		},
	),
});

export const textLink = ({ active, size }) => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-inherit',
	hover: 'hover:underline hover:text-gray-700 hover:dark:text-gray-100',
	size: computeBtnSize(size),
	...link(active),
});

export const linkWrapper = ({ disabled }) => ({
	cursor: disabled ? 'cursor-not-allowed' : 'cursor-pointer',
	outline: 'focus-visible:outline',
	outlineColor: 'focus-visible:outline-blue-500 dark:focus-visible:outline-cyan-500',
	outlineOffset: 'outline-offset-1',
	width: 'w-inherit',
});
