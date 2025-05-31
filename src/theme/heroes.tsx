export const hero = () => ({
	display: 'flex-column',
	minHeight: 'min-h-screen',
	position: 'relative',
	space: 'space-y-8',
	spacing: 'py-16',
	textAlign: 'text-center',
	width: 'w-full',
});

export const heroBg = () => ({
	inset: 'inset-0',
	position: 'absolute',
	zIndex: 'z-0',
});

export const heroImg = () => ({
	height: 'h-full',
	inset: 'inset-0',
	objectFit: 'object-cover',
	objectPosition: 'object-center',
	position: 'absolute',
	width: 'w-full',
	zIndex: 'z-0',
});

export const heroIcon = () => ({
	bgColor: 'bg-blue-100 dark:bg-cyan-900',
	borderRadius: 'rounded-full',
	color: 'text-blue-500 dark:text-cyan-500',
	display: 'flex-middle',
	fontSize: 'text-6xl',
	height: 'h-16',
	margin: 'mx-auto',
	spacing: 'mb-8',
	width: 'w-16',
});

export const heroBody = () => ({
	position: 'relative',
	space: 'space-y-6',
	zIndex: 'z-10',
});

export const heroPretitle = () => ({
	color: 'text-blue-500 dark:text-cyan-500',
	fontFamily: 'font-secondary',
	fontSize: 'text-sm',
	fontWeight: 'font-medium',
	textTransform: 'uppercase',
	tracking: 'tracking-wide',
});

export const heroTitle = () => ({
	color: 'text-gray-800 dark:text-gray-100',
	fontSize: 'text-4xl lg:text-5xl',
	fontWeight: 'font-bold',
	lineHeight: 'leading-tight',
	tracking: 'tracking-tight',
});

export const heroSubtitle = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontSize: 'text-xl',
	fontWeight: 'font-medium',
	lineHeight: 'leading-relaxed',
});

export const heroText = () => ({
	color: 'text-gray-600 dark:text-gray-300',
	fontFamily: 'font-secondary',
	fontSize: 'text-lg',
	lineHeight: 'leading-relaxed',
});

export const heroActions = () => ({
	display: 'flex-center',
	space: 'space-x-4',
	spacing: 'mt-8',
});
