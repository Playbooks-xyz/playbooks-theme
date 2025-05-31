export const switchGroup = () => ({
	display: 'flex-between',
	space: 'space-x-4',
});

export const switchBase = () => ({
	display: 'inline-flex items-center justify-center shrink-0',
	position: 'relative',
	overflow: 'overflow-hidden',
	size: 'w-12 h-10',
	cursor: 'cursor-pointer',
	ring: 'ring-sky',
});

export const switchBackdrop = () => ({
	bgColor: 'bg-gray-200',
	transition: 'transition-all ease',
	pointer: 'pointer-events-none',
	size: 'w-10 h-2',
	borderRadius: 'rounded-full',
});

export const switchInner = ({ checked }) => ({
	position: 'absolute',
	bgColor: checked ? 'bg-gray-100 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800',
	transition: 'transition',
	duration: 'duration-200',
	pointer: ' pointer-events-none',
	size: 'w-10 h-3',
	spacing: 'mx-auto',
	borderRadius: 'rounded-full',
});

export const switchToggle = ({ checked }) => ({
	animation: checked ? 'translate-x-6' : 'translate-x-0',
	inset: 'left-0',
	position: 'absolute',
	display: 'inline-block',
	bgColor: checked ? 'bg-blue-500 dark:bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600',
	border: '',
	transition: 'transition',
	transform: 'transform',
	duration: 'duration-200',
	pointer: ' pointer-events-none',
	// shadow: 'shadow-md',
	size: 'w-6 h-6',
	borderRadius: 'rounded-full',
});

export const switchLabel = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	display: 'inline-block',
	fontSize: 'font-base',
	fontWeight: 'font-medium',
});
