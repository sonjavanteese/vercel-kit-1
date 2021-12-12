import vercel from '@sveltejs/adapter-vercel';
// import sveltePreprocess from 'svelte-preprocess';
import { windi } from "svelte-windicss-preprocess";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
	    windi({})
	],
	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
