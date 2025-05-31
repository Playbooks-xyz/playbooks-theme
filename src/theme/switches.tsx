export const switchGroup = () => ({
	display: 'flex-start',
	space: 'space-x-3',
});

export const switchBase = () => ({
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	borderRadius: 'rounded-full',
	cursor: 'cursor-pointer',
	height: 'h-6',
	position: 'relative',
	width: 'w-11',
	animation: 'transition-colors ease',
});

export const switchBackdrop = () => ({
	bgColor: 'bg-blue-500 dark:bg-cyan-500',
	borderRadius: 'rounded-full',
	height: 'h-full',
	opacity: 'opacity-0',
	position: 'absolute',
	width: 'w-full',
	animation: 'transition-opacity ease',
});

export const switchInner = () => ({
	bgColor: 'bg-white',
	borderRadius: 'rounded-full',
	height: 'h-5',
	left: 'left-0.5',
	position: 'absolute',
	top: 'top-0.5',
	width: 'w-5',
	animation: 'transition-transform ease',
	transform: 'translate-x-0',
});

export const switchToggle = () => ({
	animation: 'transition-all',
	inset: 'left-0',
	position: 'absolute',
	display: 'inline-block',
	border: '',
	duration: 'duration-200',
	pointer: ' pointer-events-none',
	size: 'w-6 h-6',
	borderRadius: 'rounded-full',
});

export const switchLabel = () => ({
	display: 'inline-block',
	fontSize: 'font-base',
	fontWeight: 'font-medium',
	color: 'text-gray-700 dark:text-gray-200',
});
