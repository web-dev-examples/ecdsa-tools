'use strict';

/**
 * @file Example of using Ethers JS library for validating ECDSA signature
 * @author S0AndS0
 * @license https://github.com/web-dev-examples/ecdsa
 */

import type MetaMaskSDK from '@metamask/sdk';

import { ethers } from '/assets/js/third-party/ethers.min.js';

window.addEventListener('load', (_event) => {
	const form__verify = document.getElementById('form__verify') as HTMLFormElement;

	const textarea__signature_public_address = document.getElementById(
		'textarea__signature_public_address'
	) as HTMLTextAreaElement;

	const textarea__signature_message = document.getElementById('textarea__signature_message') as HTMLTextAreaElement;

	const textarea__signature_input = document.getElementById('textarea__signature_input') as HTMLTextAreaElement;

	const button__verify = document.getElementById('button__verify') as HTMLButtonElement;

	const textarea__verification_result = document.getElementById(
		'textarea__verification_result'
	) as HTMLTextAreaElement;

	form__verify.addEventListener('submit', (event) => {
		event.preventDefault();
	});

	button__verify.addEventListener('click', (event) => {
		event.preventDefault();

		for (const required_filled_textarea of [
			textarea__signature_public_address,
			textarea__signature_message,
			textarea__signature_input,
		]) {
			if (!required_filled_textarea.value || !Object.keys(required_filled_textarea.value).length) {
				textarea__verification_result.value = [
					`🛑 Missing value in textarea -> ${required_filled_textarea.id}`
				].join('\n');
				textarea__verification_result.dataset.valid = 'false';

				throw new Error(`Missing value in textarea -> ${required_filled_textarea.id}`);
			}
		}

		let signer_address;
		try {
			signer_address = ethers.verifyMessage(textarea__signature_message.value, textarea__signature_input.value);
		} catch (error) {
			console.error('Signature recovery failed with ->', { error });
		}

		const expected_address = textarea__signature_public_address.value;
		if (expected_address === signer_address) {
			console.log('Recovered expected address from signed message, this is good ->', {
				expected_address,
				signer_address,
			});

			textarea__verification_result.dataset.valid = 'true';

			textarea__verification_result.value = [
				'✔ Recovered expected address from signed message, this _should_ be a good thing!',
				'',
				`Expected:  ${expected_address}`,
				`Recovered: ${signer_address}`,
			].join('\n');
		} else {
			textarea__verification_result.dataset.valid = 'false';

			textarea__verification_result.value = [
				'🛑 Unexpected address from signed message, this _should_ be a bad thing!',
				'',
				`Expected:  ${expected_address}`,
				`Recovered: ${signer_address}`,
			].join('\n');

			console.error('Unexpected address from signed message, this be a bad ->', {
				expected_address,
				signer_address,
			});
		}

		textarea__verification_result.rows = textarea__verification_result.value.split('\n').length;
		textarea__verification_result.style.minHeight = `${textarea__verification_result.scrollHeight}px`;
	});
});

// vim: noexpandtab
