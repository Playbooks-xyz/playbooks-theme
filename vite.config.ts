import { exec } from 'node:child_process';
import path from 'path';
import { defineConfig } from 'vite';

function pushBuild() {
	exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
}


export default defineConfig({
	base: './',
	build: {
		sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			name: 'playbooksTheme',
			formats: ['es', 'cjs'],
			fileName: format => `index.${format}.js`,
		},
	},
	plugins: [
		{
			name: 'push-build',
			closeBundle: pushBuild,
		},
	],
});
