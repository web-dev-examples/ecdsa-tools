'use strict';

/**
 * @file MetaMask integration example for signing text
 * @author S0AndS0
 * @license https://github.com/web-dev-examples/ecdsa
 */

import type MetaMaskSDK from '@metamask/sdk';
import eth_requestAccounts from './lib/eth_requestAccounts.js';
import personal_sign from './lib/personal_sign.js';

window.addEventListener('load', (_event) => {
	const button__authenticate_metamask = document.getElementById('button__authenticate_metamask') as HTMLButtonElement;

	const form__sign = document.getElementById('form__sign') as HTMLFormElement;

	const button__sign_text = document.getElementById('button__sign_text') as HTMLButtonElement;

	const textarea__input_for_signing = document.getElementById('textarea__input_for_signing') as HTMLTextAreaElement;

	const textarea__signature_output = document.getElementById('textarea__signature_output') as HTMLTextAreaElement;

	form__sign.addEventListener('submit', (event) => {
		event.preventDefault();
	});

	// TODO: Property '_state' is protected and only accessible within class 'BaseProvider' and its subclasses.
	/* @ts-ignore */
	const ethereumAccounts = window?.ethereum?._state?.accounts;

	if (ethereumAccounts?.length) {
		button__authenticate_metamask.disabled = true;
		button__authenticate_metamask.innerText = `Authenticated: ${ethereumAccounts[0]}`;
	}

	button__authenticate_metamask.addEventListener('click', (event) => {
		event.preventDefault();

		eth_requestAccounts().then((accounts) => {
			(event.target as HTMLButtonElement).disabled = true;
			button__sign_text.disabled = false;
			button__authenticate_metamask.innerText = `Authenticated: ${accounts[0]}`;
		});
	});

	if (!ethereumAccounts?.length) {
		button__sign_text.disabled = true;
	}

	button__sign_text.addEventListener('click', (event) => {
		event.preventDefault();

		// TODO: Property '_state' is protected and only accessible within class 'BaseProvider' and its subclasses.
		/* @ts-ignore */
		const ethereumAccounts = window?.ethereum?._state?.accounts;

		if (!textarea__input_for_signing.value.length) {
			textarea__signature_output.value = '🛑 No message provided to sign';
			throw new Error('No message provided to sign');
		} else if (!ethereumAccounts?.length) {
			textarea__signature_output.value = '🛑 No accounts found';
			throw new Error('No accounts found');
		}

		personal_sign(textarea__input_for_signing.value, ethereumAccounts[0])
			.catch((error) => {
				textarea__signature_output.value = '🛑 Failed to sign message';
				throw error;
			})
			.then((signature) => {
				if (typeof signature !== 'string') {
					textarea__signature_output.value = '🛑 Failed to sign message';
				} else {
					textarea__signature_output.value = signature;
				}
				textarea__signature_output.style.minHeight = `${textarea__signature_output.scrollHeight}px`;
			});
	});
});

// vim: noexpandtab
