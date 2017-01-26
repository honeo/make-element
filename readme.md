# make-element
* [honeo/make-element](https://github.com/honeo/make-element)  
* [make-element](https://www.npmjs.com/package/make-element)

## なにこれ
引数に合わせて要素を作って返す。

## 使い方
```sh
$ npm i -S make-element
```
```js
import makeElement from 'make-element';

const anchor = makeElement('a', {href: 'http//example.com/'}, 'Link!');

const span = makeElement('span', 'hoge', {class: 'foo'}, 'fuga', {class: 'bar'});

const input = makeElement('input', {type: 'button', disabled: true, value: 'Push!'});

const div = makeElement('div', makeElement('span', 'foo'), 'bar');
```
```html
<a href="http//example.com/">Link!</a>

<span class="foo bar">
	"hoge"
	"fuga"
</span>

<input type="button" value="Push!" disabled>

<div>
	<span>"foo"</span>
	"bar"
</div>
```

## prototype拡張
ご利用は計画的に。
```js
import 'make-element/register';
const element = document.makeElement('tagName');
```
