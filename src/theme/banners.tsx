export const banner = () => ({
	border: 'border-b',
	borderColor: 'border-gray-300/50 dark:border-gray-600/50',
	color: 'white',
	display: 'flex-between',
	space: 'space-x-4',
	spacing: 'py-2 px-4',
	width: 'w-full',
});

export const bannerIcon = () => ({
	bgColor: 'bg-black/25 dark:bg-black/25',
	borderRadius: 'rounded-md',
	color: 'text-blue-500 dark:text-cyan-500',
	spacing: 'px-2 py-1',
});

export const bannerBody = () => ({
	display: 'flex-start',
	space: 'space-x-3',
	spacing: 'py-1',
});

export const bannerTitle = () => ({
	color: 'text-gray-700 dark:text-white',
	fontWeight: 'font-semibold',
});

export const bannerText = () => ({
	color: 'text-gray-600 dark:text-gray-200',
	fontSize: 'text-sm',
});

export const bannerActions = () => ({
	display: 'flex-end',
	flex: 'shrink-0',
	space: 'space-x-2',
});
