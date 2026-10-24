export async function load() {
	await globalThis.fetch('data:text/plain,hello');
	return {};
}
