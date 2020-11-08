import './style.less';
import './gitalk.less';

document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('loaded');
	//抽屉导航菜单激活项
	Array.from(document.getElementsByClassName('mdl-navigation__link')).find(e => e.getAttribute('href') === location.pathname).classList.add('active');
	
	//打开关闭抽屉
	let container = document.getElementsByClassName('main-container')[0];
	document.getElementById('close-drawer').addEventListener('click', () => {
		container.classList.add('drawer-closed');
	});
	document.getElementById('open-drawer-button').addEventListener('click', () => {
		container.classList.remove('drawer-closed');
	});
});

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js');
}
