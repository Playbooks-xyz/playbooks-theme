export const rangeSliderTrack = () => ({
	bgColor: 'bg-gray-200 dark:bg-gray-700',
	borderRadius: 'rounded-full',
	height: 'h-2',
	position: 'relative',
	width: 'w-full',
});

export const rangeSliderThumb = () => ({
	bgColor: 'bg-blue-500 dark:bg-cyan-500',
	border: 'border-2',
	borderColor: 'border-white',
	borderRadius: 'rounded-full',
	cursor: 'cursor-pointer',
	height: 'h-4',
	position: 'absolute',
	top: 'top-1/2',
	transform: 'transform -translate-y-1/2',
	width: 'w-4',
});
