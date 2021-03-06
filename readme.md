# make-element
* [honeo/make-element](https://github.com/honeo/make-element)  
* [make-element](https://www.npmjs.com/package/make-element)

## なにこれ
引数に合わせて要素を作って返す。

## 使い方
```sh
$ npm i make-element
```
```js
// Bundle, Node.js
import makeElement from 'make-element';

// CDN
const makeElement = await import('https://cdn.rawgit.com/honeo/make-element/master/index.mjs').then( (mod)=>{
	return mod.default;
});
```
```js
const anchor = makeElement('a', {href: 'http//example.com/'}, 'Link!');

const span = makeElement('span',
	'classやstyleが複数あればスペースを挟んで統合する。',
	{class: 'foo'}, {class: 'bar'},
	{style: "foo:value;"}, {style: "bar:value;"}
);

const input = makeElement('input', {type: 'button', disabled: true, value: 'Push!'});

const div = makeElement('div', makeElement('span', '引数がNodeなら挿入する。'));
```
```html
<a href="http//example.com/">Link!</a>

<span class="foo bar" style="foo:value; bar:value;">
	classやstyleが複数あればスペースを挟んで統合する。
</span>

<input type="button" value="Push!" disabled>

<div>
	<span>"引数がNodeなら挿入する。"</span>
</div>
```


## prototype拡張
ご利用は計画的に。
```js
import 'make-element/register.mjs';
const element = document.makeElement('tagName');
```
