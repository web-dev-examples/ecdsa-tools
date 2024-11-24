'use strict';

/**
 * @file Wrapper for `eth_requestAccounts` via `window.ethereum.request`
 * @author S0AndS0
 * @license https://github.com/web-dev-examples/ecdsa
 */

import type MetaMaskSDK from '@metamask/sdk';

/**
 * @throws Promise<string>
 */
export default function eth_requestAccounts() {
	if (window.ethereum === undefined) {
		return Promise.reject('Failed to find -> `window.ethereum`');
	}

	return window.ethereum
		.request<string[]>({
			method: 'eth_requestAccounts',
		})
		.catch((error) => {
			if (error?.code === 4001) {
				console.warn('eth_requestAccounts error.message ->', error.message);
			} else {
				console.error('eth_requestAccounts error ->', error);
			}
			throw error;
		})
		.then((accounts) => {
			if (typeof accounts !== 'object') {
				const message = `Object Array expected but got -> ${typeof accounts}`;
				throw new TypeError(message);
			} else if (!accounts || !Object.keys(accounts).length) {
				console.error('eth_requestAccounts ->', { accounts });
				throw new Error('Empty accounts list');
			}

			return accounts as string[];
		});
}
