# make-element
[honeo/make-element](https://github.com/honeo/make-element)  
[make-element](https://www.npmjs.com/package/make-element)

## なにこれ
引数に合わせて要素を作って返す。

## 使い方
```sh
$ npm i -S make-element
```
```js
import makeElement from 'make-element';

const anchor = makeElement('a', {href: 'http//example.com/'}, 'Link!');

const div = makeElement('div', 'hoge', {class: 'fuga'}, 'piyo');

const input = makeElement('input', {type: 'button', disabled: true, value: 'Push!'});
```
```html
<a href="http//example.com/">Link!</a>

<div class="fuga">
	"hoge"
	"piyo"
</div>

<input type="button" value="Push!" disabled>
```

## prototype拡張
ご利用は計画的に。
```js
import 'make-element/register';
const element = document.makeElement('tagName');
```
