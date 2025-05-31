export const switchGroup = () => ({
	display: 'flex-start',
	space: 'space-x-3',
});

export const switchBase = () => ({
	animation: 'transition-colors ease',
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	borderRadius: 'rounded-full',
	cursor: 'cursor-pointer',
	height: 'h-6',
	position: 'relative',
	width: 'w-11',
});

export const switchBackdrop = () => ({
	animation: 'transition-opacity ease',
	bgColor: 'bg-blue-500 dark:bg-cyan-500',
	borderRadius: 'rounded-full',
	height: 'h-full',
	opacity: 'opacity-0',
	position: 'absolute',
	width: 'w-full',
});

export const switchInner = () => ({
	animation: 'transition-transform ease',
	bgColor: 'bg-white',
	borderRadius: 'rounded-full',
	height: 'h-5',
	left: 'left-0.5',
	position: 'absolute',
	top: 'top-0.5',
	transform: 'translate-x-0',
	width: 'w-5',
});

export const switchToggle = () => ({
	animation: 'transition-all',
	border: '',
	borderRadius: 'rounded-full',
	display: 'inline-block',
	duration: 'duration-200',
	inset: 'left-0',
	pointer: ' pointer-events-none',
	position: 'absolute',
	size: 'w-6 h-6',
});

export const switchLabel = () => ({
	color: 'text-gray-700 dark:text-gray-200',
	display: 'inline-block',
	fontSize: 'font-base',
	fontWeight: 'font-medium',
});
