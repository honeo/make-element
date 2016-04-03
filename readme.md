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

const input = makeElement('input', {type: 'text', value: '1"<script>alert(document.cookie)</script>'});
```
```html
<a href="http//example.com/">Link!</a>

<div class="fuga">
	"hoge"
	"piyo"
</div>

<input type="button" value="Push!" disabled>

<input type="text" value="1&quot;&lt;script&gt;alert(document.cookie)&lt;/script&gt;">
```

## その他
```js
HTMLDocument.prototype.makeElement = makeElement;
const element = document.makeElement('tagName');
```
