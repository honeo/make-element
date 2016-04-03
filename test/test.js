console.log('make-element: test');

// jsdom + var
const JSDOM = require('jsdom');
global.document = JSDOM.jsdom('hogehoge');
global.head = document.head;
global.window = document.defaultView;
global.HTMLDocument = window.HTMLDocument;

// modules
const makeElement = require('../').default;
HTMLDocument.prototype.makeElement = makeElement;

// Cases
const caseArray = [];


// escape
caseArray.push( (arg)=>{
	const input = makeElement('input', {type: 'text', value: '1"<script>alert(document.cookie)</script>'});
	return input.value==='1&quot;&lt;script&gt;alert(document.cookie)&lt;/script&gt;';
});

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

// multi
caseArray.push( (arg)=>{
	const span = makeElement('span', 'foo', {id: 'hoge'}, 'bar', {class: 'fuga'});
	return span.tagName==='SPAN' && span.firstChild.nodeValue==='foo' && span.id==='hoge' && span.lastChild.nodeValue==='bar' && span.className==='fuga';
});


caseArray.forEach( (func, index, array)=>{
	if( func() ){
		console.log(`${index+1}/${array.length}: success`)
	}else{
		throw new Error(`${index}/${array.length}: failed`)
	}
});
