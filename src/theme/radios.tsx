export const radioWrapper = ({ active }) => ({
	animation: 'transition-all',
	border: 'border',
	borderColor: active ? 'border-primary-500 dark:border-secondary-500' : 'border-gray-300/50 dark:border-gray-600/50',
	borderRadius: 'rounded-md',
	cursor: 'cursor-pointer',
	fade: 'ease',
	display: 'inline-block',
	duration: 'duration-200',
	position: 'relative',
	spacing: 'p-4',
});

export const radio = () => ({
	display: 'flex-start-top',
	space: 'space-x-4',
});

export const radioInput = () => ({
	animation: 'transition-all',
	appearance: 'appearance-none',
	bgColor: 'bg-white dark:bg-gray-800',
	border: 'border-2',
	borderColor: 'border-gray-300 dark:border-gray-600',
	borderRadius: 'rounded-full',
	checked: 'checked:bg-primary-500 checked:border-primary-500 checked:dark:bg-secondary-500 checked:dark:border-secondary-500',
	cursor: 'cursor-pointer',
	fade: 'ease',
	focus: 'focus:ring-2 focus:ring-primary-500',
	height: 'h-4',
	width: 'w-4',
});

export const radioTitle = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	leading: 'leading-tight',
});

export const radioText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontSize: 'text-sm',
	fontWeight: 'font-light',
	tracking: 'tracking-wide',
});
