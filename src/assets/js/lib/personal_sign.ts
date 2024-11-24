'use strict';

/**
 * @file Wrapper for `personal_sign` via `window.ethereum.request`
 * @author S0AndS0
 * @license https://github.com/web-dev-examples/ecdsa-tools
 */

import type MetaMaskSDK from '@metamask/sdk';

export default function personal_sign(message: string, from: string) {
	if (window.ethereum === undefined) {
		return Promise.reject('Failed to find -> `window.ethereum`');
	}

	if (typeof message !== 'string') {
		return Promise.reject(new TypeError(`Expected string type message but got ${typeof message}`));
	} else if (!message || !Object.keys(message).length) {
		return Promise.reject('Empty `message` cannot be signed');
	}

	if (typeof from !== 'string') {
		return Promise.reject(new TypeError(`Expected string type from but got ${typeof from}`));
	} else if (!from || !Object.keys(from).length) {
		return Promise.reject('No `from` account to sign with');
	}

	return window.ethereum.request<string>({
		method: 'personal_sign',
		params: [message, from],
	});
}
