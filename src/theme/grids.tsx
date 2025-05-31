import { computeContainer, computeGrid, computeCol } from 'utils';

export const container = ({ size }) => ({
	margin: 'mx-auto',
	spacing: 'px-4',
	size: computeContainer(size),
});

export const grid = ({ cols }) => ({
	cols: computeGrid(cols),
	gap: 'gap-4',
	grid: 'grid',
	width: 'w-full',
});

export const col = ({ span, sm, md, lg, xl, xxl }) => ({
	span: computeCol('span', span),
	sm: computeCol('sm', sm),
	md: computeCol('md', md),
	lg: computeCol('lg', lg),
	xl: computeCol('xl', xl),
	xxl: computeCol('xxl', xxl),
});
