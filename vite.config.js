import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Runs once, before SvelteKit's server runtime is loaded, so SvelteKit's dev fetch
// wrapper(s) end up on top of this function. On each call it counts how many
// frames from runtime/server/instance.js are above it, i.e. how deep the chain is.
const original = globalThis.fetch;
globalThis.fetch = (input, init) => {
	Error.stackTraceLimit = 1000;
	const depth = new Error().stack.split('\n').filter((line) => line.includes('instance.js')).length;
	console.log(`globalThis.fetch is wrapped ${depth} time(s)`);
	return original(input, init);
};

export default defineConfig({
	plugins: [sveltekit()]
});
