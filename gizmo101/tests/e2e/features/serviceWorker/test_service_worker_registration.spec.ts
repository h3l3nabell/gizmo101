import {test, expect} from '@playwright/test';

test('post-install state', async ({baseURL, page}) => {
	// Navigate to a page which registers a service worker.
	await page.goto('/');

	// await the navigator.serviceWorker.ready promise.
	const swURL = await page.evaluate(async () => {
		const registration = await navigator.serviceWorker.ready;
		return registration.active?.scriptURL;
	});
	// Confirm the expected service worker script installed.
	expect(swURL).toBe(`${baseURL}sw.js`);

	// Now you're ready to check cache or IndexedDB state.
});