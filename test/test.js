console.log('make-element: test');

// jsdom + var
const JSDOM = require('jsdom');
global.document = JSDOM.jsdom('hogehoge');
global.head = document.head;
global.window = document.defaultView;
global.Node = window.Node;
global.HTMLDocument = window.HTMLDocument;

// modules
const makeElement = require('../').default;
const isRegistr = require('../register');

// Cases
const caseArray = [];

// Document#makeElement()
caseArray.push( (arg)=>{
	return document.makeElement('div').tagName==='DIV';
});

// otherDocument
caseArray.push( (arg)=>{
	return makeElement.call(document.createElement('document'), 'div').tagName==='DIV';
});

// normal
caseArray.push( (arg)=>{
	return makeElement('div').tagName==='DIV';
});

// prop
caseArray.push( (arg)=>{
	const href = 'http://example.com/';
	const anchor = makeElement('a', {href});
	return anchor.tagName==='A' && anchor.href===href;
});

// textNode
caseArray.push( (arg)=>{
	const text = 'hogefugapiyo';
	const span = makeElement('span', text);
	return span.tagName==='SPAN' && span.firstChild.nodeValue===text;
});

// node
caseArray.push( (arg)=>{
	const anchor = document.createElement('a');
	const span = document.createElement('span');
	const div = makeElement('div', anchor, 'hoge', span);
	console.log(div.firstChild, div.lastChild);
	return div.tagName==='DIV' && div.firstChild.tagName==='A' && div.lastChild.tagName==='SPAN';
});

// multi
caseArray.push( (arg)=>{
	const span = makeElement('span', 'foo', {id: 'hoge'}, 'bar', {class: 'fuga'});
	console.log(span.className);
	return span.tagName==='SPAN' && span.firstChild.nodeValue==='foo' && span.id==='hoge' && span.lastChild.nodeValue==='bar' && span.className==='fuga';
});

// class
caseArray.push( (arg)=>{
	const div = makeElement('div', {class: "hoge"}, {class: "fuga"}, {class: "piyo"});
	return div.className==='hoge fuga piyo';
});

caseArray.forEach( (func, index, array)=>{
	if( func() ){
		console.log(`${index+1}/${array.length}: success`)
	}else{
		throw new Error(`${index+1}/${array.length}: failed`)
	}
});
