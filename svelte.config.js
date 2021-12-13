import vercel from '@sveltejs/adapter-vercel';
import { windi } from "svelte-windicss-preprocess";





/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
	    windi({})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};

export default config;
