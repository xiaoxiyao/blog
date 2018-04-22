// 默认缓存列表，在线也会使用的缓存。不在列表中的会在访问时才缓存
const CACHE_LIST = [
	'//unpkg.com/gitalk@1.2.0/dist/gitalk.min.js',
	'//cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js',
	'//cdn.bootcss.com/material-design-lite/1.3.0/material.min.js',
	'//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.12.0/build/styles/atom-one-dark.min.css',
	'//cdn.bootcss.com/jquery/3.1.1/jquery.min.js',
	'//at.alicdn.com/t/font_vxmaskcya6dmquxr.css',
	'/css/gitalk-custom.css',
	'//unpkg.com/gitalk@1.2.0/dist/gitalk.css',
	'//cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css',
	'//cdn.bootcss.com/material-design-lite/1.3.0/material.teal-purple.min.css',
	'/css/styles.css',
	'/logo.jpg',
	'/bg.png',
	'/js/custom.js',
	'/offline/',
	'/home.html',
	'/'
];

// 缓存白名单列表，在线时不使用的缓存，只有离线时才会使用缓存，可以只写域名
const WHITE_LIST = [
	'hitoapi.cc'
];

/**
 * 是否在白名单中
 * @param {string} url
 * @return {boolean}
 */
function isInWhite(url) {
	return WHITE_LIST.some(value => url.indexOf(value) !== -1);
}
this.addEventListener('install', event => {
	event.waitUntil(
		caches.open('v1').then(cache => cache.addAll(CACHE_LIST))
	);
});
this.addEventListener('fetch', event => {
	let request = event.request;
	event.respondWith(
		caches.match(request).then(response => {
			// 没有匹配到缓存时，response为undefined
			if (response && !isInWhite(request.url)) {
				return response;
			} else {
				return fetch(request).then(response => {
					return caches.open('v1').then(cache => {
						cache.put(event.request, response.clone()).catch(error => {
							console.log(error);
						});
						return response;
					});
				}).catch((error) => {
					if (isInWhite(request.url)) {
						return caches.match(request);
					} else {
						return caches.match('/offline/').catch((error) => console.log("跳转离线页面失败", error));
					}
				});
			}
		}).catch((error) => console.log(error))
	);
});