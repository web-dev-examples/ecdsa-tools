#!/usr/bin/env node

/**
 * @file Copy client side dependencies from `node_modules` where directed
 * @author S0AndS0
 * @license https://github.com/web-dev-examples/ecdsa
 */

import * as fs from 'node:fs/promises';
import path from 'node:path';

import package_json from '../package.json' with { type: 'json' };
import tsconfig_json from '../tsconfig.json' with { type: 'json' };

const repo_root = path.resolve(path.dirname('.'));
if (!repo_root) {
	throw new Error('Failed to resolve `repo_root`');
}

const outDir = tsconfig_json?.compilerOptions?.outDir;
if (!outDir) {
	throw new Error('Failed to resolve `outDir`');
}

/**
 * Entry `source` and `destination` should be Unix-like file paths relative to `repo_root`
 */
const dependencies = {
	ethers: {
		source: 'node_modules/ethers/dist/ethers.min.js',
		destination: 'dist/assets/js/third-party/ethers.min.js',
	},
};

(async () => {
	await Promise.all(
		Object.entries(dependencies).map(async ([name, { source, destination }]) => {
			const source_path = [repo_root].concat(source.split('/').join(path.sep)).join(path.sep);

			const destination_path = [repo_root].concat(destination.split('/').join(path.sep)).join(path.sep);

			const destination_directory = path.dirname(destination_path);

			return fs
				.access(destination_directory)
				.catch(() => {
					return fs.mkdir(destination_directory, { recursive: true });
				})
				.then(() => {
					return fs
						.access(source_path)
						.catch(() => {
							throw new Error(`${name} path does not exist at -> ${source_path}`);
						})
						.then(() => {
							return fs.access(destination_path);
						})
						.catch(() => {
							console.error(`${name} path does not exist at -> ${destination_path}`);
						})
						.then(() => {
							console.warn(`Copying ${name} dependency from ${source_path} to ${destination_path}`);
							return fs.copyFile(source_path, destination_path);
						});
				});
		})
	);
})();
