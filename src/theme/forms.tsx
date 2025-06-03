import { computeInputSize } from 'utils';

export const form = () => ({});

export const formCheckbox = () => ({
	animation: 'transition-all',
	bgColor:
		'bg-transparent dark:bg-transparent checked:bg-blue-500 checked:hover:bg-blue-500 checked:f:bg-blue-500 dark:checked:bg-cyan-500 dark:checked:hover:bg-cyan-500 dark:checked:f:bg-cyan-500',
	border: 'border-2',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	cursor: 'cursor-pointer',
	fade: 'ease',
	ring: 'ring-none',
	ringColor:
		'ring-transparent checked:ring-transparent dark:checked:ring-transparent f:ring-transparent dark:f:ring-transparent',
	ringOffset: 'ring-offset-4 checked:ring-offset-4 f:ring-offset-4',
	ringOffsetColor:
		'checked:ring-offset-blue-500/50 dark:checked:ring-offset-cyan-500/50 f:ring-offset-blue-500/50 dark:f:ring-offset-cyan-500/50',
	size: 'h-6 w-6',
});

export const formGroup = () => ({
	space: 'space-y-2',
	spacing: 'mb-4',
	width: 'w-full',
});

export const formLabel = () => ({
	color: 'text-gray-600 dark:text-gray-400',
	cursor: 'cursor-pointer',
	display: 'inline-block',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	spacing: 'p-1',
	tracking: 'tracking-wide',
});

export const formInput = ({ size, variant }) => ({
	align: 'text-left',
	animation: 'transition',
	bgColor: 'bg-white dark:bg-gray-900',
	border: 'border',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	color: 'text-gray-600 dark:text-gray-200',
	cursor: 'cursor-auto',
	display: 'block',
	fade: 'ease',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	outline: 'outline-none',
	placeholderColor: 'placeholder:gray-500 dark:placeholder:gray-400',
	ring: 'f:ring-1',
	ringColor: 'f:ring-transparent dark:f:ring-transparent',
	ringOffset: 'f:ring-offset-1 dark:f:ring-offset-1',
	ringOffsetColor: 'f:ring-offset-blue-500 dark:f:ring-offset-cyan-500',
	tracking: 'tracking-wide',
	width: 'w-full',
	...computeInputSize(size),
	...(variant === 'group' && {
		bgColor: 'bg-transparent',
		border: 'border-none',
		ring: 'f:ring-0',
		ringColor: 'f:ring-transparent',
		ringOffset: 'f:ring-offset-none',
		ringOffsetColor: 'f:ring-offset-transparent',
	}),
});

export const formDivInput = ({ size, variant }) => ({
	...formInput({ size, variant }),
	color: 'text-gray-600 dark:text-gray-200',
	display: 'flex-center',
	overflow: 'overflow-x-scroll',
});

export const formFileInput = () => ({});

export const formSelect = ({ size, variant }) => ({
	...formInput({ size, variant }),
	cursor: 'cursor-pointer',
});

export const formText = () => ({
	color: 'text-gray-500 dark:text-gray-400',
	fontSize: 'text-xs',
	spacing: 'mx-1',
	tracking: 'tracking-wider',
});
