export const tooltip = () => ({
	position: 'relative',
	display: 'inline-block',
});

export const tooltipBody = () => ({
	bgColor: 'bg-gray-800 dark:bg-gray-200',
	borderRadius: 'rounded-md',
	color: 'text-white dark:text-gray-800',
	fontSize: 'text-sm',
	opacity: 'opacity-0',
	spacing: 'px-3 py-2',
	position: 'absolute',
	visibility: 'invisible',
	zIndex: 'z-50',
	animation: 'transition-opacity ease',
});

export const tooltipInner = () => ({
	fontFamily: 'font-secondary',
	fontWeight: 'font-medium',
	whiteSpace: 'whitespace-nowrap',
});

export const tooltipArrow = () => ({
	position: 'absolute',
	borderStyle: 'border-solid',
	borderWidth: 'border-4',
	borderColor: 'border-transparent',
});
