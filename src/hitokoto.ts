/**
 * 一个简单的 Web Components.
 * 用于展示“一言”的相关信息。（https://hitokoto.cn/）
 */


import style from '!!css-loader!postcss-loader!less-loader!./hitokoto.less';
import template from './hitokoto.html';

/**
 * 一言接口返回的数据结构;
 */
export interface HitokotoInfo {
	id: string;
	hitokoto: string;
	type: HitokotoType;
	from: string;
	from_who: string;
	creator: string;
	creator_uid: string;
	reviewer: string;
	uuid: string;
	created_at: string;
}

/**
 * 句子类型
 */
enum HitokotoType {
	动画 = 'a',
	漫画 = 'b',
	游戏 = 'c',
	文学 = 'd',
	原创 = 'e',
	来自网络 = 'f',
	其他 = 'g',
	影视 = 'h',
	诗词 = 'i',
	网易云 = 'j',
	哲学 = 'k',
	抖机灵 = 'l',
}

class Hitokoto extends HTMLElement {

	private timeout: number;
	private text: HTMLElement;
	private author: HTMLElement;
	private link: HTMLAnchorElement;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		let styleTag = document.createElement('style');
		styleTag.appendChild(document.createTextNode(style));
		this.shadowRoot.appendChild(styleTag);
		let tempTag = document.createElement('template');
		tempTag.innerHTML = template;
		this.shadowRoot.appendChild(tempTag.content);
		this.text = this.shadowRoot.getElementById('hito-text');
		this.author = this.shadowRoot.getElementById('hito-author');
		this.link = this.shadowRoot.getElementById('link') as HTMLAnchorElement;
	}

	/**
	 * 更新一言内容
	 * @param info 
	 */
	private refresh(): Promise<void> {
		return fetch('https://v1.hitokoto.cn').then(resp => resp.json()).then((info: HitokotoInfo) => {
			this.text.textContent = info.hitokoto;
			this.author.textContent = `——  ${info.from_who || ''}「${info.from}」`;
			this.link.href = `https://hitokoto.cn?uuid=${info.uuid}`;
			this.classList.add('ready');
		});
	}

	private start() {
		this.refresh().then(() => {
			this.timeout = window.setTimeout(() => {
				this.start();
			}, 60000);
		})
	}

	protected connectedCallback(): void {
		this.start();
	}

	protected disconnectedCallback(): void {
		window.clearTimeout(this.timeout);
	}
}

window.customElements.define('hitokoto-widget', Hitokoto);