/**
 * 预缓存列表，不在列表中的会在访问时才缓存。
 */
const CACHE_LIST = [
	'https://fastly.jsdelivr.net/npm/node-vibrant@3.1.6/dist/vibrant.min.js',
	'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
	'https://fastly.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe.min.js',
	'https://fastly.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe-ui-default.min.js',
	'https://fastly.jsdelivr.net/npm/photoswipe@4.1.3/dist/default-skin/default-skin.min.css',
	'https://fastly.jsdelivr.net/npm/photoswipe@4.1.3/dist/photoswipe.min.css',
	'/favicon.ico',
	'/offline/',
];

/** 缓存对象名称 */
const cacheName = 'v1';

self.addEventListener('install', (event: ExtendableEvent) => {
	const preCache = async () => {
		const cache = await caches.open(cacheName);
		return cache.addAll(CACHE_LIST);
	};
	event.waitUntil(preCache());
});
self.addEventListener('fetch', (event: FetchEvent) => {
	event.respondWith(getResponse(event.request));
});
async function getResponse(request: Request): Promise<Response> {
	let response = await caches.match(request);
	if (response) {
		return response;
	}
	try {
		response = await fetch(request);
	} catch (e) {
		if (request.mode === 'navigate' && request.method === 'GET') {
			console.error(e);
			// 没有缓存时显示离线页面，已预缓存
			return caches.match('/offline/');
		}
		throw e;
	}
	// 扩展资源无法被缓存，会出现异常
	if (request.url.startsWith('chrome-extension://')) {
		return response;
	}
	const cache = await caches.open(cacheName);
	try {
		await cache.put(request, response.clone());
	}
	catch (error) {
		console.error(error)
	}
	return response;
};
