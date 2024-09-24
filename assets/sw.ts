// https://github.com/microsoft/TypeScript/issues/14877
export default null
declare var self: ServiceWorkerGlobalScope;

/**
 * 预缓存列表，不在列表中的会在访问时才缓存。
 */
const CACHE_LIST = [
	'https://fastly.jsdelivr.net/npm/node-vibrant@3.1.6/dist/vibrant.min.js',
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
	self.skipWaiting();
	event.waitUntil(preCache());
});
self.addEventListener('fetch', (event: FetchEvent) => {
	event.respondWith(getResponse(event.request));
});
self.addEventListener("activate", (event: ExtendableEvent) => {
	event.waitUntil(Promise.all([
		self.clients.claim(),
		deleteOldCaches()
	]));
});

async function preCache() {
	const cache = await caches.open(cacheName);
	return cache.addAll(CACHE_LIST).catch(e => {
		console.warn('预缓存时异常');
		console.log(e);
	});
}

async function getResponse(request: Request): Promise<Response> {
	const cache = await caches.open(cacheName);
	let response = await cache.match(request);
	if (response) {
		/**
		 * html 文件不应该强缓存，这里先使用缓存，再请求最新的结果更新缓存，确保下次是最新的。
		 * 参考：https://developer.chrome.com/docs/workbox/caching-strategies-overview?hl=zh-cn#stale-while-revalidate
		 */
		if (request.destination === 'document') {
			fetch(request).then(response => cache.put(request, response)).catch(e => {
				console.warn('更新文档缓存时异常');
				console.log(e);
			});
		}
		return response;
	}
	try {
		response = await fetch(request);
	} catch (e) {
		if (request.destination === 'document') {
			console.warn('请求文档时异常，显示离线页面');
			console.log(e);
			// 没有缓存时显示离线页面，已预缓存
			return cache.match('/offline/');
		}
		throw e;
	}
	// 扩展资源无法被缓存，会出现异常
	if (request.url.startsWith('chrome-extension://')) {
		return response;
	}

	cache.put(request, response.clone()).catch(e => {
		console.warn('缓存请求时异常');
		console.log(e);
	});
	return response;
}

async function deleteOldCaches() {
	const keys = await caches.keys();
	await Promise.all(keys.map(key => {
		if (key !== cacheName) {
			return caches.delete(key);
		}
	}));
}
