// node-resolve will resolve all the node dependencies
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'cjs',
	},
	// All the used libs needs to be here
	external: ['material-ui', 'prop-types', 'react'],
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**',
		}),
	],
};
