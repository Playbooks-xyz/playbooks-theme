export const tooltip = () => ({
	display: 'inline-block',
	position: 'relative',
});

export const tooltipBody = () => ({
	animation: 'transition-opacity ease',
	bgColor: 'bg-gray-800 dark:bg-gray-200',
	borderRadius: 'rounded-md',
	color: 'text-white dark:text-gray-800',
	fontSize: 'text-sm',
	opacity: 'opacity-0',
	position: 'absolute',
	spacing: 'px-3 py-2',
	visibility: 'invisible',
	zIndex: 'z-50',
});

export const tooltipInner = () => ({
	fontFamily: 'font-secondary',
	fontWeight: 'font-medium',
	whiteSpace: 'whitespace-nowrap',
});

export const tooltipArrow = () => ({
	borderColor: 'border-transparent',
	borderStyle: 'border-solid',
	borderWidth: 'border-4',
	position: 'absolute',
});
